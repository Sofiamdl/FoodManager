import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import './Footer.css';
import BoxProduct from '../BoxProduct/BoxProduct';


function Footer(){
    const[redirect, setRedirect] = useState('');

    function handleAddProduct(){
        setRedirect('/add-product')
    }
    
    if (redirect) {
        return(
            <Redirect to = {redirect}/>
        );
    }
    
    return(
        <div className = 'box-footer-wrapper'>
            <div className = 'top'>
                <h2>Produtos Cadastrados:</h2>
                <button id = 'register-button' onClick = {handleAddProduct}>Cadastrar Produto</button>
            </div>
            <div className = "box-footer-content">
            <BoxProduct image = "https://exitoina.uol.com.br/media/_versions/babyyoda309850_widelg.jpg" nomeProduto = "biscoitaaadsadas"/>
            <BoxProduct image = "https://exitoina.uol.com.br/media/_versions/babyyoda309850_widelg.jpg" nomeProduto = "biscoitaaadsadas"/>
            <BoxProduct image = "https://exitoina.uol.com.br/media/_versions/babyyoda309850_widelg.jpg" nomeProduto = "biscoitaaadsadas"/>
            <BoxProduct image = "https://exitoina.uol.com.br/media/_versions/babyyoda309850_widelg.jpg" nomeProduto = "biscoitaaadsadas"/>
            <BoxProduct image = "https://exitoina.uol.com.br/media/_versions/babyyoda309850_widelg.jpg" nomeProduto = "biscoitaaadsadas"/>

            </div>
        </div>
    );
}

export default Footer;