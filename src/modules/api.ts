// API Locations
export interface Locations {
  locations: Array<{
    locationId: number;
    locationName: string;
  }>;
}
export const fetchLocations = (): Promise<Locations> => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://f4o3plnc4j.execute-api.ap-northeast-1.amazonaws.com/Prod/iterulocations"
    )
      .then(response => response.json())
      .then((json: Locations) => resolve(json))
      .catch((reason: string) => reject(reason));
  });
};

// API Rooms
export interface Rooms {
  rooms: Array<{
    roomId: number;
    roomName: string;
    isUsing: boolean;
    elapsedMinutes: number;
  }>;
}
export const fetchRooms = (locationId: number): Promise<Rooms> => {
  return new Promise((resolve, reject) => {
    // fetch(`${locationId}`)
    fetch(
      "https://9k2don95ai.execute-api.ap-northeast-1.amazonaws.com/Prod/iteruRooms"
    )
      .then(response => response.json())
      .then((json: Rooms) => resolve(json))
      .catch((reason: string) => reject(reason));
  });
};