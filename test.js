// task 1

const dishes = ['Spaghetti', 'Lasagne', 'Beans on toast', 'Porridge', 'Tomato soup',
'Salmon'];
function logOut() {
for (let i = 0; i < dishes.length; i++) {
    console.log(dishes[i]);
}
}
logOut();

// task 2
const button = document.createElement("button");
button.innerHTML = "<h1>Click Me</h1>";

const body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener ("click", function() {
    alert("Javascript test");
  });

 body.style.background = "blue";

 // task 3

 fetch("https://reqres.in/api/users")
 .then((response) => {
   if (response.ok) {
     return response.json();
   } else {
     throw new Error("No response");
   }
 })
 .then(function (data) {   
   console.log(data); 
   displayUsers(data);
 })
 .catch((error) => {
   console.error("FETCH ERROR:", error);
 });
  


   // create a class

   class Person {
       constructor(firstname){
           this.firstname = firstname;

       }
       sayHello(){
           console.log("Hello my name is " + peter.firstname);
       }
   }
   const peter = new Person('peter');
   peter.sayHello();
