import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Style from "@/layout/style";

function App() {

  return (
    <>
    <Style/>    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<></>} />
        <Route path="/contact" element={<></>} />
        <Route path="*" element={<></>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;