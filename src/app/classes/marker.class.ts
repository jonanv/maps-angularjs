export class Marker {

  public lat: number;
  public lng: number;
  public title: string;

  constructor(lat: number, lng: number, title: string) {
    this.lat = lat;
    this.lng = lng;
    this.title = title;
  }
}
