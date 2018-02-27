module HomePage exposing (..)

import API.Object
import API.Object.Section as Section
import API.Query as Query
import API.Scalar
import Element exposing (button, column, el, empty, full, row, text, textLayout)
import Element.Attributes exposing (..)
import Element.Events exposing (onClick)
import Graphqelm.Field exposing (nonNullOrFail)
import Graphqelm.Http
import Graphqelm.Operation exposing (RootQuery)
import Graphqelm.OptionalArgument exposing (OptionalArgument, OptionalArgument(Present))
import Graphqelm.SelectionSet exposing (SelectionSet, with)
import RootStylesheet exposing (Styles(..))


-- import Html.Events exposing (onClick)


apiEndpoint : String
apiEndpoint =
    "https://api.graph.cool/simple/v1/cj1rh31pc8ykf0127fwssmw32"


buildQueryRequest :
    SelectionSet decodesTo RootQuery
    -> Graphqelm.Http.Request decodesTo
buildQueryRequest =
    Graphqelm.Http.queryRequest apiEndpoint


type Msg
    = NoOp
    | FetchSections


type alias Model =
    { chapters : List String
    }


view : Model -> Element.Element Styles variation Msg
view model =
    row Header
        [ height (px 70), width (percent 100), alignRight, padding 20 ]
        [ column Unstyled
            [ height (percent 100), verticalCenter ]
            [ button <|
                el BasicButton [ onClick FetchSections ] <|
                    text "click me"
            ]
        ]


fetchSection : Cmd Msg
fetchSection =
    querySection
        |> buildQueryRequest
        |> Graphqelm.Http.send
            (\result ->
                case result of
                    Ok section ->
                        let
                            _ =
                                Debug.log "woo" section
                        in
                            NoOp

                    Err error ->
                        Debug.crash "oh shit"
            )


type alias Section =
    { id : API.Scalar.Id
    , title : String
    }


type alias Response =
    { sec : Section
    }


querySection : SelectionSet Response RootQuery
querySection =
    Query.selection Response
        |> with
            (Query.section
                (\options -> { id = API.Scalar.Id "cjcq1ff6ubhpk01934ii5jl1x" |> Present })
                section
                |> nonNullOrFail
            )


section : SelectionSet Section API.Object.Section
section =
    Section.selection Section
        |> with Section.id
        |> with Section.title


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )

        FetchSections ->
            ( model, fetchSection )
