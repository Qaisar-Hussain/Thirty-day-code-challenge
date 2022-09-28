// console.log("this is js file ");
let sound1 = new Audio("/imageaAndMusic/mixkit-negative-tone-interface-tap-2569.wav")
let sound2 = new Audio("/imageaAndMusic/mixkit-joke-drums-578.wav")
let sound3 = new Audio("/Bass Sample 16.wav")
let sound4 = new Audio("/imageaAndMusic/mixkit-hand-tribal-drum-562.wav")
let sound5 = new Audio("/imageaAndMusic/mixkit-deep-horror-drum-556.wav")
let sound6 = new Audio("/imageaAndMusic/mixkit-drum-and-percussion-545.wav")
let sound7 = new Audio("/imageaAndMusic/mixkit-drum-bass-hit-2294.wav")
let sound8 = new Audio("/imageaAndMusic/mixkit-funny-cartoon-tones-2892.wav")
let sound9 = new Audio("/imageaAndMusic/mixkit-futuristic-bass-hit-2303.wav")
let sound10 = new Audio("/imageaAndMusic/mixkit-hand-tribal-drum-562.wav")
let btn = document.getElementById("btn")
let element = document.querySelectorAll("li")
console.log(element)
element.forEach((element,index)=>element.addEventListener("click",function(e){
    index == 0 ?   sound1.play(): console.log("you clicked on ",e.target);
    index == 1 ? sound2.play():console.log("you clicked on ",e.target);
    index == 2 ? sound3.play():console.log("you clicked on ",e.target);
    index == 3 ? sound4.play():console.log("you clicked on ",e.target);
    index == 4 ? sound5.play():console.log("you clicked on ",e.target);
    index == 5 ? sound6.play():console.log("you clicked on ",e.target);
    index == 6 ? sound7.play():console.log("you clicked on ",e.target);
    index == 7 ? sound8.play():console.log("you clicked on ",e.target);
    index == 8 ? sound9.play():console.log("you clicked on ",e.target);
    index == 9 ? sound10.play():console.log("you clicked on ",e.target);
    }
))
