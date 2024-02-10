
export const checkingFormValues = ({name, email, phone, check}) => {
    let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let arrayError = [];
    if(name.length < 3) arrayError.push('Debes colocar un nombre válido');
    if(!emailRegex.test(email)) arrayError.push('Debes colocar un correo válido');
    if(phone.length !== 10) arrayError.push('Debes colocar un número válido de 10 digitos');
    if(!check) arrayError.push('Debes aceptar la politica de la empresa');
    return arrayError
}