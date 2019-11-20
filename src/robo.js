export class Robogotchi {
  constructor(name) {
    this.name = name;
    this.energy = 100;
    this.temperature = 20;
    this.mood = 'happy';

    this.energyLoss();
  }

  energyLoss() {
    setInterval( () => {
      this.energy--;
    }, 1000);
  }

  checkDeath() {
    setInterval( () => {
      if (this.energy <= 0) return true;
    }, 5);
  }

  emote() {
    let giphy;
    let request = new XMLHttpRequest();
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.giphy}&tag=happy&rating=PG`;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        prepareImage(response);
      }
    }

    request.open("GET", url, true);
    request.send();


    const prepareImage = function(response) {
      giphy = new Image();
      giphy.src = response.data.images.original.url;
      giphy.alt = 'alt';
    }
    console.log(giphy);
    return giphy;
  }
}
