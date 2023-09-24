import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import CourseList from "./pages/CourseList/CourseList";
import EnrollmentForm from "./pages/EnrollmentForm/EnrollmentForm";
import Faq from "./pages/FAQ/Faq";
import Calendar from './pages/Calendar/calendar';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<h1>Para sa Home Page</h1>} />
                    <Route path='/courses' element={<CourseList />} />
                    <Route path='/faq' element={<Faq />} />
                    <Route path='/calendar' element={<Calendar />} />
                    <Route path='/enrollment' element={<EnrollmentForm />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;