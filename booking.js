const scriptURL = 'https://script.google.com/macros/s/AKfycbzfbcNEXFEQDBWxdAt4RgfDHlUUP9enG1bBtwuy0LlorG-57Uw6qB5Yv7WkpVXcHun7/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
