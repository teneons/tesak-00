//* stails
document.body.style.boxSizing = 'border-box'
document.body.style.margin = 0
document.body.style.outlineStyle = 'none'
document.body.style.outline = 'none'
document.body.style.userSelect = 'none'

//create elements
let calcBlock = document.createElement('div')
  calcBlock.id = 'calcBlock';
  calcBlock.style.width = '100vw';
  calcBlock.style.height = '100vh';
  calcBlock.style.backgroundColor = '#999999';
  calcBlock.style.display = 'flex';
  calcBlock.style.alignItems = 'center';
  calcBlock.style.justifyContent = 'center';


//insert elements
document.body.append(calcBlock)