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
	mask.graphics.p("AsuCMIAAkWIZdAAIAAEWg");
	mask.setTransform(211.5,32.1);

	// Layer 1
	this.instance = new lib.EndFrameblkdetails300x250();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(130,18.1,163,28);


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

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AKoFtIAAjmIMLAAIAADmg");
	mask.setTransform(146,36.5);

	// Layer 1
	this.instance = new lib.EndFrameblkdetails300x250();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(214,50.1,78,23);


// stage content:
(lib.CT12xx_Details_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.clickthru_btn.on("click", function(evt){
		  window.open(clickTag, "_blank");
		});
	}
	this.frame_119 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==3){
		this.stop();
		}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(119).call(this.frame_119).wait(1));

	// clickthru
	this.clickthru_btn = new lib.CT1();
	this.clickthru_btn.setTransform(150,125,1.181,1.316,0,0,0,127,95);
	new cjs.ButtonHelper(this.clickthru_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthru_btn).wait(120));

	// Layer 5
	this.instance = new lib.CTA();
	this.instance.setTransform(281,125,1,1,0,0,0,150,125);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({x:150},4).wait(21));

	// SUB
	this.instance_1 = new lib.SUB();
	this.instance_1.setTransform(150,289,1,1,0,0,0,150,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).to({y:125},4).wait(49));

	// BOOM
	this.instance_2 = new lib.BOOM();
	this.instance_2.setTransform(242,125,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({_off:false},0).to({x:150},5).wait(1).to({regX:149.9,regY:124.9,scaleX:1.79,scaleY:1.79,x:58.1,y:180.4},0).to({regX:150,regY:125,scaleX:1,scaleY:1,x:150,y:125},3).wait(74));

	// HEAD
	this.instance_3 = new lib.HEAD();
	this.instance_3.setTransform(324,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({x:150},4).wait(104));

	// phone
	this.instance_4 = new lib.iPhone();
	this.instance_4.setTransform(438.5,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:150},4).wait(116));

	// bkgd
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu2AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,588.5,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;