import React from 'react';
import './index.css';
import {Route,NavLink,HashRouter} from "react-router-dom";
import Footer from "../Footer";
//lets create a class as Header
class Header extends React.Component{
render()
{
return(
/*<div style={{
width:"100%",
height:"50px",
background:"orange"
}}>
</div>
*/
<HashRouter>
<div class="header">
<div class="container-fluid">
  <nav class="navbar navbar-default">
  <div class="col-md-12">
  <div class="head">
  <h1>GOODWORKLABS</h1>
  </div>

  </div>
  <div class="navbar-header">
  <img  src="https://www.goodworklabs.com/wp-content/uploads/2013/11/logo-GWL1.png"></img>
    </div>



    <ul class="nav navbar">
      <li class="active"><a href="#"> home</a></li>
      <li class="nav-item">
      <NavLink to="/footer">About US</NavLink></li>
      <li class="nav-item">
      <a href="#C4">About work</a></li>
      <li class="nav-item">
      <a href="#">Footer</a></li>
    </ul>

    <div className="content">
    <Route path="/footer" component={Footer} />
    </div>
</nav>
</div>
</div>
</HashRouter>
);
}
}
export default Header;
