import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="card mb-3 driver-card d-flex justify-content-center m-3">
      <div className="row g-0 d-flex justify-content-center align-items-center">
        <div className="col-md-4 driver-card-img">
          <img
            src={props.img}
            className="img-fluid rounded-circle"
            alt="foto do motorista"
          />
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <p className="card-text">
              <strong>{props.name}</strong>{' '}
            </p>
            <div className="card-text">
              <Rating>{props.rating}</Rating>
            </div>
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
