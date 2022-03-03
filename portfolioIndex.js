window.addEventListener('scroll', scrollFunction);


function scrollFunction() {
    if (document.body.scrollTop > 8 || document.documentElement.scrollTop > 8) {
      document.getElementById("header").style.padding = "0px";
       
    }
    else{
        document.getElementById("header").style.padding = "10px";
      }
  
  }
  
  
  window.addEventListener('scroll', fixedNav);
  
  
  
  function fixedNav() {
      var nav = document.getElementsByTagName("header");
  
      
    if (document.body.scrollTop > 8 || document.documentElement.scrollTop > 8) {   
      nav.classList.add('fixed');
    } else {
      nav.classList.remove('fixed');    
    }
  }
  
  window.addEventListener('scroll', shrinkTitle);
  
  function shrinkTitle(){
      
      
      var navlist = document.getElementsByClassName("nav");
        if (document.body.scrollTop > 8 || document.documentElement.scrollTop > 8) {   
      title.classList.add('shrink');
      navlist.classList.add('shrin');
    } else {
      title.classList.remove('shrink');    
      navlist.classList.remove('shrin');   
    }
  }
      
