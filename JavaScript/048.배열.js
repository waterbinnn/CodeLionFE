const aespa = ["카리나", "윈터", "닝닝", "지젤"];

// aespa.forEach((item, index) => {
//   aespa[index] = item + "💖";
// });

const aespa2 = aespa.map((item) => {
  return item + "💖";
});

console.log(aespa); //[ '카리나', '윈터', '닝닝', '지젤' ]
console.log(aespa2); //[ '카리나💖', '윈터💖', '닝닝💖', '지젤💖' ]
