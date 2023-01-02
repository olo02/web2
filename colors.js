	var Body = {
		setColor : function(color){
		document.querySelector('body').style.color = color;
		},
		setBackgroundColor : function(color){
		document.querySelector('body').style.backgroundColor = color;
		}
	}
	var Links = {
		setColor : function(color){
			var all = document.querySelectorAll('a');
			var i = 0;
			while(i<동물.length){
				all[i].style.color = color;
				i=i+1;
			}
		}
	}
	function daynight(self){
		var i = 0;
		if (self.value === '밤'){
			Body.setBackgroundColor('black');
			Body.setColor('white');
			Links.setColor('powderblue');
			self.value = '낮';
		} 
		else {
			Body.setBackgroundColor('white');
			Body.setColor('black');
			Links.setColor('blue');
			self.value = '밤';
		}
	}