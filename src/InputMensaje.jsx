export const InputMensaje = ({mensaje, handdleMensaje}) => {
    const validar = (target) => {
        const regex = new RegExp('^[a-z\u00f1\u00d10-9 ]*$', 'i');
        if (regex.test(target.value)) {
            handdleMensaje(target.value);
        }
    }
    return (
        <div className="inputs">
            <label htmlFor="mensaje">Mensaje </label>
            <input
                id='mensaje' 
                type="text" 
                value={mensaje} 
                placeholder="(Opcional)"
                onChange={ ({target}) => validar(target) }/>
        </div>
    )
}
