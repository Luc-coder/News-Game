import styles from '../css/Artigos.module.css'

function Artigos() {
	return(
		<div className={styles.main}>
			<div className={styles.box_artigo}>
				<h5>Title</h5>
				<div className={styles.box_image}></div>
				<p>Pequena descrição</p>
			</div>
		</div>
	)
}

export default Artigos