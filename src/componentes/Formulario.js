import React, { Component } from 'react'

export class Formulario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: ''
        };
      }  
    /*
    syncUserChanges(user){
        this.setState({
            user:user
        })    
    }     

    syncPasswordChanges(password){
        this.setState({
            password:password
        })    
    } 
    */
    syncChanges(value,property){
        let state = {};
        state[property] = value;
        this.setState(state);    
    }


    /* estilo dinamico*/ 
    getStyle = () =>{
        return{
            backgroundColor: '#6e7da2',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        return (
            <form>
                <input
                onChange = {(ev)=>{this.syncChanges(ev.target.value, 'user')} }
                type ="user" 
                value = {this.state.user}  
                placeholder = "Usuario"/>
                <input 
                onChange = {(ev)=>{this.syncChanges(ev.target.value, 'password')} }
                type="password" 
                value= {this.state.password} 
                placeholder="*****"/>
                <div style = {this.getStyle()}>
                    <input type="submit" value="Iniciar sesion"/>
                </div>
            </form>
        )
    }
}




//<div style = {itemStyle}>
/* 
const itemStyle = {
    backgroundColor: '#6e7da2'
}
*/

export default Formulario
