import React from 'react'
import { Card, Avatar } from 'antd';
import logo from '../../logo.svg'
import Comentarios from './Comentarios'
import ComentariosDisplay from '../comentarios/ComentariosDisplay';

const { Meta } = Card;




const Anuncios = ({adds=[], onChange, onSubmit}) => {

    //console.log(props.adds)
    const data = JSON.parse(localStorage.getItem('user'))
    //console.log(adds)
    if(adds.length <=0) return <h1>No hay publicaciones</h1>
    return(
        <div>
            <div>
            {adds.map((p, i) => {
                return <b href={data.username} key={i}>
                <Card 
                style={{ width: 600, margin: '10px', marginLeft:'30%', marginTop:'60px' }}
                cover={<img alt="imge" src={p.imageURL || logo} style={{width:'400px', height:'200px', marginLeft:'120px'}} />}
                >
                <Meta
                avatar={<Avatar src={p.photoURL || logo} style={{width:'100px', height:'50px'}} />}
                description={p.user?p.user.username:''}
                />
                <hr/>
                <h3>{p.name}</h3>
                {p.text}

                </Card>
                <ComentariosDisplay
                anuncio={p}
                onChange={onChange}
                onSubmit={onSubmit}
                 />
                 <Comentarios />
                
                </b>        
            })}
            </div>
            
        </div>
    )
}

export default Anuncios
