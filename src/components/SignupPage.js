import { useState } from 'react';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [nacio, setNacio] = useState('');
  const [emailText, setEmailText] = useState('');
  const [textOi, setOiText] = useState('');
  const [verificacao, setVerText] = useState('');
  const [display, setDisplay] = useState('none')

  function clickSubmit() {
    setOiText(nacio === '1' ? 'Hello' : nacio === '2' ? 'Hallo' : nacio === "3" ? 'Bonjour' : null);
    setEmailText(`Your email address is: ${email}`);
    setVerText('Your email address is correct');
    setDisplay("")
  }

  return (
    <div className="d-flex align-items-center">
      <form className="w-50 p-3 shadow-lg p-3 mb-5 bg-body rounded">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div>
          <label htmlFor="exampleInputPassword1" className="form-label">
            Nationality
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(event) => setNacio(event.target.value)}
          >
            <option value="default">Select your nacionality</option>
            <option value="1">English</option>
            <option value="2">German</option>
            <option value="3">French</option>
          </select>
        </div>
        <button type="button" className="btn btn-primary mt-2" onClick={clickSubmit}>
          Submit
        </button>
      </form>
      <div className="mt-4 border border-dark w-50 h-50 p-3 m-2" style={{display: `${display}`}}>
        <p>{textOi}</p>
        <p>{emailText}</p>
        <p>{verificacao}</p>
      </div>
    </div>
  );
}

export default SignupPage;
