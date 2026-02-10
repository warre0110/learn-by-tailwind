import React from 'react'
import './App.css'
import { Button } from '@/components/ui/button'

const { useState } = React

/*
 *
 */
const TestCardContent = () => {
    const [count, setCount] = useState(0)

    return (
        <div
            className="gap-4"
            data-name="TestCardContent">
            <div className="text-neutral-600">Hello World!</div>
            <h1>Learn by Tailwind v1.03</h1>
            <Button>Click me</Button>
            <div className="card">
                <button
                    className="rounded bg-blue-600 px-4 py-2 text-white"
                    onClick={() => setCount(count => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </div>
    )
}

export default TestCardContent
