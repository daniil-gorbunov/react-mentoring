import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SearchPage from '../SearchPage';

export default () => (
  <Router>
    <Grid>
      <Row>
        <Col xs={12}>
          <Route path="/" component={SearchPage} />
        </Col>
      </Row>
    </Grid>
  </Router>
);
