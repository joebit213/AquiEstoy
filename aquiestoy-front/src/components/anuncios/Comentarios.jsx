import React from 'react'
import { Card } from 'antd';





const Comentarios = ({adds=[]}) => {

    console.log(adds)
    //console.log(dodds)
    if(adds.length >0) return <p>Te parecio interesante? Comenta!</p>
    return(
        <div>
            <div>
            {adds.map((p, i) => {
                return <b href={p.username} key={i}>
                <Card 
                style={{ width: 600,height:100, margin: '10px', marginLeft:'30%', marginTop:'60px' }}
                >
                <hr/>
                <h3>{p.name}</h3>
                {p.desc}
                </Card>                
                </b>        
            })}
            </div>
            
        </div>
    )
}

export default Comentarios