let NameAndExpense = [];
function SaveToLocalStorageByInput(userInput2, userInput3)
{
    NameAndExpense.push(userInput2.toLowerCase(),userInput3);
    localStorage.setItem('listOfExpenses',JSON.stringify(NameAndExpense));
}
function SaveToLocalStorage(){
    localStorage.setItem('listOfExpenses',JSON.stringify(NameAndExpense));
}
    let localStorageItem;
function GetLocalStorage(){
    localStorageItem = localStorage.getItem('listOfExpenses');
    localStorageItem != null ? NameAndExpense = JSON.parse(localStorageItem) : NameAndExpense = [];
    return  NameAndExpense;
}

function RemoveFromLocalStorage(userInput2,userInput3){
    let StorageIndex = NameAndExpense.indexOf(userInput2,userInput3);
    NameAndExpense.splice(StorageIndex,1);
    NameAndExpense.splice(StorageIndex,2);
    SaveToLocalStorage();
}


let budget = [];
function SaveToLocalStorageBudget(userInput1)
{
    budget.push(userInput1);
    localStorage.setItem('userBudget',JSON.stringify(budget));
}
function SaveToLocalS(){
    localStorage.setItem('userBudget',JSON.stringify(budget));
}
    let localStorageItemBudget;
function GetLocalStorageBudget(){
    localStorageItemBudget = localStorage.getItem('userBudget');
    localStorageItemBudget != null ? budget= JSON.parse(localStorageItemBudget) : budget = [];
    return budget;
}

function RemoveFromLocalStorageBudget(userInput1){
    let cityIndex = budget.indexOf(userInput1);
    budget.splice(cityIndex,1);
    SaveToLocalS();
}


// let expenses = [];
// function SaveToLocalStorageIncome(result)
// {
//     expenses.push(result);
//     localStorage.setItem('userExpenses',JSON.stringify(expenses));
// }
// function SaveToLocalSIncome(){
//     localStorage.setItem('userExpenses',JSON.stringify(expenses));
// }
//     let localStorageItemIncome;
// function GetLocalStorageIncome(){
//     localStorageItemIncome = localStorage.getItem('userExpenses');
//     localStorageItemIncome != null ? expenses= JSON.parse(localStorageItemIncome) : expenses = [];
//     return expenses;
// }

// function RemoveFromLocalStorageIncome(result){
//     let cityIndex = expenses.indexOf(result);
//     expenses.splice(cityIndex,1);
//     SaveToLocalSIncome();
// }



GetLocalStorageBudget();
GetLocalStorage();
// GetLocalStorageIncome();


export {SaveToLocalStorageByInput, GetLocalStorage, RemoveFromLocalStorage, localStorageItem, NameAndExpense,
SaveToLocalStorageBudget,SaveToLocalS,GetLocalStorageBudget,RemoveFromLocalStorageBudget,localStorageItemBudget,budget}