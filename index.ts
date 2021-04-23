import axios from 'axios';
import { environment } from './src/environments/environment'; 
import { FILETYPE } from "./src/constants/Filetype";
import { AssetResponse } from './src/model/AssetResponse';
import { AdResponse } from './src/model/AdResponse';
import { ReportResponse } from './src/model/ReportResponse';

/**
 * AssetInfo Class
 */
export class AssetInfo {
    id: string;
    width: number;
    height: number;
    allow_audio: boolean;
    supported_media: FILETYPE[];

    constructor(
        id: string,
        allow_audio: boolean,
        width: number,
        height: number
    ) {
        this.id = id;
        this.supported_media = Object.values(FILETYPE);
        this.allow_audio = allow_audio;
        this.width = width;
        this.height = height;
    }
}

/**
 * AdRequeset Class
 * Can be used for both Ad and Asset Request
 */
export class AdRequest {
    network_id: string;
    api_key: string;
    device_id: string;
    direct_connection: boolean;
    venue_id: string;
    display_time: number;
    device_attribute: DeviceAttribute[];
    display_area: AssetInfo[];

    constructor(network_id: string, api_key: string, device_id: string, direct_connection: boolean, venue_id: string, display: number, device_attribute: DeviceAttribute[], display_area: AssetInfo[]) {
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

/**
 * Device Attribute Class
 */
export class DeviceAttribute {
    name: string;
    value: string;

    constructor(
        name: string,
        value: string,
    ) {
        this.name = name;
        this.value = value;
    }
}

/**
 * @param assetRequest: Asset Info to be requested
 * @returns: Promise of AssetResponse
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

/**
 * @param proof_of_play_url - URL to hit from GetAd 
 * @returns 
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

/**
 * Export Schemas
 */
export {
    AssetResponse,
    AdResponse,
    ReportResponse
}