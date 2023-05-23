function muda_fundo() {
    let box = document.getElementById("box")
    console.log(box)
    let cor = document.getElementById("i_cor").value


    switch (cor) {
        case "1":
            box.style.backgroundImage = backgroundImage = "url('/img/whiskeys.jpg')"
            break
        case "2":
            box.style.backgroundImage = backgroundImage = "url('/img/vodkas.jpg')"
            break
        case "3":
            box.style.backgroundImage = backgroundImage = "url('/img/caipirinhas.jpg')"
            break
        default:
            box.style.backgroundImage = backgroundImage = "url('/img/exoticas.jpg')"
            break
    }
}