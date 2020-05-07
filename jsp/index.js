function totop(){
	$('body,html').animate({scrollTop:0},500);
                return false;
}


function showmenu(){
		
        var tab = document.getElementById("tab");
		
		if(tab.className==='tab'){
			$(".menu-sel").slideToggle();
			tab.className='tab active';
			
		}
		else {
			$(".menu-sel").slideToggle();
			tab.className='tab';
		}
	
        
}

$(function () {
	
});

