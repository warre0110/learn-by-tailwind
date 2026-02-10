import React from 'react'
import './App.css'
import Card from './Card'
import CardPage from './CardPage'
//import TestCardContent from './TestCardContent'
import MemoryTable from './MemoryTable'
import { memoryTestData } from '@/models/memory/MemoryTestData'

const { useState } = React

/*
 *
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
                    <MemoryTable data={memoryTestData} />
                </Card>
            </CardPage>
        </div>
    )
}

export default App
