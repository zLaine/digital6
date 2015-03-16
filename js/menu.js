"use strict";
var MenuState= function(game){}
    
MenuState.prototype = {
	create: function(){
		var background = this.game.add.sprite(0,0, 'menuBackground');
		var playButton = this.game.add.button(154, 358, 'playButton', this.play, this);
		var howButton = this.game.add.button(154, 208, 'howButton', this.howToPlay, this);
		
	},
    	play: function(){
    		this.game.state.start('scene1');
    	},
    	howToPlay: function(){
    		this.game.state.start('howToPlay');
    	}
    	    
    	    
    	    
}

