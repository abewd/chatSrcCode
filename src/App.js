import Register from "./componets/Register/index";
// import Home from "./componets/Home/index";
import Signin from "./componets/Signin/index";
import Landing from "./componets/Home/index";
import Home from "./Pages/Home/home";
import Login from "./componets/Login/login";
import Header from "./componets/Header/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/home" element={<Home />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
