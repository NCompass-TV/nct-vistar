import axios from 'axios';

export class SendReport {
    proof_of_play_url: string;

    constructor(url: string) {
        this.proof_of_play_url = url;
    }

    async invoke() {
        try {
            return await axios.get(this.proof_of_play_url);
        } catch(err) {
            console.log("SendReport:", err);
            return err;
        }
    }
}