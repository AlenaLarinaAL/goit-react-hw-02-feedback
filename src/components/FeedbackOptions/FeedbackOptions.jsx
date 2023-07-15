import React from 'react';
import PropTypes from 'prop-types';
import './Feedback.module.css';

export const FeedbackOption = ({ options, onLeaveFeedbacks }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button
            type="button"
            option={option}
            onClick={() => onLeaveFeedbacks(option)}
          >
            {[option]}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedbacks: PropTypes.func.isRequired,
};
