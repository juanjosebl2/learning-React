import { BrowserRouter as Router, Routes, Route, Outlet, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">Go to About</Link>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

/*const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}*/

const MainLayout = () => {
  return (
    <div>
      <h1>Main Layout</h1>
      <Outlet />
    </div>
  );
}

const Control = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default Control;
