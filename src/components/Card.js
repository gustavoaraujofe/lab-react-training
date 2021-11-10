import imgVisa from '../assets/img/visa.png';
import imgMaster from '../assets/img/master-card.svg';

function Card(props) {
  let cardNumber = `**** **** **** ${props.number[12]}${props.number[13]}${props.number[14]}${props.number[15]}`;

  let bandeira;

  if (props.type === 'Visa') {
    bandeira = imgVisa;
  } else if (props.type === 'Master Card') {
    bandeira = imgMaster;
  }

  return (
    <div
      className="creditCard mt-4"
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
    >
      <div className="bandeira">
        <img src={bandeira} alt="bandeira do cartão" />
      </div>
      <div className="card-number">
        <p>{cardNumber}</p>
      </div>
      <div>
        <div className="expires">
          <div>
            <p>
              Expires {props.expirationMonth}/{props.expirationYear}
            </p>
          </div>
          <div>
            <p>{props.bank}</p>
          </div>
        </div>
        <div className="name">
          <p>{props.owner}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
