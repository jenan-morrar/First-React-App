import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import { useState} from 'react';

function App() {

  const admainUser = {
    email: "admin@mail.com",
    password: "admin"
  }
  const [loginState, setLoginState] = useState("");
  // const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const LoginTest = details => {
    console.log(details);
    if (details.email === admainUser.email && details.password === admainUser.password) {
      console.log("Looged in");
      window.localStorage.setItem("isLoggedin", true);
      setLoginState("logged");
      setError("");

      return true;
      // setUser({
      //   email: details.email,
      //   password: details.password
      // })

    } else {
      console.log("Dosen't  match!");
      setError("Incorrect Email or Password!");
      return false;
    }
  }

  const Logout = () => {
    console.log("Logout");
    window.localStorage.removeItem("isLoggedin");
    // setUser({ email: "", password: "" });
    setLoginState("not logged");
  }

  return (
    <BrowserRouter>
      <div className="App">

      <Navbar loginState={loginState} Logout={Logout} />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login LoginTest={LoginTest} error={error} />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/logout' element={<Login LoginTest={LoginTest} error={error} />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
