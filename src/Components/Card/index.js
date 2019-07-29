import React from 'react';
import OurEmployees from '../OurEmployees';
import "./index.css";
import Scard from '../Scard';

class Card extends React.Component{
  //Stateless is working 
  render(){
    const info={name:"Suv",description:"made in India",img:"/Assets/images/suv1.jpg"};
    const info2={name:"ferrari",description:"made in japan",img:"/Assets/images/ferrari.jpg"};
    const info3={name:"Bugati",description:"made in france",img:"/Assets/images/bugati1.jpg"};

    return(
      <div class="components">
      <h5 class="emp-details">Employees Cards</h5>
    <div class="col-md-4">
  <div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="employee-avtar" class="image"></img>
      </div>
   <div class="flip-card-back">
     <h1>John Doe</h1>
     <p>Architect & Engineer</p>
     <p>We love that guy</p>
   </div>
 </div>
</div>
</div>

<div class="col-md-4">
<div class="flip-card">
  <div class="flip-card-inner">
  <div class="flip-card-front">
    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="employee-avtar" class="image"></img>
    </div>
 <div class="flip-card-back">
   <h1>Nishant</h1>
   <p>Associate Software Engineer</p>
   <p>We love that guy</p>
 </div>
</div>
</div>
</div>

<div class="col-md-4">
<div class="flip-card">
  <div class="flip-card-inner">
  <div class="flip-card-front">
    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="employee-avtar" class="image"></img>
    </div>
 <div class="flip-card-back">
   <h1>Bharath s</h1>
   <p>Associate Software Engineer</p>
   <p>We love that guy</p>
 </div>
</div>
</div>

</div>
<div >
<h1 class="title">"Brilliant team and superior product delivery!"</h1>
<p class="title1">GoodWorkLabs built our in-store mobile app that powers our stores worldwide
- Megha Malgatti, Corporate Strategy, ST Dupont, Paris.</p>
</div>
<div>
<h4>Our Vision </h4>
<div class="col-md-4">
<OurEmployees />
</div>
<div class="col-md-4">
<OurEmployees />
</div>
<div class="col-md-4">
<OurEmployees />
</div>
</div>
<h4>props images</h4>
<div class="col-md-4">
<Scard brand={info} />
</div>
<div class="col-md-4">
<Scard brand={info2} />
</div>
<div class="col-md-4">
<Scard   brand={info3} />
</div>
      </div>

    );
  }
}
export default Card;
