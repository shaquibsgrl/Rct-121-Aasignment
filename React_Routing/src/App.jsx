import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import AllRoutes from './Routing/AllRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <h1>hello</h1>
   <AllRoutes/>
    </div>
  )
}

export default App
