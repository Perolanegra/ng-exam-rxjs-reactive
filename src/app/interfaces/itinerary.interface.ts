export interface Itinerary {
  [key: number]: Coordinate;
  codigo: string;
  idlinha: string;
  nome: string;
}

export interface Coordinate {
  lat: number;
  lng: number;
}
