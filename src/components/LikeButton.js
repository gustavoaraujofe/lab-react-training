import { useState } from 'react';
let count = 1;
let bgColor = 'purple';

function LikeButton() {
  const arrColor = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  let [clickCount, setClickCount] = useState(0);

  function handleIncrement() {
    setClickCount(clickCount + 1);

    if (count < arrColor.length - 1) {
      count++;
    } else {
      count = 0;
    }
    bgColor = arrColor[count];
  }

  let like = clickCount === 0 || clickCount > 1 ? 'Likes' : 'Like';

  return (
    <button
      className="p-2 w-50"
      onClick={handleIncrement}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <strong>
        {clickCount} {like}
      </strong>
    </button>
  );
}

export default LikeButton;
