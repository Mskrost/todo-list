$("button").click(() => {
    var todo = $('input').val();
    $("ul").append(`<li>${todo}</li>`);
});
        
$('ul').on('click', 'li', function() {
    $(this).toggleClass('line-through');
});