import { useState } from 'react'
import Logo from './assets/logo.svg'
import { sendMsgToMain } from 'electron-prokit'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div onClick={() => sendMsgToMain({
        key:'openUrl',
        data: {
          url:'https://xutaotaotao.github.io/electron-prokit/'
        }
      })}>
          <img src={Logo} className="logo" alt="Vite logo" />
      </div>
      <p>A vite + react + electron template with electron-prokit.</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/render/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logo to learn more
      </p>
    </>
  )
}

export default App
