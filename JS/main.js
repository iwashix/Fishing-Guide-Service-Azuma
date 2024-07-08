$("#toggle_btn").on("click", function () {
    $("header").toggleClass("open");
  });

  // メニューのリンクをクリックした時

  $("a[href^='#']").on("click", function () {
    $("header").toggleClass("open");
  });