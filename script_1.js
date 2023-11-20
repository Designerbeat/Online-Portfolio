function submitToEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "Designer",
        password : "pr3d@r@pt0r42699",
        To: "hlumelo10000@gmail.com",
        From : document.getElementById("email").value,
        Subject : "Contact Form Enquiry",
        Body : document.getElementById("message").value

    }).then (message => alert("Successfully Submittion.")
    );
}