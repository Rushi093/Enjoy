// const scriptURL = 'https://script.google.com/macros/s/AKfycbzfbcNEXFEQDBWxdAt4RgfDHlUUP9enG1bBtwuy0LlorG-57Uw6qB5Yv7WkpVXcHun7/exec'

// const form = document.forms['contact-form']

// form.addEventListener('submit', e => {
  
//   e.preventDefault()
  
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//   .then(response => alert("Thank you! Form is submitted" ))
//   .then(() => { window.location.reload(); })
//   .catch(error => console.error('Error!', error.message))
// })



const scriptURL = 'https://script.google.com/macros/s/AKfycbxggF-CN5VBiM1aL-OtKdF-ignJgEH14V_R1fAnPu6gUfti_dUWyKVm9YAiQqZNkgzQ/exec';
const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('form-response');

form.addEventListener('submit', e => {
  e.preventDefault();

  // Instant animation
  responseMessage.textContent = "Submitting...";
  responseMessage.style.backgroundColor = "#fff3cd";
  responseMessage.style.color = "#856404";
  responseMessage.classList.remove('hidden');
  responseMessage.classList.add('show');

  // Send request in background
  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(() => {
    // Change to success message
    responseMessage.textContent = "✅ Thank you! Your form was submitted.";
    responseMessage.style.backgroundColor = "#d4edda";
    responseMessage.style.color = "#155724";
    form.reset();
  })
  .catch(() => {
    // Change to error message
    responseMessage.textContent = "❌ Error submitting the form. Please try again.";
    responseMessage.style.backgroundColor = "#f8d7da";
    responseMessage.style.color = "#721c24";
  })
  .finally(() => {
    // Hide after 4 seconds
    setTimeout(() => {
      responseMessage.classList.remove('show');
      responseMessage.classList.add('hidden');
    }, 4000);
  });
});
