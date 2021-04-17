import { User } from './User';
import { Company } from './Company';

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string, zoomLevel: number, latCoord: number, lngCoord: number) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: zoomLevel,
      center: {
        lat: latCoord,
        lng: lngCoord
      }
    });
  };

  addUserMarker(user: User): void {

  };

  addCompanyMarker(company: Company): void {

  };
};