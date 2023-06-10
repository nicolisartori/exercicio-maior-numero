function calcular() {
    let txtnum1 = document.getElementById('txtnum1')
    let txtnum2 = document.getElementById('txtnum2')
    let txtnum3 = document.getElementById('txtnum3')
    let num1 = Number(txtnum1.value)
    let num2 = Number(txtnum2.value)
    let num3 = Number(txtnum3.value)

    if (num1 > num2 && num1 > num3) {
        alert(`O número ${num1} é o maior entre eles`)
    } else if (num2 > num1 && num2 > num3){
        alert(`O número ${num2} é o maior entre eles`)
    } else if (num3 > num2 && num3 > num1){
        alert(`O número ${num3} é o maior entre eles`)
    } else {
        alert(`Por favor, digite três números diferentes.`)
    }
}