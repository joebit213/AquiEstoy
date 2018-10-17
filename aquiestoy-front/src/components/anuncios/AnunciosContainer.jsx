import React, {Component} from 'react'
import AnunciosDisplay from './AnunciosDisplay';
import {createPub,getPub,createCom,getCom} from '../../services/anunciosService'
import toastr from 'toastr'
import Anuncios from './Anuncios';
import axios from 'axios';
import Comentarios from './Comentarios';
//import { Link} from 'react-router-dom'

//import Card from './Anuncios';




class AnunciosContainer extends Component{

    state = {
        pubData:{},
        pubs:[],
        loading:false,
        user:{},
        comData:{},
        comts:[]
     }

     componentWillMount(){
         
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user) return this.props.history.push('/login')
        this.setState({user})
        //this.getPubs()
        
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

        onChange = (e) => {
            const field = e.target.name
            const value = e.target.value
            const {pubData, comData} = this.state
            pubData[field] = value
            comData[field] = value
            console.log(pubData)
            this.setState({pubData, comData})
        } 
     
        onChangeFile = (e) => {
            const field = "image"
            const {pubData} = this.state
            pubData[field] = e.file.originFileObj
            this.setState({pubData})
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



        newPub = (e) =>{
            this.setState({loading:true})
            e.preventDefault()
            const {pubData} = this.state
            createPub(pubData)
            .then(r=>{
                console.log(r.data)
                toastr.success("Publicado!")
                this.props.history.push('/anuncios') 
                
            })
            .catch(e=>{
                this.setState({loading:false})
                return toastr.error("Algo salio mal.")
            })
        }

        componentDidUpdate() {
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

        //---------------comentarios---------//
        newComt = (e, anuncio) =>{
            //console.log('lol')
            this.setState({loading:true})
            e.preventDefault()
            const {comData, comts} = this.state
            comData['anuncio'] = anuncio
            createCom(comData)
            .then(r=>{
                this.setState({comts})
                //console.log(r.data)
                toastr.success("ok!")
                this.props.history.push('/anuncios') 
                
            })
            .catch(e=>{
                this.setState({loading:false})
                return toastr.error("Algo salio mal.")
            })
        }

        getComt = ()=>{
            getCom()
            .then(comts=>{
                this.setState({comts})
                console.log(comts)
            })
            .catch(e=>{
                //return toastr.error('Algo salio mal')}
                console.log(e)
                })
        }
  


    render(){

        return(
            <div>
              <AnunciosDisplay 
              onChange={this.onChange}
              onSubmit={this.newPub}
              loading={this.loading}
              onChangeFile={this.onChangeFile}           
              />

              {/* <CardPerfil /> */}

              <Anuncios 
               adds={this.state.pubs}
               dodds={this.state.comts}
               onChange={this.onChange}
               onSubmit={this.newComt}
               loading={this.loading}
              />

              <Comentarios
               adds={this.state.pubs}
              />

              
                            
            </div>
        )
    }
}




export default AnunciosContainer

// <Card pubs={pubs}/>