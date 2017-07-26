module RootStylesheet exposing (..)

import Color exposing (lightGrey)
import Style exposing (..)
import Style.Color as Color
import Style.Transition as Transition
import Style.Border as Border


transparent : Color.Color
transparent =
    (Color.rgba 0 0 0 0.0)


type Styles
    = Unstyled
    | Header
    | BasicButton


styles : List (Style Styles variation)
styles =
    [ style Unstyled []
    , style Header
        [ Color.background Color.lightGrey
        ]
    , style BasicButton
        [ Color.background transparent
        , cursor "pointer"
        , Border.rounded 16
        , paddingHint 20
        , Transition.transitions
            [ { delay = 0
              , duration = 500
              , easing = "ease"
              , props = [ "background-color" ]
              }
            ]
        , hover
            [ Color.background Color.lightBlue
            ]
        ]
    ]


rootStylesheet : StyleSheet Styles variation
rootStylesheet =
    stylesheet styles
