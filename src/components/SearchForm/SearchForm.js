import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearchString, searchValue } from '../../redux/searchStringRedux';

const SearchForm = () => {

    const dispatch = useDispatch();
        
    const searchInputValue = useSelector(searchValue);
    const [title, setTitle] = useState(searchInputValue);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(title));
        setTitle('');
    };

    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={title} onChange={e => setTitle(e.target.value)} />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
  };

  export default SearchForm;