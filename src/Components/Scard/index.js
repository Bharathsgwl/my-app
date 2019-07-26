import React from'react';
import './index.css';
class Scard extends React.Component{

  render(){
const image=this.props.brand.img;
    return(

      <div class="bl1">
      <div class="card">
      <img src={this.props.brand.img} ></img>
      <h3>my car is {this.props.brand.name}</h3>
      <p> {this.props.brand.description}</p>
</div>
</div>

    );
  }
}
export default Scard;
