import styles from './PageTitle.module.scss';

const PageTitle = props => (
  <h2 className={styles.pagetitle}>{props.children}</h2>
);

export default PageTitle;