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
  calcBlock.style.width = '20vw';
  calcBlock.style.height = '30vh';
  calcBlock.style.border = '2px solid #000000';
  calcBlock.style.display = 'flex';
  calcBlock.style.alignItems = 'center';
  calcBlock.style.justifyContent = 'space-around';
  calcBlock.style.flexDirection = 'column';


const fieldSum = document.createElement('input');    //sum
  fieldSum.type = 'number';
  fieldSum.step = 0.1;
  fieldSum.placeholder = 'Input sum'
  fieldSum.id = 'fieldSum';
  fieldSum.style.width = '12vw';
  fieldSum.style.height = '5vh';
  fieldSum.style.border = '0px solid';
  fieldSum.style.outline = 'none';
  fieldSum.style.textAlign = 'center';

const fieldPrice = document.createElement('input');   //price
  fieldPrice.type = 'number';
  fieldPrice.step = 0.1;
  fieldPrice.placeholder = 'Input price';
  fieldPrice.id = 'fieldPrice';
  fieldPrice.style.width = '12vw';
  fieldPrice.style.height = '5vh';
  fieldPrice.style.border = '0px solid';
  fieldPrice.style.outline = 'none';
  fieldPrice.style.textAlign = 'center';


const btnCount = document.createElement('button');    //btn count
  btnCount.type = 'button';
  btnCount.id = 'btnCount';
  btnCount.innerText = 'Count'
  btnCount.style.width = '6vw';
  btnCount.style.height = '3vh';
  btnCount.style.borderRadius = '15px';
  btnCount.style.outline = 'none';
  btnCount.style.textAlign = 'center';
  btnCount.style.textTransform = 'uppercase';


const hr = document.createElement('hr');    //hr line
  hr.style.width = '100%';
  hr.style.border = '1px solid #000000';


const fieldСhange = document.createElement('span');
  fieldСhange.id = 'fieldСhange';
  fieldСhange.style.width = '100%';
  fieldСhange.style.fontSize = '2.5vh';
  fieldСhange.style.textAlign = 'center';
  fieldСhange.style.fontWeight = 'bold';


//insert elements
document.body.append(mainBlock);
mainBlock.append(calcBlock);
calcBlock.append(fieldSum);
calcBlock.append(fieldPrice);
calcBlock.append(btnCount);
calcBlock.append(hr);
calcBlock.append(fieldСhange);


//processing data
btnCount.addEventListener('click', () => {
  let change = ((fieldSum.value * 100 - fieldPrice.value * 100)/100).toFixed(2);   //difference
  let dollar = Math.trunc(change);
  let cent = ((change * 100 - dollar * 100)/100)*100; //exact cent values

  //1 5 10 25 50 cents
  let centChange = cent;
  let arrCountCents = [];

  if(Math.trunc(centChange / 50) != 0) {
    arrCountCents.push(`50¢x${Math.trunc(centChange / 50)}`);
    centChange -= 50;
  }
  if(Math.trunc(centChange / 25) != 0) {
    arrCountCents.push(`25¢x${Math.trunc(centChange / 25)}`)
    centChange -=25;
  }
  if(Math.trunc(centChange / 10) != 0) {
    arrCountCents.push(`10¢x${Math.trunc(centChange / 10)}`);
    centChange -=10;
  }
  if(Math.trunc(centChange / 5) != 0) {
    arrCountCents.push(`5¢x${Math.trunc(centChange / 5)}`);
    centChange -=5;
  }
  if(Math.trunc(centChange / 1) != 0) {
    arrCountCents.push(`1¢x${Math.trunc(centChange / 1)}`);
    centChange -= 1;
  }

  fieldСhange.innerHTML = `Your change ${change}$ or ${dollar}$ ${arrCountCents}`;   //out

})