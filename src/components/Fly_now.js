import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Footer from './Footer';
import HotelPage from './HotelPage/HotelPage';
import HotelsPage from './HotelsPage/HotelsPage';
import MainPage from './MainPage/MainPage';
import NavBar from './NavBar';
import SingIn from './SingIn';
import YourBockingPage from './YourBockingPage/YourBockingPage';


function Fly_now() {

    return (
        <Router>
        <div>
    

            <Switch>
             <Route path='/' exact>
               <MainPage/>
             </Route>
           
             <Route path='/hotelsPage' exact>
               <HotelsPage/>
             </Route>
             <Route path='/hotelsPage/hotelPage/:id' component={HotelPage} exact/>
             <Route path='/singIn' component={SingIn} exact/>
             <Route path='/yourBoocking' component={YourBockingPage} exact/>
              
            </Switch>
            <Footer/>
        </div>
        </Router>
    )
}

export default Fly_now
