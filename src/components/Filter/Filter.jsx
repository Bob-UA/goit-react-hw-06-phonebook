import { useDispatch } from 'react-redux';
import css from './Filter.module.css'
import { changeFilter } from 'Redux/phonebookSlice';
import { GetFilter } from 'Redux/selectors';



const Filter = () => {
    const filter = GetFilter();
    const dispatch = useDispatch();

    const onChangeFilter = e => {
      dispatch(changeFilter(e.currentTarget.value));
    };
    return (
      <div className={css.filterContainer}>
        <label htmlFor="">
          {' '}
          Find contacts by name
          <input type="text" value={filter} onChange={onChangeFilter} />
        </label>
      </div>
    );
}


export default Filter;
