// var currentIndex = 4;

// function setUp() {
//     var bxPrt = document.querySelectorAll(".bx_opns_prt");
//     var bxPrtAry = Array.from(bxPrt);
//     for (var a = 0; a < bxPrtAry.length; a++) {
//         if (a > 3) {
//             bxPrtAry[a].style.display = "none";
//         }
//     }
//     evClick(bxPrtAry);
// }

// function evClick(bxPrtAry) {
//     document.querySelector('.ld_btn').addEventListener('click', function() {
//         lddMore(bxPrtAry);
//     });
// }

// function lddMore(bxPrtAry) {
//     lddInrMore(bxPrtAry);
// }

// function lddInrMore(bxPrtAry) {
//     var limit = currentIndex + 4;
//     for (var a = currentIndex; a < limit && a < bxPrtAry.length; a++) {
//         bxPrtAry[a].style.display = "flex";
//     }
//     currentIndex += 4;
// }

// setUp();