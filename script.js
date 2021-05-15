// This links the button to the "check" function
document.getElementById('check').addEventListener('click', check)

// Set everything to 0
let age = 0
let weekday = 0

// This is what checks your age and what day of the week it is to see your schedule
function check () {
  age = document.getElementById('age').value
  weekday = document.getElementById('weekday').value
  if ((age <= 18) && (weekday !== 'Sunday' && weekday !== 'Saturday')) {
    document.getElementById('answer').innerHTML = ('Time for school!')
  } else if ((age > 18) && (weekday !== 'Sunday' && weekday !== 'Saturday')) {
    document.getElementById('answer').innerHTML = ('Time for work!')
  } else {
    document.getElementById('answer').innerHTML = ('Time to relax for the weekend!')
  }
}
