import React from 'react'
import PropTypes from "prop-types"

const AllBooksList = props => {
  return(
    <ul>
      {props.books.map(book => (
        {/* book block*/}
      ))}
    </ul
  );
};

AllBooksList.PropTypes = {
  books: PropTypes.array.isRequired
};

export default AllBooksList;
