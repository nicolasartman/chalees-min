module App exposing (..)

import Html exposing (Html, text, div, button, br)
import Navigation
import UrlParser
import Model exposing (..)


init : Navigation.Location -> ( Model, Cmd Msg )
init location =
    ( { message = ""
      , page = Home
      , location = UrlParser.parsePath route location
      }
    , Cmd.none
    )


getRouteUrl : Route -> String
getRouteUrl route =
    case route of
        Home ->
            "/"


route : UrlParser.Parser (Route -> a) a
route =
    UrlParser.oneOf
        [ UrlParser.map Home UrlParser.top
        ]


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NavigateTo Home ->
            ( { model | message = "at home" }, Navigation.newUrl (getRouteUrl Home) )

        RouteChange newRoute ->
            ( model, Cmd.none )

        NoOp ->
            ( model, Cmd.none )


view : Model -> Html Msg
view model =
    case model.page of
        Home ->
            div []
                [ text "oh, hi!!"
                ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
