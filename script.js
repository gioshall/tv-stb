var d = new Date();
document.querySelector('.date').innerHTML = d.toDateString();

var gDiv = $('.games-blocks div').length;
for (var i = 0; i < gDiv ; i++) {
    $('.games-blocks div:nth-of-type('+i+')').css('animation-delay', (0.1*i+0.8) +'s')
};


$( '.games-blocks div:focus' ).click(function(){
    window.setTimeout(function(){
        $('.nav, .games-blocks').addClass('out');
        $( '.games-detail' ).addClass('show');
    }, 300);
})

$( '.games-detail .comb' ).click(function(){
    window.setTimeout(function(){
        $('.nav, .games-blocks').removeClass('out');
        $( '.games-detail' ).removeClass('show');
    }, 0);  
})

// key

var nowFocus = 0;
$( '.games-blocks div[tabindex='+nowFocus+']' ).trigger( 'focus' );

$( '.games-blocks div' ).on( 'focus', function(event){
    nowFocus = parseInt($(event.target).attr('tabindex'),10);
});

$(document).keydown(
    function(e){
        switch(e.keyCode){
            case 38://up
            	chkUp();
            break;
            case 40://down
            	chkDown();
            break;
            case 37://left
                chkLeft();
            break;
            case 39://right
            	chkRight(); 
            break;
            case 8://back
                chkBack();
            break;
            case 13://enter
                chkEnter();
            break;
        }
    }
);

function toFocus(n){
    $('.games-blocks div[tabindex='+n+']').focus();
}

function navFocus(n){
    $('.nav li[tabindex='+n+']').focus();
}

function chkEnter(){
    window.setTimeout(function(){
        $('.nav, .games-blocks').addClass('out');
        $( '.games-detail' ).addClass('show');
    }, 300); 
}

function chkBack(){
    window.setTimeout(function(){
        $('.nav, .games-blocks').removeClass('out');
        $( '.games-detail.show' ).removeClass('show');
    }, 0);
}

function chkUp(){
    switch(nowFocus){
        // case 0:
        //     navFocus(0)
        //break;
        case 4:
        case 5:
            toFocus(1);
        break;
        case 6:
            toFocus(2);
        break;
        case 11:
        case 12:
            toFocus(8);
        break;
        case 13:
            toFocus(9);
        break;
        case 21:
            toFocus(14);
        break;
        case 22:
            toFocus(15);
        break;
        case 23:
            toFocus(16);
        break;
        case 24:
            toFocus(17);
        break;
        case 25:
            toFocus(18);
        break;
        case 26:
            toFocus(19);
        break;
        case 27:
            toFocus(20);
        break;
    }
}

function chkDown(){
    switch(nowFocus){
        case 1:
            toFocus(4);
        break;
        case 2:
        case 3:
            toFocus(6);
        break;
        case 8:
            toFocus(11);
        break;
        case 9:
        case 10:
            toFocus(13);
        break;
        case 14:
            toFocus(21);
        break;
        case 15:
            toFocus(22);
        break;
        case 16:
            toFocus(23);
        break;
        case 17:
            toFocus(24);
        break;
        case 18:
            toFocus(25);
        break;
        case 19:
            toFocus(26);
        break;
        case 20:
            toFocus(27);
        break;
    }
}

function chkLeft(){
    switch(nowFocus){
        case 4:
            toFocus(0);
        break;
        case 11:
            toFocus(7);
        break;
        case 7:
            $('.games-blocks').css('transform','translateX(0px)');
            window.setTimeout(function(){
                toFocus(6);
            }, 200);
            $('.nav ul li').removeClass('active');
            $('.nav ul li:nth-of-type(1)').addClass('active');
        break;
        case 14:
        case 21:
            $('.games-blocks').css('transform','translateX(-1280px)');
            window.setTimeout(function(){
                toFocus(13);
            }, 200);
            $('.nav ul li').removeClass('active');
            $('.nav ul li:nth-of-type(2)').addClass('active');
        break;
        case 16:
        case 23:
            $('.games-blocks').css('transform','translateX(-2560px)');
            window.setTimeout(function(){
                $('.games-blocks div:focus').prev().focus();
            }, 10);
        break;
        default:
            $('.games-blocks div:focus').prev().focus();
        break;
    }
}

function chkRight(){
    switch(nowFocus){
        case 3:
        case 6:
            $('.games-blocks').css('transform','translateX(-1280px)');
            window.setTimeout(function(){
                toFocus(7);
            }, 200); 
            $('.nav ul li').removeClass('active');
            $('.nav ul li:nth-of-type(2)').addClass('active');
        break;
        case 10:
        case 13:
            $('.games-blocks').css('transform','translateX(-2560px)');
            window.setTimeout(function(){
                toFocus(14);
            }, 200);
            $('.nav ul li').removeClass('active');
            $('.nav ul li:nth-of-type(3)').addClass('active');
        break;
        case 18:
        case 25:
            $('.games-blocks').css('transform','translateX(-2970px)');
            window.setTimeout(function(){
                $('.games-blocks div:focus').next().focus();
            }, 10);
        break;
        default:
            $('.games-blocks div:focus').next().focus();
        break;
    }
}


// nav

$('.nav ul li:nth-of-type(1)').click(function(){
    $('.games-blocks').css('transform','translateX(0px)');
    window.setTimeout(function(){
        toFocus(0);
    }, 200);
	$('.nav ul li').removeClass('active');
    $(this).addClass('active');
});
$('.nav ul li:nth-of-type(2)').click(function(){
    $('.games-blocks').css('transform','translateX(-1280px)');
    window.setTimeout(function(){
        toFocus(7);
    }, 200);
	$('.nav ul li').removeClass('active');
    $(this).addClass('active');
});
$('.nav ul li:nth-of-type(3)').click(function(){
	$('.games-blocks').css('transform','translateX(-2560px)');
    window.setTimeout(function(){
        toFocus(14);
    }, 200);
	$('.nav ul li').removeClass('active');
    $(this).addClass('active');
});