import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TerminosCondiciones } from '../pages/TerminosCondiciones';
import { Home } from '../pages/Home';

export const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/terminos-condiciones' element={<TerminosCondiciones />} />
      </Routes>
    </Router>
  );
};
