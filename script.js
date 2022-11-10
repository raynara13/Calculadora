const CalcularMedia = () => {
	event.preventDefault();
    let nome = document.getElementById("name").value
    let nota1 = parseInt(document.getElementById("nota1").value)
    let nota2 = parseInt(document.getElementById("nota2").value)
    let nota3 = parseInt(document.getElementById("nota3").value)
    let nota4 = parseInt(document.getElementById("nota4").value)

    if (nome != "" && nota1 != "" && nota2 != "" && nota3 != "" && nota4 != "") {
		let media = (nota1 + nota2 + nota3 + nota4) / 4
        
        if (media >= 70) {
            swal.fire({
                position: 'center',
                icon: 'success',
                title: `Parabéns, ${nome}, você está APROVADO(A)!`,
                text: `Média: ${media}`,
            })
        } else if (media < 40) {
            swal.fire({
                icon: 'error',
                title: `${nome}, você está reprovado(a)!`,
                text: `Média: ${media}`,
            }) 
        } else {
            let final = ((50 - (media * 6)) / 4) * -1
            swal.fire({
                icon: 'warning',
                title: `${nome}, você irá fazer final precisando de: ${ final }`,
                text: `Média: ${media}`,
            })
        }
    }
}
document.querySelector('.submit-btn').addEventListener('click', CalcularMedia)