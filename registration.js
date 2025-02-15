function fullName() {
    const name = document.getElementById("fullname").value;
    alert("Your name is: " + name);

    const nameParts = name.split(" ");
    if (nameParts.length < 3) {
        alert("Please enter your full name (First, Middle, Last).");
        return;
    }

    const firstname = nameParts[0];
    const middlename = nameParts[1];
    const lastname = nameParts[2];

    alert("First name is: " + firstname);
    alert("Middle name is: " + middlename);
    alert("Last name is: " + lastname);
}

function aadhar() {
    let num4 = document.getElementById("aadhar").value;
    if (num4.length !== 12) {
        alert("Invalid number");
    } else {
        alert("Aadhar number is: " + num4);
    }
}

function pan() {
    let num3 = document.getElementById("pan").value;
    if (num3.length !== 10) {
        alert("Invalid number");
    } else {
        document.getElementById("pan").value = num3.toUpperCase();
        alert("PAN card number is: " + num3.toUpperCase());
        return true;
    }
}

function mobile() {
    const mobile = document.getElementById("mobile").value;
    alert("Mobile No is: " + mobile);
}

function dateofbirth() {
    const dateofbirth = document.getElementById("dateofbirth").value;
    alert("Date of birth is: " + dateofbirth);
}

function marks() {
    const marks = [
        parseInt(document.getElementById('subject1').value),
        parseInt(document.getElementById('subject2').value),
        parseInt(document.getElementById('subject3').value),
        parseInt(document.getElementById('subject4').value),
        parseInt(document.getElementById('subject5').value),
        parseInt(document.getElementById('subject6').value),
    ];
    marks.sort((a, b) => b - a);

    const bestFiveTotal = marks.slice(0, 5).reduce((sum, mark) => sum + mark, 0);

    const percentage = bestFiveTotal / 5;

    alert("Percentage is: " + percentage + "%");
    console.log("Percentage is: " + percentage + "%");
}

function submitForm() {
    fullName();
    aadhar();
    pan();
    mobile();
    dateofbirth();
    marks();
}