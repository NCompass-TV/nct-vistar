import axios from 'axios';
import { environment } from '../environments/environment'; 
import { AssetRequest } from '../model/AssetRequest';

export class GetAd {
    asset_request: AssetRequest;
    prod: boolean;

    constructor(AssetRequest: AssetRequest, prod?: boolean) {
        this.asset_request = AssetRequest;
        this.prod = prod || true;
    }

    async invoke() {
        try {
            return await axios.post(
                this.prod ? `${environment.base_uri_prod}${environment.get_ad}` : `${environment.base_uri_sandbox}${environment.get_ad}`,
                this.asset_request
            )
        } catch(err) {
            console.log("GetAd:", err);
            return err;
        }
    }
}