var args = arguments[0] || {};

var full, half, empty;

if(args.clickable)
	$.clickable = args.clickable;
else
	$.clickable = false;
	
if (!$.clickable){
    full = WPATH('/images/stars_small/full.png');
    half = WPATH('/images/stars_small/half.png');
    empty = WPATH('/images/stars_small/empty.png');
    
	$.star1.width = $.star2.width = $.star3.width = $.star4.width = $.star5.width = "16dp";
	$.star1.height = $.star2.height = $.star3.height = $.star4.height = $.star5.height = "16dp";
    
} else {
    full = WPATH('/images/stars_large/full.png');
    half = WPATH('/images/stars_large/half.png');
    empty = WPATH('/images/stars_large/empty.png');
    
	$.star1.width = $.star2.width = $.star3.width = $.star4.width = $.star5.width = "25dp";
	$.star1.height = $.star2.height = $.star3.height = $.star4.height = $.star5.height = "25dp";
}

$.star1.image = $.star2.image = $.star3.image = $.star4.image = $.star5.image = empty;
_.extend($.starContainer, args);

if (args.rate){
	setRate(args.rate);
}

$.star1.addEventListener('error', function(e){
    Ti.API.error( 'error loading ' + e.image);
});

function setRate(value){
    Ti.API.info('rate value = ' + value);
	$.val = parseInt(value, 10);
	var i = 1, star , last;
	for(i; i<=5; i++){
		star= $['star'+(i)];
		if(i<=value){
			star.image=full;
			last= i;
		}else{
			star.image = empty;
		}
	}
	star= $['star'+(last+1)];
	if(value-last >= 0 && value-last <= 0.3){
		star=$['star' +(last)];
		star.image=full;
	}
	else if(value-last > 0.3 && value-last <=0.8){
		star.image=half;
	}
	else if(value-last >0.8 && value-last <=1){
		star.image=empty;
	}
}

function starClicked(e){
	var index = e.source.index;
	if($.clickable){
		setRate(index);
	}
}

exports.setVisible = function(visible){
    $.starContainer.visible = visible;
};

exports.setRate = setRate;

