function addlistener () {
  const arr = [...document.getElementsByClassName('input-field')]
  arr.forEach(input => {
    input.addEventListener('click', function() {
      const str = input.name.split("")[(input.name.split("").length - 1)]
      document.getElementById(`but${str}`).removeAttribute('disabled');
      document.getElementById(`but${str}`).classList.add("next-buttona");
    });
  });
  document.getElementById('close').addEventListener('click', () => {
    window.location.reload()
  })
}



function shownext(next) {
  if(next !== 0) {
  document.getElementById(`dom${(next + 1)}`).classList.remove('hide');
  document.getElementById(`but${next}`).classList.add('hide'); }
  else {
    document.getElementById(`but${next}`).classList.add('hide');
    document.getElementsByClassName('clicker')[0].classList.remove('hide');
  }
}




function timer() {
  const timeinterval = setInterval(() => {
    if(parseFloat(document.getElementById('secs').innerText) !== 60){
      var secs = parseFloat(document.getElementById('secs').innerText);
      return document.getElementById('secs').innerText = secs + 1
   }
    document.getElementById('secs').innerText = 01
    if(parseFloat(document.getElementById('mins').innerText) !== 60){
    return document.getElementById('mins').innerText = parseFloat(document.getElementById('mins').innerText) + 1
    }
    document.getElementById('mins').innerText = 01
    document.getElementById('hrs').innerText = parseFloat(document.getElementById('hrs').innerText) + 1
  }, 1000)
}


const answers = ['A', 'B', 'B', 'B', 'A', 'C', 'C', 'D', 'D', 'B']

function submit() {
  let i
  let array = []

  for(i=1; i <= 10; i++){
    const val = Array.from(document.getElementsByName(`input${i}`)).filter(input => input.checked)[0].value
    array.push(val);
  }
  const result = array.map((value, index) => {
    if(JSON.stringify(value) === JSON.stringify(answers[index])){
      return true }
    return false
  }).filter(val => val === true).length
  if(result > 5) {
    document.getElementsByClassName('assessment')[0].innerText = 'Pretty Decent, Big guy'
    document.getElementById('elons-message').innerText = 'Elon might be proud :)'
  }
  document.getElementById('user-score').innerText = result
  document.getElementsByClassName('modal-backdrop')[0].classList.remove('hide')
}

const close = () => {
  window.location.reload()
}

addlistener()
timer()
