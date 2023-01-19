  function formsubmission() {
        const name = document.submission.name.value;
        const email = document.submission.email.value;
        const subject = document.submission.subject.value;
        const message = document.submission.message.value;

        const regex =
          /^([a-zA-Z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/gm;
        var err = document.getElementById("error-message");

        if (name == "") {
          err.innerHTML = "please enter name";

          return false;
        }
        if (name.length < 5) {
          err.innerHTML = "Name Should Contain five Elements ";
          return false;
        }

        if (email == "") {
          err.innerHTML = "please enter email";
          return false;
        }

        if (regex.test(email) == false) {
          err.innerHTML = "Invalid Email";
          return false;
        }

        if (subject.length < 6) {
          err.innerHTML = "Should Contain 6 character";
          return false;
        }

        if (subject.length > 15) {
          err.innerHTML = "limit exceed";
          return false;
        }

        if (message.length < 20) {
          err.innerHTML = "Should Contain 20 character";
          return false;
        }

        if (message.length > 200) {
          err.innerHTML = "Exceeds Limit";
          return false;
        }
        

        return true;
      }

      $("#submit-form").submit((e) => {
        e.preventDefault();
        var check=formsubmission()
        if(check){
          $.ajax({
          url: "https://script.google.com/macros/s/AKfycbwFDlutUl8F4A312OPNkIPY0qWC70vbUr5bfJjRUpvv2pqJGiKRNA-W9pQwju8uFMqs/exec",
          data: $("#submit-form").serialize(),
          method: "post",
          success: function (response) {
            alert("Form submitted successfully");
            window.location.reload();
            //window.location.href="https://google.com"
          },
          error: function (err) {
            alert("Something Error");
          },
        });
        }
        
      });
  