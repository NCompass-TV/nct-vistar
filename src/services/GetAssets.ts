/**
 * Title: GetAssets Service
 * Author: Earl Vhin Gabuat (earlgabuat@gmail.com)
*/

import axios from "axios";
import { environment } from "../environments/environment";
import { AdRequest } from "../models/AdRequest";
import { AssetResponse } from "../schema/AssetResponse";

/**
 * @param assetRequest: Asset Info to be requested
 * @returns 
 */
 export async function GetAssets(Adrequest: AdRequest): Promise<AssetResponse> {
    try {
        const res = await axios.post(
            `${environment.base_uri}${environment.get_assets}`,
            Adrequest
        )

        return res.data;
    } catch(err) {
        console.log("GetAssets:", err);
        return err;
    }
}