import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStatus from './components/FeedbackStatus';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

import { FeedbackProvider } from './context/FeedbackContext';

function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <main className="container">
          <Routes>
            <Route exact path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStatus />
                <FeedbackList />
              </>
            } >
            </Route>

            <Route path='/about' element={ <AboutPage /> } />
          </Routes >

          <AboutIconLink />
        </main>
      </Router >
    </FeedbackProvider>
  );
}

export default App;
