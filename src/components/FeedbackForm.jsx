import { useContext, useState, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';

import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm() {

  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setDisabled(false);
      setAlert('Edit your comment above.');
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const [text, setText] = useState('');
  const [alert, setAlert] = useState('');
  const [rating, setRating] = useState(0);
  const [disabled, setDisabled] = useState(true);

  const handleTextChange = (e) => {
    setText(e.target.value);

    if (e.target.value.trim().length < 10) {
      setAlert('Review should be at least 10 characters.');
    } else {
      setDisabled(false);
      setAlert('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formDataObj = Object.fromEntries(new FormData(event.target));

    if ((formDataObj?.rating ?? 0) === 0) {
      console.log('wow');
      setAlert('Please choose a rating (1-5).');
      return;
    }

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      };


      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
        return;
      };

      addFeedback(newFeedback);
      setText('');
    }
  }


  return (
    <Card direction={ 'column' }>
      <form onSubmit={ handleSubmit }>
        <h2>How whould you rate our service?</h2>
        <RatingSelect select={ rating => setRating(rating) } />
        <div className="form-group">
          <input onChange={ handleTextChange } name="text" type="text" placeholder="write a review" value={ text } />
          <Button type="submit" isDisabled={ disabled }>Send</Button>
        </div>
      </form>
      <p>{ alert }</p>
    </Card>
  );
}

export default FeedbackForm;
