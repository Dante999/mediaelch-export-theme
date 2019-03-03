$(document).ready(function(){

    $("a#btn-sort-by-title").click(function() {

        var sort_function = function(a, b) {
            var a_title = a.getElementsByClassName("overview-movie-title")[0].innerHTML;
            var b_title = b.getElementsByClassName("overview-movie-title")[0].innerHTML;
            return a_title.toLowerCase().localeCompare(b_title.toLowerCase());
        }

        var list = $(".overview-movie-container").get();
        list.sort(sort_function);
        for (var i = 0; i < list.length; i++) {
            list[i].parentNode.appendChild(list[i]);
        }

    });


    $("a#btn-sort-by-year").click(function() {

        var sort_function = function(a, b) {
            var a_year = a.getElementsByClassName("overview-movie-year")[0].innerHTML;
            var b_year = b.getElementsByClassName("overview-movie-year")[0].innerHTML;
            return b_year.toLowerCase().localeCompare(a_year.toLowerCase());
        }

        var list = $(".overview-movie-container").get();
        list.sort(sort_function);
        for (var i = 0; i < list.length; i++) {
            list[i].parentNode.appendChild(list[i]);
        }

    });


    $("a#btn-sort-by-rating").click(function() {

        var sort_function = function(a, b) {
            var a_year = a.getElementsByClassName("overview-movie-rating")[0].innerHTML;
            var b_year = b.getElementsByClassName("overview-movie-rating")[0].innerHTML;
            return b_year.toLowerCase().localeCompare(a_year.toLowerCase());
        }

        var list = $(".overview-movie-container").get();
        list.sort(sort_function);
        for (var i = 0; i < list.length; i++) {
            list[i].parentNode.appendChild(list[i]);
        }

    });


    $("a#btn-sort-by-random").click(function() {

        var sort_function = function(a, b) {
            return 0.5 - Math.random()
        }

        var list = $(".overview-movie-container").get();
        list.sort(sort_function);
        for (var i = 0; i < list.length; i++) {
            list[i].parentNode.appendChild(list[i]);
        }

    });



});
