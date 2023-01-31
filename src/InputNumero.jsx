export const InputNumero = ({numero, handdleNumero}) => {

    const validar = (target) => {
        const regex = new RegExp("^[0-9]*$");
        if (regex.test(target.value)) {
            handdleNumero(target.value);
        }
    }
    return (
        <div>
            <label htmlFor="numero">Número <span>*</span></label>
            <input
                id='numero' 
                type="tel" 
                value={numero}
                pattern="[0-9]+"
                required
                onChange={ ({target}) => validar(target) }/>
            
            {/* <input type="tel" pattern="[0-9]+" /> */}
        </div>
    )
}
