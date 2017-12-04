import React from 'react';
import { Route } from 'react-router-dom';
// import { Grid, Row, Col } from 'react-flexbox-grid';
import SearchPage from '../SearchPage';

export default () => (
  <Route path="/" component={SearchPage} />
);

/*
<Grid>
  <Row>
    <Col xs={12}>
      <Route path="/" component={SearchPage} />
    </Col>
  </Row>
</Grid>
*/
