let credits = document.getElementById('credits');
let letters = document.getElementById('letter');
let button = document.getElementById('enter');
let student_gpa = 0.00;


let grades = {
    'A+': 4.00,
    'A': 3.8,
    'A-': 3.7,
    'B+': 3.3,
    'B': 3.00,
    'B-': 2.7,
    'C+': 2.3,
    'C': 2.00,
    'C-': 1.7,
    'D+': 1.3,
    'D': 1.00,
    'F': 0.00
};

for (const key in grades) {
    if (letters == key) {
        letters = grades[key]
    }
}

const total = function () {
    total_cred = [];
    i = document.querySelectorAll("#credits")
    for (var x = 0; x < i.length; x++) {
        s = parseInt(i[x].value);
        total_cred.push(s);
        total_cred = total_cred.filter(Number);
    }
    let letter = document.querySelectorAll('#letter');
    total_letter = [];
    for (var y = 0; y < letter.length; y++) {
        total_letter.push(letter[y].value);
    }
    total_letter = total_letter.filter(item => item !== 'option');
    for (let a = 0; a < total_letter.length; a++) {
        for (let key in grades) {
            if (total_letter[a] == key) {
                total_letter[a] = grades[key];
            }
        }
    }

    var arrayOfObject = total_letter.map(function (value, index) {
        return [value, total_cred[index]]
    });


    for (let a = 0; a < arrayOfObject.length; a++) {
        let t = ((arrayOfObject[0][0] * arrayOfObject[0][0 + 1]));
        student_gpa += t;
    }

    let gradePoints = 0
    for (let c of arrayOfObject) {
        gradePoints += c[0] * c[1]
    }

    let hours = 0;
    for (let d of total_cred) {
        hours += d
    }

    let real_gpa = 0;
    real_gpa += gradePoints / hours;
    now = 'GPA: ' + real_gpa.toFixed(2);
    document.getElementById('show').style.visibility = 'visibile';
    document.getElementById('show').innerHTML = now;
    return false;
}

const clear = function () {

    const t = document.querySelectorAll("#credits");
    const u = document.querySelectorAll('#letter');
    for (let g = 0; g < t.length; g++) {
        t[g].value = "";
    }
    for (let a = 0; a < u.length; a++) {
        u[a].value = "Any";
    }
    document.getElementById('show').style.visibility = 'hidden';
    window.location.reload();

}
document.getElementById("remove").addEventListener("click", clear);






