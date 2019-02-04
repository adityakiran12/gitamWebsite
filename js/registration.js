function validateform()
{   
  var x=document.myform.num;  
    if (isNaN(x.value) || x.value.length<6) 
    { 
        x.style.borderColor="red";
        alert("dafuq");
        return false;  
    }
    else
    {  
        return true;  
    }
    
}