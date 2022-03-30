var m1 = window.document.getElementsByTagName('ul')[1];
var m2 = window.document.getElementsByTagName('ul')[2];  
var m3 = window.document.getElementsByTagName('ul')[3];
function menu1(){
    var instrumentoMusical = window.prompt('Escreva qual é o seu instrumento musical.')
        if (instrumentoMusical == 'violino'|| instrumentoMusical == 'Violino'){
            window.alert('Que bom, seu instrumento é Violino!')
        }  else {
            window.alert('ERRO!')
        }
    
        
   // m1.style.display='block'
}
function menu2(){
    m2.style.display='block'
}
function menu3(){
    m3.style.display='block'
}
function reload(){
    window.alert('OLÁ, SEJA BEM VINDO AO NOSSO SITE!');
}