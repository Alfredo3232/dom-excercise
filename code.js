function getH1(texto) {
    var h1s = document.getElementsByTagName('h1')[0]
    console.log(h1s)
    h1s.textContent = texto
}

getH1("Hola ando cambiando un  h1 con JS")


function manipularP(texto) {
    var div = document.getElementsByTagName('div')[0]
    var p = div.children[0]
    p.textContent = texto
    console.log(div)
}

manipularP("Hola ando poniendo texto en p dentro de un div")

function imagenLink(link) {
    var img = document.getElementsByTagName('img')[0]
    var src = img.attributes[0]
    src.value = link
    console.log(img)
}

imagenLink("")

