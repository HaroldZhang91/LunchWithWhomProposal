import React from 'react';
import PropTypes from 'prop-types';
import './Post.scss';

const Poster = ({
  listOfGroup
}) => {

};

Poster.propTypes = {
  listOfGroup: PropTypes.PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
  }))
};

export default Poster;