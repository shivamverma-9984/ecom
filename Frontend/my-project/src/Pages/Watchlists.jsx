import React, { useState } from "react";

const Watchlists = () => {
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  const toggleWatchlist = () => {
      setIsInWatchlist(!isInWatchlist)

  };
  return (
    <div>
      <div onClick={toggleWatchlist} style={{ cursor: "pointer" }}>
        {isInWatchlist ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="red"
            width="23px"
            height="23px"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width="23px"
            height="23px"
          >
            <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 16.55l-.1.1-.1-.1C7.14 15.24 4 12.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5 18.5 5 20 6.5 20 8.5c0 3.89-3.14 6.74-7.9 11.05z" />
          </svg>
        )}
      </div>
    </div>
  );
};

export default Watchlists;
