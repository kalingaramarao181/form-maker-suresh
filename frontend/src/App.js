import './App.css';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Forms from './Components/Forms';
import ClientLogin from './Components/ClientLogin';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Secure from './Components/Secure';
import ClientData from './Components/ClientData';


import { BrowserRouter ,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <>
  
  <BrowserRouter>
  <Navbar/>
  <Switch>
  <Route  path='/' exact component={Home} /> 
    <Route  path='/' exact component={Home} /> 
    <Route  path='/AboutUs' exact component={AboutUs} /> 
    <Route   path='/Forms' exact component={Forms} />
    <Route  path='/ClientLogin' exact component={ClientLogin} />
    <Route  path='/Footer' exact component={Footer} />
    <Route  path='/Login' exact component={Login} />
    <Secure  path='/ClientData' exact component={ClientData} />
  </Switch>
  </BrowserRouter>


    
    </>
  );
}

export default App;
