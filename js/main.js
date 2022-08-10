import { Validator } from '../node_modules/auto-validation-form/validator.js';

var registerForm =  new Validator('#register-form', '.form-group', '.form-message'); 
console.log(registerForm);
registerForm.onSubmit = (formData) => { // đối tượng 'form' dùng để call API
    console.log(formData);
}   

var loginform =  new Validator('#login-form', '.form-group', '.form-message'); 
console.log(loginform);
loginform.onSubmit = (formData) => { // đối tượng 'form' dùng để call API
    console.log(formData);
}   
