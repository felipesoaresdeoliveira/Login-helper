function mostrarSenha(){
const eye = document.getElementById('olho');
const eyeClose = document.getElementById('olho-c');
const fielPassoword = document.getElementById('field-passoword');

if(eye.style.display === 'none'){
eye.style.display = 'block';
eyeClose.style.display = 'none';
fielPassoword.Type = 'text';
}
else {
    eye.style.display = 'none';
    eyeClose.style.display = 'block';
    fielPassoword.Type = 'password';
}
};
document.getElementById('btn-login').addEventListener('click',function(e){
e.preventDefault();
alert("Parabens agora esta logado!")
})