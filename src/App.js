
import './App.css';
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Cats  from "./pages/Cats";
import Favorites  from "./pages/Favorites";
import Header from "./components/Header";
import {useEffect} from "react";
function App() {
    const navigate = useNavigate()
    let location = useLocation();
    useEffect(() => {
        if(location.pathname === "/") {
            navigate("/cats")
        }
    },[location.pathname,navigate])
  return (
    <div>
        <Header />
       <Routes >
         <Route path="/" element={<Header />}/>
         <Route path="/cats" element={<Cats />}/>
         <Route path="/favorites" element={<Favorites />}/>
       </Routes>
    </div>
  );
}

export default App;
