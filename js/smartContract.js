// Button "Invertir Ahora"
const btnInvest = document.querySelector('#btn-invest')
const btnVer = document.querySelector('#btn-ver')
const btnCode = document.querySelector('#btn-code')


const agree = document.querySelector('#agree')
const wallet = document.querySelector('#wallet')
const amountOptions = document.querySelector('#amountOptions')




btnInvest.onclick = () => {
 if(agree.checked) {
   window.open('https://etherscan.io/address/0xc9652efc267982b82df4ffd4bba5e0e7392f51f5#writeContract')
 } else {
  alert('Por favor selecciona la casilla e indica que has descargado y leído Las Cláusulas del Contrato')
 }
}

btnVer.onclick = () => {
  window.open('https://etherscan.io/address/0xc9652efc267982b82df4ffd4bba5e0e7392f51f5#readContract')
}

btnCode.onclick = () => {
  window.open('https://etherscan.io/address/0xc9652efc267982b82df4ffd4bba5e0e7392f51f5#code')
}


