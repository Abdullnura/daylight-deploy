// Animated Counter

    function counter(id, start, end, speed){
      let obj = document.getElementById(id);
      let current = start;

      let timer = setInterval(() => {
        current++;
        obj.textContent = current;

        if(current >= end){
          clearInterval(timer);
        }
      }, speed);
    }

    counter("projects", 0, 120, 20);
    counter("clients", 0, 85, 30);
    counter("traders", 0, 300, 10);


    // Contact Form

    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(e){
      e.preventDefault();

      alert("Message Sent Successfully!");
      form.reset();
    });