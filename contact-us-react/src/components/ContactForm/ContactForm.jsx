import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import contactImage from '/images/contact.svg'
import { MdMessage } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import { useState } from 'react'

const ContactForm = () => {

    const [user, setUser] = useState({});

    const onSubmit = (e) => {
        e.preventDefault();

        const user = {
            name: e.target[0].value,
            email: e.target[1].value,
            text: e.target[2].value,
        }

        setUser(user)
    }

    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />}/>
                    <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
                </div>
                <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />}/>

                <form onSubmit={(e) => onSubmit(e)}>
                    <div className={styles.form_option}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className={styles.form_option}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={styles.form_option}>
                        <label htmlFor="text">Text</label>
                        <textarea rows="8" name="text" />
                    </div>
                    <div style={{display: "flex", justifyContent: "end",}}>
                        <Button text="SUBMIT"/>
                    </div>
                    <div>
                        {`${user.name ? user.name : ""} ${user.email ? user.email : ""} ${user.text ? user.text : ""}`}
                    </div>
                </form>
            </div>
            <div className={styles.contact_image}>
                <img src={contactImage} alt="Contact image" />
            </div>
        </section>
    )
}

export default ContactForm