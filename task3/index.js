
class UserCell {
  constructor() {
    this.createCellElements()
  }

  createCellElements() {

    const trUser = document.createElement('tr');      //tr cell
      trUser.className = 'trUser';
    
    const tdId = document.createElement('td');        //id cell
    const fieldId = document.createElement('input');
      fieldId.type = 'number';
      fieldId.value = '';
      fieldId.className = 'tdUser';
      fieldId.disabled = true;

    const tdName = document.createElement('td');        //name cell
    const fieldName = document.createElement('input');
      fieldName.type = 'text';
      fieldName.value = '';
      fieldName.className = 'tdUser';
      fieldName.disabled = true;

    const tdSurname = document.createElement('td');       //surname cell
    const fieldSurname = document.createElement('input');
      fieldSurname.type = 'text';
      fieldSurname.value = '';
      fieldSurname.className = 'tdUser';
      fieldSurname.disabled = true;

    const tdEmail = document.createElement('td');       //email cell
    const fieldEmail = document.createElement('input');
      fieldEmail.type = 'text';
      fieldEmail.value = '';
      fieldEmail.className = 'tdUser';
      fieldEmail.disabled = true;

    const tdDate = document.createElement('td');        //date cell
    const fieldDate = document.createElement('input');
      fieldDate.type = 'date';
      fieldDate.value = '';
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
  new UserCell()
  new UserCell()
  new UserCell()
}    //temp