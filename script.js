// Write function below
let count = 0;

function subLength(s , c){
 for (let i = 0; i < s.length; i ++){
    if (s[i] === c) {
      count ++;
          }
  }
  if (count = 0) {
    return 0;

  }
  else if (count > 2){
    return 0;
  }
  else if (count = 2) {
  const m = s.indexOf(c);
  const n = s.lastIndexOf(c);
  return y = s.substr(m, n);

  }
  
}
subLength('Saturday', 'a');