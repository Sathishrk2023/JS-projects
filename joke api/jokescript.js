function myFunction() {
fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=>res.json())
.then((msg)=>document.getElementById("demo").innerHTML = msg[0].setup + "<br> <br> ===>" + msg[0].punchline);
}
myFunction()