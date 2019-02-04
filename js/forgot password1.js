function validateform()
{
    var val=true;
    var name=document.myform.email.value;
    var at="@"
  
    if (name==null || name=="")
    {  
        alert("Please provide details!!");  
        return false;
        val=false;
    }
    if(name.indexOf("@")<1 || name.lastIndexOf(".")<name.indexOf("@")||name.lastIndexOf(".")==name.length-1)
    {
        alert("Email Invalid");
        val=false;
    }
    else
    {
        //return false;
        val=true;
    }
    if(val==true)
    {
        alert("Check your Email for new Password.");
    }
    return val;
}