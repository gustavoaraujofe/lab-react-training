function Greetings(props) {
  if (props.lang === 'de') {
    return <p className="border border-dark w-50 p-2">Hallo {props.children}</p>;
  } else if (props.lang === 'en') {
    return <p className="border border-dark w-50 p-2">Hello {props.children}</p>;
  } else if (props.lang === 'es') {
    return <p className="border border-dark w-50 p-2">Hola {props.children}</p>;
  } else if (props.lang === 'fr') {
    return <p className="border border-dark w-50 p-2">Bonjour {props.children}</p>;
  }
}

export default Greetings;
