/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
  const starryBackground = document.querySelector('.starry-background');

  for (let i = 0; i < 100; i++) { // Number of stars
      const star = document.createElement('div');
      star.classList.add('star');
  
      // Randomize star positions and animation duration
      star.style.left = `${Math.random() * 100}vw`; // Horizontal position
      star.style.top = `${Math.random() * 100}vh`; // Initial vertical position
      star.style.animationDuration = `${5 + Math.random() * 5}s`; // Vary animation duration
      star.style.animationDelay = `${Math.random() * 5}s`; // Vary animation start time
  
      starryBackground.appendChild(star);
  }
  

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";

    } else {

      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";

    }
  }


/* ----- TYPING EFFECT ----- */
 var typingEffect = new Typed(".typedText",{
    strings : ["Designer","Developer"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

// ScrollReveal for the Education Section - Alternating Animation
ScrollReveal().reveal('.education-box:nth-child(1)', {
  origin: 'left', // Slides in from the left
  distance: '80px',
  duration: 1000,
  reset: true,
});

ScrollReveal().reveal('.education-box:nth-child(2)', {
  origin: 'right', // Slides in from the right
  distance: '80px',
  duration: 1000,
  reset: true,
});
ScrollReveal().reveal('.education-box:nth-child(1)', {
  origin: 'left',
  distance: '80px',
  duration: 1200,
  reset: true,
  rotate: { x: 0, y: 20, z: 0 }, // Adds slight rotation
});

ScrollReveal().reveal('.education-box:nth-child(2)', {
  origin: 'right',
  distance: '80px',
  duration: 1200,
  reset: true,
  rotate: { x: 0, y: -20, z: 0 }, // Adds slight rotation in the opposite direction
});



/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})
// Initialize EmailJS with your User ID
emailjs.init('xV5rtat7iHEbxGrNB'); // Replace with your actual User ID

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Log the form data for debugging
    console.log('Form Data:', {
        from_name: name,
        from_email: email,
        message: message
    });

    // Send the form data to your email using EmailJS
    emailjs.send('service_lo3uxxz', 'template_4so58eq', {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
        // Success callback
        console.log('SUCCESS', response);
        document.getElementById('status-message').innerHTML = "Message sent successfully!";
        document.getElementById('status-message').style.color = "green";
    }, function(error) {
        // Error callback
        console.log('FAILED', error); // Log the error details for debugging
        document.getElementById('status-message').innerHTML = "Failed to send message. Please try again.";
        document.getElementById('status-message').style.color = "red";
    });
});





/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)
