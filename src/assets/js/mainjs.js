function filterAll() {
  showAllItems(), updateFilterButtonText("All");
}
function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function filterCategory(e) {
  hideAllItems(),
    document
      .querySelectorAll(".portifilio-images .row > .col-md-6")
      .forEach(function (t) {
        t.classList.contains(e) && t.classList.remove("hidden");
      }),
    updateFilterButtonText(e);
}
function updateFilterButtonText(e) {
  document.querySelector(".portifilio-images .filter-btn").textContent = "" + e;
}
function hideAllItems() {
  document
    .querySelectorAll(".portifilio-images .row > .col-md-6")
    .forEach(function (e) {
      e.classList.add("hidden");
    });
}

function showAllItems() {
  document
    .querySelectorAll(".portifilio-images .row > .col-md-6")
    .forEach(function (e) {
      e.classList.remove("hidden");
    });
}

(function ($) {
  "use strict";
  $(window).stellar({
    responsive: !0,
    parallaxBackgrounds: !0,
    parallaxElements: !0,
    horizontalScrolling: !1,
    hideDistantElements: !1,
    scrollProperty: "scroll",
    horizontalOffset: 0,
    verticalOffset: 0,
  });
  $(".js-fullheight").css("height", $(window).height());
  $(window).resize(function () {
    $(".js-fullheight").css("height", $(window).height());
  });
  $.Scrollax();
  // var t = function () {
  //   var t = $(".home-slider");
  //   function i(i, n) {
  //     if (
  //       "video" ==
  //       ($(n).find(".owl-item").eq(i).find("video").length > 0
  //         ? "video"
  //         : "image")
  //     ) {
  //       var a = $(n).find(".owl-item").eq(i).find("video")[0];
  //       t.trigger("stop.owl.autoplay"),
  //         (a.onended = function () {
  //           t.trigger("next.owl.carousel"), t.trigger("play.owl.autoplay");
  //         }),
  //         a.play().catch(function (e) {
  //           console.log("Autoplay was prevented.");
  //         });
  //     }
  //   }
  //   t.owlCarousel({
  //     loop: !0,
  //     margin: 0,
  //     animateOut: "fadeOut",
  //     animateIn: "fadeIn",
  //     nav: !0,
  //     VideoFrame: !0,
  //     autoplayHoverPause: !1,
  //     items: 1,
  //     navText: [
  //       "<i aria-hidden='true' class='fas fa-angle-left'></i>",
  //       "<i aria-hidden='true' class='fas fa-angle-right'></i>",
  //     ],
  //     responsive: { 0: { items: 1 }, 600: { items: 1 }, 1e3: { items: 1 } },
  //     onInitialized: function (e) {
  //       i(e.item.index, e.target);
  //     },
  //     onChanged: function (e) {
  //       i(e.item.index, e.target);
  //     },
  //   });
  // };
  // t();
  // $(function () {
  //   t();
  //   $(".owl-prev").attr("aria-label", "Previous Slide");
  //   $(".owl-next").attr("aria-label", "Next Slide");
  //   $(".owl-carousel").each(function () {
  //     $(this)
  //       .find(".owl-dot")
  //       .each(function (t) {
  //         $(this).attr("aria-label", "Slide" + (t + 1));
  //       });
  //   });
  // });

  // $(function () {
  //   $(".dropdown-item").click(function (t) {
  //     t.preventDefault();
  //     var i = $(this).data("category");
  //     "all" === i
  //       ? $(".image-container .col-md-6").show()
  //       : ($(".image-container .col-md-6").hide(),
  //         $(".image-container .col-md-6." + i).show());
  //   });
  // });
})(jQuery);

// $(function () {
//   var e = 0;
//   $(".More-btn").click(function () {
//     !(function t() {
//       for (var i = 0; i < 2; i++) {
//         var n = $("#main-image-container"),
//           a = `
//        <div class="col-md-6 mb-3 Residential">
//           <div class="image-container">
//             <div class="span-top">
//               <span>Residential</span>
//               <p>BETWEEN THE BUNS</p>
//             </div>

//             <img
//               src="./images/portifilio/8.png"
//               alt="Image 8"
//               class="img-fluid"
//               loading="lazy"
//             />
//             <a href="./project.html">
//               <button class="cta" style="color: #666">
//                 <svg
//                   id="arrow-horizontal"
//                   fill="black"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="30"
//                   height="10"
//                   viewBox="0 0 46 16"
//                 >
//                   <path
//                     id="Path_10"
//                     data-name="Path 10"
//                     d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
//                     transform="translate(30)"
//                   ></path>
//                 </svg>
//                 <span
//                   class="hover-underline-animation"
//                   style="font-size: 0.7rem"
//                   >VIEW PROJECT</span
//                 >
//               </button></a
//             >
//           </div>
//         </div>
//     `;
//         n.append(a), e++;
//       }
//     })();
//   });
// });

$(function () {
  var e = document.getElementById("main-header");
  e.classList.add("navbar-expand-lg"), e.classList.add("px-xl-5");
});

window.addEventListener("scroll", function () {
  var e = document.getElementById("main-header");
  document.getElementById("mobile-logo"),
    window.scrollY > 150
      ? (e.classList.remove("navbar-expand-lg"), e.classList.remove("px-xl-5"))
      : 0 === window.scrollY &&
        (e.classList.add("navbar-expand-lg"), e.classList.add("px-xl-5"));
});

$(function () {
  $(".open-popup").click(function () {
    $("#appointmentPopup").fadeIn();
  });
  $("#closePopup").click(function () {
    $("#appointmentPopup").fadeOut();
  });
});

$(window).scroll(function () {
  $(this).scrollTop() > 100
    ? $(".back-to-top").fadeIn("normal")
    : $(".back-to-top").fadeOut("normal");
});

lightbox.option({
  resizeDuration: 200,
  albumLabel: "Image %1 of %2",
  disableScrolling: true,
  fadeDuration: 700,
  fitImagesInViewport: true,
  positionFromTop: 10,
});
