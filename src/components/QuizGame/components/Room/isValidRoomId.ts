const regex = /^[a-zA-Z0-9]*$/;

export function isValidRoomId(value: string) {
  return regex.test(value);
}
