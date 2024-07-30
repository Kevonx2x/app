import axios from "axios";

class DataService {
    async getPlayers() {
        let response = await axios.get("http://127.0.0.1:5000/api/players");
        return response.data;
    }

    async getRoster() {
        let response = await axios.get("http://127.0.0.1:5000/api/roster");
        return response.data;
    }

    async savePlayer(player) {
        let response = await axios.post("http://127.0.0.1:5000/api/players", player);
        return response.data;
    }

    async saveRoster(roster) {
        let response = await axios.post("http://127.0.0.1:5000/api/roster", roster);
        return response.data;
    }
}

export default new DataService();
