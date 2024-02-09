function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function choisire(){
    var num=getRandomInt(40)+1;
    document.getElementById("ali1").value=num;
    console.log(num.toString());
}
function verif(){
    choix=document.getElementsByName("Q1");
    if(choix[1].checked){
        return true;
    }
    else{
        alert("choisir votre reponse");
        return false;
    }
}
function verif1(){
    choix=document.getElementsByName("Q2");
    if(choix[2].checked){
        return true;
    }
    else{
        alert("choisir votre reponse");
        return false;
    }
}
function verif2(){
    choix=document.getElementsByName("Q3");
    if(choix[2].checked){
        return true;
    }
    else{
        alert("choisir votre reponse");
        return false;
    }
}
function verif3(){
    choix=document.getElementsByName("Q4");
    if(choix[0].checked){
        return true;
    }
    else{
        alert("choisir votre reponse");
        return false;
    }
}
function verif4(){
    choix=document.getElementsByName("Q5");
    if(choix[0].checked){
        return true;
    }
    else{
        alert("choisir votre reponse");
        return false;
    }
}