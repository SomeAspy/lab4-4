let x= [1,2,3,4,5,6,7,8,9,10];

function addAll(list) {
    let cache = 0;
    list.forEach(element => {
        cache+=element;
    });
    return cache;
}
console.log(addAll(x));

function avg(list) {
    return addAll(list)/list.length;
}
console.log(avg(x));

function hasNeg(list) {
    let cache=false;
    list.forEach(element => {
        if (Math.sign(element) === -1 ) {
            cache=true;
        }
    });
    return cache;
}
console.log(hasNeg(x));

function inOrder(list) {
    let cache=0;
    let out=true;
    list.forEach(element => {
        if(cache>element) {
            out=false;
        }else{
            cache = element
        }
    });
    return out
}

console.log(inOrder(x))