import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
// import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Rollertap from './pages/Rollertap'

export default function App() {
  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rollertap" element={<Rollertap />} />
        </Routes>
      </main>
    </>
  )
}
