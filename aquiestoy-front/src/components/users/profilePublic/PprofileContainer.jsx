import React, {Component} from 'react'
import axios from 'axios'
import toastr from 'toastr'
import { getUserData } from '../../../services/userService'
import PprofileDisplay from './PprofileDisplay';



class PprofileContainer extends Component{

    state = {
        user:{}
    }


    componentWillMount(){
       const {id} = this.props.match.params
       this.getUserData(id)
       const user = JSON.parse(localStorage.getItem('user'))
        if(!user) return this.props.history.push('/')
        this.setState({user})
    }

    getUserData = (id) => {
        getUserData(id) //esto es un servicio
        .then(user=>{
            this.setState({user})
        })
        .catch(e=>toastr.error("no se pudo, intenta mas tarde"))
    }

    getPrivateInfo = () => {
        axios.get('http://localhost:3000/private', {
            headers:{
                "Authorization" : localStorage.getItem('token') 
            }
        })
        .then(res=>{
            console.log(res)
        })
        .catch(e=>toastr.error("algo falló", e.message))
    }


  render(){
    return(
        <div>
          <PprofileDisplay 
          getUserData={this.getUserData}
          getPrivateInfo={this.getPrivateInfo}
          />
        </div>
    )
}



}

export default PprofileContainer