import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Navbar'
import Services from './Services'
import WhyUs from './WhyUs'
import Working from './Working'
import Contact from './Contact'
import Login from './Login'
import Register from './Register'
import Footer from './Footer'
import Washer_Login from '../../Member/Washer_Login'
import Admin_Login from '../../Member/Admin_Login'
import Washer_Register from '../../Member/Washer_Register'
import Ho from './Ho';
import Appointment from './Appointment';
import OrderPage from '../CustomerComp/OrderPage';


function Home() {
    return (
        <>
        <Router>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Ho} />
        {/*<Route exact path="/" component={Ho} />*/}
        <Route exact path="/services" component={Services} />
        <Route exact path="/whyus" component={WhyUs} />
        <Route exact path="/working" component={Working} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/washer_login" component={Washer_Login} />
        <Route exact path="/admin_login" component={Admin_Login} />
        <Route exact path="/washer_register" component={Washer_Register} />
        <Route exact path="/appointment" component ={Appointment} />
        <Route exact path ="/Orderpage" component={OrderPage}/>
        </Switch>
        <Footer/>
        </Router>
       
        </>
    )
}

export default Home
