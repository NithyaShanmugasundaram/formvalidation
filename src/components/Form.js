import React, { Component } from 'react';
import "./Form.css";


class Form extends Component {
    state={
       gender:"",
       salution:"",
       firstname:"",
       salutionError:"",
       firstnameError:""
     
    }
    
    handleChange=(e)=>{
        
        const name=e.target.name;
        const value= e.target.value;
        this.setState({[name]:value})
    }
    
    handleSubmit=(e)=>{
      e.preventDefault();
     const isValid=this.validate();
     if(isValid){
      console.log(this.state);  
     }    
  }
  validate=()=>{
    let salutionError="";
    

    if(this.state.gender==="male"&&this.state.salution==="mrs"){
       salutionError="select correct salution";
    } else if (this.state.gender==="male"&&this.state.salution==="ms"){
        salutionError="select correct salution";

    }else if(this.state.gender==="female"&&this.state.salution==="mr"){
      salutionError="select correct salution";
    }
     
     if(salutionError){
     this.setState({salutionError})
     return false;
     }
     return true;
  }
  
  

  render() { 
    
      return ( 
       <form className="pa4" onSubmit={this.handleSubmit}>
       <div className="flex items-center mb2">
       <input className="mr2" 
       onChange={this.handleChange}
       type="radio" 
       name="gender"  
       value="male"
       />
       <label>Male</label>
     </div>
      <div className="flex items-center mb2">
       <input className="mr2" 
       type="radio" 
       name="gender"
       onChange={this.handleChange}
       value="female"/>
       <label >Female</label>
      </div>
      <div>
     <div className="flex items-center mb2">
      <input className="mr2" 
      type="checkbox"  
      onChange={this.handleChange}
      name="salution"
      value="mr"/>
      <label>Mr</label>
      
      </div>
    <div className="flex items-center mb2">
      <input className="mr2" 
       type="checkbox" 
       name="salution"
       value="mrs"
       onChange={this.handleChange}/>
      <label >Mrs</label>
      
    </div>
     <div className="flex items-center mb2">
      <input className="mr2" 
      type="checkbox" 
      name="salution"
      value="ms"
      onChange={this.handleChange}/>
      <label >Ms</label>
      </div>
      <div style={{color:"red"}}>{this.state.salutionError}</div>
      </div>
      <div className="measure pa4 black-80">
        <label>Enter the name:</label>
        <input 
         className="input-reset ba b--black-20 pa2 mb2 db w-100" 
         type="text" 
         name="firstname" 
         value={this.state.firstname}
         onChange={this.handleChange}
         required
      
      />
      
    </div>
    <button className="f6 link dim ph3 pv2 mb2 dib white bg-near-black" >Submit</button>
</form>

         );
    }
}
 
export default Form;