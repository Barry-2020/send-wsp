export const InputMensaje = ({mensaje, handdleMensaje}) => {
    const validar = (target) => {
        const regex = new RegExp('^[a-z\u00f1\u00d10-9 ]*$', 'i');
        if (regex.test(target.value)) {
            handdleMensaje(target.value);
        }
    }
    return (
        <div>
            <label htmlFor="mensaje">Mensaje (opcional)</label>
            <input
                id='mensaje' 
                type="text" 
                value={mensaje} 
                onChange={ ({target}) => validar(target) }/>
        </div>
    )
}
