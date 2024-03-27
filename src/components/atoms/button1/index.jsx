import styles from "./index.module.css"

const Button1 = ({text,style}) =>{
    return(
        <>
        <button className={styles.btn1}
        style={{
            ...style,
        }}>
            {text}
        </button>
        </>
    ) 
}

export default Button1;