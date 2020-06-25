var i, j, k, userInfo, getEmpData, getUsername, getUserEmail, getUserpassword, gender, selected, count, option, getCheckboxValue, selectedCheckBox, numbers, mailformat, getOptionValue, getAllData, mergeData, errorSubmit, editUserData;

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
		errorSubmit = true;
	} else {
		document.getElementById('comment_error').textContent = '';
	}
	return errorSubmit;
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
		document.getElementById('user_detail').innerHTML += `<td>${mergeData.employeeId}</td><td>${mergeData.name}</td><td>${mergeData.email}</td><td>${mergeData.gender}</td><td>${mergeData.hobbies}</td><td>${mergeData.technology}</td><td class="text-center">${mergeData.framework}</td><td>${mergeData.comment}</td><td><a onclick="actionMemberModal('${k}')" data-toggle='modal' data-target='#deleteMemberModal'>Delete</a></td>`;
	}
}

function actionMemberModal(key) {
    document.getElementById('modal_status').innerHTML = `<div class="modal fade" id="deleteMemberModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	    <div class="modal-dialog" role="document">
	      <div class="modal-content">
	        <div class="modal-header">
	          <h5 class="modal-title" id="exampleModalLabel">Delete Member</h5>
	          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	            <span aria-hidden="true">&times;</span>
	          </button>
	        </div>
	        <div class="modal-body">
	         <p>Do you really want to remove member?</p>
	        </div>
	        <div class="modal-footer">
	          <button type="button" onclick="deleteMember('${key}')" class="btn btn-primary">Delete</button>
	        </div>
	      </div>
	    </div>
	</div>`;
}

function deleteMember(key) {
	userInfo.splice(key, 1);
	document.getElementsByClassName('close')[0].click();
	showUser();
	console.log(userInfo);
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

function editMember(key) {
	editUserData = userInfo[key];
	console.log(editUserData);
    document.getElementById('modal_status').innerHTML = `<div class="modal fade" id="editMemberModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	    <div class="modal-dialog" role="document">
	      <div class="modal-content">
	        <div class="modal-header">
	          <h5 class="modal-title" id="exampleModalLabel">Edit Details</h5>
	          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	            <span aria-hidden="true">&times;</span>
	          </button>
	        </div>
	        <div class="modal-body">
	        	<form class="form-custom">
			        <div class="form-group w-50 pr-2">
			          <label for="employee_id">Employee Id</label>
			          <input class="form-control" value="${editUserData.employeeId}" type="text" name="employee" id="edit_imp_id" onblur="checkValue()">
			          <span class="error" id="emp_error"></span>
			        </div>
			        <div class="form-group w-50 pl-2">
			          <label for="employee_name">Employee Name</label>
			          <input value="${editUserData.name}" class="form-control" type="text" name="name" id="edit_emp_name">
			          <span class="error" id="name_error"></span>
			        </div>
			        <div class="form-group w-50 pr-2">
			          <label for="employee_email">Employee Email</label>
			          <input value="${editUserData.email}" class="form-control" type="text" name="email" id="edit_emp_email" onblur="checkValue()">
			          <span class="error" id="email_error"></span>
			        </div>
			        <div class="form-group w-50 pl-2">
			          <label for="password">Password</label>
			          <input value="${editUserData.password}" class="form-control" type="password" name="password" id="edit_password">
			          <span class="error" id="pass_error"></span>
			        </div>

			        <div class="option-conatiner">
			          <div class="gender-section">
			            <div class="form-group input-group">
			              <h5>Select your gender</h5>
			              <div class="input-box">
			                <input type="radio" name="gender" value="male" id="edit_male">
			                <label for="edit_male">Male</label>
			              </div>
			              <div class="input-box">
			                <input type="radio" name="gender" value="female" id="edit_female">
			                <label for="edit_female">Female</label>
			              </div>
			              <div class="input-box">
			                <input type="radio" name="gender" value="other" id="edit_other">
			                <label for="edit_other">Other</label>
			              </div>
			            </div>
			            <span class="error" id="gender_error"></span>
			          </div>

			          <div class="form-group input-group">
			            <h5>Select your hobbies</h5>
			            <div class="w-100 d-flex justify-content-between">
			              <div class="input-box">
			                <input type="checkbox" name="hobbies" value="music" id="edit_music">
			                <label for="edit_music">Music</label>
			              </div>
			              <div class="input-box">
			                <input type="checkbox" name="hobbies" value="cricket" id="edit_cricket">
			                <label for="edit_cricket">Cricket</label>
			              </div>
			              <div class="input-box">
			                <input type="checkbox" name="hobbies" value="book" id="edit_book">
			                <label for="edit_book">Books</label>
			              </div>
			              <div class="input-box">
			                <input type="checkbox" name="hobbies" value="travel" id="edit_travel">
			                <label for="edit_travel">Travel</label>
			              </div>
			            </div>
			            <span class="error" id="hobbies_error"></span>
			          </div>

			          <div class="form-group input-group">
			            <h5>Select Technologies</h5>
			            <div class="select-items w-100" id="selectItem"><div class="dropdown bootstrap-select show-tick w-100"><select multiple="" data-style="bg-white rounded-pill px-4 py-3 shadow-sm " class="selectpicker w-100" id="technology" tabindex="-98">
			                <option>Node.js</option>
			                <option>PHP</option>
			                <option>Python</option>
			                <option>JavaScript</option>
			                <option>Dot Net</option>
			                <option>HTML</option>
			              </select><button type="button" class="btn dropdown-toggle bs-placeholder bg-white rounded-pill px-4 py-3 shadow-sm" data-toggle="dropdown" role="button" data-id="technology" title="Nothing selected"><div class="filter-option"><div class="filter-option-inner"><div class="filter-option-inner-inner">Nothing selected</div></div> </div></button><div class="dropdown-menu " role="combobox"><div class="inner show" role="listbox" aria-expanded="false" tabindex="-1"><ul class="dropdown-menu inner show"></ul></div></div></div></div>
			            <span class="error" id="tech_error"></span>
			          </div>
			        </div>

			          
			          <div class="d-flex align-items-start w-100">
			            <div class="form-group w-100" id="more_framework">
			              <label>Add Framework</label>
			              <input value="${editUserData.framework}" class="form-control w-100" type="text" name="framework" id="edit_framework">
			              <span class="error" id="framework_error"></span>
			            </div>
			          </div>

			          <div class="textarea-col">
			            <label for="comment">Add Comment</label>
			            <textarea class="form-control" id="edit_comment" rows="4">${editUserData.comment}</textarea>
			            <span class="error" id="comment_error"></span>
			          </div>
			          <div class="submit-btn mt-4">
			            <a id="form_submit" onclick="editSubmit()" class="btn btn-success">Submit Form</a>
			          </div>
			  	</form>
	        </div>
	      </div>
	    </div>
	</div>`;
}

function editSubmit() {
  console.log('Save');
}

