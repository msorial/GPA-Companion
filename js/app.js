var counter = 1;
var HScounter = 1;

// Function Creates new Course Input and Increments Placeholder +1
(function() {
  var addCourseButton = document.getElementById("addCourse-button");
  var courseInput = document.getElementById("course-input");
  counter++;

  var addCourse = function() {
    var input = document.createElement("input");
    var space = document.createElement("br");
    var space2 = document.createElement("br");

    input.type = "text";
    input.placeholder = "Course #" + counter;

    courseInput.appendChild(input);
    courseInput.appendChild(space);
    courseInput.appendChild(space2);
  };

  if (addCourseButton) {
    addCourseButton.addEventListener(
      "click",
      function() {
        addCourse();
      }.bind(this)
    );
  }
})();

// Function Creates new Grade Select and Increments ID by +1
(function() {
  var addCourseButton = document.getElementById("addCourse-button");
  var gradeInput = document.getElementById("grade-input");

  var addGrade = function() {
    var select = document.createElement("select");
    var optPH = document.createElement("option");
    var optA = document.createElement("option");
    var optAM = document.createElement("option");
    var optBP = document.createElement("option");
    var optB = document.createElement("option");
    var optBM = document.createElement("option");
    var optCP = document.createElement("option");
    var optC = document.createElement("option");
    var optCM = document.createElement("option");
    var optDP = document.createElement("option");
    var optD = document.createElement("option");
    var optDM = document.createElement("option");
    var optF = document.createElement("option");

    optPH.value = "";
    optPH.text = "Grade";
    optPH.hidden = true;

    optA.value = "4.0";
    optA.text = "A";

    optAM.value = "3.7";
    optAM.text = "A-";

    optBP.value = "3.3";
    optBP.text = "B+";

    optB.value = "3.0";
    optB.text = "B";

    optBM.value = "2.7";
    optBM.text = "B-";

    optCP.value = "2.3";
    optCP.text = "C+";

    optC.value = "2.0";
    optC.text = "C";

    optCM.value = "1.7";
    optCM.text = "C-";

    optDP.value = "1.3";
    optDP.text = "D+";

    optD.value = "1.0";
    optD.text = "D";

    optDM.value = "0.7";
    optDM.text = "D-";

    optF.value = "0.0";
    optF.text = "F";

    select.add(optPH, null);
    select.add(optA, null);
    select.add(optAM, null);
    select.add(optBP, null);
    select.add(optB, null);
    select.add(optBM, null);
    select.add(optCP, null);
    select.add(optC, null);
    select.add(optCM, null);
    select.add(optDP, null);
    select.add(optD, null);
    select.add(optDM, null);
    select.add(optF, null);

    select.placeholder = "Grade";
    select.id = "grade" + counter;

    var space = document.createElement("br");
    var space2 = document.createElement("br");

    gradeInput.appendChild(select);
    gradeInput.appendChild(space);
    gradeInput.appendChild(space2);
  };

  if (addCourseButton) {
    addCourseButton.addEventListener(
      "click",
      function() {
        addGrade();
      }.bind(this)
    );
  }
})();

// Function Creates new Credit Input and Increments ID by +1
(function() {
  var addCourseButton = document.getElementById("addCourse-button");
  var creditInput = document.getElementById("credit-input");

  var addCredit = function() {
    var input = document.createElement("input");
    var space = document.createElement("br");
    var space2 = document.createElement("br");

    input.id = "credit" + counter;
    input.type = "text";
    input.placeholder = "Credits";

    creditInput.appendChild(input);
    creditInput.appendChild(space);
    creditInput.appendChild(space2);
  };

  if (addCourseButton) {
    addCourseButton.addEventListener(
      "click",
      function() {
        addCredit();
      }.bind(this)
    );
  }
})();

