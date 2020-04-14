//this function is very cool !
function hoursDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / 1000 * 60 * 60);
}

const remainingTime = (date = new Date()) => {
  const uncontainmentDate = new Date(2020, 5, 11, 9);
  return Math.floor((uncontainmentDate - date) / (1000 * 60 * 60 ));
}

try{
  document.getElementById('remainingTime').innerText = `${remainingTime()} hours`;
}catch(err){}


exports.remainingTime = remainingTime;
