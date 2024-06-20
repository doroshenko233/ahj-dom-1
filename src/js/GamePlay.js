/* eslint-disable prettier/prettier */
export default class GamePlay {
    constructor(size) {
      this.size = size ** 2;
    }
  
    createSize() {
      const wrapper = document.querySelector('.wrapper');
      for (let i = 0; i < this.size; i++) {
        const cell = document.createElement('div');
        cell.setAttribute('data-index', i + 1);
        cell.classList.add('cell');
        wrapper.appendChild(cell);
      }
      this.random();
    }
  
    random() {
      setInterval(() => {
      const playCage = document.querySelectorAll('.cell');
        for (let i = 0; i < playCage.length; i++) {
          const playCageAcniv = 'activCell';
          if (playCage[i].classList.contains(playCageAcniv)) {
            playCage[i].classList.remove(playCageAcniv);
          }
        }
      const randomNumber = Math.floor(Math.random() * this.size);
      playCage[randomNumber].classList.add('activCell');
      }, 1000)
    }
  }
  