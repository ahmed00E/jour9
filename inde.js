var moment = require("moment")
var breakLines = require("./index")
moment.locale("fr")

// Today
function whatDayIsToday() {
  console.log(moment().format("[Aujourd'hui on est] dddd"))
}

whatDayIsToday()
breakLines()

// Month
function whatMonthIsIt() {
  console.log(moment().format("[Nous sommes au mois de] MMMM"))
}

whatMonthIsIt()
breakLines()

// Format
function format(str) {
  console.log(moment(str).format("L"))
}

format("2020-01-01")
breakLines()

// Age
function calculateAge(str) {
  var age = moment().diff(moment(str), "years")
  console.log(moment.duration(age, "years").humanize())
}

calculateAge("1980-12-01")
