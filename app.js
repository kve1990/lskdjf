for ( var i = 0; i < 10; i++ ){
	(function(ind){
		setTimeout(function(){
			console.log(ind);
		}, 1000);
	})(i);
}