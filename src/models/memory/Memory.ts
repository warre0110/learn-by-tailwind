// - - - - - Types - - - - - //

/*
 * An individual line in the memory table.
 */ 
export type Memory = {
    group?: string  // 'Godan', 'Ichidan', 'Irregular'
    subgroup?: string  // [u, tsu, ru], [ku, su, gu] -- for alternate colours
    question?: string  // '会う', '食べる'
    questionF?: string  // furigana
    answer?:  string   // '会って', '食べて'
    description?: string  // any other details
    transitive?: string  // 'i', 't'
}

export type MemoryPage = {
    title?: string
    description?: string
    content?: Memory[]  // table
}


