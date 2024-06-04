import styles from './RedButton.module.css'

const RedButton = ({text}) => {
    return(
        <button className={styles.loginButton}>
            {text}
        </button>
    );
}

export default RedButton;