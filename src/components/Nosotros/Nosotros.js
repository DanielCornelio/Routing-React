import React, { Component } from 'react';
import './Nosotros.css'
class Nosotros extends Component {
    state = {  }
    render() { 
        return (  
            <div className="contenedor-nosotros">
                <div className="imagen">
                    <img src="/img/playera1.jpg" alt="imagen nosotros"/>
                </div>
                <div className="contenido">
                    <h2>Sobre Nosotros</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget gravida diam. Maecenas non pretium risus. Etiam ut volutpat felis, eu tempor lacus. Morbi vel felis vitae turpis aliquet gravida a vel libero. Pellentesque eget nibh porta, tristique nulla eu, accumsan mauris. Maecenas imperdiet neque id dui bibendum vehicula. Mauris faucibus non est vehicula mollis. Nullam id leo vitae odio pellentesque fringilla. Etiam bibendum sem vitae condimentum dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nulla quam, faucibus sit amet accumsan a, sollicitudin a tortor.</p>
                </div>
            </div>
        );
    }
}
 
export default Nosotros;