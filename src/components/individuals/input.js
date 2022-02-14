const Input = (props)=>{
// Elemento input para ingresar datos
// sus propiedades son: 
// clase (string): tipo de input
    

return (
    <div className={props.sizes}>
        <label>{props.label}</label>
        <input onChange={props.onChange} placeholder={props.placeholder} type={props.type} name={props.name} value={props.value} className={props.clase}/>
    </div>
)
}
export default Input;