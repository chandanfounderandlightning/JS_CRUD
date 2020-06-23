var i, j, k, userInfo, getEmpData, getUsername, getUserEmail, getUserpassword, gender, selected, count, option, getCheckboxValue, selectedCheckBox, numbers, mailformat, getOptionValue, getAllData, mergeData, errorSubmit;

selected = [];
count = 0;
userInfo = [];
numbers = /^[-+]?[0-9]+$/;
mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function getInputValues() {
	return {
		getEmpData: document.getElementById('employee_id').value,
		getUsername: document.getElementById('employee_name').value,
		getUserEmail: document.getElementById('employee_email').value,
		getUserpassword: document.getElementById('password').value,
		addFrameWork: document.getElementById(`framework-${count}`).value,
		addComment: document.getElementById('comment').value,
	}
}

function formValidation() {
	errorSubmit = false;
	const {getEmpData, getUsername, getUserEmail, getUserpassword, addFrameWork, addComment} = getInputValues();
	if(getEmpData == null || getEmpData == '') {
		document.getElementById('emp_error').textContent = 'Employee id is mandatory';
		errorSubmit = true;
	} else {
		document.getElementById('emp_error').textContent = '';
	}

	if(getUsername == null || getUsername == '') {
		document.getElementById('name_error').textContent = 'Name is mandatory';
		errorSubmit = true;
	} else {
		document.getElementById('name_error').textContent = '';
	}

	if(getUserEmail.match(mailformat)) {
		document.getElementById('email_error').textContent = '';
	} else {
		document.getElementById('email_error').textContent = 'You have entered an invalid email address!';
		errorSubmit = true;
	}

	if(getUserpassword.length < 6) {
		document.getElementById('pass_error').textContent = 'Password must be at least 6 char long';
		errorSubmit = true;
	} else {
		document.getElementById('pass_error').textContent = '';
	}

	if(document.querySelector('input[name=gender]').checked) {
		document.getElementById('gender_error').textContent = '';
	} else {
		document.getElementById('gender_error').textContent = 'Please select gender';
		errorSubmit = true;
	}

	if(addFrameWork == '') {
		document.getElementById('framework_error').textContent = 'This field id is mandatory';
		errorSubmit = true;
	} else {
		document.getElementById('framework_error').textContent = '';
	}

	if(addComment == '') {
		document.getElementById('comment_error').textContent = 'This field id is mandatory';
		return errorSubmit = true;
	} else {
		document.getElementById('comment_error').textContent = '';
	}
}

function TechDropdownCheck() {
		document.getElementById('selectItem').innerHTML = '';
		document.getElementById('selectItem').innerHTML = `<select multiple data-style='bg-white rounded-pill px-4 py-3 shadow-sm ' class='selectpicker w-100' id='technology'>
                <option>Node.js</option>
                <option>PHP</option>
                <option>Python</option>
                <option>JavaScript</option>
                <option>Dot Net</option>
                <option>HTML</option>
              </select>`;
}
TechDropdownCheck();

function collectUserInfo() {
	const {getEmpData, getUsername, getUserEmail, getUserpassword, addFrameWork, addComment} = getInputValues();

	if(formValidation()) {
		return;
	}

	gender = document.querySelector('input[name=gender]:checked').value;

	// Get Checkbox Button Value Functionality
	getCheckboxValue = document.getElementsByName('hobbies');
	selectedCheckBox = "";
	for(j = 0; j < getCheckboxValue.length; j++) {
		if(getCheckboxValue[j].type == 'checkbox' && getCheckboxValue[j].checked == true)
			selectedCheckBox += getCheckboxValue[j].value + ' ';
	}
	// Get Checkbox Button Value Functionality

	// Get Multi select Value Functionality
	const selected = [];
	for (option of document.getElementById('technology').options) {
    	if (option.selected) {
    		selected.push(option.value);
    	}
  	}
  	getOptionValue = selected.toString();
	// Get Multi select Value Functionality

	getAllData = {employeeId: getEmpData, name: getUsername, email: getUserEmail, password: getUserpassword, framework: addFrameWork, comment: addComment, gender: gender, technology: getOptionValue, hobbies: selectedCheckBox };

	if(checkValue()) {
		return;
	}
	userInfo.push(getAllData);
	showUser();
	emptyData();
	$('.selectpicker').selectpicker('deselectAll');
}

function showUser() {
	document.getElementById('user_detail').innerHTML = ``;
	for(k = 0; k < userInfo.length; k++) {
		mergeData = userInfo[k];
		document.getElementById('user_detail').innerHTML += `<td>${mergeData.employeeId}</td><td>${mergeData.name}</td><td>${mergeData.email}</td><td>${mergeData.gender}</td><td>${mergeData.hobbies}</td><td>${mergeData.technology}</td><td class="text-center">${mergeData.framework}</td><td>${mergeData.comment}</td>`;
	}
}

function checkValue() {
	const {getEmpData, getUserEmail} = getInputValues();
	for(k = 0; k < userInfo.length; k++) {
		mergeData = userInfo[k];
		if(getEmpData === mergeData.employeeId) {
			document.getElementById('emp_error').textContent = 'Employee id is already exist';
			return true;
		} else {
			document.getElementById('emp_error').textContent = '';
		}
		if(getUserEmail === mergeData.email) {
			document.getElementById('email_error').textContent = 'Email address is already exist';
			return true;
		} else {
			document.getElementById('email_error').textContent = '';
		}
	}
}

function addMoreFramework() {
	document.getElementById('more_framework').innerHTML += `<input class='form-control mt-3' type='text' name='framework' id='framework-${++count}' />`;
}

function emptyData() {
	document.getElementById('employee_id').value = '';
	document.getElementById('employee_name').value = '';
	document.getElementById('employee_email').value = '';
	document.getElementById('password').value = '';
	document.getElementById(`framework-${count}`).value = '';
	document.getElementById('comment').value = '';
	document.querySelector('input[name=gender]').checked = false;

	for(j = 0; j < getCheckboxValue.length; j++) {
		getCheckboxValue[j].checked = false;
	}
}
