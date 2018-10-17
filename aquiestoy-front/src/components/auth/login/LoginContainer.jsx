import React, {Component} from 'react'
import toastr from 'toastr'
import axios from 'axios'
import LoginDisplay from './LoginDisplay'

const url = 'http://localhost:3000/login'

class LoginContainer extends Component{

    state = {
        auth:{},
        loading:false
    }

    componentWillMount(){
         
        const user = JSON.parse(localStorage.getItem('user'))
        if(user) return this.props.history.push('/')
        this.setState({user})
       
    }
    login = (e) => {
        this.setState({loading:true})
        e.preventDefault()
        const {auth} = this.state
        axios.post(url, auth)
        .then(res=>{
            //console.log(res)
            toastr.success("Bienvenido")
            localStorage.setItem('user', JSON.stringify(res.data.user))
            localStorage.setItem('token', res.data.token)
            this.setState({loading:false})
            this.props.history.push('/profile')

        })
        .catch(e=>{
            toastr.error("Algo salio mal")
            this.setState({loading:false})
            
        })
    }

    onChange = (e) => {
        const field = e.target.name
        const value = e.target.value
        const {auth} = this.state
        auth[field] = value
        this.setState({auth})
    }

    render(){
        return(
            <div>
              <LoginDisplay 
              onChange={this.onChange}
              onSubmit={this.login}
              loading={this.loading}
              />
            </div>
        )
    }
}

export default LoginContainer