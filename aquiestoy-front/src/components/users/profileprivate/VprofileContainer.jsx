import React, {Component} from 'react'
import axios from 'axios'
import toastr from 'toastr'
import {uploadPic} from '../../../services/userService.js'
import VprofileDisplay from './VprofileDisplay';
import {getPub} from '../../../services/anunciosService'
// import Anuncios from '../../anuncios/Anuncios';



class VprofileContainer extends Component{

    state = {
        pubs:[],
        user:{}
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user) return this.props.history.push('/login')
        this.setState({user})

        const url = "http://localhost:3000/"
            return axios.get(url + "anuncios",{
                headers:{
                    'Authorization':localStorage.getItem('token')
                }
            })
            .then(event=>{
                this.setState({
                    pubs: event.data.anuncios
                })
            })
            .catch(error=>{
                return error
            })
    }

    getPubs = ()=>{
        getPub()
        .then(pubs=>{
            this.setState({pubs})
            //console.log(pubs)
        })
        .catch(e=>{
            //return toastr.error('Algo salio mal')}
            console.log(e)
            })
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

    uploadPhoto = () => {
        this.refs.input.click()
    }

    onChangeFile = (e) => {
        console.log(e.target.files[0])
        uploadPic(e.target.files[0])
        .then(pic=>console.log(pic))
        .catch(e=>toastr.error('Error'))
    }


render(){
  return(
      <div>
        <VprofileDisplay
         onChangeFile={this.onChangeFile}
         uploadPhoto={this.uploadPhoto}
         getPrivateInfo={this.getPrivateInfo}
        />

        {/* <Anuncios adds={this.state.pubs} /> */}
        
      </div>
  )
}
}

export default VprofileContainer