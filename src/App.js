import './App.css';
import Home from './Components/Home/Home';
import Header1 from './Components/Home/Header1';
import Header2 from './Components/Home/Header2';
import Header3 from './Components/Home/Header3';
import Benefits from './Components/Home/Benefits';
import FAQ from './Components/Home/FAQ';
import Contact from './Components/Home/Contact';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <Header1/>
      <Header2/>
      <Header3/>
  
     <Home/>
     <ToastContainer/>
     <Benefits/>
     <FAQ/>
     <Contact/>

    </div>
  );
}

export default App;
