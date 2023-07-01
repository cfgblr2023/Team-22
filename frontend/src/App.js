import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Register from './screens/Register';
import Volunteer from './screens/Volunteer';
import Addcourse from './screens/Addcourse';
import Main from './screens/Main';
import Addprofile from './screens/Addprofile';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/volunteer" element={<Volunteer/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/volunteer/home" element={<Main></Main>}></Route>
            {/* <Route path="/volunteer" element={<Login></Login>}></Route> */}
            <Route path="/volunteer/addcourse" element={<Addcourse></Addcourse>}></Route>
            <Route path="/volunteer/editprofile" element={<Addprofile></Addprofile>}></Route>
          </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
