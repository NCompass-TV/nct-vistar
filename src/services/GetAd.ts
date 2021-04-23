/**
 * Title: GetAd Service
 * Author: Earl Vhin Gabuat (earlgabuat@gmail.com)
*/

import axios from "axios";
import { AdResponse } from "../schema/AdResponse";
import { AdRequest } from "../models/AdRequest";
import { environment } from "../environments/environment";

/**
 * @param assetRequest: Asset Info to be requested
 * @returns: Promise of AdResponse
*/
 export async function GetAd(AdRequest: AdRequest): Promise<AdResponse> {
    try {
        const res = await axios.post(
            `${environment.base_uri}${environment.get_ad}`,
            AdRequest
        )

        return res.data;
    } catch(err) {
        console.log("GetAd:", err);
        return err;
    }
}