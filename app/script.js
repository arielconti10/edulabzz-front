// Get the modal
var modal = document.getElementById("modalTab");
// Get the button that opens the modal
var btn = document.getElementById("modal-tab-button");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-modal-tab")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// MODAL HOME EDIT
// MODAL HOME EDIT
// MODAL HOME EDIT

var modal2 = document.getElementById("homeModal");
var btn2 = document.getElementById("home-modal-tab-button");
var span2 = document.getElementsByClassName("home-close-modal-tab")[0];
// When the user clicks the button, open the modal
btn2.onclick = function() {
  modal2.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
  modal2.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

// CAROUSEL

/**
@description
	Creates a slide-show (i.e. carousel) out of anything with the class "carousel". 
@guide
	1. Add or link this script to the bottom of your body tag, or after the DOM has 
	   completely loaded.
	2. After this script, create a new object with the name of your choosing.
	:: var customName = new Carousel();
	3. If multiple carousels are desired wrap the elements with the "carousel" class 
	   in an element with an ID of your choosing, and then create the carousel objects.
	:: var customName1 = new Carousel("your1WrapperID");
	:: var customName2 = new Carousel("your2WrapperID");
	4. An object with no ID will control all carousels.
	5. Control the carousel with the functions: prev, next, stop, and slide.
	:: customName.next(); 		//shows the next element in the carousel.
	:: customName.prev(); 		//shows the previous element in the carousel.
	:: customName.next(1000); 	//plays the carousel forward at the rate desired in milliseconds.
	:: customName.prev(500); 	//plays the carousel backward at the rate desired in milliseconds.
	:: customName.stop(); 		//stops the carousel. using any other function will also stop the carousel.
	:: customName.slide(2); 	//shows the slide/more specifically the index provided by the argument. 
	6. Video guide: https://youtu.be/1Tge4HJA7gE
@author		Jeremy England
@company	SimplyCoded
@revised	04-16-2016
*/

// CAROUSEL OBJECT
function Carousel(containerID) {
  this.container = document.getElementById(containerID) || document.body;
  this.slides = this.container.querySelectorAll(".carousel");
  this.total = this.slides.length - 1;
  this.current = 0;

  // start on slide 1
  this.slide(this.current);
}
// NEXT
Carousel.prototype.next = function(interval) {
  this.current === this.total ? (this.current = 0) : (this.current += 1);

  this.stop();
  this.slide(this.current);

  if (typeof interval === "number" && interval % 1 === 0) {
    var context = this;
    this.run = setTimeout(function() {
      context.next(interval);
    }, interval);
  }
};
// PREVIOUS
Carousel.prototype.prev = function(interval) {
  this.current === 0 ? (this.current = this.total) : (this.current -= 1);

  this.stop();
  this.slide(this.current);

  if (typeof interval === "number" && interval % 1 === 0) {
    var context = this;
    this.run = setTimeout(function() {
      context.prev(interval);
    }, interval);
  }
};
// STOP PLAYING
Carousel.prototype.stop = function() {
  clearTimeout(this.run);
};
// SELECT SLIDE
Carousel.prototype.slide = function(index) {
  this.current = index;

  //Seta a classe dos botões
  var btnText = (this.current + 1).toString();
  $("#btns")
    .children("button")
    .each(function() {
      $(this).removeClass("active"); //Remove classe active de todos os botões

      if (btnText == this.innerText) {
        //Adiciona classe active ao índice atual
        $(this).addClass("active"); // "this" is the current element in the loop
      }
    });

  if (index >= 0 && index <= this.total) {
    this.stop();
    for (var s = 0; s <= this.total; s++) {
      if (s === index) {
        this.slides[s].style.display = "inline-block";
      } else {
        this.slides[s].style.display = "none";
      }
    }
  } else {
    alert("Index " + index + " doesn't exist. Available : 0 - " + this.total);
  }
};

//HOME CAROUSEL+MODAL AREA

// SELECT HOME SLIDE
Carouselhome.prototype.slide = function(index) {
  this.current = index;

  //Seta a classe dos botões
  var btnText = (this.current + 1).toString();
  $("#home-modal-btns")
    .children("button")
    .each(function() {
      $(this).removeClass("active"); //Remove classe active de todos os botões

      if (btnText == this.innerText) {
        //Adiciona classe active ao índice atual
        $(this).addClass("active"); // "this" is the current element in the loop
      }
    });

  if (index >= 0 && index <= this.total) {
    this.stop();
    for (var s = 0; s <= this.total; s++) {
      if (s === index) {
        this.slides[s].style.display = "inline-block";
      } else {
        this.slides[s].style.display = "none";
      }
    }
  } else {
    alert("Index " + index + " doesn't exist. Available : 0 - " + this.total);
  }
};
// END SELECT HOME SLIDE

// HOME
// CAROUSEL OBJECT
function Carouselhome(containerID) {
  this.container = document.getElementById(containerID) || document.body;
  this.slides = this.container.querySelectorAll(".home-carousel");
  this.total = this.slides.length - 1;
  this.current = 0;

  // start on slide 1
  this.slide(this.current);
}
// NEXT
Carouselhome.prototype.next = function(interval) {
  this.current === this.total ? (this.current = 0) : (this.current += 1);

  this.stop();
  this.slide(this.current);

  if (typeof interval === "number" && interval % 1 === 0) {
    var context = this;
    this.run = setTimeout(function() {
      context.next(interval);
    }, interval);
  }
};
// PREVIOUS
Carouselhome.prototype.prev = function(interval) {
  this.current === 0 ? (this.current = this.total) : (this.current -= 1);

  this.stop();
  this.slide(this.current);

  if (typeof interval === "number" && interval % 1 === 0) {
    var context = this;
    this.run = setTimeout(function() {
      context.prev(interval);
    }, interval);
  }
};
// STOP PLAYING
Carouselhome.prototype.stop = function() {
  clearTimeout(this.run);
};

// DELETE BUTTON & CHANGE ICON

function showElement() {
  var x = document.getElementById("myButton");
  var element = document.getElementById("myButton");

  if (x.style.display === "none") {
    x.style.display = "flex";
    element.classList.remove("delButton");
    document
      .getElementById("imageId")
      .setAttribute("class", "delButton-active");
  } else {
    x.style.display = "none";
    element.classList.remove("delButton-active");
    document.getElementById("imageId").setAttribute("class", "delButton");
  }
}

//   VERTICAL MENU TABS

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target.tagName == "HTML" || event.target.tagName == "BODY") {
      $(".tablinks").removeClass("active");
      $(".tabcontent").hide();
      $("#cat-home").show();
      $(".menutab").removeAttr("style");
    } else if ($(event.target).hasClass("tablinks")) {
      $(".menutab").css("background-color", "#ffae00");
    }
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// CAROUSEL TAB ACONTECE NA ESCOLA
// CAROUSEL TAB ACONTECE NA ESCOLA
// CAROUSEL TAB ACONTECE NA ESCOLA

