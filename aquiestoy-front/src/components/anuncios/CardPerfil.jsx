import React from 'react'
import logo from '../../logo.svg'
import { Card } from 'antd';

const { Meta } = Card;


const CardPerfil = ()=>{

  const dataPu = JSON.parse(localStorage.getItem('user'))

  return(
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<img className='imgprefil' src={dataPu.photoURL || logo} alt='impe' style={{width:'100px'}} />}
         >
         <Meta
      title={dataPu.username}
      description={dataPu.email}
    />

  </Card>
 )
}

export default CardPerfil

