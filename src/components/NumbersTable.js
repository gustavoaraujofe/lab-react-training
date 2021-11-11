function NumbersTables(props) {
  let numbers = [];
  for (let i = 1; i <= props.limit; i++) {
    numbers.push(i);
  }

  return numbers.map((num) => {
    let color = num % 2 === 0 ? 'red' : 'white';
    return (
      <div
        key={num}
        className="border border-dark bloco-number"
        style={{ backgroundColor: `${color}` }}
      >
        <p>{num}</p>
      </div>
    );
  });
}

export default NumbersTables;
