(function($, Drupal) {
  Drupal.behaviors.tracking = {
    attach:function(context, settings) {
    	
    	var urlTracking = '';
    	
    	/**
    	 * Function to call url tracking when click on link
    	 */
    	function trackEvent(link, url)
    	{
    		var tab = '_self';
    		
    		if (link.attr('target') == '_blank'){
    			tab = '_blank';
    		}
    		
    		// add tracking
    		$('<img src=' + url + ' width="1" height="1" border="0" alt="">').appendTo('body');
    		
    		// open link
    		setTimeout(function(){ 
    			window.open(link.attr('href'), tab);
    		},200);
    	}
    	
    	$('.node-563 .field-name-field-article-button .field-item.even a').click(function(e){ // tracking button application summer
    		e.preventDefault();
    		urlTracking = "https://i.ctnsnet.com/int/integration?pixel=3003827&nid=304041&cont=s";
    		trackEvent($(this), urlTracking);
    		return false;
    	});
    	
    	$('.node-563 .field-name-field-article-button .field-item.odd a').click(function(e){ // tracking button brochure summer
    		e.preventDefault();
    		urlTracking = "https://i.ctnsnet.com/int/integration?pixel=3003831&nid=304041&cont=s";
    		trackEvent($(this), urlTracking);
    		return false;
    	});
    	
    	$('.node-726 .field-name-field-article-button .field-item.even a').click(function(e){ // tracking button brochure english
    		e.preventDefault();
    		urlTracking = "https://i.ctnsnet.com/int/integration?pixel=3003855&nid=304041&cont=s";
    		trackEvent($(this), urlTracking);
    		return false;
    	});
    	
    	$('.node-726 .field-name-field-article-button .field-item.odd a').click(function(e){ // tracking button application english
    		e.preventDefault();
    		urlTracking = "https://i.ctnsnet.com/int/integration?pixel=3003839&nid=304041&cont=s";
    		trackEvent($(this), urlTracking);
    		return false;
    	});
    	
    	$('.node-500 .field-name-field-article-button .field-item.even a').click(function(e){ // tracking button brochure english intensive
    		e.preventDefault();
    		urlTracking = "https://i.ctnsnet.com/int/integration?pixel=3024625&nid=304041&cont=s";
    		trackEvent($(this), urlTracking);
    		return false;
    	});
    	
    	$('.node-500 .field-name-field-article-button .field-item.odd a').click(function(e){ // tracking button application english intensive
    		e.preventDefault();
    		urlTracking = "https://i.ctnsnet.com/int/integration?pixel=3024621&nid=304041&cont=s";
    		trackEvent($(this), urlTracking);
    		return false;
    	});
    }
  };
}(jQuery, Drupal));
