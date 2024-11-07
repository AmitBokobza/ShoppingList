import ManageItems from "./classes/manager.js";
let itemsArr = new ManageItems();

let itemName = document.getElementById("item");
let itemPrice = document.getElementById("price");
let itemAmount = document.getElementById("amount");



function renderTable(){
    document.getElementById("tableBody").innerHTML = "";
    document.getElementById("tableBottom").innerHTML = "";

    let sum = 0;


    for (let item of itemsArr.items){
        document.getElementById("tableBody").innerHTML +=  `
        <tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.amount}</td>
        <td><button onclick="removeItem(${item.id})" class="btn btn-warning">X</button></td>
        </tr>
        `;

        sum += (item.price * item.amount)
    }

    document.getElementById("tableBottom").innerHTML = 
    `
    <tr>
    <td>Total:</td>
    <td colspan="3">${sum || 0}</td>
    </tr>
    `;

}
renderTable();

window.addItem = function addItem(){
    if(itemName.value == "" || itemPrice.value == "" || itemAmount.value == ""){
        alert("Must Fill Inputs!")
        return
    }
    itemsArr.addItem(itemName.value, itemPrice.value, itemAmount.value);
    itemName.value = "";
    itemPrice.value = "";
    itemAmount.value = "";

    renderTable();
}


window.removeItem = function removeItem(id){
    itemsArr.deleteItem(id);

    renderTable();
}