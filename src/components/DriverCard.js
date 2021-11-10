function DriverCard(props) {
  let number = Math.round(props.rating);

  let arr = ['☆', '☆', '☆', '☆', '☆'];

  arr.fill('★', 0, number);

  return (
    <div className="card mb-3 driver-card d-flex justify-content-center m-3">
      <div className="row g-0 d-flex justify-content-center align-items-center">
        <div className="col-md-4 driver-card-img">
          <img src={props.img} className="img-fluid rounded-circle" alt="foto do motorista" />
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <p className="card-text">
              <strong>{props.name}</strong>{' '}
            </p>
            <p className="card-text">
              {arr[0]}
              {arr[1]}
              {arr[2]}
              {arr[3]}
              {arr[4]}
            </p>
            <p className="card-text">
              <strong>
                {props.car.model} - {props.car.licensePlate}
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
