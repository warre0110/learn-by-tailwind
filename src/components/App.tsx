import React from 'react'
import './App.css'
import Card from './Card'
import CardPage from './CardPage'

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
        <div className="w-full h-full bg-neutral-900 text-center" data-name="App">
            <CardPage>
                <Card>
                    <div className="text-neutral-600">Hello World!</div>
                    <h1>Learn by Tailwind v1.03</h1>
                    <div className="card">
                        <button
                            onClick={() => setCount(count => count + 1)}
                            className="px-4 py-2 bg-blue-600 text-white rounded">
                            count is {count}
                        </button>
                        <p>
                            Edit <code>src/App.tsx</code> and save to test HMR
                        </p>
                    </div>
                    <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
                </Card>
            </CardPage>
        </div>
    )
}

export default App
