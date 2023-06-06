const endDate = "19 May 2023 10:00 PM";
document.getElementById("end-date").innerText = endDate;
const inputs=document.querySelectorAll("input");

function clock() {
  const end = new Date(endDate);
  const now = new Date();
//   console.log(end);
//   console.log(now);
const diff=(end-now)/1000;//converts ms to seconds
// console.log(diff); we get the diff here between end date and now date
if(diff<0) return;
//Converts into days
// console.log(Math.floor(diff/3600/24));
inputs[0].value=Math.floor(diff/3600/24);
inputs[1].value=Math.floor(diff/3600)%24;
inputs[2].value=Math.floor(diff/60)%60;
inputs[3].value=Math.floor(diff)%60;
}
clock();

setInterval(
    ()=>{
        clock();
    },1000)
