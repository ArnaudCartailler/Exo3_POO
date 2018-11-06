
//First method work only when refresh F5 but not with send button

function Product(title, accro, summ) {
    this.title = title;
    this.accro = accro;
    this.summ = summ;
}

var productsinput = new Product(
    document.getElementById("title").value, 
    document.getElementById("accro").value, 
    document.getElementById("summ").value
    );

function send() {

document.getElementById("dtitle").innerHTML = productsinput.title;
document.getElementById("daccro").innerHTML = productsinput.accro;
document.getElementById("dsumm").innerHTML = productsinput.summ;

function clear() {

    document.getElementById("title").value = "";
    document.getElementById("accro").value = "";
    document.getElementById("summ").value = "";
}

clear();

}

send();
  

