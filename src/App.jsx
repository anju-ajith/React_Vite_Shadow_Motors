
import Header from './Header/Header';
import Navbar from './NavBar/Navbar';
import './App.css'
import Home from './Home/Home';
import Services from './Services/Services';
import Aboutus from './AboutUs/Aboutus';
import Preowned from './PreOwnedCars/Preowned';
import Rental from './Rental/Rental';
import Weddingcar from './Weddingcars/Weddingcars';
import Contactus from './Contactus/Contactus';


function App() {

  return (
    <>
    
      <Header/>
      <Navbar/>
      <Home/>
      <Services/>
      <Aboutus/>
      <Preowned/>
      <Rental/>
      <Weddingcar/>
      <Contactus/>
    </>
  )
}

export default App
