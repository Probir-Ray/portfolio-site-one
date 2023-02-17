
        (function() {
            emailjs.init("user_tAx2evroSRIx7Qek2cMed");
        })();

        window.onload = function() {
            document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault();
                this.contact_number.value = Math.random() * 100000 | 0;
                emailjs.sendForm('service_lfsjaxd', 'template_xeex2ho', '#contact-form', 'user_tAx2evroSRIx7Qek2cMed')
                    .then(function() {
                        alert('SUCCESS!');
                        location.reload();
                    }, function(error) {
                        alert('FAILED...', error);
                    });
            });
        }

        
    // AOS animation js
        AOS.init();

    // Testimonial
        $(".hover").mouseleave(
            function() {
            $(this).removeClass("hover");
            }
        );
  
    // Mixit up
    $('#mix-wrapper').mixItUp({
        load: {
            sort: 'order:asc'
        },
          animation: {
          effects: 'fade rotateZ(-180deg)',
          duration: 700
        },
        selectors: {
          target: '.mix-target',
          filter: '.filter-btn',
          sort: '.sort-btn'
        },
        callbacks: {
          onMixEnd: function(state){
            console.log(state)
          }
        }
      });