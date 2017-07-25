module Main exposing (..)

import HomePage
import Html exposing (Html, br, button, div, text)
import Json.Decode exposing (Value)
import Navigation exposing (Location)
import Return exposing (Return)
import Route exposing (Route)


type Page
    = Blank
    | NotFound
    | Home
    | About



-- | Section


type alias Model =
    { page : Page
    }


type Msg
    = RouteChange (Maybe Route)
    | HomeMsg HomePage.Msg


init : Value -> Location -> ( Model, Cmd Msg )
init flags location =
    setRoute (Route.fromLocation location)
        { page = Blank
        }


update : Msg -> Model -> Return Msg Model
update msg model =
    case msg of
        RouteChange newRoute ->
            setRoute newRoute model

        HomeMsg msg ->
            HomePage.update msg { chapters = [] }
                |> Return.mapCmd HomeMsg
                |> Return.map (\ignorefornow -> model)


view : Model -> Html Msg
view model =
    case model.page of
        Home ->
            HomePage.view { chapters = [] }
                |> Html.map HomeMsg

        Blank ->
            div [] [ text "blank page" ]

        NotFound ->
            div [] [ text "not found page" ]

        About ->
            div [] [ text "about page" ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


setRoute : Maybe Route -> Model -> ( Model, Cmd Msg )
setRoute maybeRoute model =
    case maybeRoute of
        Nothing ->
            ( { model | page = NotFound }, Cmd.none )

        Just (Route.Home) ->
            ( { model | page = Home }, Cmd.none )

        Just (Route.About) ->
            ( { model | page = About }, Cmd.none )

        Just (Route.Section _) ->
            ( { model | page = Blank }, Cmd.none )


main : Program Value Model Msg
main =
    Navigation.programWithFlags
        (Route.fromLocation >> RouteChange)
        { view = view
        , init = init
        , update = update
        , subscriptions = subscriptions
        }
