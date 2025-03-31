import React from "react";

const galleryItem = ({ item }) => {
  return (
    <div className="galleryItem">
      <img src={item.media} alt="" />
    </div>
  );
};

export default galleryItem;
