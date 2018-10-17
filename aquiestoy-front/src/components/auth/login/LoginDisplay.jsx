import React from 'react'
import { Button, Form, Icon, Checkbox  } from 'antd'
import {Link} from 'react-router-dom'


const FormItem = Form.Item;



const LoginDisplay = ({onChange, loading, onSubmit})=>{


  return(
  
    <div className="grid">
        <Form onSubmit={onSubmit} className="form login">
          <header className="login__header">
            <h3 className="login__title">Inicia sesion!</h3>
          </header>
          <div className="login__body">
            <div className="form__field">
              <input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Tu correo" name="email" type="email" onChange={onChange} required/>
            </div>
            <div className="form__field">
              <input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Tu contraseña" name="password" onChange={onChange} required />
            </div>
          </div>
          <footer className="login__footer">
          <FormItem>
                <Checkbox>Recuerdame</Checkbox>
                    <br/>
                    Sin cuenta? <Link to="/signup">Registrate!</Link>
                </FormItem>
                <Button className="login-form-button" loading={loading} type="primary" htmlType="submit" >Inicia sesión</Button>
          </footer>
        </Form>
      </div>

  )
}

export default LoginDisplay
  
