import React from 'react'
import { Form, Icon,Button, Input } from 'antd';
import {Link} from 'react-router-dom'

const { TextArea } = Input;



const FormItem = Form.Item;

const SignupDisplay = ({onChange, loading, preb, onSubmit})=>{


  return(
    <div className="grid">
        <Form onSubmit={onSubmit} className="form login">
                <header className="login__header">
            <h3 className="login__title">Registrate!</h3>
          </header>

          <div className="login__body">

            <div className="form__field">
                <input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} name="username" type="text" onChange={onChange} required placeholder="Nombre de usuario"/>
                </div>  

                    <div className="form__field">
                <input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} name="email" type="email" onChange={onChange} required placeholder="Tu correo"/>
                </div>  

                <div className="form__field">
                <input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Pon tu password" name="password" onChange={onChange} required />  
                </div> 

                <div className="form__field">
                <input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Repite tu password" name="password2" onChange={onChange} required />  
                </div>

                <hr/>

                <div className="form__field">
                <label htmlFor="">Cuéntanos un poco sobre ti</label>
                <TextArea placeholder="Comparte tu historia" autosize={{ minRows: 2, maxRows: 6 }} name='bio' onChange={onChange} required  />
                </div>
                </div>

                <footer className="login__footer"> 
                <FormItem>
                Ya tienes cuenta? <Link to="/login">Inicia sesion!</Link>
                </FormItem>
  
                <Button className="login-form-button" loading={loading} type="primary" htmlType="submit" >Registrar</Button>
                </footer>
            </Form>
    </div>
  )
}

export default SignupDisplay



//  <Input 
//                         name="username"
//                         type="text"
//                         onChange={onChange}
//                         placeholder="Tu nombre de usuario" 
//                     />