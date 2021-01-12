//* style
document.body.style.boxSizing = 'border-box'
document.body.style.margin = 0
document.body.style.outlineStyle = 'none'
document.body.style.outline = 'none'
document.body.style.userSelect = 'none'

//style for body
document.body.style.width = '100vw';
document.body.style.height = '100vh';
document.body.style.display = 'flex';
document.body.style.alignItems = 'center';
document.body.style.justifyContent = 'center';
document.body.style.flexDirection = 'column';
document.body.style.backgroundColor = '#101010';


//create open modal button
const btnOpenModal = document.createElement('button');
  btnOpenModal.type = 'button';
  btnOpenModal.id = 'btnOpenModal';
  btnOpenModal.innerText = 'Open modal'
  btnOpenModal.style.width = '12vw';
  btnOpenModal.style.height = '7vh';
  btnOpenModal.style.borderRadius = '7px';
  btnOpenModal.style.outline = 'none';
  btnOpenModal.style.textAlign = 'center';
  btnOpenModal.style.textTransform = 'uppercase';
  btnOpenModal.style.fontWeight = 'bold';


//modal window
const modalWindow = document.createElement('div');
  modalWindow.style.width = '40vw';
  modalWindow.style.height = '25vh';
  modalWindow.style.display = 'flex';
  modalWindow.style.alignItems = 'center';
  modalWindow.style.justifyContent = 'center';
  modalWindow.style.flexDirection = 'column';
  modalWindow.style.backgroundColor = '#FB580D';
  modalWindow.style.borderRadius = '8px';


//btn close for modal
const btnCloseModal = document.createElement('button');
  btnCloseModal.type = 'button';
  btnCloseModal.id = 'btnCloseModal';
  btnCloseModal.innerText = 'Close'
  btnCloseModal.style.width = '6vw';
  btnCloseModal.style.height = '4.7vh';
  btnCloseModal.style.borderRadius = '7px';
  btnCloseModal.style.outline = 'none';
  btnCloseModal.style.textAlign = 'center';
  btnCloseModal.style.fontWeight = 'bold';


//insert elements in document
document.body.append(btnOpenModal);
btnOpenModal.after(modalWindow);
modalWindow.append(btnCloseModal);