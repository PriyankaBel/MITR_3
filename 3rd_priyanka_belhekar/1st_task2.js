function activity() {
	this.x;
	this.size;
	this.b_size = 60;
	this.w_width = 600;
	this.w_height = 600;
	this.pos = 0;
	this.pos1 = 0;
	this.pos2 = this.w_width - this.b_size;
	this.pos3 = this.w_width - this.b_size;
	this.size1 = 0;
	this.w_width -= this.b_size; 
	this.w_height -= this.b_size; 
	this.size = this.b_size;
	this.x = this.w_width;

}
activity.prototype.moveObject = function() {
	this.id = setTimeout(this.frame.bind(this), 3);
	document.getElementById("play").style.visibility='hidden';
	document.getElementById("pause").style.visibility='visible';
}
activity.prototype.frame = function() {
	var box_elem = document.getElementById("InnerBox"); 
	
	if (this.pos < this.w_width) {
		this.pos++; 
		box_elem.style.left = this.pos + 'px'; 
	} else if (this.pos1 < this.w_height) {
		this.pos1++; 
		box_elem.style.top = this.pos1 + 'px'; 
	}
	else if (this.pos2 > this.size1) {
		this.pos2--;
		box_elem.style.left = this.pos2 + 'px';
	}	
	else if (this.pos3 > this.size) {
		this.pos3--;
		box_elem.style.top = this.pos3 + 'px';
		
		if(this.pos3 == this.size)
		{
			this.pos = 0 + this.size1;
			this.pos1 = 0 + this.size;
			this.pos2 = this.pos3 = this.x - this.size;
			
			this.size = this.size + this.b_size;	
			this.size1 = this.size1 + this.b_size;	
				
			this.w_width = this.w_width - this.b_size;
			this.w_height = this.w_height - this.b_size;
					
			/*console.log("pos "+this.pos);
			console.log("pos1 "+this.pos1);
			console.log("pos2 "+this.pos2);
			console.log("pos3 "+this.pos3);
			console.log(this.w_height);
			console.log(this.w_width);*/
		}
	}

	this.id=setTimeout(this.frame.bind(this));
}	
activity.prototype.stopObject = function(){
	clearTimeout(this.id);	
	document.getElementById("pause").style.visibility='hidden';
	document.getElementById("play").style.visibility='visible';
}
var obj=new activity();