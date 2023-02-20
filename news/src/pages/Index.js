import axios from 'axios'
import { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'

import styles from '../css/Index.module.css'

function Index() {

	const [post, setPost] = useState([])

	const options = {
		method: 'GET',
		url: 'https://videogames-news2.p.rapidapi.com/videogames_news/search_news',
		params: {query: 'News'},
		headers: {
		  'X-RapidAPI-Key': 'c4f65ddb81msh77c84bdbc48a5f4p102431jsnc8aea1a5c826',
		  'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
		}
	  };

	useEffect(()=>{
		axios.request(options)
		.then(function (res) {
			console.log(res.data)
			setPost(res.data)
		})
	}, [])

	return(
		<div className={styles.main}>
			<div className={styles.div_banner}>
			<Carousel>
				<Carousel.Item interval={5000}>
					<img className={styles.img} src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" alt="teste" />
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<img className={styles.img} src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png" alt="cabaco" />
				</Carousel.Item>	
			</Carousel>
			</div>

			<div className={styles.news}>
				{
					post.map(function(val){
						return(
							<div className={styles.single_new}>
								<h2>{val.title}</h2>
								<img src={val.image}/>
								<p>{val.description}</p>	
								{/* <a href={val.link}>{val.link}</a> */}
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default Index