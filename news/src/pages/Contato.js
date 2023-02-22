import styles from '../css/Contato.module.css'

function Contato() {
	return(
		<div className={styles.main}>
			<div className={styles.container}>
				<h2 className={styles.title}>Fale Conosco</h2>
				<form>
				
					<label>Apelido:</label>
					<input type="text" id="apelido" name="apelido"/>
					<br />
					<label>Email:</label>
					<input type="email" id="email" name="email"/>
					
					<br />

					<label>Escolha um tema:</label>
					<br />
					<input type="radio" id="ajuda" name="tema" value="Ajuda"/>
					<label>Ajuda</label>
					<br />
					<input type="radio" id="critica" name="tema" value="Critica"/>
					<label>Crítica</label>
					<br />
					<input type="radio" id="outro" name="tema" value="Outro"/>
					<label>Outro</label>
					
					<br />

					<label>Seu texto</label>
					<br />
					<textarea id="text" name="text" rows="10" cols="80"></textarea>
					
					<br />
					<button type="submit">Enviar!</button>
				</form>
			</div>
		</div>
	)
}

export default Contato