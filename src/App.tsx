import React, { ReactElement, useState } from 'react'
import logo from './logo.svg'
import viteLogo from './vite.svg'
import tailwindLogo from './tailwind.svg'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Planner from './components/Planner'

function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-full px-4'>
      <Header />
      <div>
        <Planner />
      </div>
    </div>
  )
}

export default App
