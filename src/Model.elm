module Model exposing (..)

import Navigation


type Msg
    = NavigateTo Route
    | RouteChange Navigation.Location
    | NoOp


type Route
    = Home


type alias Model =
    { message : String
    , page : Route
    , location : Maybe Route
    }
