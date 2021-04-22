/**
 * Module: N-CompassTV Vistar
 * Desc: Core Module
 * Author(s): Earl Vhin Gabuat <earlgabuat@gmail.com>
*/

/**
 * Services
*/
import * as GetAd from './services/GetAd';
import * as GetAssets from './services/GetAssets';
import * as SendReport from './services/SendReport';

/**
 * Schemas
*/
import * as AssetInfo from './model/AssetInfo';
import * as AssetRequest from './model/AssetRequest';
import * as AssetResponse from './model/AssetRequest';
import * as DeviceAttribute from './model/DeviceAttribute';

export {
    AssetInfo,
    AssetRequest,
    AssetResponse,
    DeviceAttribute,
    GetAd,
    GetAssets, 
    SendReport
}