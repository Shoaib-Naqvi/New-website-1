import React, { useState } from "react";

function LikeButton() {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prev) => {
      const next = !prev;
      setCount((c) => c + 1)
     //setCount((c) => c - (next ? 1 : -1));
      
      return next;
    });
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <button
        onClick={handleLike}
        id="card"
        style={{
          backgroundColor: liked ? "blue" : undefined,
          color: liked ? "white" : undefined,
        }}
      >
        {liked ? "Liked" : "Like"}
      </button>

      <button onClick={() => setCount((c) => c - 1)} id="card2">
        Dislike
      </button>
    </div>
  );
}

export default LikeButton;