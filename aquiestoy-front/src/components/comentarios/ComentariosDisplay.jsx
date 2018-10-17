import React from 'react'
import { Input, Button } from 'antd';


const { TextArea } = Input;


const ComentariosDisplay = ({loading, onSubmit, onChange, anuncio})=>{


  return(
    <section>
      <div className='comentarios'>
     
                                         
        <TextArea placeholder="Comenta" autosize={{ minRows: 2, maxRows: 2 }} name='desc' onChange={onChange}  />
       
        <Button onClick={(e)=>onSubmit(e,anuncio._id)}>Enviar</Button>
                                                                          
      
      </div>
    </section>
  )
}

export default ComentariosDisplay