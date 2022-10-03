/* function click(){
    window.location="./login.html"
}
function validateemail()  
{  
var x=document.myform.email.value;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
  alert("Please enter a valid e-mail address");  
  return false;  
  }  
}  

  function matchpass(){  
  var firstpassword=document.f1.password.value;  
  var secondpassword=document.f1.password2.value;  
    
 
  else{  
  alert("password must be same!");  
  return false;  
  }  
  }    */
  function validateform(){  
    let email=document.form1.name.value;  
    let firstpassword=document.form1.password.value;  
    let secondpassword=document.form1.password2.value;  
       if(firstpassword==secondpassword){  
  alert("submitted succesfully")
  window.location="index1.html"
  }
  else{
    alert("your password is incorrect")
  }  
    }  
   