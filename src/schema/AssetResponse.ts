/**
 * Title: Asset Response Schema
 * Author: Earl Vhin Gabuat (earlgabuat@gmail.com)
*/

export type AssetResponse = {
    asset: Asset[];
}

type Asset = {
    asset_id: string;
    creative_id: string;
    order_id: string;
    campaign_id: string;
    asset_url: string;
    width: string;
    height: string;
    mime_type: string;
    length_in_seconds: string;
    length_in_milliseconds: string;
    creative_category: string;
    advertiser: string;
    creative_name: string;
}