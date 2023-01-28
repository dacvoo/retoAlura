const text = document.querySelector(".text");
const mensaje = document.querySelector(".mensaje");

function botonEncriptar(){
    const textoencriptado = encriptar(text.value);
    mensaje.value = textoencriptado;
}

function encriptar(stringEncriptada){
    let matrizcodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase();

    for (let i = 0; i <matrizcodigo.length; i++) {
        if (stringEncriptada.includes(matrizcodigo[i][0])) {
            stringEncriptada=stringEncriptada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1]);
            
        }
    }
     return stringEncriptada;
}


