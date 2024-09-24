import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';  
import SchoolRegistration from '../pages/SchoolRegistration';  

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/school-registration" element={<SchoolRegistration />} />
    </Routes>
  );
};

export default AppRoutes;
