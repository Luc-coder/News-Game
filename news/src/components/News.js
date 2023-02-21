import styles from '../css/News.module.css'

import { useEffect, useState } from 'react'
import axios from 'axios'

function News() {

	// const [post, setPost] = useState([])

	// useEffect(()=>{
	// 	axios.get('')
	// 		.then(function(res){
	// 			console.log(res)
	// 			setPost(res)
	// 		})
	// }, [])

	return(
		<div className={styles.main}>
			<h2>Title</h2>
			<p>description/sub-title</p>
			<div className={styles.api_image}>imagem da noticia</div>
			<p>data de publicação e local 12/12/12 - 12:12</p>
			<p className={styles.content}>Content. Duis a faucibus libero. Morbi laoreet sem eget erat maximus, ut aliquet sapien bibendum. Mauris sagittis nunc a erat fringilla consectetur. Mauris feugiat nibh eget arcu vulputate volutpat. Maecenas non condimentum erat. Vestibulum turpis justo, hendrerit in condimentum eu, lacinia id nunc. Nam eget nisl justo. In convallis mattis justo, non tristique risus blandit ut. Etiam elementum tempus nisl, quis ultrices lacus rhoncus nec.</p>
			<a href='#'>Link para noticia mais detalhada</a>
		</div>
	)
}

export default News