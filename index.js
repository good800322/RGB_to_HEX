const RInput = document.querySelector('#inlineFormInputRed')
const GInput = document.querySelector('#inlineFormInputGreen')
const BInput = document.querySelector('#inlineFormInputBlack')
const output = document.querySelector('#output')
const convert = document.querySelector('#convert')
const HEXBlock = document.querySelector('#HEXBlock')
let data = []
let HEX = []
let HEXValue = '#'
let flag = 0



convert.addEventListener('click', event => {

  let Rvalue = RInput.value
  let Gvalue = GInput.value
  let Bvalue = BInput.value
  if (Rvalue && Gvalue && Bvalue !== null) { //過濾為空白者
    writeInData(data)
    if (flag === 0) {              //用flag檢查是否0-255之整數
      showInHex(HEX)
    }
    else {
      alert('error')
      flag = 0
    }
  }
  else {
    alert('error')
  }
  data = []                       //清空資料以利連續輸入
  HEX = []
  HEXValue = '#'
})


function writeInData(data) {   //檢查是否0-255之整數，
  //若是，轉成16進位寫入HEX
  data.push(Number(RInput.value))
  data.push(Number(GInput.value))
  data.push(Number(BInput.value))
  data.forEach(item => {
    if (item <= 255 && item >= 0 && Number.isInteger(item) === true) {
      HEX.push(item.toString(16))
    }
    else {
      flag = -1
    }
  })
}
function showInHex(HEX) {
  HEX.forEach(item => {      //三項各不夠三位數的前面補零
    let string = ''
    for (let i = 0; i < (2 - item.length); i++) {
      string += '0'
    }
    string += item
    HEXValue += string
  })
  output.innerHTML = HEXValue //Node.style.backgroundColor
  HEXBlock.style.backgroundColor = HEXValue

}