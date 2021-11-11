import { useState } from 'react';
import img from '../assets/img/persons/maxence.png';
import imgClicked from '../assets/img/persons/maxence-glasses.png';

function ClickablePicture() {
  const [photo, setPhoto] = useState(true);

  function handleClick() {
    setPhoto(!photo);
  }
  return (
    <div>
      <img
        className="w-25"
        onClick={handleClick}
        src={photo ? img : imgClicked}
        alt="Foto"
      />
    </div>
  );
}

export default ClickablePicture;
