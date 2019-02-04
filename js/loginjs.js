function validateform()
{  
var name=document.myform.name.value;  
var password=document.myform.password.value;  
  
if ((name==null || name=="") || (password==null || password == "")){  
  alert("please provide details!!");  
  return false; 
    
} 
    else{
        alert("signed in !!");
        return false;
    }
}