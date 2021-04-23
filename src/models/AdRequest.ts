/**
 * Title: Ad Request Model
 * Author: Earl Vhin Gabuat (earlgabuat@gmail.com)
 * Description: This can be used for both Ad and Asset Request
*/

import { AssetInfo } from "./AssetInfo";
import { DeviceAttribute } from "./DeviceAttribute";

export class AdRequest {
    network_id: string;
    api_key: string;
    device_id: string;
    direct_connection: boolean;
    venue_id: string;
    display_time: number;
    device_attribute: DeviceAttribute[];
    display_area: AssetInfo[];

    constructor(
        network_id: string,
        api_key: string,
        device_id: string,
        direct_connection: boolean, venue_id: string,
        display: number, 
        device_attribute: DeviceAttribute[], 
        display_area: AssetInfo[]
    ) {
        this.network_id = network_id;
        this.api_key = api_key;
        this.device_id = device_id;
        this.direct_connection = direct_connection;
        this.venue_id = venue_id;
        this.display_time = display;
        this.device_attribute = device_attribute;
        this.display_area = display_area;
    }
}