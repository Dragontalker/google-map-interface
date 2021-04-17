// Instruction to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  }; 
  markerContent(): string;
};

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

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    });
  };
};