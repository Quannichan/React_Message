import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./components/login";
import Home from "./layouts/home";
import Signup from "./components/signup";
import Notfound from "./components/page404"
import "./style/main.scss";

function App() {

  return (
        <Router>
          <Routes>
            <Route exact path="/" element={<Login header="Login" underhead="Welcome back!" />}/>
            <Route exact path="/Signup" element={<Signup header="Sign up" underhead="Create account to connect over the world!"/>}/>
            <Route exact path="/Home/*" element={<Home />}/>
            <Route exact path="*" element={<Notfound />}/>
          </Routes>
        </Router>
  )
}

export default App
