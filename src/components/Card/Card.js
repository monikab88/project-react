import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card  = props => {

  const dispatch = useDispatch();

  const toggleFavorite = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.id))
  };

  const handleClick = e => {
    e.preventDefault();
    dispatch(removeCard(props.id))
  };
  
    return (
      <li className={styles.card}>
        <div>
        {props.title}
        </div>
        <div>
          <button onClick={toggleFavorite} className={clsx(styles.button, props.isFavorite && styles.active)}>
            <i className="fa fa-star-o"></i>
          </button>
          <button onClick={handleClick} className={clsx(styles.button, props.isFavorite && styles.active)}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </li>
    );
};

export default Card;