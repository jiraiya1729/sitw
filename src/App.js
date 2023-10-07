

// import {BrowserRouter} from 'react-router-dom'
import Home  from "./components/Home"
import Help  from "./components/Help";
import Resources from "./components/Resources";
import About from "./components/About";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import useToken from "./components/useToken";
import Profile from './components/Profile'
import Header from './components/Header'
import Notification from "./components/Notification";
// import Bg from "./components/Bg";
// import Login from './components/Login'
function App() {
  const {token,removeToken, setToken} = useToken()
  return (
    <div>
      
      <BrowserRouter>
      
      
     
            {!token && token!=="" &&token!== undefined?  
            <Login setToken={setToken} />
            :(
              <>
              <Header token={removeToken}/>
                <Routes>
                  <Route exact path="/profile" element={<Profile token={token} setToken={setToken}/>}></Route>
                  <Route exact path="*" element={<Home />}></Route>
                  <Route exact path="/About" element={<About />}></Route>
                  <Route exact path="/resources" element={<Resources />}></Route>
                  <Route exact path="/help" element={<Help />}></Route>
                  <Route exact path="/notifications" element={<Notification />}></Route>
                </Routes>
              </>
            )}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
