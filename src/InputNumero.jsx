export const InputNumero = ({numero, handdleNumero}) => {

    const validar = (target) => {
        const regex = new RegExp("^[0-9]*$");
        if (regex.test(target.value)) {
            handdleNumero(target.value);
        }
    }
    return (
        <div className="inputs">
            <label htmlFor="numero">Número <span className="notification">*</span></label>
            <input
                id='numero' 
                type="tel" 
                className=""
                value={numero}
                pattern="[0-9]+"
                required
                placeholder="987654..."
                onChange={ ({target}) => validar(target) }/>
        </div>
    )
}
