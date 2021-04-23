/**
 * Title: SendReport Service
 * Author: Earl Vhin Gabuat (earlgabuat@gmail.com)
*/

import { ReportResponse } from "../schema/ReportResponse";
import axios from 'axios';

/**
 * @param proof_of_play_url: URL to hit from GetAd 
 * @returns: Promise of ReportResponse
*/
 export async function SendReport(proof_of_play_url: string): Promise<ReportResponse> {
    try {
        const res = await axios.get(proof_of_play_url);
        return res.data;
    } catch(err) {
        console.log("SendReport:", err);
        return err;
    }
}