
var state = true;

function toggleLight(){                                       //開關燈按鈕
  var img = document.getElementById("image");
  state = !state
  image.src = state ? "img/on.jpg" : "img/off.jpg";
}

      
function countTime(){                                         //檢測輸入值
  var count = parseInt(document.getElementById("NumberInput").value); 
  if (count == "") {
    alert("內容是空的, 發出警告！");
  } else if (isNaN(count)){
    alert("內容不為數字，發出警告!");
  }else{                                                     //確保倒數開始前燈是亮的
    state = true;
    document.getElementById("image").src = "img/on.jpg";
    document.getElementById("timer").innerHTML = count;
    document.getElementById("NumberInput").value = "";       //清除輸入框的數字

  var timeLeft = count;
  var id = setInterval(countDownTimer,1000);
  function countDownTimer(){                                    //倒數關燈
    count = count -1;
    if (count <= 0) {
      state = false;
      document.getElementById("image").src = "img/off.jpg";
      clearInterval(id);
      }  
    document.getElementById("timer").innerHTML = count;
    }
  }

  }
