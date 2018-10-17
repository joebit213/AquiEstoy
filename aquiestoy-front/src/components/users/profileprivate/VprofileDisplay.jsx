import React from 'react'
import logo from '../../../logo.svg'


// let inp

// // function uploadPhoto (){
// //   console.log('lol')
// //   inp.click()
// // }



const PprofileDisplay = ({onChangeFile})=>{
  
  const data = JSON.parse(localStorage.getItem('user'))

  return(
    <div className='perfil'>
      <aside className="profile-card">
        <header>
          <img className='imgprefil' src={data.photoURL || logo} alt='impe'/>
          <h1>{data.username}</h1>
          <h2>{data.email}</h2>
        </header>
        <div className="profile-bio">
          <p>{data.bio}</p>
        </div>
        
      </aside>
    </div>
 )
}

export default PprofileDisplay


      

// <img style={{borderRadius:'50%'}} src={data.photoURL || logo} width="200" alt="user"/>
// <h1>{data.username}</h1>
// <p>{data.email}</p>
// <input accept="image/*" onChange={onChangeFile} ref={input=>inp=input} hidden type="file" />
//  <br/>
// <img style={{cursor:"pointer"}} width="100" onClick={uploadPhoto} src="https://cdn.onlinewebfonts.com/svg/img_212908.png" alt='imgprofile' />
