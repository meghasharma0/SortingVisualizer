const n = 10;
const arr = [];

// Setting random numbers between 1 to 10 in array
for (let i = 0; i < n; i++){
    arr[i] = Math.random();
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
do{
    var swapped = false;
    for (let i = 1; i < arr.length; i++){
        if (arr[i-1] > arr[i]){
            swapped = true;
            [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
        }
    }
}while (swapped);

const container = document.getElementById("container");
// Creating individual bars with the array
for (let i = 0; i < arr.length; i++){
    const bar = document.createElement("div");
    bar.style.height = arr[i]*100 + "%";
    bar.classList.add("bar");
    container.appendChild(bar);
}