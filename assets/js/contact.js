/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
const sendEmail = (e)=>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('','template_u2flld1','#contact-form','').then(()=>{
        // Show sent message
        contactMessage.textContent='Message sent successfully ✅'

         // Remove message after five seconds
         setTimeout(()=>{
            contactMessage.textContent=''
         },5000)
      
         // Clear input fields
         contactForm.reset()
    },()=>{
        // Show error message
        contactMessage.textContent='Message not sent (service error) ❌'
        setTimeout(()=>{
            contactMessage.textContent=''
        },5000)
    })
}
contactForm.addEventListener('submit',sendEmail)
