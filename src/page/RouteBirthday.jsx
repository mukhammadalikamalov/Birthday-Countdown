import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Generate from './Generate';
import Birthday from './Birthday'; // This is the component you want to render

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Generate />} />
        <Route path="/birthday/:name/:day/:month" element={<Birthday />} />
      </Routes>
    </Router>
  );
};

export default App;
