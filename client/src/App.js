import Register from "./componets/Register/index";
// import Home from "./componets/Home/index";
import Signin from "./componets/Signin/index";
// import Landing from "./componets/Home/index";
import Home from "./Pages/Home/home";
import Login from "./componets/Login/Login";
import Header from "./componets/Header/index";
import Chats from "./componets/Chats/Chats";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import AnimatedCursor from "react-animated-cursor"


function App() {



  return (
    <div className="App">
        <AnimatedCursor
        innerSize={8}
        outerSize={20}
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
      <Router>
        
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Chats" element={<Chats />} />

          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
