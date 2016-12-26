module HomeFrame exposing (..)

import Html exposing (Html, text, div, button, br, p)
import Html.Attributes exposing (style)


-- import Html.Events exposing (onClick)

import Css exposing (..)
import Model exposing (..)
import Buttons exposing (standardButton)


styles : List Mixin -> Html.Attribute msg
styles =
    Css.asPairs >> Html.Attributes.style


homeFrameStyles : List Mixin
homeFrameStyles =
    [ backgroundColor (hex "")
    , height (pct 100)
    , width (pct 100)
    ]


view : Model -> Html Msg
view model =
    div [ styles homeFrameStyles ]
        [ div [] []
        , standardButton "test"
        ]
