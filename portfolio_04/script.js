document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else {
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            
        
            document.querySelector('.cross').style.display = 'inline'
        
        },100 );
    }
})
function changeBackground(color) {
    document.getElementsByClassName('.sidebar').style.background = color;
 }
 
 window.addEventListener("load",function() { changeBackground('#717070') });

function changeBackground(color) {
    document.body.style.background = color;
 }
 
window.addEventListener("load", function () { changeBackground('#FDF5DF') });



function contactValidation() {
    if (document.contactForm.firstName.value == "") {
        alert("Please Enter your first name!! ");
        document.contactForm.firstName.focus();
        return false;
    
    }
    if (document.contactForm.lastName.value == "") {
        alert("Please enter your last name!!");
        document.contactForm.lastName.focus();
        return false;
    }
    

    

    if (document.contactForm.EMail.value == "") {
        {
            alert("Please enter email!!");
            document.contactForm.EMail.focus();
            return false;
        }
        function validateEmail() {

            var emailID = document.contactForm.EMail.value;

            atpos = emailID.indexOf("@");

            dotpos = emailID.lastIndexOf(".");

            if (atpos < 1 || (dotpos - atpos < 2)) {

                alert("Please enter correct email ID");

                document.contactForm.EMail.focus();

                return false;

            }

            return (true);
        }
    }
    
   
    
}
$("#submitForm").click(function() {
    alert("The Form has been Submitted.");
});



// $("#submitForm").click(function() {
//     alert("The Form has been Submitted.");
// });