import React, { Component } from "react";

class Home extends Component {


  constructor(){
    super()
    this.state={
      number:'',
      msg:''
    }
  }


  checkPrime=(e)=>{
    let digit=parseInt(e.target.value);
    let message;

    
    if(digit>=2){
      if(digit===2){
        message='Prime'
      }
      else{
        let prime=true;
        for(let i=2;i<digit;i++){
          if(digit%i===0){
            prime=false
            break
          }
        }

        if(prime){
          message='Prime'
        }
        else{
          message='Not Prime'
        }
      }

    }
    else{
      message='Not Prime'
    }

    this.setState({
      number:digit,
      msg:message
    });
  }

 
  render(){
  return (
    <>
      <h1>Checked The Number it is Prime or Not</h1>
      
      <input type='number' value={this.state.number} onChange={this.checkPrime.bind(this)} />
      <h1>{this.state.msg}</h1>
    </>
  );
}
}
export default Home;

