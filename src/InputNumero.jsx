export const InputNumero = ({numero, handdleNumero}) => {

    const validar = (target) => {
        const regex = new RegExp("^[0-9]*$");
        if (regex.test(target.value)) {
            handdleNumero(target.value);
        }
    }
    return (
        <div className="inputs">
            <label htmlFor="numero">Número <span>*</span></label>
            <input
                id='numero' 
                type="tel" 
                className="in-input"
                value={numero}
                pattern="[0-9]+"
                required
                placeholder="987654321"
                onChange={ ({target}) => validar(target) }/>
        </div>
    )
}
