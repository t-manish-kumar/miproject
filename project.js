
let phone = document.getElementById("phone")
phone.style.display = "none";
let phone_menu = document.getElementById("phone_menu")

phone_menu.addEventListener('mouseover', function()
 {
    console.log('Hovering over the element!');
    phone.style.display = "";
    phone.style.backgroundColorReadableByteStreamController;
  });
  
phone_menu.addEventListener('mouseout', function() 
{
    console.log('Mouse left the element!'); 
    phone.style.display = "none";
    
  });
  
    // TV hover start
  
  let tv = document.getElementById("tv")
   tv.style.display = "none";
   let tv_menu = document.getElementById("tv_menu")

tv_menu.addEventListener('mouseover', function() {
    
    console.log('Hovering over the element!');
    tv.style.display = "";
    
    
  });
  
tv_menu.addEventListener('mouseout', function() {
    // Perform action when mouse leaves the element
    console.log('Mouse left the element!'); 
    tv.style.display = "none";
  
  });

  // Tablet Hover

  let tablet = document.getElementById("tablet")
  tablet.style.display = "none";
  let tablet_menu = document.getElementById("tablet_menu")

tablet_menu.addEventListener('mouseover', function() {
   
   console.log('Hovering over the element!');
   tablet.style.display = "";
 });

tablet_menu.addEventListener('mouseout', function() {
   
   console.log('Mouse left the element!'); 
   tablet.style.display = "none";
   
 });

        // lifestyle Hover
 let lifestyle = document.getElementById("lifestyle")
 lifestyle.style.display = "none";
 let lifestyle_menu = document.getElementById("lifestyle_menu")

lifestyle_menu.addEventListener('mouseover', function() {
  
  console.log('Hovering over the element!');
  lifestyle.style.display = "";
  
  
});

lifestyle_menu.addEventListener('mouseout', function() {
  console.log('Mouse left the element!'); 
  lifestyle.style.display = "none";
});  



//  let phone = document.getElementById("phone")
//  phone.style.display="none";
//   phone_menu = document.getElementById("phone_menu")

//   phone_menu.addEventListener('mouseover', function()
// {
//   console.log('Hovering over the element!')
//   phone.style.display="";
// })