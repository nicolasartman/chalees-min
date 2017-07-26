module HomePage exposing (..)

import Element exposing (button, column, el, empty, full, row, text, textLayout)
import Element.Attributes exposing (..)
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
        [ height (px 70), width (percent 100), alignRight, padding 20 ]
        [ column Unstyled
            [ height (percent 100), verticalCenter ]
            [ button <| el BasicButton [] <| text "click me"
            ]
        ]


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )
