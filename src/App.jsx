import { useState } from 'react'
import Notes from './Notes'
import Input from './Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Notes List</h1>
     <Notes/>
     {/* <Input /> */}
    </>
  )
}

export default App
