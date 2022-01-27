import {SaveToLocalStorageByInput,GetLocalStorage, RemoveFromLocalStorage,localStorageItem,  NameAndExpense,
 SaveToLocalStorageBudget,SaveToLocalS,GetLocalStorageBudget,RemoveFromLocalStorageBudget,localStorageItemBudget,budget} from "./localStorage.js";

let userInput1 = document.getElementById('userInput1');
let userInput2 = document.getElementById('userInput2');
let userInput3 = document.getElementById('userInput3');
let vendorName = document.getElementById('vendorName');
let AmountSpent = document.getElementById('AmountSpent');
let removeExpense = document.getElementById('removeExpense');
let displayBudget = document.getElementById('displayBudget');
let displayExpensesTotal = document.getElementById('displayExpensesTotal');
let displayBalance = document.getElementById('displayBalance');
let createElement = document.getElementById('createElement');
let submitBtn = document.getElementById('submitBtn');
let resetBtn = document.getElementById('resetBtn');


function CreateElement(userInput2,userInput3)
{
    let div = document.createElement('div');
    div.className = "col-2";

    let li = document.createElement('li');
    li.id = "vendorName";
    li.className = "text-center pb-1";
    li.textContent = userInput2;

    let div2 = document.createElement('div');
    div2.className = "col-2 mx-4";

    let li2 = document.createElement('li');
    li2.id = "AmountSpent";
    li2.className = "text-center pb-1 mx-5";
    li2.textContent = "$" + userInput3 + ".00";

    let div3 = document.createElement('div');
    div3.className = "col-2 mx-4";

    let span = document.createElement('span');
    span.id = "removeExpense";
    span.className = "text-center pt-3 pb-1 mx-5 close";
    span.textContent = "X";

    span.addEventListener('click',function(){

        RemoveFromLocalStorage(userInput2,userInput3);
        RemoveFromLocalStorageBudget(userInput1);
        div.remove();
        div2.remove();
        div3.remove();
        hr.remove();

    });

    let hr = document.createElement('hr')

    div.appendChild(li);
    div2.appendChild(li2);
    div3.appendChild(span);

    createElement.appendChild(div);
    createElement.appendChild(div2);
    createElement.appendChild(div3);
    createElement.appendChild(hr);
}


function totalAll()
{
    let result = 0;
    let counter2 = 1;
    for (let i = 0; i < NameAndExpense.length; i+=2) {
        result += Number(NameAndExpense[counter2]);
        counter2 += 2;
    }
   displayExpensesTotal.textContent = "$" + result + ".00";

   let Balance = userInput1.value - result;
   displayBalance.textContent = "$" + Balance + ".00";
}


// localStorage.setItem('a',1);
// console.log(typeof(localStorage.a))
// console.log(Number(localStorage.a))

submitBtn.addEventListener('click',function(){

    CreateElement(userInput2.value, userInput3.value);
    displayBudget.textContent = "$" +  userInput1.value + ".00";
    SaveToLocalStorageByInput(userInput2.value, userInput3.value);
    SaveToLocalStorageBudget(userInput1.value);
    totalAll();
    // SaveToLocalStorageIncome(result);
});


function DisplayOnReload() {
    let counter = 1;
    if (NameAndExpense == []) {
    alert("No Names Available, Plaease Enter in Names"); 
    } else {
      for (let i = 0; i < NameAndExpense.length; i+=2) {
       CreateElement(NameAndExpense[i],NameAndExpense[counter]);
       counter += 2;
      }
}
}


function DisplayOnloadIncome()
{
    if (budget == []) {
    alert("No Names Available, Plaease Enter in Names"); 
    } else {
      for (let i = 0; i < budget.length; i++) {
       displayBudget.textContent =  "$" + budget[i] + ".00";
      }
}
}

resetBtn.addEventListener('click',function(){
localStorage.clear();
window.location.reload();
});



DisplayOnloadIncome();
DisplayOnReload();
// DisplayOnloadExpenses();

