import {BrowserRouter, Route} from 'react-router-dom';
import {Routes} from 'react-router'
import {Navigate} from 'react-router-dom'
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import User from "./Components/User";
function App() {


  return (
      <div className="App">
          <BrowserRouter>
              <NavBar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/user/:name" element = {<User />} />
                  <Route path="/*" element={<Navigate to = "/" />} />
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;