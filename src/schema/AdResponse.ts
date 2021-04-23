/**
 * Title: Ad Response Schema
 * Author: Earl Vhin Gabuat (earlgabuat@gmail.com)
*/

export type AdResponse = {
    advertisement: Advertisement[];
}

type Advertisement = {
    id: string;
    proof_of_play: string;
    expiration_url: string;
    display_time: number;
    lease_expiry: number;
    display_area_id: string;
    creative_id: string;
    asset_id: string;
    asset_url: string;
    width: number;
    height: number;
    mime_type: string;
    length_in_seconds: number;
    length_in_milliseconds: number;
    campaign_id: number;
    creative_category: string;
    advertiser: string;
}