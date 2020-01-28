module.exports.bubbleSort = (array) => {
    let length = array.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (array[j + 1] < array[j]) {
                let t = array[j + 1];
                array[j + 1] = array[j];
                array[j] = t;
            }
        }
    }
    return array;
    console.log(array);
}


// module.exports.bubbleSort = bubbleSort()