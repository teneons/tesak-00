const idGenerator = () => {
  const id = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById('newUserId').value = id;
}

const dateGenerator = () => {
  const date = new Date()
  const dateNow = `${date.getHours()}:${date.getMinutes()}     ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
  document.getElementById('newUserDate').value = dateNow;
}


//add user
document.getElementById('btnAddNewUser').addEventListener('click', () => {
  var access = true;
  const userId = document.getElementById('newUserId').value;
  const userName = document.getElementById('newUserName');
  const userSurname = document.getElementById('newUserSurname');
  const userEmail = document.getElementById('newUserEmail');
    const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(regEmail.test(userEmail.value) === false) {
      access = false;
      alert('Bad email');
    }
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
    console.log(access)
    if(access) {
      try {
        localStorage.setItem(userId, JSON.stringify(objUser))
      } catch(e) {
        if(e == 'QUOTA_EXCEEDED_ERR') {
            alert('ERROR - your local storage was crowded')
      }}
    } else alert('Сorrect mistakes')
  } else {alert('Not all fields are filled')}
  

  //update fields
  idGenerator();
  userName.value = '';
  userSurname.value = '';
  userEmail.value = '';
  dateGenerator();

  window.location.reload();

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
      fieldName.classList.add('tdUser', user.id);
      fieldName.disabled = true;

    const tdSurname = document.createElement('td');       //surname cell
    const fieldSurname = document.createElement('input');
      fieldSurname.type = 'text';
      fieldSurname.value = user.surname;
      fieldSurname.classList.add('tdUser', user.id);
      fieldSurname.disabled = true;

    const tdEmail = document.createElement('td');       //email cell
    const fieldEmail = document.createElement('input');
      fieldEmail.type = 'text';
      fieldEmail.value = user.email;
      fieldEmail.classList.add('tdUser', user.id);
      fieldEmail.disabled = true;

    const tdDate = document.createElement('td');        //date cell
    const fieldDate = document.createElement('input');
      fieldDate.type = 'text';
      fieldDate.value = user.date;
      fieldDate.classList.add('tdUser', user.id);
      fieldDate.disabled = true;

    const tdBtnEdit = document.createElement('td');     //btn edit cell
    const btnEdit = document.createElement('button');
      btnEdit.type = 'button';
      btnEdit.className = 'btnEdit';
      btnEdit.innerText = 'Edit';
      btnEdit.name = user.id;
      btnEdit.display = 'inline';

    const tdCheckbox = document.createElement('td');      //checkbox
    const fieldCheckbox = document.createElement('input');
      fieldCheckbox.type = 'checkbox';
      fieldCheckbox.className = 'chbox';
      fieldCheckbox.name = user.id;


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


    btnEdit.addEventListener('click', () => {
      this.editFields(btnEdit.name, btnEdit, user.id);
      btnEdit.style.display = 'none'; //hide btn edit
    })
  }

  //edit
  editFields(fieldName, btnEdt, id) {

    //create btn edit
    const btnSave = document.createElement('button');
      btnSave.type = 'button';
      btnSave.innerText = 'Save';
    btnEdt.after(btnSave)

    const inputs = document.getElementsByClassName(fieldName);    //gets data from all inputs
    for(const i of inputs) i.disabled = false;    //turn off disabled

    btnSave.addEventListener('click', () => {
      //generation obj with new data
      let newObj = {
        id: id,
        name: inputs[0].value,
        surname: inputs[1].value,
        email: inputs[2].value,
        date: inputs[3].value,
      }

      localStorage.setItem(id, JSON.stringify(newObj));   //new data rewrite in local storage

      for(const i of inputs) i.disabled = true;    //turn off disabled
      btnSave.remove();
      btnEdt.style.display = 'inline';  //show btn edit
    });
  }

}

//delete
document.getElementById('btnDelete').addEventListener('click', () => {
  const chbox = document.getElementsByClassName('chbox');

  for(const i of chbox) {
    if(i.checked === true) {
      localStorage.removeItem(i.name)
    }
  }

  window.location.reload();
})

window.onload = () => {
  idGenerator();
  dateGenerator();

  for(let i of Object.keys(localStorage)) {
    new UserCell(i)
  }

}