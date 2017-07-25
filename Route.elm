module Route exposing (Route(..), fromLocation, linkTo, navigateTo)

import Html exposing (Attribute)
import Html.Attributes as Attr
import Navigation exposing (Location)
import Section exposing (SectionSpecifier)
import UrlParser as Url exposing ((</>), Parser, oneOf, parsePath, s, string)


type Route
    = Home
    | About
    | Section SectionSpecifier


routeParser : Parser (Route -> a) a
routeParser =
    oneOf
        [ Url.map Home (s "")
        , Url.map Section <| Url.map SectionSpecifier Section.sectionRouteParser
        , Url.map About (s "about")
        ]



-- Private


routeToString : Route -> String
routeToString page =
    let
        pieces =
            case page of
                Home ->
                    []

                About ->
                    [ "about" ]

                Section specifier ->
                    [ "article", specifier.id |> toString, specifier.title ]
    in
        "/" ++ String.join "/" pieces



-- Public


linkTo : Route -> Attribute msg
linkTo route =
    Attr.href (routeToString route)


navigateTo : Route -> Cmd msg
navigateTo =
    routeToString >> Navigation.modifyUrl


fromLocation : Location -> Maybe Route
fromLocation location =
    if String.isEmpty location.pathname then
        Just Home
    else
        parsePath routeParser location
