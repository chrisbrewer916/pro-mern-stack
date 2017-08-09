import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect, Switch, withRouter } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';
import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';

const contentNode = document.getElementById('root');

const NoMatch = () => <p>Page Not Found</p>;

const Header = () => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>Issue Tracker</Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <LinkContainer to="/issues">
        <NavItem>Issues</NavItem>
      </LinkContainer>
      <LinkContainer to="/reports">
        <NavItem>Reports</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavItem><Glyphicon glyph="plus" /> Create Issue</NavItem>
      <NavDropdown id="user-dropdown" title={<Glyphicon glyph="option-horizontal" />} noCaret>
        <MenuItem>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

const IssueRoutes = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/:id`} component={IssueEdit} />
    <Route path={`${match.url}`} component={withRouter(IssueList)} />
  </Switch>
);

const App = () => (
  <Router>
    <div>
      <Header />
        <div className="container-fluid">
          <Switch>
            <Route path="/issues" component={IssueRoutes} />
            <Route exact path="/" render={() => (<Redirect to="/issues" />)} />
            <Route path="*" component={NoMatch} />
          </Switch>
        <hr />
        <h5>
          <small>
            Full source code available at this <a href="https://github.com/vasansr/pro-mern-stack">
              GitHub repository
            </a>
          </small>
        </h5>
      </div>
    </div>
  </Router>
);

IssueRoutes.propTypes = {
  match: PropTypes.object.isRequired,
};

ReactDOM.render(<App />, contentNode); // Render the component inside the content Node

if (module.hot) {
  module.hot.accept();
}
