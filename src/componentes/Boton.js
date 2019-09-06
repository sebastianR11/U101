import React from 'react';

class Boton extends React.Component {

  constructor(props) {
    super(props); /*se manda a clase padre(en este caso Boton) */
    this.state = {
      contador:0
    };
  }  

  render(){
      return( /*jsx de aqui para abajo*/
      <div className="Boton">
        <p>{this.state.contador}</p>
        <button onClick = {()=>{this.setState({contador:1})}}>Click me!</button>
      </div>
      );
  };
}

export default Boton;




