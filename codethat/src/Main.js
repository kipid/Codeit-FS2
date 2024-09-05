import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './pages/HomePage';
import CourseListPage from './pages/CourseListPage';
import CoursePage from './pages/CoursePage';
import WishlistPage from './pages/WishlistPage';
import QuestionListPage from './pages/QuestionListPage';
import QuestionPage from './pages/QuestionPage';
import NotFoundPage from './pages/NotFoundPage';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="courses">
            <Route index element={<CourseListPage />} />
            <Route path=":courseSlug" element={<CoursePage />} />
          </Route>
          <Route path="questions" element={<QuestionListPage />} />
          <Route path="questions/616825" element={<QuestionPage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
