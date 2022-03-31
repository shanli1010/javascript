
function stoplight(color){
  if (color == "red"){
    return("Stop");
  }
  else if(color == "yellow"){
    return("Slow to Stop");
  }
  else if(color == "green"){
    return("Go");
}else{
  return("Please enter a valid color");
}
}
console.log(stoplight("red"));
