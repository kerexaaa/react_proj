import styles from './Hero.module.css'
import shoeImage from '/images/shoe_image.png'
import amazon from '/images/amazon.png'
import flipcart from '/images/flipcart.png'
import RedButton from '../Buttons/RedButton/RedButton';
import GrayButton from '../Buttons/GrayButton/GrayButton';

const Hero = () => {

    return(

        <main className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    YOUR FEET DESERVE THE BEST
                </h1>
                <p className={styles.heroInfo}>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className={styles.buttonsContainer}>
                    <RedButton text="Shop now!" />
                    <GrayButton text="Category" />
                </div>
                <div className={styles.moreDetails}>
                    <p>also available on</p>
                    <div className={styles.icons}>
                        <img src={flipcart} alt="Flipcart" />
                        <img src={amazon} alt="Amazon" />
                    </div>
                </div>
            </div>
            <div className={styles.heroImage}>
                <img src={shoeImage} alt="Shoe" />
            </div>  
        </main>

    );

}

export default Hero;