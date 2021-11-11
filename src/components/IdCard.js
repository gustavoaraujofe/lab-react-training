function IdCard(props) {
  let date = props.birth.toDateString()
  let metros = props.height/100

  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0 border border-dark">
        <div className="col-md-4 img-card">
          <img src={props.picture} className="img-fluid rounded-start" alt="foto usuario" />
        </div>
        <div className="col-md-8 info-card">
          <div className="card-body">
            <p className="card-text"><strong>First name:</strong> {props.firstName}</p>
            <p className="card-text"><strong>Last name:</strong> {props.lastName}</p>
            <p className="card-text"><strong>Gender:</strong> {props.gender}</p>
            <p className="card-text"><strong>Height:</strong> {metros}m</p>
            <p className="card-text"><strong>Birth:</strong> {date} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