// Function Calculates College GPA
function calculateCollegeGPA() {
  var sum = 0;
  var creditSums = 0;
  var grades = [];
  var credits = [];
  var finalGPA = 0;

  var i;

  for (i = 1; i < counter + 1; i++) {
    if (document.getElementById("grade" + i).value !== "") {
      grades.push(parseFloat(document.getElementById("grade" + i).value));
    }

    if (document.getElementById("credit" + i).value !== "") {
      credits.push(parseFloat(document.getElementById("credit" + i).value));
    }
  }

  for (i = 0; i < credits.length; i++) {
    sum = sum + credits[i];
    creditSums = creditSums + grades[i] * credits[i];
  }

  finalGPA = creditSums / sum;

  document.getElementById("gpa-output").innerHTML = finalGPA.toFixed(2);
}

// Function Creates new Course Input and Increments Placeholder +1 HIGHSCHOOL
(function() {
  var addCourseHSButton = document.getElementById("addCourseHS-button");
  var hsCourseInput = document.getElementById("hsCourse-input");

  var addHSCourse = function() {
    HScounter++;
    var input = document.createElement("input");
    var space = document.createElement("br");
    var space2 = document.createElement("br");

    input.type = "text";
    input.placeholder = "Course #" + HScounter;

    hsCourseInput.appendChild(input);
    hsCourseInput.appendChild(space);
    hsCourseInput.appendChild(space2);
  };

  if (addCourseHSButton) {
    addCourseHSButton.addEventListener(
      "click",
      function() {
        addHSCourse();
      }.bind(this)
    );
  }
})();

// Function Creates new Grade Select and Increments ID by +1 HIGHSCHOOL
(function() {
  var addCourseHSButton = document.getElementById("addCourseHS-button");
  var hsGradeInput = document.getElementById("hsGrade-input");

  var addHSGrade = function() {
    var select = document.createElement("select");
    var optPH = document.createElement("option");
    var optA = document.createElement("option");
    var optAM = document.createElement("option");
    var optBP = document.createElement("option");
    var optB = document.createElement("option");
    var optBM = document.createElement("option");
    var optCP = document.createElement("option");
    var optC = document.createElement("option");
    var optCM = document.createElement("option");
    var optDP = document.createElement("option");
    var optD = document.createElement("option");
    var optDM = document.createElement("option");
    var optF = document.createElement("option");

    optPH.value = "";
    optPH.text = "Grade";
    optPH.hidden = true;

    optA.value = "4.0";
    optA.text = "A";

    optAM.value = "3.7";
    optAM.text = "A-";

    optBP.value = "3.3";
    optBP.text = "B+";

    optB.value = "3.0";
    optB.text = "B";

    optBM.value = "2.7";
    optBM.text = "B-";

    optCP.value = "2.3";
    optCP.text = "C+";

    optC.value = "2.0";
    optC.text = "C";

    optCM.value = "1.7";
    optCM.text = "C-";

    optDP.value = "1.3";
    optDP.text = "D+";

    optD.value = "1.0";
    optD.text = "D";

    optDM.value = "0.7";
    optDM.text = "D-";

    optF.value = "0.0";
    optF.text = "F";

    select.add(optPH, null);
    select.add(optA, null);
    select.add(optAM, null);
    select.add(optBP, null);
    select.add(optB, null);
    select.add(optBM, null);
    select.add(optCP, null);
    select.add(optC, null);
    select.add(optCM, null);
    select.add(optDP, null);
    select.add(optD, null);
    select.add(optDM, null);
    select.add(optF, null);

    select.placeholder = "Grade";
    select.id = "hsGrade" + HScounter;

    var space = document.createElement("br");
    var space2 = document.createElement("br");

    hsGradeInput.appendChild(select);
    hsGradeInput.appendChild(space);
    hsGradeInput.appendChild(space2);
  };

  if (addCourseHSButton) {
    addCourseHSButton.addEventListener(
      "click",
      function() {
        addHSGrade();
      }.bind(this)
    );
  }
})();

