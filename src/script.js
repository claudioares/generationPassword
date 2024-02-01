const pass = document.querySelector('#pass');
const newPass = document.querySelector('#new_pass');
const button = document.querySelector('#genarate_button')



button.addEventListener('click', (e)=>{

    e.preventDefault()

    newPass.textContent = ''

    if(pass.value === '' || pass.value > 15){
        alert('Digite um tamanho de senha válido');
        pass.value = ''
        
        return;
    }

    let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*#@';
    let password = '';

    for(var i = 0, n = charset.length; i < pass.value; ++i){
        password += charset.charAt( Math.floor( Math.random() * n ))
    };

    let result = document.createTextNode(password)
    newPass.appendChild(result)

    pass.value = ''

    return 

})
