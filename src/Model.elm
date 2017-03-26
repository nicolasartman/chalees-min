module Model exposing (..)

import Navigation


type Msg
    = NavigateTo Route
    | RouteChange Navigation.Location
    | NoOp


type Route
    = Home
    | Potato
    | Temp String


type alias Model =
    { message : String
    , page : Route
    , location : Maybe Route
    }
