import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import Dropdown from './components/Dropdown';

function App() {
  const { options } = [
    { value: 'Phone', label: 'Phone' },
    { value: 'Laptop', label: 'Laptop' },
    { value: 'Tablets', label: 'Tablets' },
    { value: 'Printers', label: 'Printers' },
    { value: 'Scanners', label: 'Scanners' },
  ];
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <div
          style={{
            backgroundImage: "url('/images/back3.png')",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <header>
            <Navbar bg="dark" variant="dark">
              <Container>
                <LinkContainer to="/">
                  <Navbar.Brand>
                    {' '}
                    <h1>EKART</h1>
                  </Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                  <Link to="/cart" className="nav-link">
                    <h3>Cart</h3>
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.length}
                      </Badge>
                    )}
                  </Link>
                  <Dropdown placeHolder="Categories" options={options} />
                </Nav>
              </Container>
            </Navbar>
          </header>
          <main>
            <Container className="mt-3">
              <Routes>
                <Route path="/product/:slug" element={<ProductScreen />} />
                <Route path="/" element={<HomeScreen />} />
              </Routes>
            </Container>
          </main>
          <footer>
            <div className="text-center">All rights reserved</div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
