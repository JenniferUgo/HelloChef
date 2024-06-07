//wait for the pafe to completely load before running the script
document.addEventListener('DOMContentLoaded', () => {

    //add reference to the hamburger and toolbar elements using thier ID
    let hamburger = document.getElementById('hamburger')
    let toolbar = document.getElementById('toolbar')

    //add event listener to the hamburger
    hamburger.addEventListener('click', ()=> {
        //make the toolbar appear
        toolbar.style.display = 'block'
    })

    //add event listener to the document
    document.addEventListener('click', (e) =>{
        //make the toolbar disapper when clicked outsite the menu feature
        
        if(!toolbar.contains(e.target) && !hamburger.contains(e.target)) {
            toolbar.style.display = 'none'
        }
    })

    //make toobar disappear when we click on any of the links or button inside the toolbar
    const toolbarlinks = toolbar.querySelectorAll('a, button')

    //loop/iteratre through all elements
    toolbarlinks.forEach((link) => {
        //add event listener
        link.addEventListener('click', () => {
            //make toolbar disappear when any link or button is clicked
            toolbar.style.display = 'none'
        })
    })
})