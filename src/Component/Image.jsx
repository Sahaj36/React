import React, { useEffect } from "react";

function Image() {
  useEffect(() => {
    console.log("Image Component has been mounted");

    // destroy
    return () => {
      console.log("Image Component has been unmounted");
    };
  },[]);

  return (
    <div>
      <h1>I am image component</h1>
    </div>
  );
}

export default Image;
