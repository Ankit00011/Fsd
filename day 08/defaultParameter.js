const add = (a,b,c=0)=>{
    console.log(a+b+c);
}
add(2,3,4);
add(2,3);

const greet = (first, last, middle = "") => {
     console.log(`hello ${first} ${middle} ${last}`)
}
greet("Ankit","Sharma");