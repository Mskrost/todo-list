$('button').click(() => {
    var todo = $('input').val();
    $('ul').append(`<li>${todo}</li>`);
});
        
$('ul').on('click', 'li', (event) => {
    $(event.target).toggleClass('line-through');
});