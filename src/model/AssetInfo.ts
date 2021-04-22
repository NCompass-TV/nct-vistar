import { FILETYPE } from "../constants/Filetype";

export class AssetInfo {
    id: string;
    supported_media: FILETYPE[];
    allow_audio: boolean;
    width: number;
    height: number;

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