document.getElementById('submit-btn').addEventListener('click', function(){
   const emailField= document.getElementById('user-email');
   const email= emailField.value;
   const passField=document.getElementById('user-pass');
const pass= passField.value;

if(email==='lanina@gmail.com' && pass==='next'){
    window.location.href='bank.html';
}
else{
    alert('Please provide valid information');
}
})