count = 1;

function myfunc(){
  count = (count  + 1)%2;
  if(count == 1){
      document.body.style.background = 'white';
      document.body.style.color = 'rgba(0, 0, 0, 0.64)';
      document.getElementById('exit').style.color = 'rgba(0, 0, 0, 0.64)';
  }
  else {
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    document.getElementById('exit').style.color = 'white';
  }
 }
//To commit : Background color changed when user clicks back on the page