function tekshir(){
    var radio1 = document.getElementById("radio1");
    var radio2 = document.getElementById("radio2");
    var radio3 = document.getElementById("radio3");
    var radio4 = document.getElementById("radio4");
    var radio5 = document.getElementById("radio5");

    var modalH1 = document.getElementById('modalH1');    
    var modalH2 = document.getElementById('modalH2');    
    var modalH3 = document.getElementById('modalH3');    
    var modalH4 = document.getElementById('modalH4');    
    var modalH5 = document.getElementById('modalH5');    

    console.log(radio1.checked);
    var hisobla = 0;
    
      if(radio1.checked == true)
       {
        var modal1 = document.getElementById('modal1');
        var i1 = document.createElement('i');
          modalH1.innerText= "1.Correct";
          modalH1.style.color = "green";  
          i1.classList.add('fa-regular');
          i1.classList.add('fa-circle-check');
          i1.style.color = "green";
          i1.style.marginLeft = "20px" 
          modal1.appendChild(i1);
          console.log(modal1.children);
         if(modal1.children[1].classList[1] == "fa-circle-xmark"){
            modal1.removeChild(modal1.children[1]);
         }
         ++hisobla;
         console.log(hisobla);
       }

        else if(radio1.checked == false) {
        var modal1 = document.getElementById('modal1');
        var i2 = document.createElement('i');
        modalH1.innerText= "1.NoCorrect";
        modalH1.style.color = "crimson";
        i2.classList.add('fa-regular');
        i2.classList.add('fa-circle-xmark');
        i2.style.color = "crimson";
        i2.style.marginLeft = "20px"
        modal1.appendChild(i2);
        console.log(modal1.children);
        console.log(hisobla);
       }


       if(radio2.checked == true)
       {
        var modal1 = document.getElementById('modal2');
        var i1 = document.createElement('i');
          modalH2.innerText= "2.Correct";
          modalH2.style.color = "green";  
          i1.classList.add('fa-regular');
          i1.classList.add('fa-circle-check');
          i1.style.color = "green";
          i1.style.marginLeft = "20px" 
          modal1.appendChild(i1);
          console.log(modal1.children);
         if(modal2.children[1].classList[1] == "fa-circle-xmark"){
            modal1.removeChild(modal1.children[1]);
         }
         ++hisobla;
         console.log(hisobla);
       }
        else if(radio2.checked == false) {
        var modal1 = document.getElementById('modal2');
        var i2 = document.createElement('i');
        modalH2.innerText= "2.NoCorrect";
        modalH2.style.color = "crimson";
        i2.classList.add('fa-regular');
        i2.classList.add('fa-circle-xmark');
        i2.style.color = "crimson";
        i2.style.marginLeft = "20px"
        modal1.appendChild(i2);
        console.log(modal1.children);
        console.log(hisobla);
       }


       localStorage.setItem('resultTest', hisobla);
}