// sticky header js
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// datepicker js
$(function () {
  let datePicker = document.getElementById("datePicker");
  let picker = new Litepicker({
    element: datePicker,
    format: "DD MMMM YYYY",
  });

  let dateRangePicker = document.getElementById("dateRangePicker");
  let pickerRange = new Litepicker({
    element: dateRangePicker,
    format: "DD MMMM YYYY",
    singleMode: false,
  });
});


$(document).ready(function () {
  // select2 js
  $("#department").select2({
    placeholder: "Departments",
    allowClear: true,
  });
  $("#doctors").select2({
    placeholder: "Doctors",
    allowClear: true,
  });

// owl carousel for doctors content
  $(".doc-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items:3,
    margin:30,
    autoplay:true,
    autoplay:true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // owl carousel for price content
$(".price-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items:3,
  margin:30,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
// owl carousel design js
$('.owl-prev').html(`<div class="prevIcon"><i class="fa-solid fa-left-long"></i></div>`);
$('.owl-next').html(`<div class="nextIcon"><i class="fa-solid fa-right-long"></i></div>`);
});



