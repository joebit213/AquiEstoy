import axios from 'axios'

const url = "http://localhost:3000/"

export const createPub = (pubData) => {
    const form = new FormData()
   for(let key in pubData){
       form.append(key, pubData[key])
   }
   return axios.post(url + "anuncios",  form,{
       headers:{
           'Authorization':localStorage.getItem('token')
       }
   })
       .then(event=>{
           return event
       })
       .catch(error=>{
           return error
       })
}

export const getPub = () =>{
    return axios.get(url + "anuncios",{
        headers:{
            'Authorization':localStorage.getItem('token')
        }
    })
    .then(event=>{
        return event
    })
    .catch(error=>{
        return error
    })
}

////comentarios

export const createCom = (comData) => {
    return axios.post(url + "comentarios",  comData,{
        headers:{
            'Authorization':localStorage.getItem('token')
        }
    })
        .then(event=>{
            return event
        })
        .catch(error=>{
            return error
        })
 }

export const getCom = () =>{
    return axios.get(url + "comentarios",{
        headers:{
            'Authorization':localStorage.getItem('token')
        }
    })
    .then(event=>{
        return event
    })
    .catch(error=>{
        return error
    })
}