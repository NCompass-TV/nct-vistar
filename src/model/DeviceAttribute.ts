export class DeviceAttribute {
    license_id: string;
    license_key: string;
    dealer: string;
    host: string;
    location: string;
    latitude: string;
    longitude: string;

    constructor(
        license_id: string,
        license_key: string,
        dealer: string,
        host: string,
        location: string,
        latitude: string,
        longitude: string
    ) {
        this.license_id = license_id;
        this.license_key = license_key;
        this.dealer = dealer;
        this.host = host;
        this.location = location;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}