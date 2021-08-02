const activeButton = document.querySelector("#active-button");
activeButton.addEventListener('click', showActiveBooks, true);
var ACTIVE_BOOKS = document.getElementById("active-category");
function showActiveBooks() {
    ACTIVE_BOOKS.classList.add('selected');
    console.log(ACTIVE_BOOKS.classList);
}

$(document).click(function(event) { 
    var $target = $(event.target);
    if(!$target.closest('#active-button').length) {
        ACTIVE_BOOKS.classList.remove('selected');
        console.log(ACTIVE_BOOKS.classList);
    }        
});

