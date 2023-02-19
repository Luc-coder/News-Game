import { Link } from 'react-router-dom'

import styles from '../css/Header.module.css'

function Header() {
	return(
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.div_logo}>
					<div className={styles.logo}></div>
				</div>
				<nav className={styles.nav_center}>
					<ul>
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/suporte'>Suporte</Link></li>
						<li><Link to='/contato'>Contato</Link></li>
						<li><Link to='/sobre'>Sobre</Link></li>
					</ul>
				</nav>
				<nav className={styles.nav_sing}>
					<ul>
						<li><Link to='/login'>Login</Link></li>
						<li><Link to='/cadastro'>Cadastro</Link></li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default Header