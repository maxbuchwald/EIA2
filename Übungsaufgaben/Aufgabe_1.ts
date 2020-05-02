let i: number;
let s: string = "";

for (i = 1; i < 11; i++) {
  let a: number = random(5, 20);
  s += a + "\t";
}
console.log(s);

function random(_min: number, _max: number): number {
  return Math.floor(Math.random() * (_max - _min) + _min);
}
//https://github.com/Plagiatus/EIA/blob/master/Aufgaben.md
