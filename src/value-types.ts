
type NewLine = "\n";
const NewLine = "\n" as NewLine;

type ListType = "ordered" | "bullet";
const ListType = {
    Ordered: 'ordered' as ListType,
    Bullet: 'bullet' as ListType
}

type ScriptType = "sub" | "super";
const ScriptType = {
    Sub: "sub" as ScriptType,
    Super: "super" as ScriptType
}

type DirectionType = "rtl";
const DirectionType = {
    Rtl: "rtl" as DirectionType
}

type AlignType = "center" | "right";
const AlignType = {
    Center: "center" as AlignType,
    Right: "right" as AlignType
}

export { NewLine, ListType, ScriptType, DirectionType, AlignType };