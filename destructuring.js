let a, b, c;
[a, b, c] = ["banana", "cucumber", ["bread", "cakes", "pizza"]];
console.log("Q1.", a, b, ...c);

const halloweeen = {
  daniel: "wizard",
  lala: "hobo",
  izabela: "princess",
};
console.log(Object.values(halloweeen));

const band = {
  name: "Queen",
  greatesHit: "we are the champions",
  nationality: "cuban",
  genre: "pop",
};
function bandData() {
  return Object.entries(band);
}
console.log(
  `${band.name}is a ${band.nationality} singer from America and their greates hit is ${band.greatesHit}`
);
