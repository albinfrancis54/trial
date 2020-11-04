function valid(){
   var email1=document.forms["form"]["email"];
   var email1=email1.value;
    var password1 =document.forms["form"]["password"];
    var password1=password1.value;
   event.preventDefault();
    var regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   // var regx=/^(@"^[a-z]{1}\w+(\.\w+)*@\w+\.([a-z]{3})|(([a-z]{2}\.[a-z]{2}))$")$/;
    // let messages=[]
     var p=/^([a-z A-Z 0-9 @]{1,9})$/;
            if(email1.match(regx)){
                document.getElementById("lbtxt").innerHTML="Valid email";
                document.getElementById("lbtxt").style.visibility="visible";
                document.getElementById("lbtxt").style.color="green";
                //alert(" enter email is correct");
                if(password1.length>1){
                         if(password1.match(p)){
                             document.getElementById("lbtxt1").innerHTML="Valid password";
                             document.getElementById("lbtxt1").style.visibility="visible";
                             document.getElementById("lbtxt1").style.color="green";
                             alert('validation successful');
                             window.location='profile.html';
                         }
                     }else{
                         alert("please enter valid password");
                      }   
            }
        else{
            alert("please enter email");
            document.form.email.focus();
        }
        // 



   
    }
