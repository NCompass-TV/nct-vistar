import { DeviceAttribute } from './DeviceAttribute';
import { AssetInfo } from './AssetInfo';

export class AssetRequest {
    device_id: string;
    direct_connection: boolean;
    device_attribute: Array<DeviceAttribute>;
    display_area: Array<AssetInfo>;
    display_time: number;
    venue_id: string;
    network_id: string;
    api_key: string;

    constructor(
        device_id: string,
        direct_connection: boolean,
        device_attribute: Array<DeviceAttribute>,
        display_area: Array<AssetInfo>,
        display_time: number,
        venue_id: string,
        network_id: string,
        api_key: string
    ) {
        this.device_id = device_id;
        this.direct_connection = direct_connection;
        this.device_attribute = device_attribute;
        this.display_area = display_area;
        this.display_time = display_time;
        this.venue_id = venue_id;
        this.network_id = network_id;
        this.api_key = api_key;
    }
}