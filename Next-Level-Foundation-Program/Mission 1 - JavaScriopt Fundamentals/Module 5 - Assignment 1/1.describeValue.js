function describeValue(value) {
    const type = typeof value;
    const description = value ? 'truthy' : 'falsy';
    return `${type} | ${description}`;
}



// Tested Cases: 
// console.log(describeValue("hello"));      // string | truthy
// console.log(describeValue(""));           // string | falsy
// console.log(describeValue(25));           // number | truthy
// console.log(describeValue(0));            // number | falsy
// console.log(describeValue(true));         // boolean | truthy
// console.log(describeValue(false));        // boolean | falsy
// console.log(describeValue(null));         // object | falsy
// console.log(describeValue(undefined));    // undefined | falsy
// console.log(describeValue("0"));          // string | truthy
// console.log(describeValue(NaN));          // number | falsy
// console.log(describeValue(-1));           // number | truthy
// console.log(describeValue({}));           // object | truthy
// console.log(describeValue([]));           // object | truthy