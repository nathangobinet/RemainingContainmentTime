//this const is not that good !
const remainingTime = (date = new Date()) => {
  const uncontainmentDate = new Date(2020, 5, 11, 9);
  return Math.floor((uncontainmentDate - date) / (1000 * 60 * 60 ));
}

// Try to modify the remaining time
try{
  document.getElementById('remainingTime').innerText = `${remainingTime()} hours`;
}catch(err){}


exports.remainingTime = remainingTime;
