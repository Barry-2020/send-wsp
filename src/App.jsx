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
            window.open(`https://api.whatsapp.com/send?phone=51${numero}&text=${enlace}`, "_blank");
        }
    }

    return(
        <div className="form-base">
            <header>
                <h1>header</h1>
            </header>
            <div>
                <InputNumero numero={numero} handdleNumero={setNumero} />
                <InputMensaje mensaje={mensaje} handdleMensaje={setMensaje} />
                <div className='enviar-msj'>
                    <button type='button' onClick={msjDeEnlace}>Enviar WSP</button>
                </div>
            </div>
            <footer>
                <h1>footer</h1>
            </footer>
        </div>
    )
}

export default App;
