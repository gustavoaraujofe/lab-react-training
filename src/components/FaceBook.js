import { useState } from 'react';
import data from '../data/berlin.json';

let country = ['All'];
data.forEach((user) => {
  country.push(user.country);
});

let uniqueCountry = [...new Set(country)];
let bgColor;
let selectCountry;
let selectUser;
let arrUser = [];

function FaceBook() {
  const [users, setClick] = useState(data);
  const data2 = [...users];

  function clickCountry(currentCountry) {
    selectCountry = currentCountry;
    setClick(data2);
  }

  function clickImg(currentUser) {
    selectUser = currentUser;
    setClick(data2);
    arrUser.push(selectUser);
  }

  return (
    <div className="w-75">
      <div className="d-flex flex-wrap w-75">
        {uniqueCountry.map((currentCountry) => {
          if (selectCountry === currentCountry) {
            bgColor = '#A3D2E2';
          } else {
            bgColor = 'white';
          }
          return (
            <div className="m-1" key={currentCountry}>
              <button
                onClick={() => clickCountry(currentCountry)}
                style={{ backgroundColor: `${bgColor}` }}
              >
                {currentCountry}
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-2">
        <p>
          <strong>
            Clique nas imagens para exibir as informações do usuário!
          </strong>
        </p>
      </div>
      <div>
        {users.map((user, index) => {
          let displayInfo;

          if (selectCountry === 'All') {
            bgColor = '#A3D2E2';
          } else if (selectCountry === user.country) {
            bgColor = '#A3D2E2';
          } else {
            bgColor = 'white';
          }

          if (!arrUser.includes(user.firstName)) {
            displayInfo = 'none';
          } else {
            displayInfo = '';
          }

          return (
            <div
              key={`${user.firstName}${index}`}
              className="card mb-3 mt-3"
              style={{ maxWidth: '540px', backgroundColor: `${bgColor}` }}
            >
              <div className="row g-0 border border-dark">
                <div className="col-md-4 img-card">
                  <img
                    src={user.img}
                    className="img-fluid rounded-start"
                    onClick={() => clickImg(user.firstName)}
                    alt="foto usuario"
                  />
                </div>
                <div
                  className="col-md-8 info-card"
                  style={{ display: `${displayInfo}` }}
                >
                  <div className="card-body m-2">
                    <p className="card-text">
                      <strong>First name: </strong>
                      {user.firstName}
                    </p>
                    <p className="card-text">
                      <strong>Last name: </strong>
                      {user.lastName}
                    </p>
                    <p className="card-text">
                      <strong>Country: </strong>
                      {user.country}
                    </p>
                    <p className="card-text">
                      <strong>Type: </strong>{' '}
                      {user.isStudent ? 'Student' : 'Teacher'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FaceBook;
