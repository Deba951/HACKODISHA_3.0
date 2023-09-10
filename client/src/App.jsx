import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Page1 from './components/Page1'


const App = () => (
  <Routes>
      <Route exact path="/" element={<Page1 />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
);

export default App;
