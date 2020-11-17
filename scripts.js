$('button').click(() => {
    var todo = $('input').val();
    $('ul').append(`<li>${todo}</li>`);
});