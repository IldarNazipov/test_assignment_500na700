import { MainContent } from './components/mainContent/MainContent';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './layout/Layout';
import { NewsPage } from './pages/newsPage/NewsPage';
import { NewsLayout } from './layout/NewsLayout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainContent />} />
            <Route element={<NewsLayout />}>
              <Route path='news/:id' element={<NewsPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
