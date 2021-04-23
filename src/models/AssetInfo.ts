/**
 * Title: Asset Info Model
 * Author: Earl Vhin Gabuat (earlgabuat@gmail.com)
*/

 import { FILETYPE } from "../constants/Filetype";

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