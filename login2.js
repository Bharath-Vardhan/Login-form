function validate()
{
    var username=document.getElementById("Username").value;
    var password=document.getElementById("Password").value;
    if(username=="admin"&&password=="admin")
    {
        alert("login success");
        return false;
    }
    else
    {
        alert("login failed");
    }
} 