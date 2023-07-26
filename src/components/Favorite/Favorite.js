import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import { getCardFavorite } from '../../redux/cardsRedux';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import Card from '../Card/Card';

const Favorite = () => {
    
  const favoriteCards = useSelector(getCardFavorite);

  if (favoriteCards.length === 0) return <Navigate to="/" />
  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map(card => (
            <Card key={card.id} {...card} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Favorite;