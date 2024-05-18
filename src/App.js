import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./component/navigationBar";
// import BodyContent from "./components/bodycontent";
import Footer from "./component/footer.js";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from "./component/mainPage.js";
import Motorcyle from "./component/motorcycle.js"
import About from "./component/about.js";
import FullDetails from "./component/fulldetails.js";




function App() {
  return (
    
    <>
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/motor" element={<Motorcyle></Motorcyle>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/fulldetail" element={<FullDetails></FullDetails>}></Route>
        </Routes>
        <Footer></Footer>  
      </BrowserRouter>


    </>  
    
    
  );
}

export default App;
