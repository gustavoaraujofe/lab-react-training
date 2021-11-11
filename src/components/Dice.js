import { useState } from 'react';
import diceEmpty from '../assets/img/hug.gif';
import dice1 from '../assets/img/dice1.png';
import dice2 from '../assets/img/dice2.png';
import dice3 from '../assets/img/dice3.png';
import dice4 from '../assets/img/dice4.png';
import dice5 from '../assets/img/dice5.png';
import dice6 from '../assets/img/dice6.png';

const arrDice = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [dice, setDice] = useState(arrDice[0]);

  function handleClick() {
    let number = Math.floor(Math.random() * (6 - 0));

    setDice(diceEmpty);

    setTimeout(() => {
      setDice(arrDice[number]);
    }, 1000);
  }

  return (
    <div>
      <img
        onClick={handleClick}
        src={dice}
        style={{ maxWidth: '150px' }}
        alt="dice"
      />
    </div>
  );
}

export default Dice;
