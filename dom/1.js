function cliked()
{
   var w = window.open()
    w.document.open()
    w.document.write("<h1>Hello World!</h1>")
    w.document.close()
    w.alert('Common MAdıııı!')
    // w.close()

    w.confirm('KApatmak istiyor musun gerçekten')
}