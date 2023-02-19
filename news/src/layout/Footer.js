import styles from '../css/Footer.module.css'

import { FaYoutube } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaTwitch } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

function Footer() {
	return(
		<div className={styles.main}>
			<div className={styles.social_icons}>
				<a href='https://www.youtube.com'><FaYoutube className={styles.youtube}/></a>
				<a href='https://www.facebook.com'><FaFacebook className={styles.facebook}/></a>
				<a href='https://www.instagram.com'><FaInstagram className={styles.instagram}/></a>
				<a href='https://www.twitter.com'><FaTwitter className={styles.twitter}/></a>
				<a href='https://www.twitch.com'><FaTwitch className={styles.twitch}/></a>
				<a href='https://github.com/Luc-coder'><FaGithub className={styles.github}/></a>					
				<a href='https://www.linkedin.com/in/lucas-marques-russi/'><FaLinkedin className={styles.linkedin}/></a>
			</div>
			<p className={styles.copy}>Todos os direitos reservados &copy; - 2023</p>
		</div>
	)
}

export default Footer