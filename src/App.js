import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { UserProducts } from './Components/Products/UserProducts';
import { Users } from './Components/Users/Users';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Users />}></Route>
        <Route path="/:userId/products" exact element={<UserProducts />} />
        <Route path="/users" exact element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
