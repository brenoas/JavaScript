var p = document.getElementsByTagName('p');

// p

p[0].innerHTML = 'Manipulado via JS!';
//caso eu quisesse editar todos os elementos p eu utilizaria um for.
/*
for(var i = 0; i < p.length; i++){
    p[i].innerHTML = 'Manipulado via JS!' + i;
}
*/


for(var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + "- algo - ";
}



