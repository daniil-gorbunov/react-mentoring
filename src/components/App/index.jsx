import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import SearchPage from '../SearchPage';

const App = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <SearchPage />
      </Col>
    </Row>
  </Grid>
);

export default App;
