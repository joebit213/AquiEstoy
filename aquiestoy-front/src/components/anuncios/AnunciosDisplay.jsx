import React from 'react'
import { Upload, Button, Icon, Input } from 'antd';


const { TextArea } = Input;


const AnunciosDisplay = ({loading, onSubmit, onChangeFile, onChange})=>{


  return(
    <section>
      <div className='publicar'>
      <form onSubmit={onSubmit}>
                                         
        <Input name="name" type="text" required={true} onChange={onChange} placeholder="Titulo"/>
        <div style={{ margin: '24px 0' }} />
        <TextArea placeholder="Description" autosize={{ minRows: 2, maxRows: 6 }} name='text' onChange={onChange}  />
        <div style={{ margin: '24px 0' }} />
        <Upload onChange={onChangeFile}>
          <Button >
            <Icon type="upload" /> Subir imagen
          </Button>
        </Upload>      
           {/* <input accept="image/*" onChange={onChangeFile} type="file" /> */}
           <div style={{ margin: '24px 0' }} />
        <Input style={{ width: '100px', backgroundColor: '#2196F3' }} loading={loading} type='submit' />
                                                                          
      </form>
      </div>
    </section>
  )
}

export default AnunciosDisplay




    