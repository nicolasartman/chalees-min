module Section exposing (..)

import UrlParser exposing ((</>), Parser, int, s, string)


type alias SectionSpecifier =
    { id : Int
    , title : String
    }


sectionRouteParser : Parser (Int -> String -> a) a
sectionRouteParser =
    int </> string
