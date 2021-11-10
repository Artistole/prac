tweet = document.querySelector("#tweet");
thesis = document.querySelector("#this");
tein = document.querySelector("#text");
result = document.querySelector("#res")

tweet.addEventListener('click', thies);
thesis.disabled = true
function thies()
{
    document.getElementById("text").style.display = "block"
    document.getElementById("this").style.display = "block"
}
 
thesis.addEventListener('click', textin);
tein.addEventListener('input', texting);

function texting()
{
    var t = tein.value
    if(t.length>0)
    {
        document.getElementById("this").disabled = false;
    }
     else
   {
         document.getElementById("this").disabled = true;
    }
}

function textin()
{
    var t = tein.value
    result.innerText = t;  
}
