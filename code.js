function getH1(texto) {
    var h1s = document.getElementsByTagName('h1')[0]
    console.log(h1s)
    h1s.textContent = texto
}

getH1("Hola ando cambiando un  h1 con JS")


function manipularP(texto) {
    var div = document.getElementsByTagName('div')[0]
    console.log(div)
    var p = div.children[0]
    p.textContent = texto
}

manipularP("Hola ando poniendo texto en p dentro de un div")

function imagenLink(link) {
    var img = document.getElementsByTagName('img')[0]
    console.log(img)
    var src = img.attributes[0]
    src.value = link
}

imagenLink("")

function estilo(color) {
    var h2 = document.getElementsByTagName('h2')[0]
    console.log(h2)
    var style = h2.attributes[0]
    style.value = "color:" + color + ";"
}

estilo("red")

function creaP(texto) {
    var div = document.getElementsByTagName('div')[1]
    console.log(div)
    var p = document.createElement('p')
    div.appendChild(p)
    div.children[0].textContent = texto
}

creaP("HOLA!!!!!!!!!!")