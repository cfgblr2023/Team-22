import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Login from './screens/Login';
import Register from './screens/Register';
import Volunteer from './screens/Volunteer';
import Addcourse from './screens/Addcourse';
import Main from './screens/Main';
import Addprofile from './screens/Addprofile';
import CourseListingPage from './screens/CourseListingPage';
import Enrolled from './screens/Enrolled';
import ShopContextProvider from './context';
import CourseInside from './screens/CourseInside';
import CourseMake from './screens/CourseMake';
import Admin from './screens/Admin';
import Events from './screens/Events';
import CourseDemands from './screens/CourseDemands';
import Accdep from './screens/Accdep';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/volunteer" element={<Volunteer/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/volunteer/home" element={<Main></Main>}></Route>
            {/* <Route path="/volunteer" element={<Login></Login>}></Route> */}
            <Route path="/volunteer/addcourse" element={<Addcourse></Addcourse>}></Route>
            <Route path="/volunteer/editprofile" element={<Addprofile></Addprofile>}></Route>
            <Route path='/student/mycourses' element={<CourseListingPage></CourseListingPage>}></Route>
            <Route path='/student/mycourses/courseone' element={<CourseInside></CourseInside>}></Route>
            <Route path='/student/enrolled' element={<Enrolled></Enrolled>}></Route>
            <Route path='/volunteer/home/courseone' element={<CourseMake></CourseMake>}></Route>
            <Route path='/admin' element={<Admin></Admin>}></Route>
            <Route path='/admin/events' element={<Events></Events>}></Route>
            <Route path='/admin/accdep' element={<Accdep></Accdep>}></Route>
            <Route path='/admin/coursedemands' element={<CourseDemands></CourseDemands>}></Route>
          </Routes>
    </BrowserRouter>
    </ShopContextProvider>
    </div>
  );
}

export default App;
