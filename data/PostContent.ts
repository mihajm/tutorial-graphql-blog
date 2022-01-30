export interface PostContent {
    raw: {
        children: RawTypeObj[]
    },
}

export interface RawTypeObj {
    children?: RawTypeObj[],
    type: string,
    text?: string,
    bold?: boolean,
    italic?: boolean,
    underline?: boolean,
    width?: string
    height?: string,
    src?: string,
    alt?: string,
    title?: string,
}
