var numsq=6;
var colours = changearr(numsq);
var pickedcolour=pickcolour();
var box=document.querySelectorAll(".square");
var msg=document.querySelector("#message");
var reset=document.querySelector("#reset");
var color=document.querySelector("#clr");
color.textContent=pickedcolour;
var screen=document.querySelector(".screen");
var easy=document.querySelector(".easy");
var hard=document.querySelector(".hrd");
function ans(){
    for(var i=0;i<box.length;i++){
        box[i].style.backgroundColor=colours[i];
        box[i].addEventListener("click", function(){
           var clickedcolour=this.style.backgroundColor;
           
           if (clickedcolour===pickedcolour){
               changecolours(pickedcolour);
               screen.style.backgroundColor=pickedcolour;
               msg.textContent="CORRECT!";
           }
           else{
               this.style.backgroundColor= "#232323";
               msg.textContent="TRY AGAIN!";
           }
           });
       }
}
ans();
reset.addEventListener("click",function(){
    colours = changearr(numsq);
    pickedcolour=pickcolour();
    color.textContent=pickedcolour;
    for(var i=0;i<box.length;i++){
        box[i].style.backgroundColor=colours[i];
    }
    screen.style.backgroundColor="steelblue";
    reset.textContent="Play Again";
    msg.textContent="";
});
easy.addEventListener("click",function(){
    screen.style.backgroundColor="steelblue";
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numsq=3 
    colours = changearr(numsq);
    pickedcolour=pickcolour();
    color.textContent=pickedcolour;
    for(var i=0;i<box.length;i++){
        if(i<numsq){
            box[i].style.backgroundColor=colours[i];
        }
        else{
            box[i].style.backgroundColor="#232323";
        }
        
    }
    ans();
});

hard.addEventListener("click",function(){
    screen.style.backgroundColor="steelblue";
    easy.classList.remove("selected");
    hard.classList.add("selected");
    numsq=6
    colours = changearr(numsq);
    pickedcolour=pickcolour();
    color.textContent=pickedcolour;
    for(var i=0;i<box.length;i++){
            box[i].style.backgroundColor=colours[i];        
    }
    ans();
});


function changecolours(colour){
    for(var i=0;i<numsq;i++){
        box[i].style.backgroundColor=colour;
        
       }
}

function pickcolour(){
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

function changearr(c){
    var arr=[];
    for(var i=0;i<c;i++){
        arr.push(randomcolours());
    }
    
    return arr;
}

function randomcolours(){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r+", "+g+", "+b+")";
}