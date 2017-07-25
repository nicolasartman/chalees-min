module HomePage exposing (..)

import Element exposing (el, row, textLayout)
import Element.Attributes exposing (height, px)
import Html exposing (Html, br, button, div, p, text)
import Html.Attributes exposing (style)
import RootStylesheet exposing (Styles(..))


-- import Html.Events exposing (onClick)


type Msg
    = NoOp


type alias Model =
    { chapters : List String
    }


view : Model -> Element.Element Styles variation msg
view model =
    row Header
        [ height (px 200) ]
        []


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )
