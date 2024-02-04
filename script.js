const n = 10;
const arr = [];

// Setting random numbers between 1 to 10 in array
for (let i = 0; i < n; i++){
    arr[i] = Math.random();
}

const container = document.getElementById("container");
// Creating individual bars with the array
for (let i = 0; i < arr.length; i++){
    const bar = document.createElement("div");
    bar.style.height = arr[i]*100 + "%";
    bar.style.width = "10px";
    bar.style.background = "black";
    container.appendChild(bar);
}