
(function () {
    var quotes = [
        'For my part, I travel not to go anywhere, but to go. I travel for travel’s sake.',
        'Adventure is worthwhile',
        'Traveling – it leaves you speechless, then turns you into a storyteller',
        'We travel, some of us forever, to seek other places, other lives, other souls',
        'A journey is best measured in friends, rather than miles'
    ], backgrounds = ['url(images/american.png)', 'url(images/background1.jpg)', 'url(images/background2.jpg)', 'url(images/banner.jpg)', 'url(images/eagle.jpg)'];

    document.querySelector('.quotebutton').addEventListener('click', function () {
        function randnum(array) {
            return [Math.floor(Math.random() * array.length)];;
        }
        document.querySelector('.form').innerHTML = quotes[randnum(quotes)];
        document.body.style.backgroundImage = backgrounds[randnum(backgrounds)];
        
    })
}) ();

