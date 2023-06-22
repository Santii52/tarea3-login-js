let user = prompt ('Ingrese su Usuario: ')
let contra = prompt ('Ingrese su Contraseña: ')


if (user == 'Juan' && contra == '2368') {
    alert ('Bienvenido al Sistema Juan')
    window.location.href = '../pages/admin.html'
} else {
    alert ('Usuario o contraseña incorrecta')
    location.href = '../pages/error.html'
}

console.log(user);
console.log(contra);