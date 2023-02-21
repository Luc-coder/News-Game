import styles from '../css/Index.module.css'

import Banner from '../components/Banner'
import News from '../components/News'
import Propaganda from '../components/Propaganda'
import Artigos from '../components/Artigos'

function Index() {

	return(
		<div className={styles.main}>
			<Banner />
			<div className={styles.main_box}>
				<div className={styles.propaganda}>
					<Propaganda />
				</div>
				<div className={styles.noticias}>
					<News />
				</div>
				<div className={styles.artigos}>
					<Artigos />
				</div>
			</div>
			
			
		</div>
	)
}

export default Index