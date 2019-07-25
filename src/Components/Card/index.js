import React from 'react';
import "./index.css";

class Card extends React.Component{
  render(){
    return(
      <div>
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
      </div>
    );
  }
}
export default Card;
