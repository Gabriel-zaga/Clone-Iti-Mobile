var icon = document.getElementById('icon');
    var icon2 = document.getElementById('icon2');
    icon.addEventListener('click', ()=> {
      document.getElementById('saldo').style.display="none";
     document.getElementById('result').style.display="block";
    document.getElementById('result').style.marginTop='20px';
    document.getElementById('icon2').style.display="block";
    
    
    })
    icon2.addEventListener('click', ()=>{
      document.getElementById('saldo').style.display="block";
      document.getElementById('result').style.display="none";
      document.getElementById('icon2').style.display="none";
      document.getElementById('saldo').style.marginTop='1px';
    })