$(document).ready(function() {
  var item_width = $("#itens li").outerWidth();
  var left_value = item_width * -1;

  $("#itens li:first").before($("#itens li:last"));

  $("#itens ul").css({ left: left_value });

  $("#prev").click(function() {
    var left_intend = parseInt($("#itens ul").css("left")) + item_width;

    $("#itens ul").animate({ left: left_intend }, 200, function() {
      $("#itens li:first").before($("#itens li:last"));

      $("#itens ul").css({ left: left_value });
    });
  });

  $("#next").click(function() {
    var left_intend = parseInt($("#itens ul").css("left")) - item_width;

    $("#itens ul").animate({ left: left_intend }, 200, function() {
      $("#itens li:last").after($("#itens li:first"));

      $("#itens ul").css({ left: left_value });
    });
  });
});

//CAROUSEL HOME em teste
//CAROUSEL HOME
//CAROUSEL HOME

$(document).ready(function() {
  var item_width2 = $("#itens2 li").outerWidth();
  var left_value2 = item_width2 * -1;

  $("#itens2 li:first").before($("#itens2 li:last"));

  $("#itens2 ul").css({ left: left_value2 });

  $("#prev2").click(function() {
    var left_intend = parseInt($("#itens2 ul").css("left")) + item_width2;

    $("#itens2 ul").animate({ left: left_intend }, 200, function() {
      $("#itens2 li:first").before($("#itens2 li:last"));

      $("#itens2 ul").css({ left: left_value2 });
    });
  });

  $("#next2").click(function() {
    var left_intend = parseInt($("#itens2 ul").css("left")) - item_width2;

    $("#itens2 ul").animate({ left: left_intend }, 200, function() {
      $("#itens2 li:last").after($("#itens2 li:first"));

      $("#itens2 ul").css({ left: left_value2 });
    });
  });
});

// DELETE BUTTON & CHANGE ICON - EDIT MODAL HOME

function showElementhome() {
  var x = document.getElementById("myButtonhome");
  var element = document.getElementById("myButtonhome");

  if (x.style.display === "none") {
    x.style.display = "flex";
    element.classList.remove("delButtonhome");
    document
      .getElementById("imageIdhome")
      .setAttribute("class", "delButtonhome-active");
  } else {
    x.style.display = "none";
    element.classList.remove("delButtonhome-active");
    document
      .getElementById("imageIdhome")
      .setAttribute("class", "delButtonhome");
  }
}
