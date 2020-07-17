var screen = "";

function calculatorFunc(){
  
  if(screen.indexOf("+") != -1){
      var nums = screen.split("+");
      var x = parseInt(nums[0],2)
      var y = parseInt(nums[1],2)
      var sum = x + y;
      var rta = sum.toString(2);
  }else if(screen.indexOf("-") != -1){
      var nums = screen.split("-");
      var x = parseInt(nums[0],2)
      var y = parseInt(nums[1],2)
      var sub = x - y;
      var rta = sub.toString(2);
  }else if(screen.indexOf("*")){
      var nums = screen.split("*");
      var x = parseInt(nums[0],2)
      var y = parseInt(nums[1],2)
      var mult = x * y;
      var rta = mult.toString(2);
  }else if(screen.indexOf("/")){
      var nums = screen.split("/");
      var x = parseInt(nums[0],2)
      var y = parseInt(nums[1],2)
      var div = x / y;
      var rta = div.toString(2);
  }
  screen = rta;
  document.getElementById("res").innerHTML = screen;
}

const key = (c) => {
    screen += c;
    document.getElementById("res").innerHTML = screen;
}

function cl(){
    screen = "";
    document.getElementById("res").innerHTML = screen;
}

