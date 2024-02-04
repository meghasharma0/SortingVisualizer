const n = 20;
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
    const moves = bubbleSort(copy);
    animate(moves);
}

function animate(moves){
    if (moves.length == 0){
        showBars();
        return;
    }
    const move = moves.shift();
    const [i, j] = move.indices;

    if (move.type == "swap"){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    showBars(move);
    setTimeout(function(){
        animate(moves);
    }, 500)
}

function bubbleSort(arr){
    const moves = [];
    do{
        var swapped = false;
        for (let i = 1; i < arr.length; i++){
            moves.push({
                indices: [i-1, i],
                type: "compare"
            });
            if (arr[i-1] > arr[i]){
                swapped = true;
                moves.push({
                    indices: [i-1, i],
                    type: "swap"
                });
                [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
            }
        }
    }while (swapped);
    return moves;
}

// Creating individual bars with the array
function showBars(move){
    const container = document.getElementById("container");
    container.innerHTML = "";
    for (let i = 0; i < arr.length; i++){
        const bar = document.createElement("div");
        bar.style.height = arr[i]*100 + "%";
        bar.classList.add("bar");

        if (move && move.indices.includes(i)){
            bar.style.background = move.type == "swap" ? "red" : "blue";
        }
        container.appendChild(bar);
    }
}