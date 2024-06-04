import styles from './GrayButton.module.css'

const GrayButton = ({text}) => {

    return(

        <button className={styles.defaultButton}>
            {text}
        </button>

    );

}

export default GrayButton;