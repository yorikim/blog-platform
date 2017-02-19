import React from 'react';

const TextBox = (props) => (
  <h2 className="entry-title">
    {props.text}
  </h2>
);

TextBox.propTypes = {
  text: React.PropTypes.string
};

export default TextBox;