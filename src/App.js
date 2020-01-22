import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Nav, NavItem, NavLink as Link } from 'reactstrap';


//importing pages
import Home from './pages/Home';
import Cats from './pages/Cats';
import CatNew from './pages/CatNew';
import cats from './cats';
import CatShow from './pages/CatShow';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            cats: cats
        }
    }
    render() {
    return (
         <Router>
            <div>
            <Nav className="navbar navbar-expand-md navbar-dark bg-primary">

              <div className="navbar-collapse collapse show" id="navbarColor01" >
                <div className="navbar-nav mr-auto">
                  <NavItem className="nav-item active">
                    <Link className="nav-link" href="/"><img src="/white-cat.webp" height="25px"/> Cat Tinder <div className="sr-only">(current)</div>
                    </Link>
                  </NavItem>
                  <NavItem className="nav-item">
                    <Link className="nav-link" href="/catnew">Make a Profile</Link>
                  </NavItem>
                  <NavItem className="nav-item">
                    <Link className="nav-link" href="/cats">Check out the Hot Kitties</Link>
                  </NavItem>
                  <NavItem className="nav-item">
                    <Link className="nav-link" href="#">About</Link>
                  </NavItem>
                </div>
              </div>
            </Nav>


              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/catnew" exact component={CatNew} />
                <Route path="/cats" exact component={Cats} />
                <Route path="/cats/:id" exact component={CatShow} />
              </Switch>
            </div>
        </Router>
  )};
}

export default App;
