export function uniqueKey() {
  let table = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "q", "p", "r", "s", "t", "u", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "Q", "P", "R", "S", "T", "U", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let uniqKey = [];
  for (let i = 0; i < 20; i++) {
    let x = parseInt(Math.random() * 60);
    uniqKey.push(table[x]);
  }
  return uniqKey.join("");
}
