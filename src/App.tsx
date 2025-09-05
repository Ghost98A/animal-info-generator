import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">untitled app</h1>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
            <p className="text-gray-700 mb-4">
              create an animal information and image generator app
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => setCount((count) => count + 1)}
            >
              Count is {count}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
