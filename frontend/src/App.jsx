import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Infos from "./components/Infos";
import AppRoutes from './routes/Routes';  
import './styles.css'
import './i18n.js'

function App() {
  return (
    <Router>
      <Infos />
      <Navbar />
      <AppRoutes />  
      <Footer />
    </Router>
  );
}

export default App;
