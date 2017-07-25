module HomePage exposing (..)

import Html exposing (Html, text, div, button, br, p)
import Html.Attributes exposing (style)


-- import Html.Events exposing (onClick)


type Msg
    = NoOp


type alias Model =
    { chapters : List String
    }


view : Model -> Html Msg
view model =
    div []
        [ div [] []
        ]


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )
