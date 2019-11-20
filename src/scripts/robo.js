export class Robogotchi {
    constructor(name) {
        this.name = name;
        this.energy = 100;
        this.mood = 'happy';

        this.energyLoss();
        this.checkDeath();
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

    emote(emotion) {
        return fetch(`https://api.giphy.com/v1/gifs/random?api_key=${process.env.GIPHY_KEY}&tag=${emotion}&rating=PG`)
        .then(function(response) {
            if (response.status !== 200) {
                console.error(`Error in response: ${response.status}`);
                return false;
            }
            return response.json().then(function(jsonResponse) {
                return jsonResponse.data.images.original.url;
            });
        })
        .catch(function(error) {
            console.error(`Fetch Error: ${error}`);
            return false;
        });
    }
}
