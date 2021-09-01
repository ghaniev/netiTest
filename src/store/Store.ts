import {makeAutoObservable} from 'mobx';
import {ImageProps} from 'react-native';

export interface PiccaType {
  id: number;
  name: string;
  image: ImageProps;
  price: number;
}

class Picca {
  initialData: PiccaType[] = [
    {
      id: 1,
      name: 'Лол',
      image: require('../../assets/img/lol_left.png'),
      price: 350,
    },
    {
      id: 2,
      name: 'Маргарита',
      image: require('../../assets/img/margarita_left.png'),
      price: 320,
    },
    {
      id: 3,
      name: 'Мексиканская',
      image: require('../../assets/img/meksikanskaya_left.png'),
      price: 400,
    },
    {
      id: 4,
      name: 'Пепперони',
      image: require('../../assets/img/pepperoni_left.png'),
      price: 343,
    },
    {
      id: 5,
      name: 'По-английски',
      image: require('../../assets/img/po-angliyski_left.png'),
      price: 325,
    },
    {
      id: 6,
      name: 'Римская',
      image: require('../../assets/img/rimskaya_left.png'),
      price: 315,
    },
  ];
  leftCurrentIndex: number = 0;
  rightCurrentIndex: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  get totalPrice() {
    return (
      this.initialData[this.leftCurrentIndex].price +
      this.initialData[this.rightCurrentIndex].price
    );
  }

  randomPicca = () => {
    this.leftCurrentIndex = Math.floor(Math.random() * 5);
    this.rightCurrentIndex = Math.floor(Math.random() * 5);
  };

  leftIndexAdd = () => {
    this.leftCurrentIndex++;
  };
  leftIndexRemove = () => {
    this.leftCurrentIndex--;
  };
  rightIndexAdd = () => {
    this.rightCurrentIndex++;
  };
  rightIndexRemove = () => {
    this.rightCurrentIndex--;
  };
}

const PiccaStore = new Picca();
export default PiccaStore;
