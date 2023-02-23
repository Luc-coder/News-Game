import styles from '../css/Contato.module.css'

function Contato() {
	return(
		<div className={styles.main}>
			<div className={styles.container}>
				<h2 className={styles.title}>Fale Conosco</h2>
				<form>
					

					<div className={styles.box_input}>
					<input type="text" placeholder="Apelido"/>
					<br />
					<input type="email" placeholder="Email"/>
					</div>
					
					
					<br />


					<div className={styles.middle_box}>
					<div className={styles.left_box}>
					<label>Escolha um tema:</label>
					</div>
				
					<div className={styles.right_box}>
					<input type="radio" id="ajuda" name="tema" value="Ajuda"/>
					<label>Ajuda</label>
					<br />
					<input type="radio" id="critica" name="tema" value="Critica"/>
					<label>Crítica</label>
					<br />
					<input type="radio" id="outro" name="tema" value="Outro"/>
					<label>Outro</label>
					</div>
					</div>

					
					<br />

					<div className={styles.box_text}>
					<label className={styles.label_text}>Seu texto</label>
					<br />
					<textarea id="text" name="text" rows="10"></textarea>
					
					<br />
					<button type="submit">Enviar!</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Contato