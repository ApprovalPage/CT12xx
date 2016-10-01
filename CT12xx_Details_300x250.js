(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CT12xx_Details_300x250_atlas_NP_.jpg", id:"CT12xx_Details_300x250_atlas_NP_"}
	]
};



lib.ssMetadata = [
		{name:"CT12xx_Details_300x250_atlas_NP_", frames: [[0,252,300,250],[0,0,300,250]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.EndFrameblkdetails300x250 = function() {
	this.spriteSheet = ss["CT12xx_Details_300x250_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.iPhoneblkdetails300x250 = function() {
	this.spriteSheet = ss["CT12xx_Details_300x250_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.SUB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AD/MHIAAnqISSAAIAAHqg");
	mask.setTransform(142.5,77.5);

	// Layer 1
	this.instance = new lib.EndFrameblkdetails300x250();
	this.instance.setTransform(-3,19);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AAeTwIAAjRIVGAAIAADRg");
	mask_1.setTransform(138,126.5);

	// Layer 1
	this.instance_1 = new lib.EndFrameblkdetails300x250();

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(141,106.1,144,144);


(lib.iPhone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.iPhoneblkdetails300x250();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.HEAD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAQQgFAAgEgFQgEgFAAgGQAAgGAEgEQAFgFAEAAQAGAAAEAFQAEAEAAAGQAAAGgEAFQgEAFgGAAg");
	this.shape.setTransform(279.1,54.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1B0IBnjYIAAgBIh1AAIAAgPICHAAIAAANIhoDbg");
	this.shape_1.setTransform(267.2,43.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYBTQgPgGgKgLQgLgMgGgQQgFgQAAgTQAAgTAFgSQAHgRAKgMQALgNAOgGQAOgHAOAAQALAAAIADQAJACAHAEQANAIAHANQAHALADAPQADALAAAMIgBAKIh+AAQABASAFAPQAFAPAJAJQAJAJAMAFQAMAEAMAAQAYAAAYgKIAEAOQgYALgfAAQgQAAgPgHgAA2gOQAAgKgDgJQgCgLgFgJQgHgKgJgFQgLgGgOAAQgMAAgMAGQgJAFgIAJQgGAIgEAMQgEAKgCAKIBsAAIAAAAg");
	this.shape_2.setTransform(241.6,46.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAzBYIAAhlQAAgMgCgKQgDgLgFgIQgGgJgJgFQgKgEgNAAQgHAAgIACQgIADgHAGQgHAFgFAIQgFAHgDAIQgCAJAAAHIAABpIgRAAIAAiCIgBgpIAQAAIABAfIAAAAQAEgHAGgHQAGgGAHgFQAIgEAJgDQAKgDAIAAQAIAAAIACQAMAEAIAGQALAJAGAOQAHAWAAAQIAABmg");
	this.shape_3.setTransform(223.3,46.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBBaQgQAAgOgHQgPgFgLgMQgLgMgFgRQgHgQAAgUQABgUAGgRQAHgRALgMQALgMAPgFQAPgHAOAAQASAAAPAHQAOAGALAMQAKALAHARQAFARAAATQABAKgDAKIgFAUQgHAQgNAMQgLALgQAGQgNAFgNAAgAgbhEQgMAHgIALQgHALgEANQgFAOAAAMQAAAQAGAOQAEANAIALQAJAKALAGQAMAGANAAIAAAAQAMAAAMgGQAMgGAIgKQAJgLAFgOQAFgOAAgPQAAgLgDgOQgEgNgHgKQgJgNgLgGQgNgIgQABQgPAAgMAGg");
	this.shape_4.setTransform(204.1,46.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAzB/IAAhmQAAgMgDgKQgCgJgGgIQgGgJgJgEQgJgFgNAAQgHAAgIADQgIADgHAGQgHAEgFAIQgFAGgDAHQgCAHAAAKIAABpIgSAAIAAj9IASAAIAABxIAAAAQAEgGAGgHQAGgGAIgFQAIgFAIgCQAJgDAIAAQAIAAAIACQALADAJAHQALAJAGANQAHAUAAARIAABng");
	this.shape_5.setTransform(184.9,42.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhCB6IAAjuQAagFAbAAQASAAARAGQARAFAKAKQAIAIAFAMQAFANAAAOQAAAQgEAMQgEAMgJAJQgFAEgIAGQgIAFgJADQgYAHgPAAQgTAAgKgDIAABogAgwhnIAABqQAKAEAUAAQAQAAALgEQANgDAKgHQAJgHAEgLQAFgMAAgOQAAgOgFgLQgEgKgKgHQgIgHgNgDQgKgDgOAAQgVAAgNADg");
	this.shape_6.setTransform(166.8,43.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgHB2IAAirIAPAAIAACrgAAAhXQgFAAgEgFQgDgEAAgGQAAgGAEgEQAEgFAEAAQAFAAAFAFQADAEABAGQgBAGgDAEQgEAFgGAAg");
	this.shape_7.setTransform(153.4,43.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(137,26.6,157.6,40);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AD+RuIAAqJIR+AAIAAKJg");
	mask.setTransform(140.5,113.5);

	// Layer 1
	this.instance = new lib.EndFrameblkdetails300x250();
	this.instance.setTransform(-3,0);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(166,162.1,115,64.9);


(lib.CT1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Az1O1IAA9qMAnqAAAIAAdqg");
	this.shape.setTransform(127,95);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.BOOM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAPQgFAAgEgFQgEgEABgGQAAgGAEgEQAEgEAEAAQAGAAAEAEQAEAEAAAGQAAAGgEAEQgEAFgGAAg");
	this.shape.setTransform(279.4,88.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABTB1IgEhfIgDhiIgBAAQgSA9gKAcIgiBmIggAAIgfhlQgJgcgPg+IgBAAIgEBjIgFBeIgoAAIAPjqIA5AAIAfBgQAMAmAJAqIAAAAQAGgbARg2IAhhfIA4AAIANDqg");
	this.shape_1.setTransform(261.7,77.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYB3QgMgCgKgEQgKgFgIgHQgJgGgHgHQgHgJgFgJQgGgKgEgKIgFgYIgCgZQAAgLACgNQACgMAEgLIAKgWQAFgJAIgJQAHgIAJgGQAJgHAKgEQALgEALgDQAMgCAKAAQANAAALACQAMADAKAEQAKAEAJAHQAIAGAHAIQAIAIAFAKQAFAKAEAKQAHAeAAARQAAAMgCAOQgCANgEAMQgEALgGAKQgGAKgIAIQgHAIgJAGQgJAGgKAEQgLAEgLACQgLADgLAAQgMAAgLgDgAgahPQgMAHgJAMQgIAMgEAQQgFAQAAAQQAAATAFAQQAEAPAJALQAIAMAMAHQANAGANABQAPgBAMgGQAMgHAJgMQAIgMAFgPQAEgQAAgSQAAgQgEgQQgEgPgIgMQgJgMgMgIQgNgGgPgBQgOABgMAGg");
	this.shape_2.setTransform(234.9,77.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYB3QgMgCgKgEQgKgFgIgHQgJgGgHgHQgHgJgFgJQgGgKgEgKIgFgYIgCgZQAAgLACgNQACgMAEgLIAKgWQAFgJAIgJQAHgIAJgGQAJgHAKgEQALgEALgDQAMgCAKAAQANAAALACQAMADAKAEQAKAEAJAHQAIAGAHAIQAIAIAFAKQAFAKAEAKQAHAeAAARQAAAMgCAOQgCANgEAMQgEALgGAKQgGAKgIAIQgHAIgJAGQgJAGgKAEQgLAEgLACQgLADgLAAQgMAAgLgDgAgahPQgMAHgJAMQgIAMgEAQQgFAQAAAQQAAATAFAQQAEAPAJALQAIAMAMAHQANAGANABQAPgBAMgGQAMgHAJgMQAIgMAFgPQAEgQAAgSQAAgQgEgQQgEgPgIgMQgJgMgMgIQgNgGgPgBQgOABgMAGg");
	this.shape_3.setTransform(210.3,77.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhQB1IAAjnQAOgDAwgCQAXAAAPAEQAQADAMAIQAMAHAGALQAHAMAAAPQAAAHgDAJQgCAHgGAGQgFAHgHAGQgHAFgKAEIAAABQAKACAIAEQAJADAHAIQAGAIAEAJQAEAKAAAMQAAAPgGAMQgGAMgLAKQgGAFgJAEQgIAEgLADQgeAFgVAAQgdAAgYgCgAgmBWIAXABQALAAAHgCQAKgDAHgEQAHgFAEgHQAEgIAAgLQAAgKgEgHQgDgHgIgFQgHgEgKgDQgHgCgMAAIgWAAgAgmhVIAABAIAXAAQAKABAIgDQAIgDAGgEQAGgFADgGQADgGAAgIQAAgIgDgGQgDgGgGgEQgGgEgHgCQgHgCgKAAQgRAAgIACg");
	this.shape_4.setTransform(188.5,77.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(169,61.1,122,39);


// stage content:



(lib.CT12xx_Details_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.alreadyyExecuted){
		this.alreadyyExecuted=true;
			this.clickthru_btn.on("click", function(evt){
		  window.open(clickTag, "_blank");
		});
		} else {
		gotoAndPlay(2);
		}
	}
	this.frame_179 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==2){
		this.stop();
		}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(179).call(this.frame_179).wait(1));

	// clickthru
	this.clickthru_btn = new lib.CT1();
	this.clickthru_btn.setTransform(150,125,1.181,1.316,0,0,0,127,95);
	new cjs.ButtonHelper(this.clickthru_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthru_btn).wait(180));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(281,125,1,1,0,0,0,150,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139).to({_off:false},0).to({x:155},4).wait(37));

	// SUB
	this.instance_1 = new lib.SUB();
	this.instance_1.setTransform(150,272,1,1,0,0,0,150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({_off:false},0).to({y:125},4).wait(88));

	// BOOM
	this.instance_2 = new lib.BOOM();
	this.instance_2.setTransform(-172,359.3,5,5,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38).to({_off:false},0).to({scaleX:1,scaleY:1,x:150,y:125},5).wait(1).to({regX:149.9,regY:124.9,scaleX:1.5,scaleY:1.5,x:108.4,y:142.4},0).to({regX:150,regY:125,scaleX:1,scaleY:1,x:150,y:125},4).wait(132));

	// HEAD
	this.instance_3 = new lib.HEAD();
	this.instance_3.setTransform(267,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({x:150},4).wait(42).to({scaleX:1.38,scaleY:1.38,x:132.5,y:159.1},0).to({scaleX:1,scaleY:1,x:150,y:125},4).wait(129));

	// phone
	this.instance_4 = new lib.iPhone();
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(180));

	// bkgd
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(180));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;