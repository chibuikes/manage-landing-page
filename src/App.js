import "./App.css";
import React from "react";
import MainPage from "./Components/MainPage/MainPage";
import Footer from "./Components/Footer/Footer";
import Comments from './Components/Comments/Comments'


function App() {

  


  return (
    <React.Fragment>
  <MainPage/>
  <Comments/>
 <Footer/>
    </React.Fragment>
  );
}

export default App;
