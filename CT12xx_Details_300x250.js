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
		{name:"CT12xx_Details_300x250_atlas_NP_", frames: [[0,0,300,250],[0,252,300,250]]}
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



(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBCQgNgFgIgJQgJgJgGgNQgEgMAAgQQAAgNAEgMQAEgOAJgKQAJgKAMgHQAGgCAHgCQAIgCAFABQAJgBAHACQAGACAGACQALAGAHAKQAHAKADAMQADALAAAMIgBANIhZAAQAAAIAEAIQADAGAGAFQAGADAHACQAFADAJAAQALAAAKgCQAJgCAHgDIAGAZIgVAFQgNACgOABQgOAAgOgFgAAegNQAAgMgGgJQgDgFgGgDQgGgEgHAAQgGAAgHAEQgFACgEAGQgHAIgBANIA6AAIAAAAg");
	this.shape.setTransform(18.6,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUBCQgNgFgKgJQgJgJgEgNQgFgMAAgQQAAgNAEgMQAEgOAJgKQAIgKAMgHQAHgCAHgCQAIgCAFABQAJgBAGACQAIACAGACQAKAGAIAKQAGAKADAMQADALAAAMIgBANIhZAAQAAAIADAIQAEAGAGAFQAGADAHACQAGADAIAAQAMAAAJgCQAJgCAIgDIAEAZIgUAFQgNACgOABQgOAAgNgFgAAegNQAAgMgFgJQgEgFgFgDQgHgEgIAAQgFAAgGAEQgGACgDAGQgIAIgBANIA6AAIAAAAg");
	this.shape_1.setTransform(5,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkBFIAAhaIgBgsIAeAAIABAaIABAAQACgHADgGQADgFAFgEQAKgHAMAAIAIABIAAAgIgKgBQgMAAgIAHQgIAHgBAMIgBAKIAABFg");
	this.shape_2.setTransform(-5.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BeIAAi7IBrAAIAAAcIhIAAIAAA0IBCAAIAAAbIhCAAIAABQg");
	this.shape_3.setTransform(-17.5,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-16,110,32);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBCQgNgFgIgJQgJgJgGgNQgEgMAAgQQAAgNAEgMQAEgOAJgKQAJgKAMgHQAGgCAHgCQAIgCAFABQAJgBAHACQAGACAGACQALAGAHAKQAHAKADAMQADALAAAMIgBANIhZAAQAAAIAEAIQADAGAGAFQAGADAHACQAFADAJAAQALAAAKgCQAJgCAHgDIAGAZIgVAFQgNACgOABQgOAAgOgFgAAegNQAAgMgGgJQgDgFgGgDQgGgEgHAAQgGAAgHAEQgFACgEAGQgHAIgBANIA6AAIAAAAg");
	this.shape.setTransform(18.6,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUBCQgNgFgKgJQgJgJgEgNQgFgMAAgQQAAgNAEgMQAEgOAJgKQAIgKAMgHQAHgCAHgCQAIgCAFABQAJgBAGACQAIACAGACQAKAGAIAKQAGAKADAMQADALAAAMIgBANIhZAAQAAAIADAIQAEAGAGAFQAGADAHACQAGADAIAAQAMAAAJgCQAJgCAIgDIAEAZIgUAFQgNACgOABQgOAAgNgFgAAegNQAAgMgFgJQgEgFgFgDQgHgEgIAAQgFAAgGAEQgGACgDAGQgIAIgBANIA6AAIAAAAg");
	this.shape_1.setTransform(5,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkBFIAAhaIgBgsIAeAAIABAaIABAAQACgHADgGQADgFAFgEQAKgHAMAAIAIABIAAAgIgKgBQgMAAgIAHQgIAHgBAMIgBAKIAABFg");
	this.shape_2.setTransform(-5.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BeIAAi7IBrAAIAAAcIhIAAIAAA0IBCAAIAAAbIhCAAIAABQg");
	this.shape_3.setTransform(-17.5,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-16,110,32);


(lib.SUB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArFM9IAAjSIVEAAIAADSgAnLlSIAAnqISRAAIAAHqg");
	mask.setTransform(217,170);

	// Layer 1
	this.instance = new lib.EndFrameblkdetails300x250();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(146,87.1,142,163);


(lib.iPhone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.iPhoneblkdetails300x250();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.HEAD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AFdDmIAAkWIRcAAIAAEWg");
	mask.setTransform(146.5,23);

	// Layer 1
	this.instance = new lib.EndFrameblkdetails300x250();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(181.4,18.1,111.6,28);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ao9FEIAAqHIR8AAIAAKHg");
	mask.setTransform(226.5,194.5);

	// Layer 1
	this.instance = new lib.EndFrameblkdetails300x250();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(169,162.1,115,64.9);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAFAFQAGAFAAAIQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape.setTransform(285.3,65.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA7BUIgDhFIgChFIgBAAQgMAsgIATIgYBJIgWAAIgWhIQgHgUgKgsIgBAAIgDBGIgEBEIgcAAIALinIApAAIAWBEQAIAbAGAeIAAAAIAQg5IAYhEIAoAAIAJCng");
	this.shape_1.setTransform(271.8,58.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBVQgIgCgHgDQgIgDgFgFQgGgEgGgGQgEgFgFgHQgEgHgCgIIgEgQIgBgSQAAgIABgJQABgJAEgIQACgIAEgHIAJgNQAGgGAHgEQAFgFAIgDQAHgDAJgCQAIgCAHAAQAJAAAIACQAIACAIADQAGADAHAFQAGAEAFAGQAFAGAEAHQAEAGADAIQAEAWABAMQAAAIgCAKQgBAJgDAIQgEAJgEAHQgDAHgGAFIgMAKQgGAFgIADQgHADgIABQgJACgGAAQgJAAgIgCgAgSg4QgJAFgGAJQgGAIgDAMQgDALAAALQAAANADALQAEAMAGAIQAFAIAJAFQAJAFAJAAQAKAAAJgFQAJgFAGgIQAGgJADgLQADgMAAgMQAAgLgCgLQgEgLgFgJQgHgJgIgFQgJgFgLAAQgKAAgIAFg");
	this.shape_2.setTransform(252.7,58.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBVQgIgCgHgDQgIgDgGgFQgFgEgFgGQgGgFgDgHQgFgHgCgIIgEgQIgCgSQAAgIACgJQABgJADgIQADgIAEgHIAKgNQAFgGAGgEQAHgFAHgDQAIgDAHgCQAJgCAGAAQAJAAAJACQAIACAIADQAHADAGAFQAGAEAFAGQAFAGAEAHQAEAGACAIQAGAWAAAMQgBAIgBAKQgBAJgEAIQgCAJgEAHQgFAHgFAFIgMAKQgHAFgGADQgIADgIABQgJACgGAAQgJAAgIgCgAgTg4QgIAFgGAJQgGAIgDAMQgDALAAALQAAANADALQADAMAGAIQAHAIAIAFQAJAFAJAAQALAAAIgFQAJgFAGgIQAGgJADgLQADgMAAgMQAAgLgDgLQgCgLgHgJQgFgJgJgFQgJgFgLAAQgJAAgKAFg");
	this.shape_3.setTransform(235.1,58.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5BTIAAikIAtgDQAPAAAMACQALADAIAGQAIAFAFAIQAFAIAAAKQAAAGgCAGQgCAFgDAFQgEAFgFADQgGAEgGADIAAAAIAMAFQAHACAEAFQAFAGADAGQADAIAAAIQAAALgEAJQgFAIgHAHQgFAEgGADIgNAFQgWADgPAAQgUAAgSgCgAgaA+IAQAAQAIAAAEgBQAHgCAFgDQAFgEADgFQAEgFAAgIQAAgHgEgGQgDgFgFgDQgFgDgHgCQgFgCgIAAIgPAAgAgag8IAAAuIAQAAQAIAAADgCQAGgCAFgDQAEgDACgFQADgEAAgFQAAgGgDgFQgBgEgFgDIgKgEQgEgBgGAAIgSABg");
	this.shape_4.setTransform(219.5,58.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(189,46.1,122,29);


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
	this.frame_225 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(225).call(this.frame_225).wait(1));

	// clickthru
	this.clickthru_btn = new lib.CT1();
	this.clickthru_btn.setTransform(150,125,1.181,1.316,0,0,0,127,95);
	new cjs.ButtonHelper(this.clickthru_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthru_btn).wait(226));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(281,125,1,1,0,0,0,150,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(185).to({_off:false},0).to({x:150},4).wait(37));

	// SUB
	this.instance_1 = new lib.SUB();
	this.instance_1.setTransform(150,289,1,1,0,0,0,150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134).to({_off:false},0).to({y:125},4).wait(88));

	// BOOM
	this.instance_2 = new lib.BOOM();
	this.instance_2.setTransform(-310,385.1,5,5,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).to({scaleX:1,scaleY:1,x:150,y:125},5).wait(1).to({regX:149.9,regY:124.9,scaleX:2,scaleY:2,x:49.1,y:192.4},0).to({regX:150,regY:125,scaleX:1,scaleY:1,x:150,y:125},4).wait(132));

	// Free
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(154.5,36.7,0.25,0.25);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(154.5,36.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.5,scaleY:1.5},3).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1},2).wait(198));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},2).wait(64).to({startPosition:0},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:138.6,y:37.1},0).to({scaleX:1,scaleY:1,x:154.5,y:36.7},4).wait(129));

	// HEAD
	this.instance_5 = new lib.HEAD();
	this.instance_5.setTransform(324,125,1,1,0,0,0,150,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({_off:false},0).to({x:150},4).wait(42).to({scaleX:1.38,scaleY:1.38,x:132.5,y:159.1},0).to({scaleX:1,scaleY:1,x:150,y:125},4).wait(129));

	// phone
	this.instance_6 = new lib.iPhone();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(226));

	// bkgd
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(226));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;