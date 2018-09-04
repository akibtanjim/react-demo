import React from "react";

const ListGroup = props => {
  const {
    items,
    onSelectGenre,
    textProperty,
    valueProperty,
    selectedGenre
  } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          style={{ cursor: "pointer" }}
          onClick={() => onSelectGenre(item)}
          className={
            item === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};
export default ListGroup;
