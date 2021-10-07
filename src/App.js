import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Work from './components/Pages/Work';

function App() {
  return (
    <Router>
      <Navbar />

    </Router>
  )
}

// import Home from './components/Pages/Home';
// import About from './components/Pages/About';
// import Work from './components/Pages/Work';
// import Contact from './components/Pages/Contact';
// import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
// import { Nav } from 'react-bootstrap';

// function App() {
//   return (
//     <div>
//       <Nav>
//         <Router>
//           <ul>
//             <li>
//               <Link to='/'>Home</Link>
//             </li>
//             <li>
//               <Link to='/work'>Work</Link>
//             </li>
//             <li>
//               <Link to='/about'>About</Link>
//             </li>
//             <li>
//               <Link to='/contact'>Contact</Link>
//             </li>
//           </ul>
//           <Switch>
//             <Route exact path='/'>
//               <Home />
//             </Route>
//             <Route path='/work'>
//               <Work />
//             </Route>
//             <Route path='/about'>
//               <About />
//             </Route>
//             <Route path='/contact'>
//               <Contact />
//             </Route>
//           </Switch>
//         </Router>
//       </Nav>
//     </div>
//   );
// }

export default App;
