// - - - - - Types - - - - - //

/*
 * An individual line in the memory table.
 */ 
export type Question = {
    question?: string  // '会う', '食べる'
    questionF?: string  // furigana
    answer?: string   // '会って', '食べて'
    description?: string  // any other details
    transitive?: string  // 'i', 't'
}

export type QuestionRow = Question & {
    group?: string  // 'Godan', 'Ichidan', 'Irregular'
    subgroup?: string  // [u, tsu, ru], [ku, su, gu] -- for alternate colours
    description?: string  // any other details
    transitive?: string  // 'i', 't'
}

export type QuestionTable = {
    rows: QuestionRow[]
}

export type QuestionPage = {
    title?: string
    description?: string
    content?: Question | QuestionTable  // table
}
