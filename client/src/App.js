import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import MainNavbar from './components/shared/MainNavbar';
import Footer from './components/shared/Footer';
import Nomatch from './components/shared/Nomatch';
import Courses from './components/courses/Courses';
import CourseShow from './components/courses/CourseShow';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/courses/:id' element={<CourseShow />} />
      <Route path='/*' element={<Nomatch />} />
    </Routes>
    <Footer />
  </>
)
export default App;
