import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackStatus() {

  const { feedbackList } = useContext(FeedbackContext);


  let average = feedbackList.reduce((acc, cur) => {
    return (acc + cur.rating);
  }, 0) / feedbackList.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-status">
      <h4>{ feedbackList.length } Reviews</h4>
      <h4>Average: { isNaN(average) ? 0 : average }</h4>
    </div>
  );
}
