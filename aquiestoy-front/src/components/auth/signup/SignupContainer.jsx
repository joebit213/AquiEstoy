import React, {Component} from 'react'
import toastr from 'toastr'
import axios from 'axios'
import SignupDisplay from './SignupDisplay'



class SignupContainer extends Component{

  state = {
    signup:{username:"scuba"},
    loading:false
}

componentWillMount(){
         
    const user = JSON.parse(localStorage.getItem('user'))
    if(user) return this.props.history.push('/')
    this.setState({user})
   
}

onChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    const {signup} = this.state
    signup[field] = value
    this.setState({signup})
}

createUser = (e) => {
    e.preventDefault()
    const {signup} = this.state
    if(signup.password !== signup.password2) {
        return toastr.error('Las contraseñas no coinciden!')
    }
    axios.post('http://localhost:3000/signup', signup)
    .then(user=>{
        console.log(user)
        toastr.success("Perfecto!")
        this.setState({loading:false})
        this.props.history.push('/login')
        
    })
    .catch(e=>toastr.error("Ya hay un usuario con ese nombre"))
}

    render(){
        return(
            <div>
              <SignupDisplay 
              onChange={this.onChange}
              onSubmit={this.createUser}
              />
            </div>
        )
    }
}

export default SignupContainer