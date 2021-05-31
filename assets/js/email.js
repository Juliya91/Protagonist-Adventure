//Code is taken from Code Institute Lesson "Connecting To The EmailJS Service Using Their SDK" & edited slightly

function sendMail(contactForm) {
    var templateParams = {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "feedback_info": contactForm.feedbackinfo.value
    };
    emailjs.send('default_service', 'feedback', templateParams)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });
    return false;
}