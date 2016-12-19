module Main exposing (..)

import App exposing (..)
import Navigation exposing (program)


main : Program Never Model Msg
main =
    Navigation.program
        RouteChange
        { view = view
        , init = init
        , update = update
        , subscriptions = subscriptions
        }
