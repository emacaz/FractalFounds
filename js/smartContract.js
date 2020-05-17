// Button "Invertir Ahora"
const investButton = document.querySelector('#investButton')
const agree = document.querySelector('#agree')
const wallet = document.querySelector('#wallet')
const amountOptions = document.querySelector('#amountOptions')

const amounts = [0, 500, 1000, 2000, 5000, 10000, 25000, 50000, 100000, 200000, 500000, 1000000]



investButton.onclick = () => {
 if(agree.checked) {

  if(wallet.value == ''){

    alert('Ingresa una dirección de ETH válida')

  } else {

    if(amountOptions.options[0].selected) {
      alert('Por favor selecciona una cantidad a invertir')

    } else {
      
      let amount

      for(let i = 0; i <= amountOptions.length; i++) {

        if(amountOptions.options[i].selected) {

          amount = amounts[i]
          break
        }
        window.open('https://etherscan.io/address/0xc9652efc267982b82df4ffd4bba5e0e7392f51f5#code')
      }
      
      console.log(amount)
    }
  }

 } else {
  alert('Por favor selecciona la casilla e indica que has descargado y leído Las Cláusulas del Contrato')

 }
}
