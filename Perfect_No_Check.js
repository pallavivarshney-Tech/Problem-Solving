 
var Perfect_Check = (N) => 
{
let num =0;
for(let i=0; i<=N/2;i++){
  if(N%i===0){
    num = num+i
  }
  
}
if(num===N&& num!==0){
  return "YES"
}
else{
  return "NO"
}

  
};
 
