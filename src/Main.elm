module Main exposing (..)

import Navigation exposing (program)
import Html exposing (Html, br, button, div, text)
import Json.Decode exposing (Value)
import Navigation exposing (Location)
import Route exposing (Route)
import UrlParser


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


init : Value -> Location -> ( Model, Cmd Msg )
init flags location =
    setRoute (Route.fromLocation location)
        { page = Blank
        }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        RouteChange newRoute ->
            setRoute newRoute model


view : Model -> Html Msg
view model =
    case model.page of
        Home ->
            div [] [ text "home page" ]

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
