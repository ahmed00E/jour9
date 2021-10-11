
   
function breakLines() {
  console.log("")
  console.log("")
}

// Today

// 1- Méthode classique
function whatDayIsToday() {
  var date = new Date()
  var day = date.getDay()
  var week = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"]

  console.log(`Aujourd'hui nous sommes ${week[day]}`)
}

whatDayIsToday()
breakLines()

// 2 - Month

// 1 - Méthode classique
function whatMonthIsIt() {
  const monthes = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','September','Octobre','Novembre','Décembre']
  var date = new Date()
  var result = monthes[date.getMonth()]
  var isVowel = result === "Avril" || result === "Août" || result === "Octobre"
  var word = isVowel ? "d'" : "de "
  // =>
  // if (isVowel) {
  //   word = "d'"
  // } else {
  //   word = "de"
  // }

  console.log(`Aujourd'hui nous sommes au mois ${word}${result}`)
}

whatMonthIsIt()
breakLines()

// Format
// 1 - Méthode classique
// a - Easy mode
function formatDateEasy(str) {
  var date = new Date(str)
  var format = date.toLocaleDateString()
  console.log(format)
}

// b - Relou mode
function formatDateRelou(str) {
  var date = new Date(str)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  
  month = month < 10 ? `0${month}` : month
  day = day < 10 ? `0${day}` : day

  console.log(`${day}/${month}/${year}`)
}

formatDateEasy("2020-10-20")
breakLines()
formatDateRelou("2021-01-22")
breakLines()

//  Age
// Methode longue
function calculateAgeRelou(str) {
  var birthday = new Date(str)
  var yearBirthday = birthday.getFullYear()
  var today = new Date()
  var todayYear = today.getFullYear()
  var result = todayYear - yearBirthday
  var monthBirthday = birthday.getMonth()
  var todayMonth = today.getMonth()

  if (monthBirthday > todayMonth) {
    console.log(result - 1)
  } else {
    console.log(result)
  }
}

// Easy mode
function calculateAgeEasy(str) {
  var age = new Date(new Date() - new Date(str))
  console.log(age.getFullYear() - 1970)
}

calculateAgeRelou("1950-12-06")
breakLines()
calculateAgeEasy("1980-12-06")
breakLines()


module.exports = 
