  var counter = 1;
   
(function() {
  //var counter = 2;
  var addCourseButton = document.getElementById("addCourse-button");
  var courseInput = document.getElementById("course-input");

  var addCourse = function() {
    counter++;
	
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
  
// Function Calculates GPA IF ONLY One User Inputs
function calculateCollegeGPA() {
  
	var sum = 0;
	var creditSums = 0;
	var grades = [];
	var credits = [];
	var finalGPA = 0;
  
  var j;
  
  for(j = 1; j < counter+1; j++){
	  if((document.getElementById("grade" + j).value) !== ""){
		
		grades.push(parseFloat(document.getElementById("grade" + j).value));
		//console.log(document.getElementById("grade" + j).value);
		}
	 
	  if((document.getElementById("credit" + j).value) !== ""){
		
		credits.push(parseFloat(document.getElementById("credit" + j).value));
		//console.log(document.getElementById("credit" + j).value);
		}
  }

   var i;
	for(i = 0; i < credits.length; i++){
		
		sum = sum + credits[i];
		creditSums = creditSums + (grades[i] * credits[i]);
	}
	
     finalGPA = creditSums/sum;
	
	document.getElementById("gpa-output").innerHTML = finalGPA.toFixed(2);

  }
  
// Function Creates new Course Input and Increments Placeholder +1 HIGHSCHOOL
(function() {
  var counter = 2;
  var addCourseHSButton = document.getElementById("addCourseHS-button");
  var hsCourseInput = document.getElementById("hsCourse-input");

  var addHSCourse = function() {
    counter++;
    var input = document.createElement("input");
    var space = document.createElement("br");
    var space2 = document.createElement("br");

    input.type = "text";
    input.placeholder = "Course #" + counter;

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
  var counter = 2;
  var addCourseHSButton = document.getElementById("addCourseHS-button");
  var hsGradeInput = document.getElementById("hsGrade-input");

  var addHSGrade = function() {
    counter++;
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
    select.id = "hsGrade" + counter;

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
  var counter = 2;
  var addCourseHSButton = document.getElementById("addCourseHS-button");
  var hsCreditInput = document.getElementById("hsCredit-input");

  var addHSCredit = function() {
    counter++;
    var input = document.createElement("input");
    var space = document.createElement("br");
    var space2 = document.createElement("br");

    input.id = "hsCredit" + counter;
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
  var counter = 2;
  var addCourseHSButton = document.getElementById("addCourseHS-button");
  var courseTypeInput = document.getElementById("courseType-input");

  var addCourseType = function() {
    counter++;
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
    select.id = "courseType" + counter;

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

function calculateHSGPA() {
  // One Class
  var checkGrade1 = document.getElementById("hsGrade1").value;
  var checkCredit1 = document.getElementById("hsCredit1").value;
  var checkWeight1 = document.getElementById("courseType1").value;
  if (checkGrade1 !== "" && checkCredit1 !== "" && checkWeight1 !== "") {
    var grade1 = parseFloat(document.getElementById("hsGrade1").value);
    var credit1 = parseFloat(document.getElementById("hsCredit1").value);
    var courseWeight1 = parseFloat(document.getElementById("courseType1").value);

    var finalGPA = (grade1 + courseWeight1) / 1;

    document.getElementById("hsGpa-output").innerHTML = finalGPA.toFixed(2);

    // Two Classes
    var checkGrade2 = document.getElementById("hsGrade2").value;
    var checkCredit2 = document.getElementById("hsCredit2").value;
    var checkWeight2 = document.getElementById("courseType2").value;
    if (checkGrade2 !== "" && checkCredit2 !== "" && checkWeight2 !== "") {
      var grade2 = parseFloat(document.getElementById("hsGrade2").value);
      var credit2 = parseFloat(document.getElementById("hsCredit2").value);
      var courseWeight2 = parseFloat(document.getElementById("courseType2").value);

      var totalCreditHours = credit1 + credit2;
      var finalGPA = (grade1 + courseWeight1 + (grade2 + courseWeight2)) / 2;

      document.getElementById("hsGpa-output").innerHTML = finalGPA.toFixed(2);

      // Three Classes
      var checkGrade3 = document.getElementById("hsGrade3").value;
      var checkCredit3 = document.getElementById("hsCredit3").value;
      var checkWeight3 = document.getElementById("courseType3").value;
      if (checkGrade3 !== "" && checkCredit3 !== "" && checkWeight3 !== "") {
        var grade3 = parseFloat(document.getElementById("hsGrade3").value);
        var credit3 = parseFloat(document.getElementById("hsCredit3").value);
        var courseWeight3 = parseFloat(document.getElementById("courseType3").value);

        var totalCreditHours = credit1 + credit2 + credit3;
        var finalGPA = (grade1 + courseWeight1 + (grade2 + courseWeight2) + (grade3 + courseWeight3)) / 3;

        document.getElementById("hsGpa-output").innerHTML = finalGPA.toFixed(2);

        // Four Classes
        var checkGrade4 = document.getElementById("hsGrade4").value;
        var checkCredit4 = document.getElementById("hsCredit4").value;
        var checkWeight4 = document.getElementById("courseType4").value;
        if (checkGrade4 !== "" && checkCredit4 !== "" && checkWeight4 !== "") {
          var grade4 = parseFloat(document.getElementById("hsGrade4").value);
          var credit4 = parseFloat(document.getElementById("hsCredit4").value);
          var courseWeight4 = parseFloat(document.getElementById("courseType4").value);

          var totalCreditHours = credit1 + credit2 + credit3 + credit4;
          var finalGPA =
            (grade1 + courseWeight1 + (grade2 + courseWeight2) + (grade3 + courseWeight3) + (grade4 + courseWeight4)) /
            4;

          document.getElementById("hsGpa-output").innerHTML = finalGPA.toFixed(2);

          // Five Classes
          var checkGrade5 = document.getElementById("hsGrade5").value;
          var checkCredit5 = document.getElementById("hsCredit5").value;
          var checkWeight5 = document.getElementById("courseType5").value;
          if (checkGrade5 !== "" && checkCredit5 !== "" && checkWeight5 !== "") {
            var grade5 = parseFloat(document.getElementById("hsGrade5").value);
            var credit5 = parseFloat(document.getElementById("hsCredit5").value);
            var courseWeight5 = parseFloat(document.getElementById("courseType5").value);

            var totalCreditHours = credit1 + credit2 + credit3 + credit4 + credit5;
            var finalGPA =
              (grade1 +
                courseWeight1 +
                (grade2 + courseWeight2) +
                (grade3 + courseWeight3) +
                (grade4 + courseWeight4) +
                (grade5 + courseWeight5)) /
              5;

            document.getElementById("hsGpa-output").innerHTML = finalGPA.toFixed(2);

            // Six Classes
            var checkGrade6 = document.getElementById("hsGrade6").value;
            var checkCredit6 = document.getElementById("hsCredit6").value;
            var checkWeight6 = document.getElementById("courseType6").value;
            if (checkGrade6 !== "" && checkCredit6 !== "" && checkWeight6 !== "") {
              var grade6 = parseFloat(document.getElementById("hsGrade6").value);
              var credit6 = parseFloat(document.getElementById("hsCredit6").value);
              var courseWeight6 = parseFloat(document.getElementById("courseType6").value);

              var totalCreditHours = credit1 + credit2 + credit3 + credit4 + credit5 + credit6;
              var finalGPA =
                (grade1 +
                  courseWeight1 +
                  (grade2 + courseWeight2) +
                  (grade3 + courseWeight3) +
                  (grade4 + courseWeight4) +
                  (grade5 + courseWeight5) +
                  (grade6 + courseWeight6)) /
                6;

              document.getElementById("hsGpa-output").innerHTML = finalGPA.toFixed(2);

              // Seven Classes
              var checkGrade7 = document.getElementById("hsGrade7").value;
              var checkCredit7 = document.getElementById("hsCredit7").value;
              var checkWeight7 = document.getElementById("courseType7").value;
              if (checkGrade7 !== "" && checkCredit7 !== "" && checkWeight7 !== "") {
                var grade7 = parseFloat(document.getElementById("hsGrade7").value);
                var credit7 = parseFloat(document.getElementById("hsCredit7").value);
                var courseWeight7 = parseFloat(document.getElementById("courseType7").value);

                var totalCreditHours = credit1 + credit2 + credit3 + credit4 + credit5 + credit6 + credit7;
                var finalGPA =
                  (grade1 +
                    courseWeight1 +
                    (grade2 + courseWeight2) +
                    (grade3 + courseWeight3) +
                    (grade4 + courseWeight4) +
                    (grade5 + courseWeight5) +
                    (grade6 + courseWeight6) +
                    (grade7 + courseWeight7)) /
                  7;

                document.getElementById("hsGpa-output").innerHTML = finalGPA.toFixed(2);

                // Eight Classes
                var checkGrade8 = document.getElementById("hsGrade8").value;
                var checkCredit8 = document.getElementById("hsCredit8").value;
                var checkWeight8 = document.getElementById("courseType8").value;
                if (checkGrade8 !== "" && checkCredit8 !== "" && checkWeight8 !== "") {
                  var grade8 = parseFloat(document.getElementById("hsGrade8").value);
                  var credit8 = parseFloat(document.getElementById("hsCredit8").value);
                  var courseWeight8 = parseFloat(document.getElementById("courseType8").value);

                  var totalCreditHours = credit1 + credit2 + credit3 + credit4 + credit5 + credit6 + credit7 + credit8;
                  var finalGPA =
                    (grade1 +
                      courseWeight1 +
                      (grade2 + courseWeight2) +
                      (grade3 + courseWeight3) +
                      (grade4 + courseWeight4) +
                      (grade5 + courseWeight5) +
                      (grade6 + courseWeight6) +
                      (grade7 + courseWeight7) +
                      (grade8 + courseWeight8)) /
                    8;

                  document.getElementById("hsGpa-output").innerHTML = finalGPA.toFixed(2);

                  // Nine Classes
                  var checkGrade9 = document.getElementById("hsGrade9").value;
                  var checkCredit9 = document.getElementById("hsCredit9").value;
                  var checkWeight9 = document.getElementById("courseType9").value;
                  if (checkGrade9 !== "" && checkCredit9 !== "" && checkWeight9 !== "") {
                    var grade9 = parseFloat(document.getElementById("hsGrade9").value);
                    var credit9 = parseFloat(document.getElementById("hsCredit9").value);
                    var courseWeight9 = parseFloat(document.getElementById("courseType9").value);

                    var totalCreditHours =
                      credit1 + credit2 + credit3 + credit4 + credit5 + credit6 + credit7 + credit8 + credit9;
                    var finalGPA =
                      (grade1 +
                        courseWeight1 +
                        (grade2 + courseWeight2) +
                        (grade3 + courseWeight3) +
                        (grade4 + courseWeight4) +
                        (grade5 + courseWeight5) +
                        (grade6 + courseWeight6) +
                        (grade7 + courseWeight7) +
                        (grade8 + courseWeight8) +
                        (grade9 + courseWeight9)) /
                      9;

                    document.getElementById("hsGpa-output").innerHTML = finalGPA.toFixed(2);

                    // Ten Classes
                    var checkGrade10 = document.getElementById("hsGrade10").value;
                    var checkCredit10 = document.getElementById("hsCredit10").value;
                    var checkWeight10 = document.getElementById("courseType10").value;
                    if (checkGrade10 !== "" && checkCredit10 !== "" && checkWeight10 !== "") {
                      var grade10 = parseFloat(document.getElementById("hsGrade10").value);
                      var credit10 = parseFloat(document.getElementById("hsCredit10").value);
                      var courseWeight10 = parseFloat(document.getElementById("courseType10").value);

                      var totalCreditHours =
                        credit1 +
                        credit2 +
                        credit3 +
                        credit4 +
                        credit5 +
                        credit6 +
                        credit7 +
                        credit8 +
                        credit9 +
                        credit10;
                      var finalGPA =
                        (grade1 +
                          courseWeight1 +
                          (grade2 + courseWeight2) +
                          (grade3 + courseWeight3) +
                          (grade4 + courseWeight4) +
                          (grade5 + courseWeight5) +
                          (grade6 + courseWeight6) +
                          (grade7 + courseWeight7) +
                          (grade8 + courseWeight8) +
                          (grade9 + courseWeight9) +
                          (grade10 + courseWeight10)) /
                        10;

                      document.getElementById("hsGpa-output").innerHTML = finalGPA.toFixed(2);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
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