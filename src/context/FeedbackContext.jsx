import { v4 } from 'uuid';

import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbackList, setFeedbackList] = useState([
    {
      id: 1,
      text: 'This feedback number 1',
      rating: 5,
    },
    {
      id: 2,
      text: 'This feedback number 2',
      rating: 3,
    },
    {
      id: 3,
      text: 'This feedback number 3',
      rating: 4,
    },
  ]);

  const removeFeedback = (id) => {
    setFeedbackList(feedbackList.filter((fb) => (fb.id !== id)));
  };

  const addFeedback = (newFeedback) => {
    Object.defineProperty(newFeedback, 'id', {
      value: v4(),
      writable: false,
    });
    setFeedbackList([newFeedback, ...feedbackList])
  }

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, updatedItem) => {
    setFeedbackList(
      feedbackList.map(
        (item) => (item.id === id ? { ...item, ...updatedItem } : item)
      )
    )
  }

  return (
    <FeedbackContext.Provider value={ {
      feedbackList,
      removeFeedback,
      addFeedback,
      editFeedback,
      feedbackEdit,
      updateFeedback,
    } } >
      { children }
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext;
