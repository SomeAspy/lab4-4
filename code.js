let x= [1,2,3,4,5,6,7,8,9,10]

function addAll(list) {
    let cache = 0
    list.forEach(element => {
        cache+=element;
    });
    return cache;
}
console.log(addAll(x))