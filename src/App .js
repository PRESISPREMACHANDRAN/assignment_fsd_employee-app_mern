import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import AdminLogin from './components/AdminLogin';
import LoginNavbar from './components/LoginNavbar';
import Userlogin from './components/Userlogin';
import Viewonly from './components/Viewonly';
import Edit from './components/Edit';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/add" exact element={<Registration />} />
        <Route path="/" exact element={<LoginNavbar/> }/>
        <Route path="/adminlogin" exact element={<AdminLogin/>}/>
        <Route path="/userlogin" exact element={<Userlogin/>}/>
        <Route path="/viewonly" exact element={<Viewonly/>}/>
        <Route path="/edit" exact element={<Edit/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
