/*
regular expression format /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
copyied from Brightspace - Client-side Development - week 5 - Regular Expression 
*/
let expression = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

let fulln = document.getElementById('fullname');
let address = document.getElementById('email');
let note = document.getElementById('message');
let done = document.getElementById('contact');

function submitted(ev){
    ev.preventDefault();
    let data = {};
    let errors = [];
    

if (fulln.value){
    data.fn = fulln.value;
} else {
    errors.push('Full name is missing');
    }  
    
if (address.value){
    if (expression.test(address.value)) {
        data.em = address.value;
        } else {
        errors.push('Invalid Email');
    }
} else {
    errors.push('Email is missing');
    }  
    
if (note.value){
    data.msg = note.value;
} else {
    errors.push('Message is missing');
    }  
    
if (errors.length === 0){
    done.reset();
} else {
        }
    
    
console.log(data, errors);
}


done.addEventListener('submit',submitted);
