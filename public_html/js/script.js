document.querySelector('.grid').addEventListener('click', function (e) {
    if (e.target.tagName === 'IMG') {
        var howmany = this.querySelectorAll('li').lenght;
        if (howmany > 1) {
            var removeTarget = e.target.parentNode;
            removeTarget.parentNode.removeChild(removeTarget);
        } else {
            var projectName = e.target.alt;
            document.querySelector('#projects p').innerHTML = "<p>" + projectName + "</p>";
        } // howmany
    } // check to see that I clicked on IMG only
}, false); // click event