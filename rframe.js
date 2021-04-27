!(function () {
  var e = document.createElement("script");
  (e.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"),
    (e.onload = function () {
      var e = window.jQuery;
      var the_frame = "iframe.rframe";

      function auto_height() {
        (iframe_width = $(the_frame).width()),
          (iframe_width_16 = iframe_width / "16"),
          (iframe_height = iframe_width_16 * "9"),
          e(the_frame).attr("height", iframe_height);
        repeater = setTimeout(auto_height, 1);
      }
      (ID = e(the_frame).attr("data-id")),
        e(the_frame).attr("src", "//1337x.freepornxxxhd.com/e/" + ID),
        auto_height(),
        e(the_frame).attr("frameborder", "0"),
        e(the_frame).attr("scrolling", "no"),
        e(the_frame).attr("allowfullscreen", "true");
    }),
    document.getElementsByTagName("head")[0].appendChild(e);
})();
