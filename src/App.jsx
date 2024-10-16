import { useState } from 'react'
import logoOriginal from './assets/LogoOriginal.png'
import { MyRoutes } from './routers/routes'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyRoutes />
    </>
  )
}

export default App
