



  
  window.addEventListener('scroll', fixedNav);
  
  
  
  function fixedNav() {
      var nav = document.getElementById("header");

      
    if (document.body.scrollTop > 8 || document.documentElement.scrollTop > 8) {   
      nav.classList.add('fixed');
      document.getElementById("heading").style.marginLeft = "100px"
    } else {
      nav.classList.remove('fixed');    
      document.getElementById("heading").style.marginLeft = "0"

    }
  }
  
  window.addEventListener('scroll', shrinkTitle);
  
  function shrinkTitle(){
      
      var subHeading =document.getElementById("subheading")
      var navlist = document.getElementById("nav");
        if (document.body.scrollTop > 8 || document.documentElement.scrollTop > 8) {   
    subHeading.style.display = "none";
      navlist.classList.add('shrin');
      document.body.style.paddingTop = "200px";

    } else {
        subHeading.style.display = "block";
      navlist.classList.remove('shrin');   
      document.body.style.paddingTop = "0";
    }
  }
      
