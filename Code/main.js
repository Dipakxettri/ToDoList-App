
let inputF = document.querySelector(".input");
let addB = document.getElementById("add");
let resetB = document.getElementById("reset");
let searchF = document.querySelector(".input2");
let body = document.querySelector(".body-main");
let lists = document.querySelector(".lists");

let text;
let height;
let number = 0;


addB.addEventListener("click", () => {

        number += 1;

        let ul = document.createElement("ul");
        ul.setAttribute("class", "ul");
       

        let ulF = document.querySelector(".ul");
        ul.style.display = "flex";
        ul.style.justifyContent = "space-between"
        ul.style.margin = "20px"

        let indexes = document.createElement("i");
        indexes.innerHTML = number;

        let li = document.createElement("li");
        li.innerHTML = inputF.value;
        li.style.fontSize = "1.6em"
        li.style.listStyleType = "none";
        li.setAttribute("class", "li");

        let delet = document.createElement("button");
        delet.innerHTML = "Delete";
        delet.setAttribute("class", "delete")
        delet.style.backgroundColor = "red"



        delet.addEventListener("click", () => {
                
                ul.remove();

        })
        
        lists.append(ul);
        ul.append(indexes);
        ul.append(li)
        ul.append(delet)


})


resetB.addEventListener("click",() => {
         let tasks = document.querySelectorAll(".ul")

        tasks.forEach(element => {
             element.remove();   
        });
})

// searchF.addEventListener('input', () => {
//         // console.log(searchF.value);
//         let lis = Array.from(document.querySelectorAll(".li"));
//         lis.forEach(element => { 
//                 console.log(element);
                
//         });
        

// })