// Function Creates new Credit Input and Increments ID by +1 HIGHSCHOOL
(function() {
  var addCourseHSButton = document.getElementById("addCourseHS-button");
  var hsCreditInput = document.getElementById("hsCredit-input");

  var addHSCredit = function() {
    var input = document.createElement("input");
    var space = document.createElement("br");
    var space2 = document.createElement("br");

    input.id = "hsCredit" + HScounter;
    input.type = "text";
    input.placeholder = "Credits";

    hsCreditInput.appendChild(input);
    hsCreditInput.appendChild(space);
    hsCreditInput.appendChild(space2);
  };

  if (addCourseHSButton) {
    addCourseHSButton.addEventListener(
      "click",
      function() {
        addHSCredit();
      }.bind(this)
    );
  }
})();

// Function Creates new Course Type Select and Increments ID by +1 HIGHSCHOOL
(function() {
  var addCourseHSButton = document.getElementById("addCourseHS-button");
  var courseTypeInput = document.getElementById("courseType-input");

  var addCourseType = function() {
    var select = document.createElement("select");
    var optPH = document.createElement("option");
    var optR = document.createElement("option");
    var optH = document.createElement("option");
    var optAP = document.createElement("option");
    var optC = document.createElement("option");

    optPH.text = "Course Type";
    optPH.hidden = true;

    optR.value = "0.0";
    optR.text = "Regular";

    optH.value = "0.5";
    optH.text = "Honors";

    optAP.value = "1.0";
    optAP.text = "AP/IB";

    optC.value = "1.0";
    optC.text = "College";

    select.add(optPH, null);
    select.add(optR, null);
    select.add(optH, null);
    select.add(optAP, null);
    select.add(optC, null);

    select.placeholder = "Course Type";
    select.id = "courseType" + HScounter;

    var space = document.createElement("br");
    var space2 = document.createElement("br");

    courseTypeInput.appendChild(select);
    courseTypeInput.appendChild(space);
    courseTypeInput.appendChild(space2);
  };

  if (addCourseHSButton) {
    addCourseHSButton.addEventListener(
      "click",
      function() {
        addCourseType();
      }.bind(this)
    );
  }
})();

// Function Calculates High School GPA
function calculateHSGPA() {
  var grades = [];
  var credits = [];
  var courseweights = [];
  var sumofCredits = 0;
  var finalGPA = 0;

  var j;

  for (j = 1; j < HScounter + 1; j++) {
    if (document.getElementById("hsGrade" + j).value !== "") {
      grades.push(parseFloat(document.getElementById("hsGrade" + j).value));
    }

    if (document.getElementById("hsCredit" + j).value !== "") {
      credits.push(parseFloat(document.getElementById("hsCredit" + j).value));
    }

    if (document.getElementById("courseType" + j).value !== "") {
      courseweights.push(parseFloat(document.getElementById("courseType" + j).value));
    }
  }

  for (j = 0; j < grades.length; j++) {
    sumofCredits = sumofCredits + grades[j] + courseweights[j];
  }

  finalGPA = sumofCredits / grades.length;

  document.getElementById("hsGpa-output").innerHTML = finalGPA.toFixed(2);
}

// Final Grade Page Calculator to Display Required Grade
function displayReqGrade() {
  var currentGrade = parseFloat(document.getElementById("current-grade").value);
  var desiredGrade = parseFloat(document.getElementById("desired-grade").value);
  var finalWeight = parseFloat(document.getElementById("final-weight").value);

  var finalWeightToPercent = finalWeight / 100;

  var required = (desiredGrade - (1 - finalWeightToPercent) * currentGrade) / finalWeightToPercent;

  document.getElementById("reqGrade-output").innerHTML =
    "You will need to score at least <br>" +
    +Math.round(required) +
    "% on your final to get a " +
    desiredGrade +
    "% overall";
}
