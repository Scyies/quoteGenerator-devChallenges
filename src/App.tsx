import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Quotes } from './pages/Quotes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Footer />}>
          <Route index element={<Home />} />
          <Route path='/:id' element={<Quotes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
