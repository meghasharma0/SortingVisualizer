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
    const copy = [...arr];
    const swaps = bubbleSort(copy);
    animate(swaps);
}

function animate(swaps){
    if (swaps.length == 0){
        showBars();
        return;
    }
    const [i, j] = swaps.shift();
    [arr[i], arr[j]] = [arr[j], arr[i]];
    showBars([i, j]);
    setTimeout(function(){
        animate(swaps);
    }, 500)
}

function bubbleSort(arr){
    const swaps = [];
    do{
        var swapped = false;
        for (let i = 1; i < arr.length; i++){
            if (arr[i-1] > arr[i]){
                swapped = true;
                swaps.push([i-1, i]);
                [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
            }
        }
    }while (swapped);
    return swaps;
}

// Creating individual bars with the array
function showBars(indices){
    const container = document.getElementById("container");
    container.innerHTML = "";
    for (let i = 0; i < arr.length; i++){
        const bar = document.createElement("div");
        bar.style.height = arr[i]*100 + "%";
        bar.classList.add("bar");

        if (indices && indices.includes(i)){
            bar.style.background = "red";
        }
        container.appendChild(bar);
    }
}