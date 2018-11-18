
    function validate(){
      var code = document.getElementById("nric").value;
      if (code == "" ){
        alert("內容是空的 發出警告！");
      } else if (!isNaN(code)){
        alert("內容不能為數字 發出警告！");
      } else if (code.length != 10){
        alert("內容的長度不正確 發出警告！");
      } else {
        var gender = code.charAt(1);
        if (gender == 1){
          document.getElementById("result").innerHTML = "某男通過驗證" ;
        } else if(gender == 2){
          document.getElementById("result").innerHTML = "某女通過驗證" ;
        } else{
          document.getElementById("result").innerHTML = "不知性別 不通過驗證" ;
        }
        
      }
    }
