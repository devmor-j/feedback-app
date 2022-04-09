import { FaTimes, FaEdit } from 'react-icons/fa';
import Card from './shared/Card';

import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackItem({ item }) {
  const { removeFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <p className="feedback-text">{ item.text }</p>
      <span className="feedback-rating">{ item.rating }</span>
      <button className='feedback-icon' onClick={ () => editFeedback(item) } ><FaEdit /></button>
      <button className='feedback-icon' onClick={ () => removeFeedback(item.id) } ><FaTimes /></button>
    </Card >
  );
}
