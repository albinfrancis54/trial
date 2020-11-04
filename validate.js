function valid(){
   var email1=document.forms["form"]["email"];
    var password1 =document.forms["form"]["password"];
   
    var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   // var regx=/^(@"^[a-z]{1}\w+(\.\w+)*@\w+\.([a-z]{3})|(([a-z]{2}\.[a-z]{2}))$")$/;
    // let messages=[]
    // var p=/^([a-z A-Z 0-9 @]{1,9})$/;
            if(regx.match(email1)){
                document.getElementById("lbtxt").innerHTML="Valid email";
                document.getElementById("lbtxt").style.visibility="visible";
                document.getElementById("lbtxt").style.color="green";
                alert(" enter email is correct");
                return true;
            }
        else{
            alert("please enter email");
            document.form.email.focus();
           return false;
        }
        // if(password1.length>1){
        //     if(p.match(password1)){
        //         document.getElementById("lbtxt1").innerHTML="Valid password";
        //         document.getElementById("lbtxt1").style.visibility="visible";
        //         document.getElementById("lbtxt1").style.color="green";
        //         return true;
        //     }
        // }else{
        //     alert("please enter email");
        //     return false;
        //  }   



   
    }
