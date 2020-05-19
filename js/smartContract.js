// Button "Invertir Ahora"
const btnInvest = document.querySelector('#btn-invest')
const btnVer = document.querySelector('#btn-ver')
const btnCode = document.querySelector('#btn-code')


const agree = document.querySelector('#agree')
const wallet = document.querySelector('#wallet')
const amountOptions = document.querySelector('#amountOptions')




btnInvest.onclick = () => {
 if(agree.checked) {
   window.open('https://etherscan.io/address/0x1c4e1e9f4750838122ae52ef0ac4295b55925917#writeContract')
 } else {
  alert('Por favor selecciona la casilla e indica que has descargado y leído Las Cláusulas del Contrato')
 }
}

btnVer.onclick = () => {
  window.open('https://etherscan.io/address/0x1c4e1e9f4750838122ae52ef0ac4295b55925917#readContract')
}

btnCode.onclick = () => {
  window.open('https://etherscan.io/address/0x1c4e1e9f4750838122ae52ef0ac4295b55925917#code')
}


