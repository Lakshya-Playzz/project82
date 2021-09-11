var mouseevent="empty";
var last_x,last_y;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d")
var color="Red";
var widthofline=2;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent="mousedown";
    color=document.getElementById("color").value
    widthofline=document.getElementById("widthofline").value
    radius = document.getElementById("radius").value
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseup"
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave"
}
    canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseevent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke()
    }
    last_x=current_position_of_mouse_x;
    last_y=current_position_of_mouse_y;
}
function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}
