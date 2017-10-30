import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Header from '../Header';
import SearchResults from '../SearchResults';
import Footer from '../Footer';

const SearchPage = () => (
  <div>
    <Row>
      <Col xs={12}>
        <Header />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <SearchResults />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <Footer />
      </Col>
    </Row>
  </div>
);

export default SearchPage;
