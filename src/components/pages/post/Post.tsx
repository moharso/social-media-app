import React from "react";
import UploadPhoto from "../../uploadPhoto/UploadPhoto";
import AddCaption from "../../addCaption/AddCaption";

const Post = () => {
  return (
    <div className="flex w-full h-full">
      <UploadPhoto />
      <AddCaption />
    </div>
  );
};

export default Post;
