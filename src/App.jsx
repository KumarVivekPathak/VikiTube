import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./screens/Home/HomePage"
import VideoPage from "./screens/Video/VideoPage"
import { useState } from "react"


function App() {
  const [sideBar, setSideBar] = useState(true);
  return (
    <>
      <div >
        <NavBar setSideBar={setSideBar} />
        <Routes>
          <Route path="/" element={<HomePage sideBar={sideBar} />} />
          <Route path="/video/:categoryId/:videoId" element={<VideoPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
