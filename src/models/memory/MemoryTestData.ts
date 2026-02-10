import type { Memory } from './Memory';

const godanVerbs: Memory[] = [
// Godan - って
{
    group: 'Godan',
    subgroup: 'って',
    question: '会う',
    questionF: 'あう',
    answer: '会って',
    description: 'to meet',
    transitive: 'i'
}, {
    group: 'Godan',
    subgroup: 'って',
    question: '立つ',
    questionF: 'たつ',
    answer: '立って',
    description: 'to stand (up)',
    transitive: 'i'
}, {
    group: 'Godan',
    subgroup: 'って',
    question: '割る',
    questionF: 'わる',
    answer: '割って',
    description: 'to divide',
    transitive: 't'
},

// Godan - いて
{
    group: 'Godan',
    subgroup: 'いて',
    question: '書く',
    questionF: 'かく',
    answer: '書いて',
    description: 'to write',
    transitive: 't'
}, {
    group: 'Godan',
    subgroup: 'いて',
    question: '話す',
    questionF: 'はなす',
    answer: '話して',
    description: 'to talk',
    transitive: 't'
}, {
    group: 'Godan',
    subgroup: 'んで',
    question: '泳ぐ',
    questionF: 'およぐ',
    answer: '泳いで',
    description: 'to swim',
    transitive: 'i'
},

// Godan - んで
{
    group: 'Godan',
    subgroup: 'んで',
    question: '死ぬ',
    questionF: 'しぬ',
    answer: '死んで',
    description: 'to die',
    transitive: 'i'
}, {
    group: 'Godan',
    subgroup: 'んで',
    question: '遊ぶ',
    questionF: 'あそぶ',
    answer: '遊んで',
    description: 'to play (games, sports)',
    transitive: 'i'
}, {
    group: 'Godan',
    subgroup: 'んで',
    question: '休む',
    questionF: 'やすむ',
    answer: '休んで',
    description: 'to rest',
    transitive: 'i'
}];

const ichidanVerbs: Memory[] = [
// Ichidan - て
{
    group: 'Ichidan',
    subgroup: 'て',
    question: '食べる',
    questionF: 'たべる',
    answer: '食べて',
    description: 'to eat​',
    transitive: 't'
}, {
    group: 'Ichidan',
    subgroup: 'て',
    question: '起きる',
    questionF: 'おきる',
    answer: '起きて',
    description: 'to get up',
    transitive: 'い'
}, {
    group: 'Ichidan',
    subgroup: 'て',
    question: '閉じる',
    questionF: 'とじる',
    answer: '閉じて',
    description: 'to close (e.g. book, eyes, etc.)',
    transitive: 't'
}];

const irregularVerbs: Memory[] = [
// Irregular
{
    group: 'Irregular',
    subgroup: '',
    question: '行く',
    questionF: 'いく',
    answer: '行って',
    description: 'to go',
    transitive: 'i'
}, {
    group: 'Irregular',
    subgroup: '',
    question: '来る',
    questionF: 'くる',
    answer: '来て (きて)',
    description: 'to come',
    transitive: 't'
}, {
    group: 'Irregular',
    subgroup: '',
    question: 'する',
    questionF: '',
    answer: 'して',
    description: 'to do',
    transitive: ''
}];

export const memoryTestData: Memory[] = [
    ...godanVerbs,
    ...ichidanVerbs,
    ...irregularVerbs
];