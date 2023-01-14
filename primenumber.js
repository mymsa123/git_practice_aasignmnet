let n = 13
let flag = false
for(let i = 2 ; i<n ; i++){
if(n%i==0){
     flag = true
}
}
if(flag){
     console.log("This is prime")
}
else{
      console.log("This is not prime")
}