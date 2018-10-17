import React from 'react'
import logo from '../../../logo.svg'


const PprofileDisplay = ()=>{

  const dataPu = JSON.parse(localStorage.getItem('user'))

  return(
    <div className='perfil'>
    <aside className="profile-card">
      <header>
        <img className='imgprefil' src={dataPu.photoURL || logo} alt='impe'/>
        <h1>{dataPu.username}</h1>
        <h2>{dataPu.email}</h2>
      </header>
      <div className="profile-bio">
        <p>Even when everything is perfect, you can always make it better. Break barriers in your head, create something crazy and don't forget Code is Poetry...</p>
      </div>
      
    </aside>
  </div>
 )
}

export default PprofileDisplay

//<button onClick={this.getPrivateInfo} >Bajate mi pack privado ;)</button>
