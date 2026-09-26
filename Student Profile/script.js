function displayProfile(){

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let marks = Number(document.getElementById("marks").value);

    let grade;

    if(marks >= 90){
        grade = "A+";
    }
    else if(marks >= 80){
        grade = "A";
    }
    else if(marks >= 70){
        grade = "B";
    }
    else if(marks >= 60){
        grade = "C";
    }
    else if(marks >= 50){
        grade = "D";
    }
    else{
        grade = "F";
    }

    document.getElementById("profile").innerHTML =
    "<h3>Student Profile</h3>" +
    "<p><b>Name:</b> " + name + "</p>" +
    "<p><b>Roll No:</b> " + roll + "</p>" +
    "<p><b>Marks:</b> " + marks + "</p>" +
    "<p><b>Grade:</b> " + grade + "</p>";
}