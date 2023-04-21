import Register from './componets/Register/index';
import Home from './componets/Home/index';
import Signin from './componets/Signin/index';
import Landing from './componets/Landing/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path= "/" element={<Landing/>}/>
          <Route path= "/register" element={<Register/>}/>
          <Route path= "/signin" element={<Signin/>}/>
          <Route path= "/home" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;