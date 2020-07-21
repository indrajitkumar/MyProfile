$(function() {
  $(".typed").typed({
    strings: [
      "stat indrajit.kumar<br/>" +
      "><span class='caret'>$</span> skills: android, ios, artificial learning and machine learning, hardware-software interaction, camera, computer vision<br/> ^100" +
      "><span class='caret'>$</span> job: software technologist-2 at <a href='https://www.philips.co.in/'>Philips</a><br/> ^100" +
      "><span class='caret'>$</span> hobbies: cooking, travel, <a href='http://indrajitkumar.blogspot.com/'>writing</a><br/> ^300" +
      "><span class='caret'>$</span> alias: master/teja/jeet <br/>" ^100 +
      "><span class=caret'>$</span> achievements: 3 times hackathon winner in philips"
      /*+
      "><span class='caret'>$</span> highlight:  <a href='/projects/video-stab'>real time image stabilization on Android</a>, <a href='/projects/lifehacks'>app with >750K installs</a><br/>"
*/
      /*
      "><span class='caret'>$</span> <a href='/timeline'>timeline</a> <a href='http://www.github.com/crearo/'>github</a> <a href='http://in.linkedin.com/in/bhardwajrish/'>linkedin</a> <a href='http://bhardwajrish.blogspot.com/'>blog</a><br/>"
      */
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
