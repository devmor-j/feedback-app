import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import Card from './shared/Card';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackList() {
  const { feedbackList } = useContext(FeedbackContext);

  if (feedbackList?.length ? false : true) {
    return (
      <Card><p>No feedback yet!</p></Card>
    );
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        { feedbackList.map((item) => (
          <motion.div
            key={ item.id }
            initial={ { opacity: 0, transform: "100x" } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
          >
            <FeedbackItem key={ item.id } item={ item } />
          </motion.div>
        )) }
      </AnimatePresence>
    </div>
  );

  // without animation
  // return (
  //   <div className='feedback-list'>
  //     { list.map((item) => (
  //       <FeedbackItem key={ item.id } item={ item } deleteFeedback={ handleDelete } />
  //     )) }

  //   </div>
  // );
}
