var parent= document.getElementById('myform');
var image=document.createElement('IMG');
image.src='https://img.icons8.com/fluent/50/000000/student-male.png';
image.classList.add('login-images');
parent.appendChild(image);


var divmail=document.createElement('DIV');
divmail.classList.add('form-group');
divmail.classList.add('row');
var labelmail=document.createElement('LABEL');
labelmail.innerHTML='Name';
labelmail.classList.add('col-4');
labelmail.classList.add('col-form-label');
divmail.appendChild(labelmail);
var divinput=document.createElement('DIV');
divinput.classList.add('col-8');
divmail.appendChild(divinput);

var inputmail=document.createElement('INPUT');
inputmail.setAttribute('type','text');
inputmail.setAttribute('name','mail');
inputmail.setAttribute('id','input_mail');
inputmail.classList.add('form-control-plaintext');
inputmail.setAttribute('Placeholder','Name Please...');
divinput.appendChild(inputmail);

parent.appendChild(divmail);



var divage=document.createElement('DIV');
divage.classList.add('form-group');
divage.classList.add('row');
var labelage=document.createElement('LABEL');
labelage.innerHTML='Age';
labelage.classList.add('col-4');
labelage.classList.add('col-form-label');
divage.appendChild(labelage);
var divinputage=document.createElement('DIV');
divinputage.classList.add('col-8');
divage.appendChild(divinputage);

var inputage=document.createElement('INPUT');
inputage.setAttribute('type','Number');
inputage.setAttribute('min','0');
inputage.setAttribute('name','age');
inputage.setAttribute('max','100');
inputage.setAttribute('id','input_age');
inputage.classList.add('form-control-plaintext');
inputage.setAttribute('Placeholder','Age Please...');
divinputage.appendChild(inputage);

parent.appendChild(divage);

var divbutton=document.createElement('DIV');
divbutton.setAttribute('id','mad');

var b=document.createElement('SPAN');
var button=document.createElement('BUTTON');
button.innerHTML='Add Field';
button.setAttribute('id','button1');
button.setAttribute('onclick','add()');
b.appendChild(button);
divbutton.appendChild(b);
parent.appendChild(divbutton);

var button2=document.createElement('BUTTON');
button2.setAttribute('id','but');
button2.innerHTML='Submit';
b.appendChild(button2);

function add() {
        var par = document.getElementById('myform');
        var c = 'input'+document.getElementById('myform').childElementCount;
        var b = document.getElementById('mad');
        var div = document.createElement("DIV");
        var div2 = document.createElement("DIV");
        var label = document.createElement("LABEL");
        var input1 = document.createElement('INPUT');
        div.classList.add('form-group');
        div.classList.add('row');
        label.classList.add('col-4');
        label.classList.add('col-from-label');
        label.innerHTML = "Input";
        div2.classList.add('col-8');
        input1.setAttribute('type', 'text');
        input1.classList.add('form-control-plaintext');
        input1.setAttribute('Placeholder', 'input');
        input1.setAttribute('name',c);
        div2.appendChild(input1);
        div.appendChild(label);
        div.appendChild(div2);
        //        par.appendChild(div);
        par.insertBefore(div, b);
    }
