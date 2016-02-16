	
	

	/******************************************************************************************/
	/* GLOBAL */
 	/******************************************************************************************/

 	//input radio icon
 	function radio_icon(){
 		$('input[type="radio"].icon').each(function(){
	 		var id= $(this).attr('id');
	 		if(typeof id=='undefined') id="inp"+Math.random();
	 		ht = '<label class="pointer" for="'+id+'"><span class="glyphicon glyphicon glyphicon-minus-sign unchecked"></span><span class="glyphicon glyphicon glyphicon-ok-sign checked"></span> <span class="text">'+$(this).attr('data-label')+'</span></label>';
	 		$(this).after(ht);
	 		$(this).attr('id',id);

	 	});
 	}

	//navbar timer
	var _tLogo = setInterval(function(){
        st = parseInt($(window).scrollTop());
            if(st>30) {
                $('body').addClass('scrolled');
            }
            else       {
                $('body').removeClass('scrolled');                
            }
    },100);
	$('form.searchform').submit(function(){
		if($(this).find('input[type="text"]').val()==''){
			$(this).find('input[type="text"]').focus();
			return false;
		}
		return true;
	});

	//global function for account menu companies ssearch
	function account_search(){
		$('.page-myaccount-menu .input-group a.input-group-addon').click(function(e){ 
			if($(this).prev().val()!=''){
				$(this).prev().attr('disabled','disabled');
				$(this).hide(); 
				$(this).next().removeClass('hidden'); 
			}
			else{
				$(this).prev().focus();
				$(this).prev().focus();
				e.preventDefault();
				return false;
			}
		});

	}

	
	/******************************************************************************************/
	/* INDEX */
	/******************************************************************************************/
	_func.page_index = function(){
		//slider1, index page	
		$('.slider1 .slide').css({minWidth:$('.slider1 .slide:first').width()});
		$('.slider1 .slider-header-in a').click(function(){
			$(this).parent().find('a.active').removeClass('active');
			$(this).addClass('active');
			$('.slider1').attr('data-slide',$(this).index());
		});
		//header input
		$('.index-header .input-group input').focus(function(){ $(this).parent().addClass('focus') });
		$('.index-header .input-group input').blur(function(){ $(this).parent().removeClass('focus') });
		$('.index-header .input-group a').click(function(){ $(this).find('.s1').hide(); $(this).find('.s2').removeClass('hidden'); });
		//footer input
		$('.prefooter .subscribe input').focus(function(){ $(this).parent().addClass('focus') });
		$('.prefooter .subscribe input').blur(function(){ $(this).parent().removeClass('focus') });
	};
	_func.page_index();
	
	/******************************************************************************************/
	/* CONTACTS */
	/******************************************************************************************/
	_func.page_contacts = function(){
		//testing
	};
	_func.page_contacts();
	/******************************************************************************************/
	/* BLOG */
	/******************************************************************************************/
	_func.page_blog = function(){
		//testing
	};
	_func.page_blog_post = function(){
		//testing
	};
	_func.page_blog();
	_func.page_blog_post();
	/******************************************************************************************/
	/* MY ACCOUNT */
	/******************************************************************************************/
	_func.page_myaccount = function(){
		account_search();
	};
	_func.page_mydetails = function(){
		account_search();
	};
	_func.page_order_confirmation = function(){
		account_search();
	};
	_func.page_order_step06 = function(){
		radio_icon();
	};
	_func.page_order_confirmation();
	_func.page_myaccount();
	_func.page_mydetails();
	



//_function for scroll up, button is commented
function scrollup(){$('body, html').animate({scrollTop: 0});}
function scrollto(t){t+=parseInt(screen.height)-1080; $('body, html').animate({scrollTop: t});}
