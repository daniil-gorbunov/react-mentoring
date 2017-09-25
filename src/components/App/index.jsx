import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SearchPage from '../SearchPage';

const App = () => (
  <Router>
    <Grid>
      <Row>
        <Col xs={12}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search/qwe">Search</Link></li>
            <li><Link to="/film/some film">Film</Link></li>
          </ul>
          <Route path="/" component={SearchPage} />
        </Col>
      </Row>
    </Grid>
  </Router>
);

export default App;
