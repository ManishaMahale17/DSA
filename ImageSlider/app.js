const slider=document.querySelectorAll(".slider");
var counter=0;
// console.log(slider);
slider.forEach(
    (slider,index)=>{
        slider.style.left=`${index *100}%`
        //0 1*100 2*100 3*100 ---this looop left to right goes 
    }
)



const goNext = () => {
if (counter < slider.length - 1) {
counter++;
slideImage();
}
};
const goPrev = () => {
if (counter != 0) {
counter--;
slideImage();
}
};
const slideImage=()=>{
    slider.forEach(
        (slider)=>{
            slider.style.transform=`translateX(-${counter * 100}%)`

        }
    )
}