import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
    return (
      <nav className={styles.navbar}>
        <Container>
        <div className={styles.row}>
          <div className={styles.col}>
            <a className={styles.icon} href="/"><i className="fa fa-tasks" /></a>
          </div>
          <div className={styles.col}>
            <ul className={styles.row}>
              <li><a href="/">Home</a></li>
              <li><a href="/favorite">Favorite</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
        </div>
        </Container>
    </nav>
    )
};

export default NavBar;