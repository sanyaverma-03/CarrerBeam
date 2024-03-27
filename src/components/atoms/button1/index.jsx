import styles from "./index.module.css"

const Button1 = ({text}) =>{
    return(
        <>
        <button className={styles.btn1}>
            {text}
        </button>
        </>
    ) 
}

export default Button1;