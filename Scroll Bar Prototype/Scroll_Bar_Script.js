// uses jQuery .load method instead of vue to load the one appropriate right panel with respect to paragraph on left panel
// right panels stored in separate html files which are called into main html as appropriate
// previous right panel is unloaded by overwriting right div

// import right div as jQuery object
let loadspace = $('#loadspace');
console.log(loadspace);

// declare global variables needed
let n=0;
let i;
let x=0;
let current=0;

// load first screen when web page first accessed
loadspace.load("test_div_" + "p" + current + ".html");

// calculate number of paragraphs in left div
$("p").each(function () {
    n++
});
console.log("n: "+n);


// function for creating event handlers to listen for respective paragraphs reaching (and leaving) top of screen in view
// then load respective right panel (overwriting previous screen) when a new paragraph comes to top of screen
// hence only one right panel loaded at a time
$(document).scroll(function () {
    // variable for measuring screen position with respect to scroll
    let y = $(this).scrollTop();

    // function to return and assign number of paragraph at top of screen to x
    function handleElement(para) {

        // Show element after user scrolls past
        // the top edge of its parent
        let top = $("#"+"p"+para).offset().top;
        let bottom = top + $("#"+"p"+para).outerHeight();
        if (y > top && y < bottom) {
            //$(x).fadeIn();
            x=para;
            console.log("para: "+para);
        };
    };

    // iteration of function for all paragraphs
    for(i=0; i<=n; i++)
    handleElement(i);

    // if x changes then old right panel changed to appropriate new right panel
    if(current!==x) {
        console.log("x: "+x);
        console.log("current: "+current);
        current=x;
        //loadspace.html("");
        loadspace.load("test_div_" + "p" + current + ".html");
    }

});

// legacy code - had issues with reloading right div for every scroll - fixed in above code

/*

});

$(document).scroll(function () {
    let y = $(this).scrollTop();
    // Show element after user scrolls past
    // the top edge of its parent
    $('#p1').each(function () {

        let top = $(this).offset().top;
        let bottom = top + $(this).outerHeight();
        if (y > top && y < bottom) {
            //$(x).fadeIn();
            loadspace.load("test_div_" + this.id + ".html");
        } else {
            //$(x).fadeOut();
            loadspace.html("");
        }
        //console.log(this.id)

    });
});

*/
