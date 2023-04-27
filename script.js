const skills = document.querySelector(".skills");
const skillScore = document.querySelectorAll(".skill-score");
const box = document.querySelectorAll(".skill-box-icon");
const scrollStart = false;

skills.addEventListener("mouseover", ()=>{
  if (!scrollStart){
    countUp();
    scrollStart = true;
  }
});

function countUp(){
  skillScore.forEach((counter, index)=>{
    counter.innertText = '0';

    const updateCounter = () => {
      // Get count target 
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;

      if (c<=50){
        box[index].style.setProperty("--after-height", `${c*3}px`)
      }else{
        box[index].style.setProperty("--before-height", `${(c-50)*3}px`)
      }

      // create an increment 
      const increment = target/100;

      // if counter is less than target, add increment 
      if (c<target){
        //Round up and set counter value
        counter.innerText = `${Math.ceil(c+increment)}`;
        setTimeout(updateCounter, 20);
      }else{
        counter.innerText = target;
      }
    };
    updateCounter();
  })
}
