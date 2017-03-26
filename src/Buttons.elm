module Buttons exposing (standardButton)

import Html exposing (Html, button, text)
import Html.Attributes exposing (style)
import Css exposing (..)
import Model exposing (..)
import SiteColors exposing (..)


styles : List Mixin -> Html.Attribute msg
styles =
    Css.asPairs >> Html.Attributes.style


standardButtonStyles : List Mixin
standardButtonStyles =
    [ border (px 2)
    , borderStyle solid
    , borderColor (accentColor)
    , backgroundColor (white)
    , cursor pointer
    , hover
        [ backgroundColor (accentColor)
        , color white
        ]
    ]


standardButton : String -> Html Msg
standardButton buttonText =
    button [ styles standardButtonStyles ] [ Html.text buttonText ]
