import BottomNavigation from '../components/BottomNavigation/BottomNavigation';
import HomePage from './HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './SearchPage';
import ConsultPage from './ConsultPage';
import ProfilePage from './ProfilePage';
import SchedulePage from './SchedulePage/SchedulePage';
import DoctorPage from './DoctorPage.tsx/DoctorPage';

const MainPage = () => {
  return (
    <div style={{maxWidth: 500}} >
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/schedule' element={<SchedulePage />} />
        <Route path='/doctor' element={<DoctorPage />} />
        <Route path='search' element={<SearchPage />} />
        <Route path='consult' element={<ConsultPage/>}/>
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
      <BottomNavigation />
    </div>
  )
}

export default MainPage;