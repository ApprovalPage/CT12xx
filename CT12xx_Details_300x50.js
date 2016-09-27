(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 50,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/EndFrameblkdetails300x50.png", id:"EndFrameblkdetails300x50"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.EndFrameblkdetails300x50 = function() {
	this.initialize(img.EndFrameblkdetails300x50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,50);


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
	mask.graphics.p("AlOD6IAAkMIVnAAIAAEMg");
	mask.setTransform(105,25);

	// Layer 1
	this.instance = new lib.EndFrameblkdetails300x50();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71.5,23.1,138.5,26.9);


(lib.iPhone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkKELIAAoVIIVAAIAAIVg");
	mask.setTransform(26.8,26.8);

	// Layer 1
	this.instance = new lib.EndFrameblkdetails300x50();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.5,50);


(lib.HEAD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACQB6IAAjyIKtAAIAADyg");
	mask.setTransform(83,10.7);

	// Layer 1
	this.instance = new lib.EndFrameblkdetails300x50();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(97.5,0,68.6,22.9);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AMfD6IAAnyIK8AAIAAHyg");
	mask.setTransform(150,25);

	// Layer 1
	this.instance = new lib.EndFrameblkdetails300x50();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(230,0.1,70,50);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgJALQgFgEAAgHQAAgFAFgFQAEgEAFAAQAGAAAFAEQAEAFAAAFQAAAHgEAEQgFAEgGAAQgFAAgEgEg");
	this.shape.setTransform(225.4,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAvBDIgCg3IgCg3IAAAAIgQAyIgUA6IgRAAIgSg5IgOgzIAAAAIgCA4IgDA2IgXAAIAJiFIAgAAIASA3QAHAVAEAXIAAAAIANgtIATg2IAgAAIAHCFg");
	this.shape_1.setTransform(215.4,14.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOBEIgLgEIgLgGQgFgDgEgFIgHgKQgEgFgCgHIgCgNIgCgPIACgMQAAgIADgGQACgGAEgGQADgGAEgEQAEgFAGgDQAFgEAFgDQAGgCAGgBQAHgCAFAAQAHAAAHACQAGABAHACIALAHIAJAIIAHAKQACAFACAGQAFASAAAJQAAAGgBAJIgEANIgGANQgDAFgEAFIgKAIIgLAFQgGADgGABIgMABIgOgBgAgOgtQgIAFgEAGQgFAHgCAJQgDAKAAAIQAAAKADAJQADAJAEAHQAFAHAHADQAHAFAHAAQAIAAAHgFQAIgDAEgHQAFgHADgJQACgJAAgKQAAgJgCgIQgDgJgEgHQgGgHgGgEQgIgEgIAAQgIAAgGADg");
	this.shape_2.setTransform(200.9,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOBEIgLgEIgLgGQgFgDgEgFIgHgKQgEgFgCgHIgDgNIgBgPIABgMQACgIACgGQACgGADgGQADgGAFgEQAEgFAGgDQAEgEAGgDQAGgCAGgBQAHgCAFAAQAIAAAGACQAGABAHACIAKAHIAJAIIAIAKQACAFACAGQAFASAAAJQAAAGgBAJIgEANIgGANQgDAFgEAFIgKAIIgLAFQgGADgHABIgLABIgOgBgAgPgtQgGAFgFAGQgFAHgCAJQgDAKAAAIQAAAKADAJQACAJAFAHQAFAHAHADQAHAFAHAAQAJAAAHgFQAGgDAFgHQAFgHADgJQACgJAAgKQAAgJgCgIQgDgJgFgHQgEgHgHgEQgHgEgJAAQgHAAgIADg");
	this.shape_3.setTransform(187.6,14.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgtBCIAAiCQAIgCAcgBQAMAAAIACQAKACAGAFQAHADADAHQAEAGAAAJIgBAJIgEAIIgHAHIgKAFIAAAAIAKAEQAFABAEAEQAEAFACAFQACAGAAAHQAAAIgDAIQgEAHgGAFIgIAFIgLAEQgRADgMAAQgQAAgOgCgAgVAxIANABQAHAAADgCQAFgBAEgDQAEgCADgFQACgEAAgGQAAgGgCgEQgCgEgFgDQgEgDgFgBQgEgBgGAAIgNAAgAgVgwIAAAlIANAAIAJgBQAFgCAEgDIAFgGQACgDAAgEQAAgFgCgEQgCgDgDgCQgDgDgFgBIgJgBIgOABg");
	this.shape_4.setTransform(175.8,14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(164.1,4.3,68.4,24);


// stage content:



(lib.CT12xx_Details_300x50 = function(mode,startPosition,loop) {
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
	this.clickthru_btn.setTransform(150,25,1.181,0.263,0,0,0,127,95);
	new cjs.ButtonHelper(this.clickthru_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthru_btn).wait(226));

	// CTA
	this.instance = new lib.CTA();
	this.instance.setTransform(247.3,125,0.771,1,0,0,0,150.8,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(185).to({_off:false},0).to({regX:150,scaleX:1,x:150},4).wait(37));

	// SUB
	this.instance_1 = new lib.SUB();
	this.instance_1.setTransform(150,154,1,1,0,0,0,150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134).to({_off:false},0).to({y:125},4).wait(88));

	// BOOM
	this.instance_2 = new lib.BOOM();
	this.instance_2.setTransform(-137.2,574.1,5,5,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(84).to({_off:false},0).to({scaleX:1,scaleY:1,x:150,y:125},5).wait(1).to({regX:149.9,regY:124.9,scaleX:2,scaleY:2,x:94.1,y:236.8},0).to({regX:150,regY:125,scaleX:1,scaleY:1,x:150,y:125},4).wait(132));

	// HEAD
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(85.5,15.7,0.25,0.25);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(77,16.3,0.68,0.68);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:1.5,scaleY:1.5,x:88.5,y:12.2},3).to({_off:true,regX:0,regY:0,scaleX:0.68,scaleY:0.68,x:77,y:16.3},2).wait(198));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},2).wait(64).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,y:16.2},0).to({scaleX:0.68,scaleY:0.68,y:16.3},4).wait(129));

	// phone
	this.instance_5 = new lib.HEAD();
	this.instance_5.setTransform(324,125,1,1,0,0,0,150,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({_off:false},0).to({x:150},4).wait(42).to({scaleX:1.2,scaleY:1.2,x:170,y:147.6},0).to({scaleX:1,scaleY:1,x:150,y:125},4).wait(129));

	// phone
	this.instance_6 = new lib.iPhone();
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(226));

	// bkgd
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bD6IAAnzMAu2AAAIAAHzg");
	this.shape.setTransform(150,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(226));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.5,24.5,300.5,54.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;