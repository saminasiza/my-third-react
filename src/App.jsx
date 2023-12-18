import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './users'
import Friends from './friends'
import Friend from './Friend'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Vite + React</h1>

      <Friend></Friend>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>



      <Counter></Counter>


    </>
  )
}

export default App
