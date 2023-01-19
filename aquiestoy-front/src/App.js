import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import {withRouter, Link} from 'react-router-dom'
import { Button } from 'antd';


class App extends Component {

  logOut = ()=>{
    localStorage.removeItem('user')
    this.props.history.push('/login')
  }


  render() {

    return (
      <div className="App">
        <div className='navi'>
        <div />
        <nav>
          <Link exact to="/">Iniciog</Link>
          <Link to="/anuncios">Noticias</Link>
          <Link to="/profile">Perfil</Link>
          <Button className='logout' type="dashed" onClick={this.logOut}>Cerrrar sesion</Button>

        </nav>
      </div>
      <Routes/>
      <br/>
      <section className='piepag'>
      AquiEstoy created by joe
      </section>
      </div>
    );
  }
}

export default withRouter(App);

//<Button className='logout' type="dashed" onClick={this.logOut}>Cerrrar sesion</Button>

