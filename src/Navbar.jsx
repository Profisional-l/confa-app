import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Announcements from './Announcements.jsx';
import ProfilePage from './ProfilePage.jsx';
import FindAnsPage from './FindAnsPage.jsx';
  
const CreateAd = () => <Announcements />;
  
const Navbar = () => {
  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<ProfilePage/>} />
            <Route path="/create" element={<CreateAd/>} />
            <Route path="/find" element={<FindAnsPage/>} />
          </Routes>
        </div>
        <div className="navbar">
          <Link to="/">
            <button className="button">Мой профиль</button>
          </Link>
          <Link to="/create">
            <button className="button">Создать объявление</button>
          </Link>
          <Link to="/find">
            <button className="button">Найти объявления</button>
          </Link>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;