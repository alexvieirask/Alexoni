import { ReactComponent as Logo} from 'assets/logo.svg';
import styles from './menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu(){
	const routes = [{
		label: 'Home',
		to: '/'
	}, {
		label: 'carte',
		to: '/carte'
	}, {
		label: 'About',
		to: '/about'
	}];
	return(
		<nav className={styles.menu}>
			<Logo />
			<ul className={styles.menu__list}>
				{routes.map( (route, index) => (
					<li key={index} className={styles.menu__link}>
						<Link to={route.to}>{route.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}