function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'src/imgs/m-baby.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'src/imgs/m-young.png')
            } else if (idade <= 50){
                //adulto
                img.setAttribute('src', 'src/imgs/m-adult.png')
            } else {
                //idoso
                img.setAttribute('src', 'src/imgs/m-elderly.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'src/imgs/f-baby.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'src/imgs/f-young.png')
            } else if (idade <= 50){
                //adulto
                img.setAttribute('src', 'src/imgs/f-adult.png')
            } else {
                //idoso
                img.setAttribute('src', 'src/imgs/f-elderly.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}