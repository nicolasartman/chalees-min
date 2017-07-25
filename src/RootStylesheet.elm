module RootStylesheet exposing (..)

import Color exposing (lightGrey)
import Element.Attributes exposing (height)
import Style exposing (Style, StyleSheet, style, stylesheet)
import Style.Color as Color


type Styles
    = None
    | Header


styles : List (Style Styles variation)
styles =
    [ style None []
    , style Header
        [ Color.background (lightGrey)
        ]
    ]


rootStylesheet : StyleSheet Styles variation
rootStylesheet =
    stylesheet styles
