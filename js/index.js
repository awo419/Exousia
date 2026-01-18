/********************typing animation----------------- */
var typed = new Typed(".typing",{
    strings:["","Web Designer","Graphic Designer","Web Developer","Youtuber","Freelancer","Digital Marketer","Product Manager"],
    typeSpeed:200,
    BackSpeed:150,
    loop:true
})

/*----------------- mobile nav toggler (show/hide aside) -------------*/
const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
const mainContent = document.querySelector(".main-content");
if(navToggler){
    navToggler.addEventListener("click", () =>{
        aside.classList.toggle("open");
        mainContent.classList.toggle("open");
    })
}

// close aside on nav link click (mobile)
document.querySelectorAll('.nav li a').forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth <= 768){
            aside.classList.remove('open');
            mainContent.classList.remove('open');
        }
    })
})

// Initialize EmailJS
emailjs.init("NiRDoeRZq25MWW6E1");

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Send email
    emailjs.sendForm('service_8cu6w8d', 'template_9s265yb', this)
        .then(function() {
            alert('Message sent successfully!');
            // Reset form
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Failed to send message. Please try again.');
            console.log('FAILED...', error);
        });
});