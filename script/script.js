//const output = ["Acoustic guitars", "Electric guitars"];
//const Basket = [];

const output = docunment.querySelector(".output");

const btn = document.creeateElement("button");
btn.textContent = "Add Instrument";
output.append(btn)

const myInput = document.createElementNS("input");
myInput.setAttribute("type","text");
myInput.value ="Lawrence";
output.prepend(myInput);

const ul = docunment .creeateElement("ul")
output.append(ul);

btn.addEventListener("click",addInstrument);

function addInstrument(){
    const newInstrument = myInput.value;
    myArr.push(newInstrument);
    console.log(myArr);

}

function build(){
    myArr.array.forEach(element => {
        const li = document.createElement("li");
        li.textContent = ele;
        il.append(li);
    });
}
function build(){
    myArr.array.forEach(element => {
        const li = document.createElement("li");
        li.textContent = ele;
        il.append(li);
    });
}   