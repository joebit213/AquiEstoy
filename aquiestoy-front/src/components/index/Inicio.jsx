import React, {Component} from 'react'
import { Carousel} from 'antd';
import {Link} from 'react-router-dom'



class Inicio extends Component{    

    render(){
        return(
            <div>
                <div className='imgindex'>
                <img src="https://res.cloudinary.com/dn3s8lyeh/image/upload/v1539764875/imageedit_2_2701390627.png" alt="logo" height='200px'/>
                </div>
                <div className='botlog'>
                    <Link to='/login'><button className='dislog' style={{fontSize:'2rem'}} >Inicia sesión</button></Link>
                    </div>
                    <div className='botsing'>
                    <Link to='/signup'><button className='dissing'style={{fontSize:'2rem'}}>Regístrate</button></Link>
                    </div>
                <section className='carrusel'>
                <div className='carru'>
                <Carousel autoplay>
             <div><img src="https://res.cloudinary.com/dn3s8lyeh/image/upload/v1539554754/ezgif.com-resize.jpg" alt="" height='600px' width='100%'/></div>
             <div><img src='https://res.cloudinary.com/dn3s8lyeh/image/upload/v1539554730/maxresdefault.jpg' alt="" height='600px' width='100%'/></div>
             <div><img src="https://res.cloudinary.com/dn3s8lyeh/image/upload/v1539554730/pierna1-1200x800.jpg" alt="" height='600px' width='100%'/></div>
             <div><img src="https://res.cloudinary.com/dn3s8lyeh/image/upload/v1539554731/shutterstock_320489777.jpg" alt="" height='600px' width='100%'/></div>            </Carousel>
                </div>
                </section>
            <section className='infoindex'>
            <h1>AquiEstoy</h1>
            <h4>Es una página en donde las personas con capacidades diferentes
                <br/> 
                pueden encontrar gente con la que relacionarse en un ámbito laboral
                <br/>
                mostrando sus experiencias y logros.</h4>
            </section>
            
            


            </div>
        )
    }
}

export default Inicio