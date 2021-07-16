import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class CountingParent extends React.Component {

  state = {
    cuarto: false,
    bano: false,
    sala: false,
    cocina: false
  };

  handleCuarto = (action) => {
    console.log('Child says', action);
    this.setState({
      cuarto: !this.state.cuarto
    });
    console.log('Estdo Actual: ', this.state.cuarto)
  }

  handleBano = (action) =>{
    this.setState({ bano: !this.state.bano });
  }

  handleSala = (action) =>{
    this.setState({sala: !this.state.sala});
  }
  handleCocina = (action) => {
    this.setState({cocina: !this.state.cocina});
  }

  render() {
    return (
      <div>
        <Child
          label={'Cuarto'}
          onAction={this.handleCuarto}
          children={this.state.cuarto ? 'Prendido' : 'Apagado'}
        />
        <br />
        <Child
          label={'Baño'}
          onAction={this.handleBano}
          children={this.state.bano ? 'Prendido' : 'Apagado'}
        />
        <br />
        <Child
          label={'Sala'}
          onAction={this.handleSala}
          children={this.state.sala ? 'Prendido' : 'Apagado'}
        /><br />
        <Child
          label={'Cocina'}
          onAction={this.handleCocina}
          children={this.state.cocina ? 'Prendido' : 'Apagado'}
        />
      </div>

    );
  }
}

function Child({ onAction, children, label }) {
  return (
    <>
      <button onClick={onAction}>
        {label}
      </button><br />
      {children}

    </>
  );
}

const Page = () => (
  <div>
    <CountingParent />

  </div>
)

ReactDOM.render(<Page />, document.querySelector('#root'));