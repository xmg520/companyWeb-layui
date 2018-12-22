$(function(){
			var index=0;
			// 节流阀
			var flag=true;
			// 上一张
			$(".next").on("click",function(){
				if(flag==true){
					flag=false;
					index--;
					$(".view ul li").each(function(key,value){

						$(this).css({
							"transform":"rotateX("+(index*90)+"deg)",
							"transition-delay":(key*0.2)+"s"

						});
					});
					setTimeout(function(){
						flag=true;
					},1000);
				}

			});
			// 下一张
			$(".pre").on("click",function(){
				if(flag==true){
					flag=false;
					index++;
					$(".view ul li").each(function(key,value){

						$(this).css({
							"transform":"rotateX("+(index*90)+"deg)",
							"transition-delay":(key*0.2)+"s"

						});
					});
					setTimeout(function(){
						flag=true;
					},1000);
				}

			});

		});