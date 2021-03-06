import { RoomState } from "../constants";

// API Rooms
interface APIRoom {
  roomName: string;
  isUsing: boolean;
  timestamp: string;
}

const translateAPIRoom = (apiResult: APIRoom[]): RoomState[] => {
  const rooms: RoomState[] = [];

  apiResult.map(item => {
    const date = new Date(item.timestamp);
    const elapsedMinutesFromNow = Math.floor(
      (Date.now() - date.getTime()) / 60000
    ); // = ミリ秒 / 1000ミリ秒 / 60秒

    rooms.push({
      roomId: item.roomName,
      roomName: item.roomName,
      isUsing: item.isUsing,
      elapsedMinutes: elapsedMinutesFromNow
    });

    return item;
  });

  return rooms;
};

export const fetchRooms = (locationName: string): Promise<RoomState[]> => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://ig3md7m262.execute-api.ap-northeast-1.amazonaws.com/rooms/新宿/"
    )
      .then(response => response.json())
      .then((json: APIRoom[]) => {
        console.log(json);
        resolve(translateAPIRoom(json));
      })
      .catch((reason: string) => {
        console.log(reason);
        reject(reason);
      });
  });
};
