import React from "react";
import { Input } from "semantic-ui-react";

function Search(props) {
  const {search, handleChangeSearch}= props;
  return (
    <Input
    value={search}
    action={{ icon: 'search' }}
    placeholder='Search...' 
    onChange={e => handleChangeSearch(e)}
    type="text"
      />
  );
}

export default Search;