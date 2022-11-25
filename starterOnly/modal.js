function editNav() {
	var x = document.getElementById('myTopnav')
	if (x.className === 'topnav') {
		x.className += ' responsive'
	} else {
		x.className = 'topnav'
	}
}

// DOM Elements
const modalbg = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')
const modalClose = document.querySelector('.close')
// DOM Element for validation variable
const first = document.querySelector('#first')
const last = document.querySelector('#last')
const email = document.querySelector('#email')
const birthdate = document.querySelector('#birthdate')
const quantity = document.querySelector('#quantity')
const cities = document.querySelectorAll('input[name="location"]')
const terms = document.querySelector('#checkbox1')
// DOM Element Form
const submitForm = document.querySelector('.btn-submit')
const form = document.querySelector('form')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))
modalClose.addEventListener('click', closeModal)
// launch modal form
function launchModal() {
	modalbg.style.display = 'block'
}
// Close Modal form
function closeModal() {
	modalbg.style.display = 'none'
}

//Prevent send form
form.addEventListener('submit', handleForm)
function handleForm(e) {
	e.preventDefault()
}

/**
 * Test last and first up 2 character
 * @param {string} name
 * @return {boolean}
 */
function testName(name) {
	return /^[a-zA-Z]{2,}/.test(name)
}
/**
 * Test email
 * @param {string} email
 * @returns {boolean}
 */
function testEmail(email) {
	return /^[\w\.-]+@([\w-]+\.)+[\w-]{2,3}$/.test(email)
}
/**
 * Test number
 * @param {number} number
 * @returns {boolean}
 */
function testNumber(number) {
	return /^[0-9]+$/.test(number)
}

/**
 * Control validation first
 * @param { String } firstname
 * @return { Boolean }
 */
function checkFirst(firstname) {
	return testName(firstname)
}

/**
 * Control validation last
 * @param { String } lastname
 * @return { Boolean }
 */
function checkLast(lastname) {
	return testName(lastname)
}

/**
 * Control validation email
 * @param { String } email
 * @return { Boolean }
 */
function checkEmail(email) {
	return testEmail(email)
}

/**
 * Control number
 * @param { Number } num
 * @return { Boolean }
 */
function checkNumber(num) {
	return testNumber(num)
}

/**
 * Control birthdate and if up 18 old
 * @param { Date } birthdate
 * @return { Boolean } false are date is invalid or < 18
 */
function checkBirthdate(birthdate) {
	const date = new Date()
	const year = date.getFullYear()
	const birth = new Date(birthdate.value)
	if (birth == 'Invalid Date') {
		return false
	}
	const birthYear = birth.getFullYear()
	if (year - birthYear >= 18) {
		return true
	} else {
		return false
	}
}

/**
 * Control Location city
 * @return {Boolean} if city is checked
 */
function checkCity() {
	let checked = false
	cities.forEach((city) => {
		if (city.checked) {
			checked = true
		}
	})
	return checked
}

/**
 * Control validation terms
 * @param { term } checkbox.checked
 * @return { Boolean } is terms checked
 */
function checkTerms(term) {
	return term
}
