window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/images/qualitative/";
let NUM_INTERP_FRAMES = 0;

const qual_values_slider = JSON.parse('{' +
  '"Steerers_@-51.1@-73.0@-49.8@-71.8@26@1600@25@ISS054-E-21023@": "3;true",' +
  '"Steerers_@31.0@87.0@32.1@85.8@23@50@10@ISS062-E-24032@": "0;false",' +
  '"Steerers_@44.8@-83.6@46.7@-83.6@28@1600@25@ISS056-E-153176@": "0;false",' +
  '"Steerers_@19.8@-90.5@19.2@-90.2@10@500@25@ISS062-E-81917@": "3;true",' +
  '"Steerers_@0.1@36.6@-4.2@35.4@49@420@75@ISS064-E-46242@": "0;false",' +
  '"SuperPoint-SuperGlue_@-51.1@-73.0@-49.8@-71.8@26@1600@25@ISS054-E-21023@": "3;true",' +
  '"SuperPoint-SuperGlue_@31.0@87.0@32.1@85.8@23@50@10@ISS062-E-24032@": "0;true",' +
  '"SuperPoint-SuperGlue_@44.8@-83.6@46.7@-83.6@28@1600@25@ISS056-E-153176@": "0;true",' +
  '"SuperPoint-SuperGlue_@19.8@-90.5@19.2@-90.2@10@500@25@ISS062-E-81917@": "3;true",' +
  '"SuperPoint-SuperGlue_@0.1@36.6@-4.2@35.4@49@420@75@ISS064-E-46242@": "0;false",' +
  '"ALIKED_@-51.1@-73.0@-49.8@-71.8@26@1600@25@ISS054-E-21023@": "3;true",' +
  '"ALIKED_@31.0@87.0@32.1@85.8@23@50@10@ISS062-E-24032@": "0;false",' +
  '"ALIKED_@44.8@-83.6@46.7@-83.6@28@1600@25@ISS056-E-153176@": "0;true",' +
  '"ALIKED_@19.8@-90.5@19.2@-90.2@10@500@25@ISS062-E-81917@": "3;true",' +
  '"ALIKED_@0.1@36.6@-4.2@35.4@49@420@75@ISS064-E-46242@": "1;true",' +
  '"RoMa_@-51.1@-73.0@-49.8@-71.8@26@1600@25@ISS054-E-21023@": "3;true",' +
  '"RoMa_@31.0@87.0@32.1@85.8@23@50@10@ISS062-E-24032@": "0;true",' +
  '"RoMa_@44.8@-83.6@46.7@-83.6@28@1600@25@ISS056-E-153176@": "0;true",' +
  '"RoMa_@19.8@-90.5@19.2@-90.2@10@500@25@ISS062-E-81917@": "3;true",' +
  '"RoMa_@0.1@36.6@-4.2@35.4@49@420@75@ISS064-E-46242@": "0;true",' +
  '"SIFT-NN_@-51.1@-73.0@-49.8@-71.8@26@1600@25@ISS054-E-21023@": "0;true",' +
  '"SIFT-NN_@31.0@87.0@32.1@85.8@23@50@10@ISS062-E-24032@": "0;true",' +
  '"SIFT-NN_@44.8@-83.6@46.7@-83.6@28@1600@25@ISS056-E-153176@": "0;true",' +
  '"SIFT-NN_@19.8@-90.5@19.2@-90.2@10@500@25@ISS062-E-81917@": "3;true",' +
  '"SIFT-NN_@0.1@36.6@-4.2@35.4@49@420@75@ISS064-E-46242@": "0;false",' +
  '"LoFTR_@-51.1@-73.0@-49.8@-71.8@26@1600@25@ISS054-E-21023@": "3;true",' +
  '"LoFTR_@31.0@87.0@32.1@85.8@23@50@10@ISS062-E-24032@": "0;true",' +
  '"LoFTR_@44.8@-83.6@46.7@-83.6@28@1600@25@ISS056-E-153176@": "1;true",' +
  '"LoFTR_@19.8@-90.5@19.2@-90.2@10@500@25@ISS062-E-81917@": "3;true",' +
  '"LoFTR_@0.1@36.6@-4.2@35.4@49@420@75@ISS064-E-46242@": "0;true",' +
  '"SIFT-LG_@-51.1@-73.0@-49.8@-71.8@26@1600@25@ISS054-E-21023@": "3;true",' +
  '"SIFT-LG_@31.0@87.0@32.1@85.8@23@50@10@ISS062-E-24032@": "0;false",' +
  '"SIFT-LG_@44.8@-83.6@46.7@-83.6@28@1600@25@ISS056-E-153176@": "0;false",' +
  '"SIFT-LG_@19.8@-90.5@19.2@-90.2@10@500@25@ISS062-E-81917@": "3;true",' +
  '"SIFT-LG_@0.1@36.6@-4.2@35.4@49@420@75@ISS064-E-46242@": "0;false",' +
  '"DogHardNet_@-51.1@-73.0@-49.8@-71.8@26@1600@25@ISS054-E-21023@": "3;true",' +
  '"DogHardNet_@31.0@87.0@32.1@85.8@23@50@10@ISS062-E-24032@": "0;true",' +
  '"DogHardNet_@44.8@-83.6@46.7@-83.6@28@1600@25@ISS056-E-153176@": "0;true",' +
  '"DogHardNet_@19.8@-90.5@19.2@-90.2@10@500@25@ISS062-E-81917@": "3;true",' +
  '"DogHardNet_@0.1@36.6@-4.2@35.4@49@420@75@ISS064-E-46242@": "1;true"}');

