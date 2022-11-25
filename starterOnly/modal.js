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

// Event
first.addEventListener('blur', () =>
	validInputElement(first, checkFirst(first.value), errorElement.first)
)
first.addEventListener('input', () =>
	validInputElement(first, checkFirst(first.value), errorElement.first)
)
last.addEventListener('blur', () =>
	validInputElement(last, checkLast(last.value), errorElement.last)
)
last.addEventListener('input', () =>
	validInputElement(last, checkLast(last.value), errorElement.last)
)
email.addEventListener('blur', () =>
	validInputElement(email, checkEmail(email.value), errorElement.email)
)
email.addEventListener('input', () =>
	validInputElement(email, 	checkEmail(email.value), errorElement.email)
)
quantity.addEventListener('blur', () =>
	validInputElement(quantity, checkNumber(quantity.value), errorElement.quantity)
)
quantity.addEventListener('input', () =>
	validInputElement(quantity, checkNumber(quantity.value), errorElement.quantity)
)
terms.addEventListener('change', () =>
	validInputElement(terms, checkTerms(terms.checked), errorElement.terms)
)

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

// variable object error
const errorElement = {
	first: 'Veuillez entrer 2 caractères ou plus pour le champ du prenom.',
	last: 'Veuillez entrer 2 caractères ou plus pour le champ du nom.',
	email: 'Veuillez entrer une adresse emaail valide "exemple@exemple.fr".',
	birthdate: 'Vous devez entrer votre date de naissance et avoir 18 ans.',
	quantity: 'Veuillez entrer un nombre valide positif.',
	city: 'Vous devez choisir une option.',
	terms: 'Vous devez vérifier que vous acceptez les termes et conditions.',
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
	cities.forEach((city) => {
		if (city.checked) {
			return true
		}
	})
	return false
}

/**
 * Control validation terms
 * @param { term } checkbox.checked
 * @return { Boolean } is terms checked
 */
function checkTerms(term) {
	return term
}

/**
 * Apply error On DOM
 *
 * @param {Element} element
 * @param {String} textError
 */
function applyErrorViewInput(element, textError) {
	element.parentNode.setAttribute('data-error', textError)
	element.parentNode.setAttribute('data-error-visible', 'true')
}

/**
 * Remove error from DOM
 *
 * @param {Element} element
 */
function removeErrorViewInput(element) {
	element.parentNode.removeAttribute('data-error-visible')
	element.parentNode.removeAttribute('data-error')
}

/**
 * function validation form input eventlistener
 *
 * @param {Element} element
 * @param {Callback} cl function callback
 * @param {String} errorTxt in const errorElement
 */
function validInputElement(element, cl, errorTxt) {
	if (cl) {
		removeErrorViewInput(element)
	} else {
		applyErrorViewInput(element, errorTxt)
	}
}

// validate the form
function validate() {
	formData.forEach((form) => {
		form.removeAttribute('data-error')
		form.removeAttribute('data-error-visible')
	})
	if (!checkFirst(first.value)) {
		applyErrorViewInput(first, errorElement.first)
	} else if (!checkLast(last.value)) {
		applyErrorViewInput(last, errorElement.last)
	} else if (!checkEmail(email.value)) {
		applyErrorViewInput(email, errorElement.email)
	} else if (!checkBirthdate(birthdate.value)) {
		applyErrorViewInput(birthdate, errorElement.birthdate)
	} else if (!checkNumber(quantity.value)) {
		applyErrorViewInput(quantity, errorElement.quantity)
	} else if (!checkCity()) {
		applyErrorViewInput(cities[0], errorElement.city)
	} else if (!checkTerms(terms.checked)) {
		applyErrorViewInput(terms, errorElement.terms)
	} else {
		console.log('valider !!!! Bravo')
	}
}
