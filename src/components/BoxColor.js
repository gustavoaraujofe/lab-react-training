function BoxColor(props) {
  let bgColor = {backgroundColor: `rgb(${props.r},${props.g},${props.b})`}
  

  return (
    <div className="card border border-dark w-50 p-2 text-center mt-3" style={bgColor}>
      <div className="card-body">rgb({props.r},{props.g},{props.b})</div>
    </div>
  );
}

export default BoxColor;
