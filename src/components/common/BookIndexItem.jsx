
  //cities_index_item.jsx
  import * as React from "react";
  import { Link } from "react-router-dom";

  const BookIndexItem = ({ item, router }) => (
    <div className="col-md-4">
      <Link to={`/item/${item.id}`}>
          {item.name}
      </Link>
    </div>
 );

 export default BookIndexItem;