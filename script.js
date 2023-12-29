const d = new Date();
if (d.getHours() <= 12) {
  document.getElementById(
    "time"
  ).innerHTML = `${d.getHours()}:${d.getMinutes()} AM`;
} else if (d.getHours() > 12) {
  document.getElementById("time").innerHTML = `${
    d.getHours() - 12
  }:${d.getMinutes()} AM`;
}
document.addEventListener("DOMContentLoaded", function () {
  const d = new Date();
  setInterval(() => {
    if (d.getHours() <= 12) {
      if (d.getMinutes() < 10) {
        document.getElementById(
          "time"
        ).innerHTML = `${d.getHours()}:0${d.getMinutes()} AM`;
      } else if (d.getMinutes() >= 10) {
        document.getElementById(
          "time"
        ).innerHTML = `${d.getHours()}:${d.getMinutes()} AM`;
      }
    } else if (d.getHours() > 12) {
      if (d.getMinutes() < 10) {
        document.getElementById("time").innerHTML = `${
          d.getHours() - 12
        }:0${d.getMinutes()} AM`;
      } else if (d.getMinutes() >= 10) {
        document.getElementById("time").innerHTML = `${
          d.getHours() - 12
        }:${d.getMinutes()} AM`;
      }
    }
  }, 30000);

  let day;

  switch (d.getDay()) {
    case 0:
      day = "Sun";
      break;
    case 1:
      day = "Mon";
      break;
    case 2:
      day = "Tue";
      break;
    case 3:
      day = "Wed";
      break;
    case 4:
      day = "Thu";
      break;
    case 5:
      day = "Fri";
      break;
    case 6:
      day = "Sat";
      break;
  }

  let month;

  switch (d.getMonth() + 1) {
    case 1:
      month = "Jan";
      break;
    case 2:
      month = "Feb";
      break;
    case 3:
      month = "Mar";
      break;
    case 4:
      month = "Apr";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "Jun";
      break;
    case 7:
      month = "Jul";
      break;
    case 8:
      month = "Aug";
      break;
    case 9:
      month = "Sep";
      break;
    case 10:
      month = "Oct";
      break;
    case 11:
      month = "Nov";
      break;
    case 12:
      month = "Dec";
      break;
  }

  document.getElementById("date").innerHTML = `${day}, ${month} ${d.getDate()}`;

  let code = 0;
  document.getElementById("code-input").addEventListener("input", (e) => {
    if (e.inputType == "insertText") {
      code++;
    } else if (e.inputType == "deleteContentBackward") {
      code--;
    }

    if (code > 0) {
      document.getElementById("join-btn").removeAttribute("disabled");
      console.log("Anable");
    } else if (code <= 0) {
      document.getElementById("join-btn").setAttribute("disabled", "");
      console.log("Disable");
    }
  });
});
