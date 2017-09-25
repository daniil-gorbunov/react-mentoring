import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-flexbox-grid';
import commonStyles from '../../assets/styles/common.less';
import styles from './style.less';

const MoviePreview = ({ movie }) => (
  <div className={styles.moviePreview}>
    <Link to={`/film/${movie.show_title}`}>
      <div>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              <Col xs={12}>
                <img className={styles.poster} src={movie.poster} alt={movie.show_title} />
              </Col>
            </Row>
          </Col>
        </Row>
        <div className={styles.textInfo}>
          <Row>
            <Col xs={12}>
              <div className={styles.mainInfo}>
                <Row between="xs">
                  <Col xs={10}>
                    <span className={styles.title}>{movie.show_title}</span>
                  </Col>
                  <Col xs={2}>
                    <div className={commonStyles.textRight}>
                      <span className={styles.year}>{movie.release_year}</span>
                    </div>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col xs={12}>
                  <span className={styles.genre}>{movie.category}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Link>
  </div>
);

export default MoviePreview;
