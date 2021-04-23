/**
 * Title: Device Attribute Model
 * Author: Earl Vhin Gabuat (earlgabuat@gmail.com)
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