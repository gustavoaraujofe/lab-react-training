function Rating(props) {
  let number = Math.round(props.children);

  let arr = ['☆', '☆', '☆', '☆', '☆'];

  arr.fill('★', 0, number);

  return (
    <p className="h2 m-lg-4">
      {arr[0]}
      {arr[1]}
      {arr[2]}
      {arr[3]}
      {arr[4]}
    </p>
  );
}

export default Rating;
