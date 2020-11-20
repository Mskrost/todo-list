$('button').click(() => {
    var todo = $('input').val();
    if(todo !== '') {
        $('ul').append(`<li>${todo}<button class="done">D</button><button class="remove">R</button></li>`);
        $('input').val('');
    };
});

$('main').on('keypress', (event) => {
    if(event.which == 13) {
        var todo = $('input').val();
        if(todo !== '') {
            $('ul').append(`<li>${todo}<button class="done">D</button><button class="remove">R</button></li>`);
            $('input').val('');
        };
    };
});

/*
$('ul').on('click', 'li', (event) => {
    $(event.target).toggleClass('line-through');
    $(event.target).children('.done').toggleClass('did');
});
*/

$('ul').on('click', '.remove', (event) => {
    $(event.target).parent().remove();
});

$('ul').on('click', '.done', (event) => {
    $(event.target).parent().toggleClass('line-through');
    $(event.target).toggleClass('did');
});