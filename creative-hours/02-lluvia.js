let rain = document.getElementById("rain");
let raintText = rain.getContext("2d");

rain.height = window.innerHeight;
rain.width = window.innerWidth;

 let binary = "HORA DEL CODIGO";
binary = binary.split("");

let font_size = 15;
let colums = rain.width/font_size;
let drops = [];


for (var index = 0; index < colums; index++)
    drops[index] = 1;


console.log(drops);
function draw(){
    raintText.fillStyle = "rgba(0,0,0,0.05)";
    raintText.fillRect(0,0,rain.width,rain.height);
    raintText.fillStyle = "#E040FB";
    raintText.font = font_size + "px arial" ;
    for (var newIndex = 0; newIndex < drops.length; newIndex++){
        var text = binary[ Math.floor( Math.random()*binary.length ) ];
        raintText.fillText( text, newIndex*font_size , drops[newIndex]*font_size);
        if (drops[newIndex]*font_size > rain.height && Math.random() > 0.975 )
            drops[newIndex]=0;
        drops[newIndex]++;
    }
}

//draw()
setInterval(draw,120);
console.log(binary);
