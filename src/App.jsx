import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/main/Main'

function App() {

  return (
    <div className="w-full bg-zinc-900 text-white px-10 py-5 flex relative max-md:px-0">
    <Sidebar />
    <Main />
    </div>
  )
}

export default App
