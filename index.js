function gradeGenerator() {
  let grade = document.querySelector("#Grade");
  let resultGrade = document.querySelector("#resultGrade");
  let grading = grade.value;

  if (grading >= 80 && grading <= 100) {
    //A student with a score between 80 and 100 will get an 'A'
    resultGrade.innerHTML = "A";
  } else if (grading >= 60 && grading <= 79) {
    //A student with a score between 60 and 79 will get an 'B'
    resultGrade.innerHTML = "B";
  } else if (grading >= 50 && grading <= 59) {
    //A student with a score between 50 and 59 will get an 'C'
    resultGrade.innerHTML = "C";
  } else if (grading >= 40 && grading <= 49) {
    //A student with a score between 40 and 49 will get an 'D'
    resultGrade.innerHTML = "D";
  } else if (grading >= 0 && grading <= 39) {
    //A student with a score between 0 and 39 will get an 'E'
    resultGrade.innerHTML = "E";
  }
}
function speedDetector() {
  let speed = document.querySelector("#speed").value;
  let resultSpeed = document.querySelector("#resultSpeed");
  //let speedometer=speed.value;
  if (speed > 0 && speed <= 70) {
    //If the speed is between 0 and 70km the driver is ok.
    resultSpeed.innerHTML = "Ok";
  }
  //The speed being between 76 and 80 earns the driver 1 demerit point
  else if (speed >= 76 && speed <= 80) {
    resultSpeed.innerHTML = "Demerit +1";
  }
  //The speed being between 81 and 85 earns the driver 2 demerit points
  else if (speed >= 81 && speed <= 85) {
    resultSpeed.innerHTML = "Demerit +2";
  }
  //The speed being between 86 and 90 earns the driver 3 demerit points
  else if (speed >= 86 && speed <= 90) {
    resultSpeed.innerHTML = "Demerit +3";
  }
  //The speed being between 91 and 95 earns the driver 4 demerit ponts
  else if (speed >= 91 && speed <= 95) {
    resultSpeed.innerHTML = "Demerit +4";
  }
  //The speed being between 96 and 100 earns the driver 5 demerit ponts
  else if (speed >= 96 && speed <= 100) {
    resultSpeed.innerHTML = "Demerit +5";
  }
  //The speed being between 101 and 105 earns the driver 6 demerit ponts
  else if (speed >= 101 && speed <= 105) {
    resultSpeed.innerHTML = "Demerit +6";
  }
  //The speed being between 106 and 110 earns the driver 7 demerit ponts
  else if (speed >= 106 && speed <= 110) {
    resultSpeed.innerHTML = "Demerit +7";
  }
  //The speed being between 111 and 115 earns the driver 8 demerit ponts
  else if (speed >= 111 && speed <= 115) {
    resultSpeed.innerHTML = "Demerit +8";
  }
  //The speed being between 116 and 120 earns the driver 9 demerit ponts
  else if (speed >= 116 && speed <= 120) {
    resultSpeed.innerHTML = "Demerit +9";
  }
  //The speed being between 121 and 125 earns the driver 10 demerit ponts
  else if (speed >= 121 && speed <= 125) {
    resultSpeed.innerHTML = "Demerit +10";
  }
  //The speed being between 126 and 130 earns the driver 11 demerit ponts
  else if (speed >= 126 && speed <= 130) {
    resultSpeed.innerHTML = "Demerit +11";
  }
  //The speed being between 111 and 115 earns the driver 12 demerit ponts
  else if (speed >= 130) {
    resultSpeed.innerHTML = "LICENSE SUSPENDED";
  }
}
function netSalaryCalculator() {
  let basicSalary = document.querySelector("#basicSalary").value;
  let resultSalary = document.querySelector("#resultSalary");
  let nssf1 = document.querySelector("#nssf");
  let nhif2=document.querySelector('#nhif');
let netSalary1=document.querySelector('#netSalary');
  let PAYE;
  let nssf;
  let netSalary;

  if (basicSalary >= 0 && basicSalary <= 24000) {
    PAYE = basicSalary * 0.1;
    resultSalary.innerHTML = `PAYE ${PAYE}`;
  } else if (basicSalary >= 24001 && basicSalary <= 32333) {
    PAYE = basicSalary * 0.25;
    resultSalary.innerHTML = `PAYE ${PAYE}`;
  } else if (basicSalary >= 32334) {
    PAYE = basicSalary * 0.3;
    resultSalary.innerHTML = `PAYE ${PAYE}`;
  }
  nssf = basicSalary * 0.06;
  nssf1.innerHTML = `NSSF DEDUCTION: ${nssf}`;


switch (true) {
  case basicSalary <= 5999:
    nhif = 150;
    break;
  case basicSalary <= 7999:
    nhif = 300;
    break;

  case basicSalary <= 11999:
    nhif = 400;
    break;

  case basicSalary <= 14999:
    nhif = 500;
    break;

  case basicSalary <= 19999:
    nhif = 600;
    break;

  case basicSalary <= 24999:
    nhif = 750;
    break;

  case basicSalary <= 29999:
    nhif = 850;
    break;

  case basicSalary <= 34999:
    nhif = 900;
    break;

  case basicSalary <= 39999:
    nhif = 950;
    break;

  case basicSalary <= 44999:
    nhif = 1000;
    break;

  case basicSalary <= 49999:
    nhif = 1100;
    break;

  case basicSalary <= 59999:
    nhif = 1200;
    break;

  case basicSalary <= 69999:
    nhif = 1300;
    break;

  case basicSalary <= 79999:
    nhif = 1400;
    break;

  case basicSalary <= 89999:
    nhif = 1500;
    break;

  case basicSalary <= 99999:
    nhif = 1600;
    break;

  case basicSalary > 100000:
    nhif = 1700;
    break;

  default:
    nhif = 0;
}
nhif2.innerHTML=`NHIF DEDUCTION: ${nhif}`;
netSalary=basicSalary-(PAYE+nhif+nssf);
netSalary1.innerHTML=`NET SALARY: ${netSalary}`;

}