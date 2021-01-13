const idGenerator = () => {
  const id = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById('newUserId').value = id;
}

const dateGenerator = () => {
  const date = new Date()
  const dateNow = `${date.getHours()}:${date.getMinutes()}     ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
  document.getElementById('newUserDate').value = dateNow;
}

document.getElementById('btnAddNewUser').addEventListener('click', () => {
  const userId = document.getElementById('newUserId').value;
  const userName = document.getElementById('newUserName');
  const userSurname = document.getElementById('newUserSurname');
  const userEmail = document.getElementById('newUserEmail');
  const userDate = document.getElementById('newUserDate');

  //obj for LS
  const objUser = {
    id: userId,
    name: userName.value,
    surname: userSurname.value,
    email: userEmail.value,
    date: userDate.value,
  }


  //adds data to localstorage
  if(userName.value != '' && userEmail.value != '') {
    try {
      localStorage.setItem(userId, JSON.stringify(objUser))
    } catch(e) {
      if(e == 'QUOTA_EXCEEDED_ERR') {
          alert('ERROR - your local storage was crowded')
    }}
  } else {alert('Not all fields are filled')}
  

  //update fields
  idGenerator()
  userName.value = '';
  userSurname.value = '';
  userEmail.value = '';
  dateGenerator()

})


class UserCell {
  constructor(lsUserId) {
    this.createCellElements(lsUserId)
  }

  createCellElements(lsUserId) {
    const user = JSON.parse(localStorage.getItem(lsUserId))

    const trUser = document.createElement('tr');      //tr cell
      trUser.className = 'trUser';
    
    const tdId = document.createElement('td');        //id cell
    const fieldId = document.createElement('input');
      fieldId.type = 'text';
      fieldId.value = user.id;
      fieldId.className = 'tdUser';
      fieldId.disabled = true;

    const tdName = document.createElement('td');        //name cell
    const fieldName = document.createElement('input');
      fieldName.type = 'text';
      fieldName.value = user.name;
      fieldName.className = 'tdUser';
      fieldName.disabled = true;

    const tdSurname = document.createElement('td');       //surname cell
    const fieldSurname = document.createElement('input');
      fieldSurname.type = 'text';
      fieldSurname.value = user.surname;
      fieldSurname.className = 'tdUser';
      fieldSurname.disabled = true;

    const tdEmail = document.createElement('td');       //email cell
    const fieldEmail = document.createElement('input');
      fieldEmail.type = 'text';
      fieldEmail.value = user.email;
      fieldEmail.className = 'tdUser';
      fieldEmail.disabled = true;

    const tdDate = document.createElement('td');        //date cell
    const fieldDate = document.createElement('input');
      fieldDate.type = 'text';
      fieldDate.value = user.date;
      fieldDate.className = 'tdUser';
      fieldDate.disabled = true;

    const tdBtnEdit = document.createElement('td');     //btn edit cell
    const btnEdit = document.createElement('button');
      btnEdit.type = 'button';
      btnEdit.className = 'btnEdit';
      btnEdit.innerText = 'Edit';

    const tdCheckbox = document.createElement('td');      //checkbox
    const fieldCheckbox = document.createElement('input');
      fieldCheckbox.type = 'checkbox';


    //insert element in document
    document.getElementById('tableUsers').append(trUser);
    trUser.append(tdId);  //id
      tdId.append(fieldId);
    tdId.after(tdName); //name
      tdName.append(fieldName);
    tdName.after(tdSurname);  //surname
      tdSurname.append(fieldSurname);
    tdSurname.after(tdEmail); //email
      tdEmail.append(fieldEmail);
    tdEmail.after(tdDate);  //date
      tdDate.append(fieldDate);
    tdDate.after(tdBtnEdit);  //edit
      tdBtnEdit.append(btnEdit);
    tdBtnEdit.after(tdCheckbox); //checkbox
      tdCheckbox.append(fieldCheckbox);
    
  }
}

window.onload = () => {
  idGenerator();
  dateGenerator();

  for(let i of Object.keys(localStorage)) {
    new UserCell(i)
  }

}