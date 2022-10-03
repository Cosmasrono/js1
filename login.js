function validationform(){  
  let Fpassword=document.myform.password1.value;  
  let Spassword=document.myform.password2.value;  
     if(Fpassword==Spassword){  
alert("submitted succesfully")
window.location="index1.html"
}
else{
  alert("your password is incorrect")
}  
  } 