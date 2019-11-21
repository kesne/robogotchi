export class Robogotchi {
  constructor(name) {
    this.name = name;
    this.energy = 100;
    this.mood = "happy";

    this.energyLoss();
  }

  energyLoss() {
    setInterval(() => this.decrementEnergy(), 2000);
  }

  decrementEnergy(amount = 1) {
    this.energy -= amount;
    if (this.energy <= 0) {
      // Dead :(
    }
  }

  async emote(emotion) {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_KEY}&tag=${emotion}&rating=PG`
      );

      if (!response.ok) {
        throw new Error(`Error in Giphy response: ${response.status}`);
      }

      const jsonResponse = await response.json();
      return jsonResponse.data.images.original.url;
    } catch(error) {
      console.error(`Giphy Fetch Error: ${error}`);
      return null;
    }
  }

  // TODO:
  movieSearch(movieTitle) {
    return fetch(
      `http://www.omdbapi.com/?t=${movieTitle}&apikey=${process.env.OMBD_KEY}`
    )
      .then(function(response) {
        if (response.status !== 200) {
          console.error(`Error in OMBD response: ${response.status}`);
          return false;
        }
        return response.json().then(function(jsonResponse) {
          console.log(jsonResponse);
          return jsonResponse;
        });
      })
      .catch(function(error) {
        console.error(`OMBD Fetch Error: ${error}`);
        return false;
      });
  }
}
