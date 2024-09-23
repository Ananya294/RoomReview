import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import UniversityDetails from './components/UniversityDetails';
import NewReview from './components/NewReview';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/universities/:id" element={<UniversityDetails />} />
        <Route path="/universities/:id/new-review" element={<NewReview />} />
      </Routes>
    
    </Router>
    
    
  );
}

export default App;
