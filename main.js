const korAge = (age) => "<h1>한국 나이 : "+age+"</h1>";
const manAge = (age, birth) =>{
  if(birth){
    return "<h1>만 나이 : "+(parseInt(age)-1)+"</h1>";
  }
  else{
    return "<h1>만 나이 : "+(parseInt(age)-2)+"</h1>";
  }
}
const ageCalculator = (age, birth) => korAge(age)+manAge(age, birth);

let age = prompt("나이를 입력해주세요.");
if(isNaN(parseInt(age))){
  alert("숫자를 입력해주세요.");
  location.reload();
}
else{
  let birth = confirm("생일이 지났나요?");
  document.body.innerHTML = ageCalculator(age, birth);
}