import { useState } from 'react';
let count = 0;

function Carousel(props) {
  let arrImgs = props.imgs;

  const [imgAtual, setImg] = useState(arrImgs[0]);

  function clickLeft() {
    if (count > 0) {
      count--;
      setImg(arrImgs[count]);
    } else {
      count = 3;
      setImg(arrImgs[count]);
    }
  }

  function clickRight() {
    if (count < arrImgs.length - 1) {
      count++;
      setImg(arrImgs[count]);
    } else {
      count = 0;
      setImg(arrImgs[count]);
    }
  }
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade w-75"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={imgAtual}
            className="d-block w-100"
            alt="Foto"
            style={{ width: '300px' }}
          />
        </div>
      </div>
      <button
        onClick={clickLeft}
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        onClick={clickRight}
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
