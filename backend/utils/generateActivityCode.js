import random from "random";

export default function generateActivityCode(length = 6) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(
    { length },
    () => characters[random.int(0, characters.length - 1)]
  ).join("");
}
