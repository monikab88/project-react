import styles from './NavBar.module.scss';
import Container from '../Container/Container';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
      <nav className={styles.navbar}>
        <Container>
        <div className={styles.row}>
          <div className={styles.col}>
            <a className={styles.icon} href="/"><i className="fa fa-tasks" /></a>
          </div>
          <div className={styles.col}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favorite">Favorite</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          </div>
        </div>
        </Container>
    </nav>
    )
};

export default NavBar;