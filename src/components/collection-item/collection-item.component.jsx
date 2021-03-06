import React from "react";
import "./collection-item.style.scss";

const CollectionItem = ({ imageUrl, name, price }) => {
  return (
    <div class="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
