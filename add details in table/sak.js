function add(){
var num1,num2,sum,
    num1=document.getElementById("user")
    num2=document.getElementById("user1")
    total= document.getElementById("total")
    output=document.getElementById("output");

   
    num1=parseInt(num1.value);
    num2=parseInt(num2.value);

    sum=num1+num2;

    output.value=sum;

}



// function jsFun()
// {
//   var val, elem;
//   val = parseInt(document.getElementById("num").value);
//   if(val)
//   {
//     if(val<10)
//       document.getElementById("paraTwo").innerHTML = "Less than 10";
//     else
//       document.getElementById("paraTwo").innerHTML = "Greater than 10";
//   }
// }



// <p id="paraOne">Enter a Number: <input id="num">
// <button onclick="jsFun()">Enter</button></p>
// <p id="paraTwo"></p>

// </body>
// </html>