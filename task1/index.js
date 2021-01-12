//* stails
document.body.style.boxSizing = 'border-box'
document.body.style.margin = 0
document.body.style.outlineStyle = 'none'
document.body.style.outline = 'none'
document.body.style.userSelect = 'none'

//create elements
const mainBlock = document.createElement('div');   //main block
  mainBlock.id = 'mainBlock';
  mainBlock.style.width = '100vw';
  mainBlock.style.height = '100vh';
  mainBlock.style.backgroundColor = '#999999';
  mainBlock.style.display = 'flex';
  mainBlock.style.alignItems = 'center';
  mainBlock.style.justifyContent = 'center';
  mainBlock.style.flexDirection = 'column';

const calcBlock = document.createElement('div');   //calc block
  calcBlock.id = 'mainBlock';
  calcBlock.style.width = '18vw';
  calcBlock.style.height = '25vh';
  calcBlock.style.border = '2px solid #000000';
  calcBlock.style.display = 'flex';
  calcBlock.style.alignItems = 'center';
  calcBlock.style.justifyContent = 'center';
  calcBlock.style.flexDirection = 'column';



//insert elements
document.body.append(mainBlock)
mainBlock.append(calcBlock)