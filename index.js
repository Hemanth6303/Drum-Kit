var drumButtons=document.querySelectorAll(".drum");

// for(var i=0;i<numberOfDrumButtons;i++ )
// {
//    // console.log(i);
// document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//     console.log(i);
//     var buttonInnerHtml=this.innerHtml;
//     makeSound(buttonInnerHtml);
// });

// }


drumButtons.forEach((btn) => {
    btn.addEventListener("click",function(){
     //  console.log(this.innerHtml,btn.innerHTML);
        makeSound(btn.innerHTML)
    })
})

document.addEventListener("keypress",function(event){
    // console.log(event.key);
    makeSound(event.key);
});

function makeSound(key)
{
    switch(key)
    {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
        case "i":
            var bass=new Audio("sounds/bass.mp3");
                bass.play();
                break;
        default:console.log();
    }

}


