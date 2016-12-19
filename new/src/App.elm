module App exposing (..)

import Html exposing (Html, text, div)
import Navigation


type alias Model =
    { message :
        String
        -- , location : Navigation.Location
    }


init : ( Model, Cmd Msg )
init =
    ( { message =
            "Let's do it!"
            -- , location = Navigation.Location
      }
    , Cmd.none
    )


type Msg
    = UrlChange
    | NoOp


type Route
    = Home


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )


view : Model -> Html Msg
view model =
    div [] [ text model.message ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
