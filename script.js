const n = 10;
const arr = [];

init();
// Setting random numbers between 1 to 10 in array
function init(){
    for (let i = 0; i < n; i++){
        arr[i] = Math.random();
    }
    showBars();
}

// Bubble sort implementation
// let swapped = false;
// for (let i = 0; i < n; i++){
//     for (let j = 0; j < n-i-1; j++){
//         if (arr[j] > arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }

function play(){
    bubbleSort(arr);
    showBars();
}
function bubbleSort(arr){
    do{
        var swapped = false;
        for (let i = 1; i < arr.length; i++){
            if (arr[i-1] > arr[i]){
                swapped = true;
                [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
            }
        }
    }while (swapped);
}

// Creating individual bars with the array
function showBars(){
    const container = document.getElementById("container");
    container.innerHTML = "";
    for (let i = 0; i < arr.length; i++){
        const bar = document.createElement("div");
        bar.style.height = arr[i]*100 + "%";
        bar.classList.add("bar");
        container.appendChild(bar);
    }
}