const lessthan=document.querySelector("#less");
const great=document.querySelector("#gr");
const overflow=document.querySelector("#over");
const bo=document.querySelector("#but1");
const bt=document.querySelector("#but2");
const bth=document.querySelector("#but3");
const bf=document.querySelector("#but4");
let count=0;
  const key=250;
lessthan.onclick=function(){
  if (count>0) {  count--
overflow.style.transform=`translateX(-${key*count}px)`
console.log(count)}
else {count=4
}

}
great.onclick=function(){
    if ( count < 4){
        count++
overflow.style.transform=`translateX(-${key*count}px)`}
else{count=0

  
}

if(count==0){
  bo.style.backgroundcolor="blue";

}
else if(count==1){
  bt.style.backgroundcolor="blue";
}

else if(count==2){
  bth.style.backgroundcolor="blue";
}else if(count==3){
  bth.style.backgroundcolor="blue";
}
else {
  bf.style.backgroundcolor="blue";
}
}


