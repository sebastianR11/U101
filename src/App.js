import React from 'react';
import Campo from './componentes/Campo';
import Boton from './componentes/Boton';
import Formulario from './componentes/Formulario';

import './App.css';

class App extends React.Component {
  render(){
      return( /*jsx de aqui para abajo*/
      <div className="App">
        <Campo/>
        <Boton/>
        <Formulario/>
      </div>
      );
  };
}

export default App;
