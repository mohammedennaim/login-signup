const loginbtn= document.querySelector('.login');
const signupbtn= document.querySelector('.signup');
   
function signup(){
    loginbtn.style.display='none';
    signupbtn.style.display='block';
}
function login(){
    signupbtn.style.display='none';
    loginbtn.style.display='block';
    
}
    