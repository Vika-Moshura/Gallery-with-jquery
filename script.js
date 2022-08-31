$(function () {
    let offsetTop, offsetLeft, backCol;
    $('.block').each(function (index, element) {
        $(element).click(function () {
            offsetTop = $(element).offset().top;
            offsetLeft = $(element).offset().left;
            backCol = $(element).css('backgroundColor');
            $('.modal').offset({
                'top': `${offsetTop}`,
                'left': `${offsetLeft}`,
            });
            $(element).css('visibility', 'hidden');
            $('.modal').css({
                'backgroundColor': `${backCol}`,
                'z-index': '3',
                'margin': 'auto'
            }).animate({
                'top': '0',
                'left': '0',
                'bottom': '0',
                'right': '0',
                'width': '+=200',
                'height': '+=200',
            }, 2000, 'easeInOutQuart')
            $('.gallery').css({
                'z-index': '2',
                'backgroundColor': '#4e4545ab',
            });
        })
    })
    $('.modal').click(function () {
        $(this).animate({
            'top': `${offsetTop}`,
            'left': `${offsetLeft}`,
            'margin': '0',
            'width': '-=200',
            'height': '-=200',
        }, 2000, 'easeInOutQuart', function () {
            $(this).css({
                'backgroundColor': 'white',
                'z-index': '-1',
                'top': '',
                'left': '',
                'bottom': '',
                'right': '',
            })
            $('.gallery').css({
                'backgroundColor': 'white',
                'z-index': '-1',
            });
            $('.block').css('visibility', 'visible')
        })


    })

})