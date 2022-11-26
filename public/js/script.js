(function(global){

    var dc = {};

    var article1 = "snippets/blog/article1.html";

    var list = "snippets/list.html";

    // this is to insert to an element
    var insertHTML = function(selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    }

    // Loading a new page
    var showloading = function(selector) {
        var html = "<div class='text-center'><img src='images/loader.gif'></div>";
        insertHTML(selector, html);
    }


    // Initial load page (before images or css)
    document.addEventListener("DOMContentLoaded", function(event) {

        showloading("#main-content");

        $("#main-content").load(list);

    })

    dc.loadArticle1 = function() {
        showloading("#main-content");

        $("#main-content").load(article1);
    }

    global.$dc = dc;
})(window);