import { useState } from 'react';
import './App.css';
import { InputMensaje } from './InputMensaje';
import { InputNumero } from './InputNumero';


const App = () => {

    const [numero, setNumero] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [enlace, setEnlace] = useState('');


    const msjDeEnlace = (event) => {
        event.preventDefault();
        if (numero.length >= 9) {
            window.open(`https://api.whatsapp.com/send?phone=51${numero}&text=${mensaje}`, "_blank");
        }
    }

    return(
        <div className="app">
            <header>
            <img src="/wsp-logo.png" alt="wsp-logo" width="50px" height="50px"/>
            <div className="header-body">
                <p> Send - WSP</p>
            </div>
            </header>
            <div className="form-base">
                <div className='tarjeta'>
                    <div className="tarjeta-cuerpo">
                        <InputNumero numero={numero} handdleNumero={setNumero} />
                        <InputMensaje mensaje={mensaje} handdleMensaje={setMensaje} />
                        <div className='enviar-msj'>
                            <button type='button' onClick={msjDeEnlace}>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
            <p>© Desarrollado por Angel Barraza </p>
            <a href="https://www.linkedin.com/in/angel-barraza/" target="_blank" rel="noopener noreferrer"><img src="/linkedin.png" className="pgn" alt="icono Linkedin"/></a>
            <a href="https://github.com/Barry-2020" target="_blank" rel="noopener noreferrer"><img src="/github.png" className="pgn" alt="icono GitHub"/></a>
            <a href="https://www.instagram.com/a.barry.c/" target="_blank" rel="noopener noreferrer"><img src="/instagram.png" className="pgn" alt="icono Instagram"/></a>
            </footer>
        </div>
    )
}

export default App;
