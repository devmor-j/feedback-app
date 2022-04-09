import { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect({ select }) {

  const [selected, setSelected] = useState(0);

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  const handleChange = (event) => {
    setSelected(Number(event.target.value));
    select(Number(event.target.value));
  }

  return (
    <>
      <div className="rating-list">
        <label><input type="radio" name="rating" value="1" onChange={ handleChange } checked={ selected === 1 } />1</label>
        <label><input type="radio" name="rating" value="2" onChange={ handleChange } checked={ selected === 2 } />2</label>
        <label><input type="radio" name="rating" value="3" onChange={ handleChange } checked={ selected === 3 } />3</label>
        <label><input type="radio" name="rating" value="4" onChange={ handleChange } checked={ selected === 4 } />4</label>
        <label><input type="radio" name="rating" value="5" onChange={ handleChange } checked={ selected === 5 } />5</label>
      </div>
    </>
  )
}

export default RatingSelect;
