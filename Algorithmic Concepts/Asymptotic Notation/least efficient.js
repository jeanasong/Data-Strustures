// Which function has the least efficient big O runtime?

function funcOne(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
        if(array[i] % 2 === 0) {
            console.log('This is an even number');
        }
    }
}

////////////////////

function funcTwo(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            console.log(array[i], array[j]);
        }
    }
}

function funcThree(array) {
    console.log(array);
    for(let i = 0; i < 100000; i++) {
        console.log(i);
    }
}

//////////////////

function funcFour(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    for(let i = 0; i <array.length; i++) {
        console.log(array[i] * array[i -1]);
    }
}



/* 
Answer
The function that has the least efficient big O runtime is function funcTwo it has a quadratic runtime of O(n^2) due to the nested for loops. 
polynomial: Θ(N^2) */