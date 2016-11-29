$(document).ready(function() {
    $('#fullpage').fullpage({
    		scrollingSpeed: 600,
    		sectionsColor:['#FFDD55','#282828','#282828','#282828','#282828'],
    		anchors:['page1','page2','page3','page4','page5'],
    		verticalCentered:true,
    		navigation:true,
    		navigationTooltips:['个人主页','项目经验','专业技能','工作经历','教育背景'],
    		loopBottom:true,
    		fixedElements:".down",
    		afterLoad:function(link,index){
					switch(index){
						 case 1:
							move('.profile img').rotate(360).end(function(){
								move('.profile h1').set('opacity',"1").end();
								move('.profile h1').set('margin-top',"0").end(function(){
									move('.profile .intro').set('margin-top','0').end();
									move('.profile .intro').set('opacity',"1").end(function(){
										move('.profile .quote').set('bottom','60px').end();
										move('.profile .quote').set('opacity','1').end(function(){
											move('.down').set('display','block').end();
										});
									});
								});
							});
						break;
						case 2:
							move('.projects h1').set('opacity','1').end();
							move('.projects h1').set('transform','translateX(0)').end();
							$(".down  span").css("border-color", "#f39c12");
						break;
						case 3:
							move('.skills h1').set('opacity','1').end();
							move('.skills h1').set('transform','translateX(0)').end(function(){
							move('.skills .html').set('width','90%').duration('1.5s').end();
							move('.skills .html').set('animation','reverse progress-bar-stripes 1s linear infinite').end();
							move('.skills .css').set('width','85%').duration('1.5s').end();
							move('.skills .css').set('animation','reverse progress-bar-stripes 1s linear infinite').end();
							move('.skills .js').set('width','75%').duration('1.5s').end();
							move('.skills .js').set('animation','reverse progress-bar-stripes 1s linear infinite').end();
							move('.skills .jq').set('width','80%').duration('1.5s').end();
							move('.skills .jq').set('animation','reverse progress-bar-stripes 1s linear infinite').end();
							move('.skills .bs').set('width','70%').duration('1.5s').end();
							move('.skills .bs').set('animation','reverse progress-bar-stripes 1s linear infinite').end();
							move('.skills .ps').set('width','70%').duration('1.5s').end();
							move('.skills .ps').set('animation','reverse progress-bar-stripes 1s linear infinite').end();
							});
						break;
						case 4:
							move('.experience h1').set('opacity','1').end();
							move('.experience h1').set('transform','translateX(0)').end();
						break;
						case 5:
							move('.education h1').set('opacity','1').end();
							move('.education h1').set('transform','translateX(0)').end();
						break;
						default:
                    			break;
					}
				},
		onLeave:function(index, nextIndex, direction){
					switch(index){
						case 1:
							move('.profile img').rotate(-360).end();
						break;
						case 2:
							move('.projects h1').set('opacity','0').end();
							move('.projects h1').set('transform','translateX(-200px)').end();
						break;
						case 3:
							move('.skills h1').set('opacity','0').end();
							move('.skills h1').set('transform','translateX(-200px)').end();
						break;
						case 4:
							move('.experience h1').set('opacity','0').end();
							move('.experience h1').set('transform','translateX(-200px)').end();
						break;
						case 5:
							move('.education h1').set('opacity','0').end();
							move('.education h1').set('transform','translateX(-200px)').end();
						break;
						default:
                    			break;
					}
				}
     })
    $(".down").bind("click",function(){
		$(".fullpage").fullpage.moveSectionDown()
	})
    if($(window).height()<620 && $(window).width()<800 && $(window).width()>480){
    	$(".experience div.period:nth-of-type(2)").css('display','none');
    }
});
