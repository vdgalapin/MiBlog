(function(global){

    var dc = {};

    var list = "snippets/list.html";

    // this is to insert to an element
    var insertHTML = function(selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    }

    // This is to add an element 
    var addHTML = function(selector, html) {
        $(selector).append(html);
    }

    // Loading a new page
    var showloading = function(selector) {
        var html = "<div class='text-center'><img src='images/loader.gif'></div>";
        insertHTML(selector, html);
    }


    // Initial load page (before images or css)
    document.addEventListener("DOMContentLoaded", function(event) {

        showloading("#main-content");

        $("#main-content").load(list, function() {
            addHomePageList()
        });
    })

    dc.goHome = function() {

        showloading("#main-content");

        $("#main-content").load(list, function() {
            addHomePageList()
        });

    }

    dc.loadArticle = function(selected_article) {
        showloading("#main-content");

        $("#main-content").load(selected_article);

    }

    function addHomePageList() {

        // var list = document.getElementById("articles_list").getElementsByTagName("li");

        // for(let x = 0; x < list.length; x++) {
        //     var article = addList(list[x].innerHTML);
        //     // document.getElementById("article_main_body").append(article);
        //     addHTML("#article_main_body", article)
        // }


        fetch('blogObjects/blogs.json')
            .then((response) => response.json())
            .then((json) => {
                for(let x = 0; x < json.articles.length; x++) {
                    addHTML("#article_main_body", addList(json.articles[x]));
                }
                // var data = JSON.parse(json);
                // console.log(data);
            });
    }
    function addList(article) {
        var articleName = article.articleName;
        var artliclePath = article.articlePath;
        var articleCategory = article.articleCategory;
        var articleDescription = article.articleDescription;
        var articleDateCreated = article.articleDateCreated;
        var articleImage = article.articleImage;

        var filePath = 'snippets/blog/' + artliclePath;
        var imagePath = 'images/' + articleImage
        return '<div>' +
                    '<div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">' +
                        '<div class="col p-4 d-flex flex-column position-static">' +
                            '<strong class="d-inline-block mb-2 text-primary">' + articleCategory + '</strong>' +
                            '<h3 class="mb-0">' + articleName + '</h3>' +
                            '<div class="mb-1 text-muted">' + articleDateCreated + '</div>' +
                            '<p class="card-text mb-auto">' + articleDescription + '</p>' +
                            '<a href="#" class="stretched-link" onclick="$dc.loadArticle(\''+ filePath + '\');">Continue reading</a>' +
                        '</div>' + 
                        '<div class="col-auto d-none d-lg-block">' +
                            '<img class="bd-placeholder-img" width="250" height="250" style="object-fit:cover;"  role="img"  src= \''+ imagePath + '\'/>' +
                        '</div>' +
                    '</div>' +
                '</div>';
    }

    global.$dc = dc;
})(window);