var interp_images = [];
function preloadInterpolationImages(method, qualitative) {
  NUM_INTERP_FRAMES = Number(qual_values_slider[method + "_" + qualitative].split(';')[0]);
  var is_good = qual_values_slider[method + "_" + qualitative].split(';')[1];
  is_good = is_good === "true";

  if (is_good) {
    NUM_INTERP_FRAMES += 1;
  } else {
    setInterpolationImage(0);
  }

  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + method + "/" + qualitative + "/00/" + qualitative + "_pred_" + String(i) + "_matches_" + + String(i) + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  if (NUM_INTERP_FRAMES >= 1) {
    var image = interp_images[i];
    image.ondragstart = function () { return false; };
    image.oncontextmenu = function () { return false; };
    $('#interpolation-image-wrapper').empty().append(image);
  } else {
    let textNode = document.createTextNode("No matches");
    $('#interpolation-image-wrapper').empty().append(textNode);
  }
}


$(document).ready(function () {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");

  });

  var options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
  }

  // Initialize all div with carousel class
  var carousels = bulmaCarousel.attach('.carousel', options);

  // Loop on each carousel initialized
  for (var i = 0; i < carousels.length; i++) {
    // Add listener to  event
    carousels[i].on('before:show', state => {
      console.log(state);
    });
  }

  // Access to bulmaCarousel instance of an element
  var element = document.querySelector('#my-element');
  if (element && element.bulmaCarousel) {
    // bulmaCarousel instance is available as element.bulmaCarousel
    element.bulmaCarousel.on('before-show', function (state) {
      console.log(state);
    });
  }

  /*var player = document.getElementById('interpolation-video');
  player.addEventListener('loadedmetadata', function() {
    $('#interpolation-slider').on('input', function(event) {
      console.log(this.value, player.duration);
      player.currentTime = player.duration / 100 * this.value;
    })
  }, false);*/
  preloadInterpolationImages("RoMa", "@-51.1@-73.0@-49.8@-71.8@26@1600@25@ISS054-E-21023@");

  $('#interpolation-slider').on('input', function (event) {
    setInterpolationImage(this.value);
  });
  setInterpolationImage(0);
  $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

  bulmaSlider.attach();

})
