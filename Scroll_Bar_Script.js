//let x = $('#fader');
let loadspace = $('#loadspace');
let n=0;
let i;
let x=0;
let current=0;

console.log(loadspace);
loadspace.load("test_div_" + "p" + current + ".html");

$("p").each(function () {
    n++
});

console.log("n: "+n);



$(document).scroll(function () {

    let y = $(this).scrollTop();

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

    for(i=0; i<=n; i++)
    handleElement(i);

    if(current!==x) {
        console.log("x: "+x);
        console.log("current: "+current);
        current=x;
        //loadspace.html("");
        loadspace.load("test_div_" + "p" + current + ".html");
    }

});



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