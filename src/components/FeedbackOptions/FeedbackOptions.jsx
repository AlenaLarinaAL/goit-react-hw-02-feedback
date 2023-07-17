import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button } from './FeedbackOptions.styled';

export const FeedbackOption = ({ options, onLeaveFeedbacks }) => {
  return (
    <List>
      {options.map(option => (
        <Item key={option}>
          <Button
            type="button"
            option={option}
            onClick={() => onLeaveFeedbacks(option)}
          >
            {[option]}
          </Button>
        </Item>
      ))}
    </List>
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedbacks: PropTypes.func.isRequired,
};
