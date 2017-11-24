(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.track = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgxLaIAA2zIBjAAIAAWzg");
	this.shape.setTransform(5,73);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.track, new cjs.Rectangle(0,0,10,146), null);


(lib.thumb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgxBkIAAjHIBjAAIAADHg");
	this.shape.setTransform(5,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.thumb, new cjs.Rectangle(0,0,10,20), null);


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.tf = new cjs.Text("{DISCLAIMER}", "10px 'Arial'", "#999999");
	this.tf.name = "tf";
	this.tf.lineHeight = 13;
	this.tf.lineWidth = 274;
	this.tf.alpha = 0.90196078;
	this.tf.parent = this;
	this.tf.setTransform(2,6);

	this.timeline.addTween(cjs.Tween.get(this.tf).wait(1));

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(0,4,278,355.4), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#E6E7E8"],[0,1],-2.9,22.2,0,-2.9,22.2,160).s().p("AAANDIiDBVIhnh3IiXAsIhBiPIidAAIgXibIiWgtIAVicIiEhUIBCiPIhnh3IBnh2IhCiPICEhVIgVicICWgsIAXibICdAAIBBiPICXAsIBnh2ICDBUICEhUIBoB2ICWgsIBCCPICcAAIAXCbICWAsIgVCcICEBVIhCCPIBnB2IhnB3IBCCPIiEBUIAVCcIiWAtIgXCbIicAAIhCCPIiWgsIhoB3gABzMjIBahnICEAnIA5h+ICKAAIATiHICEgnIgUiIIB0hLIg5h8IBahoIhahnIA5h9Ih0hKIAUiIIiEgmIgTiIIiKAAIg5h9IiEAmIhahnIhzBKIhyhKIhaBnIiEgmIg5B9IiKAAIgTCIIiEAmIAUCIIh0BKIA5B9IhaBnIBaBoIg5B8IB0BLIgUCIICEAnIATCHICKAAIA5B+ICEgnIBaBnIByhKg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#24D0FD","#1268FB"],[0,1],0,93.2,0,-89.4).s().p("AAAMOIh7BQIhhhwIiNAqIg8iGIiUAAIgViSIiNgqIAUiRIh7hQIA9iGIhghvIBghvIg9iFIB7hQIgUiRICNgqIAViSICUAAIA8iGICNApIBhhvIB7BQIB8hQIBhBvICNgpIA9CGICTAAIAVCSICOAqIgVCRIB7BQIg9CFIBgBvIhgBvIA9CGIh7BQIAVCRIiOAqIgVCSIiTAAIg9CGIiNgqIhhBwg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-92.9,-91.9,185.8,183.9), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhHhsICPBsIiPBtg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-8.1,-11.8,16.4,23.8), null);


(lib.subhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32307A").s().p("AJpBPQgJgFgDgIQgDgFgBgFIgBhYIANAAIABBWQABAGACADQADAEAGADQAGADAFAAQAJAAAGgEQAHgDADgIIAFgKIABgQIAAhAIAMAAIAABmQAAAFACAGIgMAAQgCgHAAgJQgGAKgHAEQgGAFgMAAQgKAAgKgFgAH2BPQgHgEgGgHQgHgIgCgLQgEgLAAgNQAAgNADgMQADgKAGgIQAGgIAIgFQAIgDAJAAQAMAAAIAEQAJAFAFALIAAhAIAMAAIAAB+QAAAVADAMIgOAAQgBgGAAgHIAAgDQgHAKgHAEQgIAFgKAAQgKAAgJgFgAH0gOQgGAIgCAJQgDALAAAKQAAALADALQACAJAGAIQADAEAGADQAFADAHAAQAHAAAGgEQAGgDAEgHQAFgGACgJQACgJAAgLQAAgKgCgKQgCgIgFgGQgEgHgFgDQgHgDgHAAQgOgBgHAKgAGCBPQgIgDgGgJQgHgHgDgMQgEgLAAgOQAAgNAEgKQADgKAHgIQAGgIAIgFQAJgDALAAQAKAAAJADQAJAFAGAIQAGAIAEAKQADALABANQgBANgDALQgEALgGAIQgHAIgIAEQgJAFgKAAQgLAAgJgFgAGHgUQgFADgFAHQgEAGgDAIQgDAJAAAKQAAAMACAIQADAJAFAHQAFAHAFADQAHAEAIAAQAHAAAGgEQAHgDAEgHQAFgHADgJQACgIAAgLQAAgKgCgKQgDgIgEgGQgFgHgHgDQgFgDgIAAQgIAAgHADgACeBPQgIgEgHgHQgGgIgEgLQgDgLAAgOQAAgNADgLQAEgKAGgIQAGgIAJgFQAJgDAKAAQAJAAAHACQAIADAEAFQAGAFACAHQADAIACAIIgNAAQgBgFgCgGQgCgGgEgDQgDgEgFgCQgFgBgGAAQgHAAgGADQgHADgFAHQgEAGgCAIQgDAKAAAKQAAALADAJQACAJAEAGQAFAHAHADQAGAEAIAAQAGAAAEgDQAGgCADgDQAEgEACgFIADgOIANAAQgBALgEAHQgCAIgGAGQgFAEgHADQgHADgJAAQgKAAgKgFgAAoBPQgJgDgGgJQgGgHgEgMQgDgLAAgOQAAgNADgKQAEgKAGgIQAHgIAIgFQAKgDAKAAQAKAAAJADQAJAFAGAIQAGAIAEAKQADALAAANQAAANgDALQgEALgGAIQgHAIgIAEQgJAFgKAAQgLAAgJgFgAAugUQgHADgEAHQgEAGgDAIQgDAJAAAKQAAAMADAIQACAJAEAHQAGAHAGADQAGAEAIAAQAHAAAHgEQAGgDAFgHQAEgHADgJQACgIAAgLQAAgKgCgKQgCgIgFgGQgFgHgGgDQgHgDgHAAQgIAAgGADgAhPBPQgIgEgGgHQgGgIgDgLQgEgLABgNQAAgNACgMQAEgKAFgIQAGgIAJgFQAHgDAKAAQAMAAAIAEQAIAFAFALIAAhAIANAAIAAB+QAAAVACAMIgNAAQgCgGAAgHIAAgDQgGAKgHAEQgIAFgKAAQgKAAgJgFgAhSgOQgFAIgDAJQgDALAAAKQAAALADALQADAJAFAIQAEAEAFADQAGADAHAAQAHAAAFgEQAHgDADgHQAFgGACgJQADgJgBgLQABgKgDgKQgCgIgFgGQgEgHgFgDQgGgDgHAAQgOgBgIAKgAktBQQgJgEgGgIQgGgIgEgLQgDgKAAgOQAAgOADgLQAEgKAGgIQAGgIAJgFQAJgDAKAAQAKAAAIADQAIAEAGAIQAGAHADAKQADAKAAANIAAAEIhOAAQAAAMADAJQADAIAEAGQAEAHAHACQAGAEAIAAQAKAAAGgFQAGgEAGgKIAMACQgDAHgDAFQgEAFgFAEQgGADgFACQgHACgHAAQgLAAgJgEgAj8APQAAgJgDgHQgCgHgEgFQgEgFgGgDQgFgDgHABQgGgBgGADQgFADgEAFQgFAFgCAHIgFAQIBAAAIAAAAgAmlBPQgIgEgGgHQgGgIgDgLQgEgLABgNQAAgNACgMQAEgKAFgIQAGgIAJgFQAHgDAKAAQAMAAAIAEQAIAFAFALIAAhAIANAAIAAB+QAAAVACAMIgNAAQgCgGAAgHIAAgDQgGAKgHAEQgIAFgKAAQgKAAgJgFgAmogOQgFAIgDAJQgDALAAAKQAAALADALQADAJAFAIQAEAEAFADQAGADAHAAQAHAAAFgEQAHgDADgHQAFgGACgJQADgJgBgLQABgKgDgKQgCgIgFgGQgEgHgFgDQgGgDgHAAQgOgBgIAKgAoZBPQgJgDgGgJQgGgHgEgMQgDgLAAgOQAAgNADgKQAEgKAGgIQAHgIAIgFQAJgDALAAQAJAAAJADQAJAFAHAIQAGAIAEAKQADALAAANQAAANgDALQgEALgGAIQgHAIgJAEQgJAFgJAAQgLAAgJgFgAoUgUQgGADgFAHQgEAGgDAIQgDAJAAAKQABAMACAIQACAJAFAHQAFAHAGADQAGAEAJAAQAGAAAHgEQAGgDAFgHQAFgHACgJQADgIAAgLQAAgKgDgKQgCgIgEgGQgGgHgGgDQgGgDgHAAQgJAAgGADgALOBQQgDgDAAgFQAAgGADgDQAEgEAFAAQAFAAAEAEQAEADAAAGQAAAFgEADQgDADgGABQgFgBgEgDgAE9BRIgBhUQgBgGgCgEQgDgFgFgDQgGgCgHAAQgHAAgGACQgGADgEAFQgEAFgCAIQgCAHAAAKIAABAIgNAAIAAifIANAAIAAA8QAGgJAIgEQAHgDALAAQALAAAIADQAIAEAFAHQADAGAAAHIABAXIAABBgAjRBRIAAhLIgRANIAAgNIARgLIAAhJIAOAAIAABCIASgMIAAALIgSANIAABRgAp5BRIAAhJQAAgZgBgPIALAAQACAKAAAIIAAAHQAFgPAIgGQAGgHAKABQAIgBAGAEIAAAMQgIgEgGAAQgGAAgHAGQgFAEgFAJIgEAOQgCAJAAAMIAAAygArjBRIAAgKIBFhcIhAAAIAAgLIBPAAIAAAJIhFBdIBDAAIAAALgALSAnIgBhzIANAAIgCBzgAoSg0IAXgfIAUAAIgfAfgArEg0IAXgfIAUAAIggAfg");
	this.shape.setTransform(-145.8,61.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32307A").s().p("AGcEFIAAgMIAOgBQAFgBAEgEQAEgEADgHIAHgTIgmhyIAMAAIAhBhIAjhhIAMAAIgvCFQgDAHgFAGQgFAIgIAEQgIAEgKAAgAkGEEIAAiAQAAgUgCgNIAMAAQACAGAAAMQAGgLAIgFQAJgFAKAAQAKAAAIAEQAIAFAGAIQAGAIADALQADALAAAOQAAANgDALQgDALgFAIQgHAHgHAEQgIAFgKAAQgLAAgIgFQgIgFgHgKIAABAgAjmBvQgGADgFAHQgEAGgCAJQgDAJAAALQAAALADAJQACAIAEAHQAFAGAGAEQAGADAHAAQAIAAAFgDQAFgDAFgGQAEgGACgJQACgJAAgLQAAgLgDgKQgCgJgDgGQgFgHgGgDQgFgEgHAAQgHAAgGAEgAIiDTQgIgEgHgHQgGgIgEgLQgDgLAAgOQAAgNADgLQAEgLAGgIQAGgIAJgFQAJgEAKAAQAJAAAIADQAGACAFAFQAGAGACAHQADAIACAJIgNAAQgBgHgCgFQgCgGgEgDQgEgEgEgCQgFgCgGAAQgHAAgGAEQgHADgFAHQgEAGgCAJQgDAJAAALQAAALADAJQACAJAEAGQAGAGAGAEQAGADAIAAQAGAAAEgCQAGgCADgEQAEgDACgGIADgNIANAAQgBAKgEAIQgCAIgGAFQgFAFgHADQgHADgJAAQgLAAgJgFgADTDVQgHgCgFgEQgEgFgCgGQgEgGAAgHQAAgJAFgHQADgHAIgFQAIgGANgEQANgDAUgDIAAgGQAAgHgBgFQgCgFgDgDQgDgDgEgBQgGgCgHAAQgMAAgGAFQgHAFgCALIgMAAQABgIACgGQADgGAFgEQAFgEAIgCQAHgCAJAAIANABIAKAEQAEADAEADQADAEABAEQACAHAAASIABA+QAAAEACAHIgMAAIgDgQQgGAJgHAFQgJAFgMAAQgIAAgGgDgADoCbQgKADgHAEQgGAEgDAFQgDAFAAAHQAAAJAHAGQAGAGAKAAQAJAAAHgEQAIgEAEgHQACgFACgGQABgHAAgJIAAgNIgbAGgAgyDTQgJgEgGgIQgGgIgEgLQgEgLAAgOQAAgNAEgLQAEgKAGgIQAGgIAJgFQAJgEALAAQAKAAAJAEQAJAFAFAIQAGAIAEALQADALAAANQAAANgDALQgEALgGAIQgGAIgIAEQgJAFgKAAQgLAAgJgFgAgtBvQgGADgFAHQgEAGgDAJQgCAJAAAKQgBALADAJQADAJAEAHQAFAGAGAEQAGADAJAAQAGAAAHgDQAGgEAFgGQAFgHABgJQADgJAAgKQAAgLgDgJQgBgJgEgGQgGgHgGgDQgGgEgHAAQgJAAgGAEgAliDUQgJgEgHgIQgFgIgEgLQgEgKABgOQgBgOAEgLQAEgLAFgIQAHgIAIgFQAJgEALAAQAJAAAJAEQAHAEAGAIQAHAHACAKQAEALAAANIAAAEIhOAAQAAAMACAIQADAJAEAGQAFAGAGADQAGADAIAAQAKAAAHgEQAGgEAFgKIAMACQgCAHgEAFQgEAFgEAEQgGADgGACQgGACgIAAQgLAAgIgEgAkxCTQAAgJgDgIQgCgHgFgFQgEgFgFgDQgGgDgGAAQgHAAgGADQgFADgEAFQgEAFgDAHIgEARIBAAAIAAAAgAnSDTQgIgEgHgHQgHgIgDgLQgDgLgBgOQABgNADgLQADgLAHgIQAGgIAIgFQAJgEALAAQAJAAAHADQAHACAFAFQAFAGADAHQADAIABAJIgMAAQgCgHgCgFQgCgGgDgDQgEgEgEgCQgGgCgFAAQgIAAgGAEQgGADgFAHQgEAGgDAJQgCAJAAALQAAALACAJQADAJAEAGQAFAGAGAEQAHADAIAAQAGAAAEgCQAFgCAEgEQADgDACgGIAEgNIAMAAQgBAKgDAIQgDAIgFAFQgFAFgIADQgGADgJAAQgLAAgJgFgAq3DVQgHgCgEgEQgFgFgCgGQgDgGAAgHQAAgJADgHQAEgHAIgFQAIgGAOgEQAMgDAUgDIAAgGQAAgHgCgFQgBgFgDgDQgDgDgEgBQgGgCgHAAQgLAAgHAFQgGAFgDALIgNAAQABgIADgGQAEgGAEgEQAGgEAHgCQAHgCAJAAIANABIAKAEQAFADADADQADAEABAEQADAHAAASIAAA+QAAAEACAHIgMAAIgDgQQgGAJgHAFQgKAFgLAAQgIAAgGgDgAqiCbQgKADgHAEQgGAEgDAFQgDAFAAAHQAAAJAHAGQAGAGALAAQAIAAAHgEQAIgEAEgHQACgFABgGQACgHAAgJIAAgNIgbAGgAh/DWQgFgCgDgCIgDgHQgCgFAAgGIADhSIgSAAIAAgLIASAAIAAghIAMAAIAAAhIAcAAIAAALIgdAAIgBBLQABALACAEQADAEAIAAQAIAAAIgEIAAAMQgJADgKAAIgLgBgACDDWIgchgIgcBgIgMAAIgghzIANAAIAZBdIAchdIALAAIAcBdIAZhdIAOAAIghBzgALBDVIgBhVQgBgGgCgEQgDgFgFgDQgGgDgGAAQgIAAgGADQgGADgEAFQgEAFgCAIQgCAIAAAKIAABAIgNAAIAAihIANAAIAAA9QAGgJAIgEQAHgEALAAQALAAAIAEQAIAEAEAHQAEAFABAHIAAAZIAABBgAF5DVIgBhVQAAgFgCgFQgDgFgFgDQgGgDgIAAQgHAAgGADQgHADgDAFQgFAFgDAIQgBAHAAAJIAABCIgNAAIgBhlIgCgNIAMAAQADAHAAAKQAGgKAIgFQAIgFANAAQAMAAAJAFQAIAFADAJIADALIABBXgAoXDVIgzg/IAygzIAPAAIgxAzIA1A/gApXDVIAAihIAMAAIAAChgAB0gyQgIgCgHgFQgGgEgEgGQgDgGgBgHQABgLAFgGQAGgHANgFQgHgCgCgDQgEgDAAgFQAAgGAFgEQAFgEALgEQgGgCgFgDIgHgIQgDgEgBgFQgBgFgBgGQABgJACgHQADgHAFgFQAGgFAHgDQAIgCAIAAQAJAAAHACIAigBIAAAKIgXgBQAFAFADAHQAEAHAAAJQAAAIgEAHQgCAHgGAEQgDADgFACIgSAFQgNAEgGADQgFADAAAEQABAEADABIASADIAYADQAHABAGADQAHAEAEAHQADAHAAAIQAAAIgDAGQgEAHgGAEQgHAFgIACQgKACgMAAQgKAAgKgCgAB5hlQgHACgFACQgFADgCAEQgDAEAAAFQAAAFADAEQACAEAFADQAFADAIABQAGACAJAAQAJAAAGgCQAIgBAEgDQAFgDACgEQADgEAAgFQAAgFgDgEQgCgEgEgDQgFgDgIgBQgGgBgKAAQgIAAgHABgAB9jHQgEACgEAEQgDADgCAFQgCAFgBAGQABAGACAFQABAFADADQAEAEAEABQAFACAGAAQAGAAAFgCIAIgFQADgEACgEQACgFAAgGQAAgFgCgFQgBgFgEgEQgDgEgEgCQgGgCgFAAQgFAAgGACgAIAhgQgGgDgFgEQgEgEgDgGQgCgGAAgIQAAgJADgHQAEgHAIgFQAJgFAMgEQAOgEATgDIAAgGQAAgHgCgEQgBgFgDgDQgDgDgFgCQgFgBgGAAQgMAAgHAFQgGAFgCAKIgOAAQACgIADgGQACgFAGgEQAEgEAIgCQAHgCAJAAIAMABIALAEQAEACADAEQAEADABAFQACAHAAARIABA+QAAAFACAGIgMAAIgDgQQgFAKgJAEQgJAFgLAAQgHAAgIgCgAIXibQgMAEgFAEQgHAEgDAFQgDAEAAAHQAAAKAGAGQAHAGAKAAQAJAAAIgEQAHgFAEgHQACgEABgHQACgGAAgKIAAgNIgaAGgADghgQgGgDgFgEQgEgEgDgGQgDgGAAgIQAAgJAEgHQADgHAJgFQAIgFANgEQANgEAUgDIAAgGQAAgHgCgEQgBgFgDgDQgDgDgFgCQgFgBgHAAQgMAAgGAFQgHAFgCAKIgNAAQABgIADgGQADgFAFgEQAFgEAHgCQAIgCAJAAIAMABIAKAEQAFACADAEQAEADABAFQACAHAAARIAAA+QAAAFACAGIgLAAIgDgQQgGAKgIAEQgJAFgLAAQgIAAgHgCgAD2ibQgLAEgGAEQgGAEgDAFQgEAEAAAHQAAAKAHAGQAHAGAKAAQAJAAAHgEQAIgFADgHQADgEABgHQACgGAAgKIAAgNIgbAGgAg6hgQgGgDgFgEQgFgEgCgGQgDgGAAgIQAAgJAEgHQAEgHAHgFQAJgFANgEQANgEATgDIAAgGQABgHgCgEQgBgFgEgDQgDgDgEgCQgFgBgHAAQgMAAgHAFQgGAFgCAKIgNAAQABgIADgGQADgFAFgEQAFgEAIgCQAHgCAIAAIANABIALAEQAEACADAEQADADABAFQACAHAAARIABA+QAAAFACAGIgMAAIgDgQQgFAKgIAEQgJAFgMAAQgHAAgHgCgAgkibQgLAEgGAEQgHAEgDAFQgCAEAAAHQAAAKAGAGQAHAGAKAAQAJAAAHgEQAHgFAFgHQACgEABgHQACgGgBgKIAAgNIgaAGgAkYhiQgJgEgGgIQgGgIgEgMQgDgLAAgNQAAgNADgLQAEgLAGgIQAHgIAIgEQAKgEAKAAQAKAAAJAEQAJAEAGAIQAGAIAEALQAEALAAANQAAANgEAMQgEAKgGAIQgGAJgJAEQgJAEgKAAQgLAAgJgEgAkSjHQgHAEgEAGQgFAHgCAIQgDAJAAALQAAALADAJQACAJAEAGQAFAHAHADQAGAEAIAAQAHAAAHgEQAGgDAEgHQAFgGADgJQADgJgBgLQABgKgDgJQgDgJgEgHQgFgGgGgEQgHgDgHAAQgIAAgGADgAnUhiQgJgEgGgIQgGgHgEgLQgDgLAAgNQAAgOADgMQAEgLAGgIQAGgIAIgEQAKgEAKAAQAKAAAIAEQAIAEAGAHQAGAHADALQADAKAAANIAAAFIhNAAQAAALACAJQADAJAEAGQAEAGAHADQAGADAIAAQAKAAAGgFQAHgEAFgKIAMACQgDAHgEAFQgDAGgFADQgGAEgFABQgHACgHAAQgLAAgJgEgAmiiiQgBgKgDgHQgCgIgEgFQgEgFgFgDQgGgCgHAAQgGAAgGACQgFADgEAFQgFAFgDAIIgDARIBAAAIAAAAgAqxhjQgLgEgGgJQgFgGgCgHQgDgHAAgMIANAAQABAJACAHQADAHAFAFQAFAFAHACQAGADAJAAQAIAAAHgDQAGgCAEgEQAFgEADgGQADgGgBgHQAAgGgCgFQgCgFgFgFQgFgFgSgJQgagLgHgGQgJgFgDgIQgEgIAAgJQAAgIAEgIQADgHAGgFQAGgGAIgCQAJgEAKAAQAKAAAIADQAIADAHAGQAFAFAEAIQADAIAAAKIgNAAQgBgHgDgGQgCgGgEgDQgEgEgGgCQgGgCgHAAQgHAAgFACQgGACgEADQgEAEgDAFQgCAFAAAFQAAAGACAFQADAFAFADQAGAEAXALQAPAHAIAFQAHAFAFAFQADAGADAGQACAHAAAIQAAAJgEAJQgEAIgGAGQgHAGgJADQgKADgLAAQgNAAgKgFgAHChhIAAhHIAAgRQAAgEgDgEQgDgEgFgDQgFgCgHAAQgIAAgHAEQgGADgEAHQgEAIAAAPIAABEIgNAAIAAhEQABgRgDgJQgCgFgGgDQgFgDgHAAQgIAAgHADQgGAEgEAGQgCAEgCAGQgBAGAAAJIAABDIgMAAIgBhmIgCgLIAMAAQADAGgBAKQAFgKAIgFQAIgEAMAAQAMAAAHAEQAIAFADALQAGgKAJgFQAIgFAMAAQAKAAAHADQAIAEADAGQADAFABAGIABAVIAABHgAh3hhIg0g+IAzgzIAOAAIgxAyIA1A/gAi3hhIAAigIAMAAIAACggAl4hhIAAhJQAAgagBgOIAMAAQACAJAAAIIAAAHQAFgOAHgHQAHgGAJAAQAIAAAHADIAAANQgJgEgGAAQgGAAgGAFQgGAFgFAJIgEAOQgBAJAAAMIAAAygApThhIAAgKIBEhdIg/AAIAAgKIBOAAIAAAJIhEBeIBCAAIAAAKg");
	this.shape_1.setTransform(-147.3,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.subhead, new cjs.Rectangle(-219.7,-8.5,147.9,78.7), null);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32307A").s().p("AiJDcIAAg4IAMAAIAEAAQATABASgGQATgHAIgLQAMgOAKgcIhtk+IBEAAIBMD1IBOj1IBDAAIhoEmQgUA8gLAVQgKAUgUAQQgjAcg8AAg");
	this.shape.setTransform(37.7,65.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#32307A").s().p("ABACcIhAjTIhADTIhDAAIhak3IBCAAIA9DmIBFjmIA0AAIBDDmIA/jmIBBAAIhcE3g");
	this.shape_1.setTransform(2.3,58.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#32307A").s().p("AhnB2QgpgvAAhJQAAhGApgtQApgtA+gBQBAAAAoAvQApAtAABIQAABHgpAuQgoAthAABQg/gBgogtgAg4hQQgWAeAAAyQAAAyAWAfQAWAeAiAAQAkAAAVgeQAWgfAAgxQAAgygWgfQgVgegkgBQgiABgWAeg");
	this.shape_2.setTransform(-33.8,58.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#32307A").s().p("AAyDbIh5inIB5iOIBNAAIh6CMICECpgAiIDbIAAm1IBAAAIAAG1g");
	this.shape_3.setTransform(-60.5,52.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#32307A").s().p("ABACcIhAjTIhADTIhDAAIhak3IBCAAIA9DmIBFjmIA0AAIBDDmIA/jmIBBAAIhcE3g");
	this.shape_4.setTransform(-98.7,58.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#32307A").s().p("AhnC4QgpgvAAhJQAAhFApguQApgtA+AAQBAAAAoAuQApAuAABHQAABHgpAuQgoAuhAAAQg/AAgogugAg4gOQgWAeAAAxQAAA0AWAeQAWAfAiAAQAkAAAVgfQAWgeAAgyQAAgzgWgeQgVgegkAAQgiAAgWAegAgviCIBLhjIBTAAIhtBjg");
	this.shape_5.setTransform(-134.8,52.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#32307A").s().p("AgoCoQgKgRAAgmIAFivIgwAAIABgzIAxAAIAChZIA9AAIgBBZIBEAAIgBAzIhFAAIgCCiQAAAaAHAKQAIALASAAQAVAAAZgLIgBA2QghANgeAAQgyAAgUgjg");
	this.shape_6.setTransform(-159,54.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#32307A").s().p("AhnB2QgpgvAAhJQAAhGApgtQApgtA/gBQA/AAAoAvQApAtAABIQAABHgpAuQgpAtg+ABQhAgBgogtgAg4hQQgVAeAAAyQgBAyAWAfQAVAeAkAAQAjAAAWgeQAVgfAAgxQAAgygVgfQgWgegjgBQgjABgWAeg");
	this.shape_7.setTransform(-183,58.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#32307A").s().p("AhvDIQgogYAAgqQAAgcAQgRQAPgSAhgMQgTgHgHgIQgIgJAAgMQAAgQANgKQAMgMAfgLQgegNgOgWQgOgVAAggQAAgyAigdQAggeA5AAQAYAAAdAJIBjgDIAAAvIhAAAQAJAJAGASQAGARAAASQAAAbgLAUQgMAVgWAJQgPAIgOADIg9AKQgPACgJAGQgIAFAAAIQAAAKAKADQAKADAsAEQArAEAVAFQAUAEAPAJQASAKALATQAKATAAAXQAAAvgnAbQgnAahFAAQhEAAgogYgAhIBfQgXAMAAAWQAAAWAZAMQAYAMAtAAQAnAAAWgMQAVgMABgVQgBgvhbABQgpgBgVAMgAgwieQgRAQAAAbQAAAYAQAPQAQAPAaAAQAbAAARgPQAQgPAAgYQAAgZgQgRQgRgRgZAAQgaABgRAPg");
	this.shape_8.setTransform(-213.2,65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#32307A").s().p("AgpCoQgJgRAAgmIAFivIgwAAIABgzIAxAAIAChZIA9AAIgCBZIBEAAIAAAzIhFAAIgCCiQAAAaAHAKQAHALATAAQAUAAAagLIgBA2QghANgeAAQgyAAgVgjg");
	this.shape_9.setTransform(-76.9,-3.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#32307A").s().p("AiJDcIAAg4IAMAAIAEAAQATABASgGQATgHAIgLQALgOALgcIhtk+IBEAAIBMD1IBNj1IBEAAIhoEmQgVA8gKAVQgLAUgTAQQgjAcg9AAg");
	this.shape_10.setTransform(-99.8,7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#32307A").s().p("AhoCzQgjgsAAhIQAAhHAkgvQAjguA3AAQAcAAASAKQAUALARAZIAAinIBAAAIAAFWQAABGAGAZIg9AAQgEgRAAgNIABgIIAAgFQgQAbgVAMQgVAMgdAAQg5AAgkgsgAg1gSQgUAcAAA0QAAAxATAdQATAcAhAAQAhAAAUgdQAUgeAAgxQAAgxgUgcQgSgeghAAQgiAAgTAdg");
	this.shape_11.setTransform(-130.1,-5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#32307A").s().p("AhiB4QgngsAAhIQgBhMAngtQAngtBAgBQA+AAAkAsQAlAtAABLIgCANIjSAAQACAvAVAZQAVAYAlABQAZAAAPgKQAQgKAJgVIA6AEQgNArggAXQggAYgvAAQhBAAgogsgAhHggICPAAQgIhPg+AAQg5AAgQBPg");
	this.shape_12.setTransform(-159.7,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#32307A").s().p("AhWCfIAAjRIAAhBIgEgjIA+AAQAFAUgBAbIAAASQAhhJAzAAQANAAARAHIAABBQgYgOgVAAQgmAAgQAqQgMAZAAAyIAACOg");
	this.shape_13.setTransform(-182.8,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#32307A").s().p("ABMDaIirjlICmjOIBPAAIioDMIC2DngAijDaIAAmzIBDAAIAAGzg");
	this.shape_14.setTransform(-209.6,-5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(-228.3,-27.8,280.6,115.2), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjsEsQgaAAgSgTQgTgSAAgaIAAnZQAAgaATgSQASgTAaAAIHYAAQAbAAASATQATASAAAaIAAHZQAAAagTASQgSATgbAAg");
	mask.setTransform(30,30);

	// Layer 3
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.997,0.997);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,59.9,59.9), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:0.7},0).wait(1).to({rotation:1.3},0).wait(1).to({rotation:2},0).wait(1).to({rotation:2.6},0).wait(1).to({rotation:3.3},0).wait(1).to({rotation:3.9},0).wait(1).to({rotation:4.6},0).wait(1).to({rotation:5.2},0).wait(1).to({rotation:5.9},0).wait(1).to({rotation:6.5},0).wait(1).to({rotation:7.2},0).wait(1).to({rotation:7.8},0).wait(1).to({rotation:8.5},0).wait(1).to({rotation:9.1},0).wait(1).to({rotation:9.8},0).wait(1).to({rotation:10.4},0).wait(1).to({rotation:11.1},0).wait(1).to({rotation:11.7},0).wait(1).to({rotation:12.4},0).wait(1).to({rotation:13},0).wait(1).to({rotation:13.7},0).wait(1).to({rotation:14.3},0).wait(1).to({rotation:15},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.9,-91.9,185.8,183.9);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1.1},0).wait(1).to({x:2.2},0).wait(1).to({x:3.3},0).wait(1).to({x:4.4},0).wait(1).to({x:5.6},0).wait(1).to({x:6.7},0).wait(1).to({x:7.8},0).wait(1).to({x:8.9},0).wait(1).to({x:10},0).wait(1).to({x:9.3},0).wait(1).to({x:8.6},0).wait(1).to({x:7.9},0).wait(1).to({x:7.1},0).wait(1).to({x:6.4},0).wait(1).to({x:5.7},0).wait(1).to({x:5},0).wait(1).to({x:4.3},0).wait(1).to({x:3.6},0).wait(1).to({x:2.9},0).wait(1).to({x:2.1},0).wait(1).to({x:1.4},0).wait(1).to({x:0.7},0).wait(1).to({x:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.1,-11.8,16.4,23.8);


(lib.sticker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsDSIAAhuQAAgRgBgKIAKAAQACAEAAALQAGgKAGgEQAHgFAJABQAHAAAHADQAHAEAFAHQAFAHADAJQACAKAAALQAAAMgCAKQgDAIgFAHQgEAHgHAEQgGADgIAAQgJAAgHgFQgIgDgFgJIAAA3gAgRBSQgEADgFAGQgDAFgCAIQgCAHAAAKQAAAJACAHQACAIADAGQAFAGAEADQAGADAGAAQAFAAAFgDQAFgDADgFQAEgGABgIQACgHAAgKQAAgJgCgIQgCgIgDgFQgDgGgGgDQgEgDgFAAQgGAAgGADgAI9CpQgEgEAAgDQAAgFAEgDQADgDAEAAQAEAAADADQADADABAFQgBAEgDADQgDADgEAAQgEAAgDgDgAGGCpQgHgEgFgHQgGgGgDgJQgCgJAAgMQAAgMACgKQADgKAGgGQAEgHAIgEQAHgDAJAAQAJAAAHADQAHAEAFAGQAFAGACAJQADAJAAALIAAAEIhCAAQAAAKACAHQACAIAEAFQAEAFAFADQAGADAGAAQAJAAAGgFQAFgDAFgJIAKACIgGAKQgDAFgEADQgFADgFACQgFABgHAAQgJAAgIgDgAGxBxQAAgIgCgGQgDgHgEgEQgCgEgGgCQgEgCgGAAQgGAAgEACIgJAGQgEAEgCAHQgCAGgBAIIA3AAIAAAAgADYCpQgIgEgFgHQgFgHgDgJQgEgKAAgLQAAgLAEgKQADgJAEgHQAGgHAIgEQAHgDAJAAQAIAAAFACQAHACAEAFQAEAEADAGQACAHACAIIgMAAIgDgLQgBgEgEgEQgDgDgDgBQgEgBgFAAQgGAAgGACQgGADgEAGQgDAFgCAIQgDAIAAAJQAAAJADAIQACAHAEAGQAEAGAFADQAGADAHAAQAEAAAFgCQAEgCADgEQADgDABgFIADgKIAMAAQgBAIgDAHQgDAGgEAFQgEAFgHACQgFACgIAAQgJAAgIgDgAB2CpQgHgEgGgHQgGgGgCgJQgDgJAAgMQAAgMADgKQACgKAGgGQAFgHAHgEQAIgDAJAAQAIAAAIADQAHAEAFAGQAEAGADAJQACAJABALIAAAEIhCAAQAAAKACAHQABAIAFAFQADAFAGADQAFADAHAAQAJAAAFgFQAFgDAFgJIALACIgGAKQgEAFgEADQgEADgGACQgFABgGAAQgJAAgIgDgAChBxQgBgIgCgGQ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IgBAIAEQAHADAEAHQAFAGADAJQADAJgBALIAAAEIhBAAQAAAKACAIQABAHAFAFQADAFAGADQAFACAHAAQAJAAAFgDQAGgEAEgJIALACIgGALQgDAEgFADQgEADgGACQgFABgGAAQgKAAgHgDgAITh/QgBgIgCgGQgCgGgEgFQgDgEgFgDQgFgBgFAAQgGAAgFABIgIAHQgEAFgCAGQgDAGAAAIIA3AAIAAAAgAFfhHQgIgEgGgHQgFgGgDgKQgDgJAAgMQAAgMADgJQADgKAFgGQAFgHAIgEQAIgDAJAAQAHgBAGADQAGACAEAFQAFAEACAGQADAGABAJIgLAAIgDgLQgCgEgDgDQgDgEgDgBQgFgCgEABQgHAAgGACQgFADgEAGQgDAGgCAHQgDAIAAAJQAAAJADAIQACAHADAGQAFAGAEADQAHACAGAAQAFAAAEgBQAEgCAEgEQACgDACgFIADgLIALAAQgBAJgDAHQgCAGgFAFQgEAFgGACQgGACgHAAQgKAAgHgDgABahHQgIgEgFgHQgFgGgDgKQgEgJAAgMQAAgMAEgJQADgKAEgGQAGgHAIgEQAHgDAJAAQAIgBAFADQAHACAEAFQAEAEADAGQACAGACAJIgMAAIgDgLQgBgEgEgDQgDgEgDgBQgEgCgFABQgHAAgFACQgGADgEAGQgDAGgCAHQgDAIAAAJQAAAJADAIQACAHAEAGQAEAGAFADQAGACAHAAQAEAAAFgBQAEgCADgEQADgDABgFIADgLIAMAAQgBAJgDAHQgDAGgEAFQgEAFgHACQgFACgIAAQgJAAgIgDgAirhHQgIgFgFgGQgGgHgDgJQgDgKAAgMQAAgLADgKQADgJAGgHQAFgGAIgEQAHgDAKAAQAIAAAIADQAIAEAFAHQAFAGADAKQADAJAAAMQAAALgDAKQgDAJgFAHQgGAGgIAEQgHAEgIAAQgKAAgHgDgAinieQgFADgEAFQgEAHgCAHQgDAIAAAIQAAAKADAHQACAIAEAGQAEAGAFADQAGACAHAAQAFAAAGgCQAGgDADgGQAFgGACgIQACgHAAgJQAAgJgCgIQgCgHgFgGQgDgGgGgDQgGgCgFAAQgHAAgGACgAn1hHQgHgEgGgGQgFgHgDgJQgDgKAAgLQAAgMADgKQADgKAFgGQAFgHAHgEQAIgDAJAAQAIgBAIAEQAHADAEAHQAFAGADAJQADAJgBALIAAAEIhBAAQAAAKABAIQACAHAFAFQADAFAGADQAFACAHAAQAIAAAGgDQAGgEAEgJIALACIgGALQgDAEgFADQgEADgGACQgFABgGAAQgKAAgHgDgAnKh/QgBgIgCgGQgCgGgEgFQgDgEgFgDQgFgBgFAAQgGAAgFABIgIAHQgEAFgCAGQgDAGAAAIIA3AAIAAAAgApXhIQgGgEgGgJIAAAEIgBALIgLAAQACgLAAgRIAAhuIAKAAIAAA3QAGgJAGgEQAIgFAJABQAIAAAHADQAHAEAFAGQAFAHACAJQADAKAAALQAAAMgDAKQgDAJgFAHQgFAHgGADQgIAEgJAAQgIAAgHgEgApSieQgFADgEAGQgEAGgCAHQgCAIAAAKQAAAIACAIQACAHAEAGQAEAGAFADQAFACAGAAQAGAAAFgCQAFgDADgGQAEgGACgIQACgHAAgKQAAgIgCgIQgCgIgDgGQgDgFgGgDQgEgDgGABQgGAAgGACgAJihGIAAhiIALAAIAABigAI3hGIAAiKIALAAIAACKgAGrhGIAAhiIAMAAIAABigACbhGIAAgJIA7hQIg2AAIAAgJIBDAAIAAAIIg7BRIA6AAIAAAJgAhZhGIAAg/QAAgWgBgNIAKAAIABAPIAAAGQAFgMAGgGQAFgGAJABQAGgBAGAEIAAAKQgHgDgFAAQgFAAgGAEQgFAFgDAHQgDAGgBAGIgBASIAAAsgAmxhGIAAgJIA6hQIg2AAIAAgJIBEAAIAAAIIg8BRIA6AAIAAAJgAJhjCQgDgCAAgEQAAgEADgCQADgDADAAQAEAAACADQADACAAAEQAAAEgDACQgCADgEAAQgEAAgCgDgAGqjCQgDgCAAgEQAAgEADgCQADgDAEAAQADAAADADQACACAAAEQAAAEgCACQgCADgEAAQgEAAgDgDg");
	this.shape.setTransform(0,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHBeIAAhYIgUAPIAAgOIAUgOIAAhWIAPAAIAABOIAUgPIAAAPIgUAOIAABfg");
	this.shape_1.setTransform(62.4,-23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBCIAAgLIBPhsIhKAAIAAgMIBcAAIAAAKIhQBtIBOAAIAAAMg");
	this.shape_2.setTransform(54.9,-20.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgEAEgFQAEgFAFABQAFgBAFAFQAEAFAAAEQAAAHgDADQgFAFgGAAQgFAAgEgFg");
	this.shape_3.setTransform(40.5,-15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghA7QgNgMAAgVIAPAAQADAeAdAAQAOAAAIgGQAIgIAAgMQAAgLgIgGQgFgEgYgHQgUgFgIgIQgHgJAAgNQAAgQAMgKQAMgKASAAQApAAACAnIgOAAQgDgagaABQgMAAgHAFQgIAHAAAJQAAAJAGAFQAGAFARAFQAeAKAGAGQAIAJAAAOQAAATgNALQgMALgVAAQgWAAgMgLg");
	this.shape_4.setTransform(31.8,-20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzBeIAAgNQASABAIgJQAIgHAKgcIguiDIAQAAIAlBwIAnhwIAQAAIgsB4QgMAngIALQgNARgYAAg");
	this.shape_5.setTransform(21,-18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJBRQgHgGAAgPIADhfIgUAAIAAgMIAVAAIAAgnIANAAIAAAnIAhAAIAAAMIgiAAIAABWQAAAOACAFQADAEAKAAQAHAAAMgEIAAANQgLAEgLAAQgOAAgHgGg");
	this.shape_6.setTransform(11.8,-22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag4BxQgegqAAhGQAAhCAYglQAXglAoAAQAoAAAXAlQAXAmgBBAQAABIgdApQgVAbgjAAQgkAAgVgbgAgshYQgRAfAAA6QAAA5ASAjQAPAbAdAAQAdAAAOgbQASgjAAg6QAAg4gQgfQgQgggdAAQgeAAgPAfg");
	this.shape_7.setTransform(-6,-28);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag4B4QgUgRgCgfIAWAAQAHAuAsAAQAaAAARgVQARgWAAgjQAAgfgPgSQgPgTgZAAQgiAAgQAfIgWgCIARiKIB4AAIgEAUIhgAAIgMBaQASgXAeAAQAjAAAWAZQAVAZAAAnQAAAjgQAZQgXAngtAAQgfABgUgTg");
	this.shape_8.setTransform(-24.4,-27.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOCKIAAjaIgxAAIAAgRQAZAAAMgKQANgKAFgUIAQAAIAAETg");
	this.shape_9.setTransform(-41.8,-28.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcAlQgMgOAAgXQAAgWAMgOQALgOARAAQASAAALAOQALAOAAAWQAAAXgLAOQgLAOgSAAQgSAAgKgOgAgUgdQgIALAAASQAAASAIAMQAIAMAMAAQANAAAIgMQAIgMAAgSQAAgSgIgLQgIgMgNAAQgMAAgIAMg");
	this.shape_10.setTransform(-50.4,-19.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcA4QgKgNAAgYQAAgWAKgOQAKgPARAAQATAAAIASIAAg3IALAAIAABsQAAAXACAFIgLAAQgCgFAAgGIAAgCQgKAQgQAAQgRAAgLgOgAgSgNQgJAMAAAUQAAAUAJANQAHAIALABQAMAAAHgMQAIgMAAgSQAAgTgIgKQgHgMgMAAQgMAAgGAJg");
	this.shape_11.setTransform(-60.6,-21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(0,-3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E7E8").s().p("AAAL2Ih3BNIhdhsIiKApIg7iCIiPAAIgUiNIiJgpIAUiNIh4hNIA7iCIhdhsIBdhrIg7iCIB4hNIgUiNICJgpIAUiNICPAAIA7iCICKApIBdhsIB3BNIB4hNIBdBsICJgpIA8CCICPAAIAUCNICJApIgUCNIB4BNIg7CCIBdBrIhdBsIA7CCIh4BNIAUCNIiJApIgUCNIiPAAIg8CCIiJgpIhdBsg");
	this.shape_12.setTransform(-6.4,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sticker, new cjs.Rectangle(-92.9,-95.7,185.8,191.5), null);


(lib.scrollbar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.thumb = new lib.thumb();
	this.thumb.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.thumb).wait(1));

	// Layer 1
	this.track = new lib.track();
	this.track.parent = this;
	this.track.setTransform(5,73,1,1,0,0,0,5,73);

	this.timeline.addTween(cjs.Tween.get(this.track).wait(1));

}).prototype = getMCSymbolPrototype(lib.scrollbar, new cjs.Rectangle(0,0,10,146), null);


(lib.notaPrawna = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var canvas = this.stage.canvas;
		var nota = this;
		
		
		nota.y = canvas.height + 4;
			
		this.on("mouseover", function(e){
			nota.y = 0;
		});
		
		this.stage.canvas.addEventListener("mouseout", function(e){
			
			//console.log(this.stage.canvas.height);
			//console.log(this.root);
			nota.y = canvas.height + 4;
			
		});
		
		
		var tl = this;
		var h = tl.textMc.getBounds().height;
		var track = tl.sb.track;
		var thumb = tl.sb.thumb;
		var thumbHeight = thumb.nominalBounds.height;
		tl.textMc.regY = 0;
		
		var space = 5;
		var trackHeight = canvas.height-2*space;
		track.regY = 0;
		track.scaleY = trackHeight/track.nominalBounds.height;
		track.y = space;
		
		var mask = new createjs.Shape();
		mask.graphics.beginFill('#000000').rect(0,5,canvas.width, canvas.height-5);
		tl.textMc.mask = mask;
		//tl.addChild(mask);
		
		createjs.Touch.enable(tl);
		
		
		thumb.addEventListener('mousedown', startdragF);
		
		function startdragF(e){
			stage.addEventListener('stagemousemove', dragF);
			stage.addEventListener('stagemouseup', stopdragF);
		}
		function stopdragF(e){
			stage.removeEventListener('stagemousemove',dragF);
		}
		function dragF(e){
			
			if(e.stageY >= space && e.stageY <=  canvas.height - space - thumbHeight ){
				
				thumb.y = Math.floor( e.stageY - space );
				var p = (tl.sb.thumb.y / trackHeight)  
				var pos = Math.max(0, (h-canvas.height/2) * p ) ;
				
				console.log( pos );
				tl.textMc.y = -pos + 10;
				
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// notaBtn
	this.text = new cjs.Text("NOTA PRAWNA", "7px 'Arial'", "#666666");
	this.text.lineHeight = 12;
	this.text.parent = this;
	this.text.setTransform(245.4,-5.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.949)").s().p("AlFA6QADAAAOgPQAagdAvhHIIxAAIAABzg");
	this.shape.setTransform(268.5,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	// scrollbar
	this.sb = new lib.scrollbar();
	this.sb.parent = this;
	this.sb.setTransform(288,9.9,1,1,0,0,0,0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.sb).wait(1));

	// text
	this.textMc = new lib.text();
	this.textMc.parent = this;
	this.textMc.setTransform(6.9,8.4);

	this.timeline.addTween(cjs.Tween.get(this.textMc).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.949)").s().p("EgXgAvqMAAAhfTMAvBAAAMAAABfTg");
	this.shape_1.setTransform(149.5,307.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.notaPrawna, new cjs.Rectangle(-1,-9.2,302.2,621.5), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(98.9,-0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj/BeIAAgQQAJAAAFgBQAFgCACgDQADgDAAgEIAAh3IAVAAIAABlIgBAWQgBAFgDAFIgEAHQgDADgFABIgKAEIgNABgAIQBIQgJgCgHgHIgJgKQgEgGgDgGIgEgPQgBgIAAgJQAAgJAEgRIAFgMQACgEAEgFIAIgIIAJgGIALgDIAMgBIALABIALADIAJAGIAIAIQAEAFADAEIAFAMQAEARAAAJQAAAJgBAIIgFAPQgCAGgEAGIgKAKQgHAHgIACQgIAEgLAAQgKAAgHgEgAITgkQgGAEgEAGQgFAGgCAJQgDAKABAKQgBALADAKQACAIAFAHQAEAGAGAEQAHADAIAAQAHAAAHgDQAHgEAEgGQAFgHACgIQACgJAAgMQAAgKgDgKQgDgJgEgIQgEgFgHgDQgGgDgHAAQgIAAgHADgAGeBKIgLgDIgKgGQgEgDgEgEIgHgKQgCgFgCgHIgFgbQAAgJAFgRIAEgMQADgEAEgFIAIgIIAJgGIALgDIAMgBIALABIAKADIAJAFIAGAHQAEAFACAGQACAFABAJIgSAAIgDgLQgCgEgEgDQgDgDgFgCQgEgBgGAAQgIAAgGADQgHAEgFAGQgEAGgCAJQgDAKAAAKQAAAMADAKQADAJAGAHQAEAFAGADQAGADAJAAQAHAAAHgCQAIgCAGgEIAAgaIgaAAIAAgQIAqAAIAAA1QgNAJgIACQgPAEgIAAQgHAAgGgCgABoBKIgLgEQgFgCgFgDIgHgHQgEgFgCgFIgGgMIgDgbQAAgJADgRIAFgMIAGgJIAIgIIAKgGIALgDIAMgBQAJAAAIACQAHADAGAFQAGAGADAIQADAHABAKIgRAAQgBgGgDgFQgCgEgDgDQgDgDgFgCQgFgBgEAAQgJAAgGADQgGAEgFAGQgEAHgDAJQgCAJAAAKQABAMACAJQACAIAEAHQAFAGAGADQAGAEAJAAQAFAAAFgCQAFgCADgDQAEgEACgGIADgOIASAAQgBAMgDAJQgEAJgFAGQgFAGgJADQgIAEgKAAIgMgCgAhxBIQgJgDgFgFQgGgGgDgHQgDgJgBgKIATAAQABAGACAFQACAFADAEQADADAFACQAGABAGAAIAJgBIAHgEIAFgFQACgDgBgEQAAgFgBgDQgCgEgFgDQgEgCgQgIIgSgIQgGgDgDgEQgFgDgDgGQgCgGAAgGQAAgJADgGQADgHAFgEQAGgFAIgDQAHgCAJAAIALABIAKADIAIAFIAGAIQAEAEABAFIABALIgSAAIgCgIQgCgEgEgDIgHgEQgDgBgGAAQgIAAgGAFQgGAEAAAIQAAADABADQACADAEACIAVAKIAVAIQAFADAFAFQAEAFABAFQACAGAAAGQAAAJgDAHQgDAHgGAFQgGAFgHACQgJAEgJAAQgLAAgJgEgAqYBKQgGgBgFgDIgJgFIgIgIQgEgEgDgFIgEgMIgFgcQAAgJAFgRIAEgLIAHgJIAIgIIAJgGIALgDIALgBIANABIAKADIAJAGIAJAIQADAFADAFIAFALQAEARAAAJIgBAPIgDAMIgFAMQgDAFgDAEIgJAIIgJAFQgFADgFABQgGACgGAAQgGAAgGgCgAqagkQgGAEgFAGQgEAGgDAJQgCAJAAAKQAAAMACAJQACAJAFAHQAEAGAHAEQAGADAIAAQAIAAAFgDQAHgDAEgGQAFgHACgJQADgKAAgLQAAgKgDgJQgCgJgEgHQgFgGgGgEQgHgDgIAAQgHAAgGADgALpBJIAAg0IgphLIAXAAIAcA2IAcg2IAWAAIgoBLIAAA0gAJwBJIAAgxIgMAJIAAgRIAMgKIAAg8IAVAAIAAAyIAegXIAAASIgeAWIAAArIA3AAIAAARgAEWBJIAAh/IBLAAIAAARIg4AAIAAAkIA0AAIAAAQIg0AAIAAApIA6AAIAAARgACsBJIAAgPIA+hfIg5AAIAAgRIBRAAIAAAOIg+BgIA7AAIAAARgAgkBJIAAgPIA8hfIg4AAIAAgRIBQAAIAAAOIg9BgIA7AAIAAARgAkXBJIgJgeIguAAIgKAeIgUAAIArh/IATAAIAsB/gAklAaIgSg4IgSA4IAkAAgAmTBJIg5hgIAABgIgSAAIAAh/IAUAAIA4BhIAAhhIATAAIAAB/gApJBJIAAgPIA+hfIg4AAIAAgRIBQAAIAAAOIg+BgIA8AAIAAARgAskBJIAAh/IAwABIANADQAGABAEAEQAEADADAFQAEAFABAFQABAHAAAGQAAAHgBAFQgBAEgEAFIgGAIIgKAFQgFACgIABIgdABIAAAxgAsQAGIAIAAQAQABAHgCQAGgDADgEQAEgEAAgIQAAgHgDgGQgDgEgEgDQgFgBgFgBIgYgBgAIRhBIAdgcIAZAAIgkAcg");
	this.shape.setTransform(-15.7,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#1BB63E","#1CB63E","#1FB43D","#26B03D","#35AB3D","#3FA83C"],[0,0.361,0.58,0.765,0.925,1],0,24.1,0,-24).s().p("AyuDxQgpAAgeggQgegfAAgsIAAkLQAAgsAegfQAeggApAAMAldAAAQAqAAAdAgQAeAfAAAsIAAELQAAAsgeAfQgdAggqAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-129.9,-24,260,48.2), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.shadow = new cjs.Shadow("#3399FF",0,0,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.9,-48,314,103);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sticker();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-92.9,-95.7,185.8,191.5), null);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver(29); // 10 updates per second
		 
		stage.canvas.style.cursor="pointer";
		this.cursor="pointer";
		console.log(stage.canvas);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// nota
	this.nota = new lib.notaPrawna();
	this.nota.parent = this;
	this.nota.setTransform(28,603.6,1,1,0,0,0,26.9,5.5);

	this.timeline.addTween(cjs.Tween.get(this.nota).wait(1));

	// FlashAICB
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(150.7,355.5,1.063,1.063);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(157.6,493.1);

	this.instance_2 = new lib.subhead();
	this.instance_2.parent = this;
	this.instance_2.setTransform(90.3,242.2,1.23,1.23,0,0,0,-159,27.1);

	this.instance_3 = new lib.head();
	this.instance_3.parent = this;
	this.instance_3.setTransform(227.2,101.6,0.931,0.931);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#85C4EA").s().p("AgWAXQgJgKAAgNQAAgNAJgJQAKgJAMAAQANAAAKAJQAJAJAAANQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape.setTransform(284.8,29.9,0.699,0.699);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#85C4EA").s().p("AgWAXQgKgKAAgNQAAgNAKgJQAJgJANAAQANAAAKAJQAJAJAAANQAAANgJAKQgKAJgNAAQgNAAgJgJg");
	this.shape_1.setTransform(279.3,29.9,0.699,0.699);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#85C4EA").s().p("AgWAXQgJgKAAgNQAAgMAJgKQAKgKAMAAQANAAAKAKQAJAKAAAMQAAANgJAKQgKAKgNAAQgMAAgKgKg");
	this.shape_2.setTransform(284.8,24.3,0.699,0.699);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#85C4EA").s().p("AgWAXQgKgKAAgNQAAgMAKgKQAJgKANAAQANAAAKAKQAJAKAAAMQAAANgJAKQgKAKgNAAQgNAAgJgKg");
	this.shape_3.setTransform(279.3,24.3,0.699,0.699);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsBHIAAiOIBaAAIAAAaIg+AAIAAAhIA8AAIAAAYIg8AAIAAAiIA+AAIAAAZg");
	this.shape_4.setTransform(283.8,38.3,0.699,0.699);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUBHIgbg4IgRAAIAAA4IgdAAIAAiOIA1AAQALABAJADQAJADAGAGQAGAFADAIQADAIAAAJIgCAMIgEAMIgJAJQgGAEgGACIAiA8gAgYgHIATAAQAFAAAGgCQAFgCACgDQAEgDAAgDIABgHIgBgHQgBgEgDgDQgDgDgFgBQgEgBgHAAIgSAAg");
	this.shape_5.setTransform(275.9,38.3,0.699,0.699);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBHIgJgdIg0AAIgJAdIgfAAIA0iOIAdAAIA0COgAgSASIAkAAIgSg2IAAAAg");
	this.shape_6.setTransform(266.6,38.3,0.699,0.699);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYBGQgMgFgJgKQgIgJgGgOQgEgNAAgTQAAgQAEgNQAFgNAJgLQAJgJAMgGQAOgGAMABQAMAAAKACQAJAEAJAFQAIAHAGAKQAGALACANIgcABQgEgOgIgHQgIgGgOAAQgHgBgHAEQgGAEgGAGQgFAHgCAJQgDAIAAAKQABAYAJAMQALANAQAAQAGAAAFgCQAFgCAEgDQAEgDADgEQADgEACgHIAdACQgGAYgRAMQgQAMgXAAQgOAAgMgEg");
	this.shape_7.setTransform(257.5,38.3,0.699,0.699);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAbBIIgbgxIgbAxIgiAAIAthIIgqhHIAiAAIAZAxIAagxIAiAAIgsBHIAtBIg");
	this.shape_8.setTransform(272.7,27.1,0.699,0.699);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAkBIIgKgeIgzAAIgKAeIgfAAIA0iPIAeAAIAzCPgAgRATIAjAAIgSg3IAAAAg");
	this.shape_9.setTransform(264,27.1,0.699,0.699);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgNBIIAAh1IgmAAIAAgaIBnAAIAAAaIgmAAIAAB1g");
	this.shape_10.setTransform(256.8,27.1,0.699,0.699);

	this.instance_4 = new lib.ClipGroup_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(270,33.5,0.699,0.699,0,0,0,30,30);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#EDEDED","#FFFFFF"],[0,1],0,300,0,-300).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_11.setTransform(149.9,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.instance_4},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149.9,300,304.7,1210.4);
// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"Image.png?1511560717165", id:"Image"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;