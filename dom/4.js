function set_background()
{
    let texts = document.getElementsByTagName('p')
    // console.log( texts )
    // console.log( texts.length )
    // console.log( texts[0].innerHTML )
    // console.log( texts[1].innerHTML )
    texts[0].style.background = 'red'
    texts[1].style.background = 'yellow'
}