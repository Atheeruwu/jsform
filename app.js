const loginTab = document.querySelector('.login-tab')
const signUpTab = document.querySelector('.signup-tab')
const loginForm = document.querySelector('.login-form')
const signupForm = document.querySelector('.signup-form')

//function to switch forms and tabs
const showForm = function(formToShow){
    if(formToShow === 'login'){
        loginForm.classList.add('active')
        signupForm.classList.remove('active')
        loginTab.classList.add('active')
        signUpTab.classList.remove('active')
    }else if(formToShow === 'signup'){
        loginForm.classList.remove('active')
        signupForm.classList.add('active')
        loginTab.classList.remove('active')
        signUpTab.classList.add('active')
    }
}

showForm('login')

loginTab.addEventListener('click',()=>{
    showForm('login')
})

signUpTab.addEventListener('click',()=>{
    showForm('signup')
})



