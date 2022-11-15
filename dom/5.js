function getAttributes() 
{
    let link = document.getElementById('w3r')
    console.log('href: ', link.href)
    console.log('hreflang: ', link.hreflang)
    console.log('rel: ', link.rel)
    console.log('target: ', link.target)
    console.log('type: ', link.type)

    // alert('The value of the href attribute of the link is : '+ link.href);
    // alert('The value of the href attribute of the link is : '+ link.hreflang);
    // alert('The value of the href attribute of the link is : '+ link.rel);
    // alert('The value of the href attribute of the link is : '+ link.target);
    alert('The value of the href attribute of the link is : '+ link.type);
     

}