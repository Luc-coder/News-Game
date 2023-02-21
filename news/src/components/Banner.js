import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel'

import styles from '../css/Banner.module.css'

function Banner() {
	return(
		<div className={styles.div_banner}>
			<Carousel>
				<Carousel.Item interval={5000}>
					<img className={styles.img} src="https://img.freepik.com/vetores-gratis/conjunto-de-objetos-relacionados-a-jogos-de-video-em-neon-e-estilo-linear_24908-58670.jpg?w=1380&t=st=1676994314~exp=1676994914~hmac=07b943bce55bc0228221d5c1056e247e05d6034986266a7ea2d4459e7e49b1ca" alt="teste" />
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<img className={styles.img} src="https://img.freepik.com/vetores-gratis/design-de-fundo-moderno-twitch-com-modelo-de-vetor-de-elementos-de-memphis_1361-2533.jpg?w=1800&t=st=1676994432~exp=1676995032~hmac=3db48fe0b9dba2df2ff0ea544d56c397a78f5ba78e9e17b3dd050f8da17d9d2b" alt="cabaco" />
				</Carousel.Item>	
				<Carousel.Item interval={5000}>
					<img className={styles.img} src="https://img.freepik.com/psd-premium/laptop-para-videogame-on-line-com-design-de-renderizacao-de-led-de-neon-colorido-isolado_34478-612.jpg?w=1380" alt="teste" />
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<img className={styles.img} src="https://img.freepik.com/vetores-gratis/arte-do-canal-do-youtube-em-gradient-gaming_52683-60094.jpg?w=1380&t=st=1676994519~exp=1676995119~hmac=42db655298bfdb70f2df0c500ef015f00c4480cfdbb59057f420920df4334c1c" alt="teste" />
				</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default Banner