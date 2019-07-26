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
  <div class="topnav">
  <a class="active" href="#"> home</a>
      <NavLink to="/footer">About US</NavLink>
      <a href="#C4">About work</a>
      <a href="#">Footer</a>
</div>
<br /><div class="col-md-4">
    <div className="content">
    <Route path="/footer" component={Footer} />
    </div>
    </div>
</nav>
</div>
</div>
</HashRouter>
);
}
}
export default Header;
