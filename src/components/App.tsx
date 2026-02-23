import React from 'react'

import Card from './Card'
import CardPage from './CardPage'
import MemoryTable from './MemoryTable'
import { testPage } from '@/models/memory/MemoryTestData'

import type { QuestionTable } from '@/models/memory/Question';

import './App.css'

const { useState } = React
const testTable = testPage.content as QuestionTable;

/*
 * - - - - - 
 */
const App = () => {
    const [count, setCount] = useState(0)

    const hello = 'hello'
    const test = 'test'
    console.log(hello, test)

    return (
        <div className="h-full w-full text-center" data-name="App">
            <CardPage>
                <Card className="gap-4">
                    <MemoryTable table={testTable} />
                </Card>
            </CardPage>
        </div>
    )
}

export default App
