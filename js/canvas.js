////////////////////////////////////////////////////////////
// CANVAS
////////////////////////////////////////////////////////////
var stage
var canvasW=0;
var canvasH=0;

/*!
 * 
 * START GAME CANVAS - This is the function that runs to setup game canvas
 * 
 */
function initGameCanvas(w,h){
	var gameCanvas = document.getElementById("gameCanvas");
	gameCanvas.width = w;
	gameCanvas.height = h;
	
	canvasW=w;
	canvasH=h;
	stage = new createjs.Stage("gameCanvas");
	
	createjs.Touch.enable(stage);
	stage.enableMouseOver(20);
	stage.mouseMoveOutside = true;
	
	createjs.Ticker.framerate = 60;
	createjs.Ticker.addEventListener("tick", tick);	
}

var guide = false;
var canvasContainer, mainContainer, gameContainer, instructionContainer, mapContainer, objectsContainer, resultContainer, scoreContainer, moveContainer, confirmContainer;
var guideline, bg, logo, shadowMain, instruction, buttonOk, restaurant, gameBar, result, shadowResult, buttonReplay, buttonFacebook, buttonTwitter, buttonWhatsapp, buttonFullscreen, buttonSoundOn, buttonSoundOff;

$.objects = {};
$.items = {};
$.interior = {};
$.peoples = {};
$.peopleList = {};
$.numbers = {};

var numbers_arr = [{id:0, regX:19, regY:110, width:47},
						{id:1, regX:19, regY:107, width:37},
						{id:2, regX:20, regY:112, width:46},
						{id:3, regX:19, regY:115, width:47},
						{id:4, regX:20, regY:114, width:47},
						{id:5, regX:19, regY:116, width:47},
						{id:6, regX:19, regY:116, width:47},
						{id:7, regX:17, regY:117, width:47},
						{id:8, regX:19, regY:110, width:47},
						{id:9, regX:19, regY:110, width:47},
						{id:'Comma', regX:16, regY:41, width:22}];

/*!
 * 
 * BUILD GAME CANVAS ASSERTS - This is the function that runs to build game canvas asserts
 * 
 */
function buildGameCanvas(){
	canvasContainer = new createjs.Container();
	mainContainer = new createjs.Container();
	moveContainer = new createjs.Container();
	mapContainer = new createjs.Container();
	gameContainer = new createjs.Container();
	instructionContainer = new createjs.Container();
	objectsContainer = new createjs.Container();
	resultContainer = new createjs.Container();
	scoreContainer = new createjs.Container();
	confirmContainer = new createjs.Container();
	
	bg = new createjs.Bitmap(loader.getResult('background'));
	logo = new createjs.Bitmap(loader.getResult('logo'));
	shadowMain = new createjs.Bitmap(loader.getResult('shadowMain'));
	buttonBegin = new createjs.Bitmap(loader.getResult('buttonBegin'));
	centerReg(buttonBegin);
	createHitarea(buttonBegin);
	buttonBegin.x = canvasW/100 * 69;
	buttonBegin.y = canvasH/100 * 48;
	
	instruction = new createjs.Bitmap(loader.getResult('instruction'));
	buttonOk = new createjs.Bitmap(loader.getResult('buttonOk'));
	centerReg(buttonOk);
	createHitarea(buttonOk);
	buttonOk.x = canvasW/100 * 76;
	buttonOk.y = canvasH/100 * 67;
	
	isoFloor = new createjs.Bitmap(loader.getResult('isoFloor'));
	centerReg(isoFloor);
	isoFloor.x = -100;
	restaurant = new createjs.Bitmap(loader.getResult('restaurant'));
	gameBar = new createjs.Bitmap(loader.getResult('gameBar'));
	gameBar.x = canvasW/100 * 12;
	
	for(n=0;n<objects_arr.length;n++){
		$.objects[objects_arr[n].id] = new createjs.Bitmap(loader.getResult(objects_arr[n].id));
		$.objects[objects_arr[n].id].regX = objects_arr[n].regX;
		$.objects[objects_arr[n].id].regY = objects_arr[n].regY;
		$.objects[objects_arr[n].id].x = -500;
		
		gameContainer.addChild($.objects[objects_arr[n].id]);
	}
	
	for(n=0;n<item_arr.length;n++){
		$.items[item_arr[n].id] = new createjs.Bitmap(loader.getResult(item_arr[n].id));
		$.items[item_arr[n].id].regX = item_arr[n].regX;
		$.items[item_arr[n].id].regY = item_arr[n].regY;
		$.items[item_arr[n].id].x = -100;
		
		gameContainer.addChild($.items[item_arr[n].id]);
	}
	
	for(n=0;n<people_arr.length;n++){		
		var _frameW=60;
		var _frameH=80;
		var _frame = {"regX": 31, "regY": 72, "height": _frameH, "count": 8, "width": _frameW};
		var _animations = {l:{frames: [0]},
							d:{frames: [1]},
							r:{frames: [2]},
							u:{frames: [3]},
							el:{frames: [4]},
							ed:{frames: [5]},
							er:{frames: [6]},
							eu:{frames: [7]}};
										
		humanData = new createjs.SpriteSheet({
			"images": [loader.getResult('people'+n).src],
			"frames": _frame,
			"animations": _animations
		});
		
		$.peoples[n] = new createjs.Sprite(humanData, "l");
		$.peoples[n].framerate = 20;
		$.peoples[n].x = -100;
		
		gameContainer.addChild($.peoples[n]);
	}
	
	dayTxt = new createjs.Text();
	dayTxt.font = "25px robotobold_condensed";
	dayTxt.color = "#fff";
	dayTxt.textAlign = "center";
	dayTxt.textBaseline='alphabetic';
	dayTxt.text = '5';
	dayTxt.x = canvasW/100 * 14.3;
	
	timeTxt = new createjs.Text();
	timeTxt.font = "24px robotobold_condensed";
	timeTxt.color = "#618AAD";
	timeTxt.textAlign = "center";
	timeTxt.textBaseline='alphabetic';
	timeTxt.text = '00:00';
	timeTxt.x = canvasW/100 * 19.6;
	
	timeAlertTxt = new createjs.Text();
	timeAlertTxt.font = "24px robotobold_condensed";
	timeAlertTxt.color = "#D90000";
	timeAlertTxt.textAlign = "center";
	timeAlertTxt.textBaseline='alphabetic';
	timeAlertTxt.text = '00:00';
	timeAlertTxt.x = canvasW/100 * 19.6;
	
	scoreTxt = new createjs.Text();
	scoreTxt.font = "24px robotobold_condensed";
	scoreTxt.color = "#618AAD";
	scoreTxt.textAlign = "center";
	scoreTxt.textBaseline='alphabetic';
	scoreTxt.text = '$100 / $2000';
	scoreTxt.x = canvasW/100 * 23;
	
	//result
	result = new createjs.Bitmap(loader.getResult('result'));
	shadowResult = new createjs.Bitmap(loader.getResult('shadowResult'));
	
	buttonFacebook = new createjs.Bitmap(loader.getResult('buttonFacebook'));
	buttonTwitter = new createjs.Bitmap(loader.getResult('buttonTwitter'));
	buttonWhatsapp = new createjs.Bitmap(loader.getResult('buttonWhatsapp'));
	centerReg(buttonFacebook);
	createHitarea(buttonFacebook);
	centerReg(buttonTwitter);
	createHitarea(buttonTwitter);
	centerReg(buttonWhatsapp);
	createHitarea(buttonWhatsapp);
	buttonFacebook.x = canvasW/100*70;
	buttonFacebook.y = canvasH/100*60;
	buttonTwitter.x = canvasW/100*76;
	buttonTwitter.y = canvasH/100*65;
	buttonWhatsapp.x = canvasW/100*82;
	buttonWhatsapp.y = canvasH/100*70;
	
	buttonReplay = new createjs.Bitmap(loader.getResult('buttonReplay'));
	centerReg(buttonReplay);
	createHitarea(buttonReplay);
	buttonReplay.x = canvasW/100 * 52;
	buttonReplay.y = canvasH/100 * 66;

	for(n=0;n<numbers_arr.length;n++){
		$.numbers[numbers_arr[n].id] = new createjs.Bitmap(loader.getResult('number'+numbers_arr[n].id));
		$.numbers[numbers_arr[n].id].regX = numbers_arr[n].regX;
		$.numbers[numbers_arr[n].id].regY = numbers_arr[n].regY;
		$.numbers[numbers_arr[n].id].x = -100;
		
		gameContainer.addChild($.numbers[numbers_arr[n].id]);
	}
	
	buttonFullscreen = new createjs.Bitmap(loader.getResult('buttonFullscreen'));
	centerReg(buttonFullscreen);
	buttonSoundOn = new createjs.Bitmap(loader.getResult('buttonSoundOn'));
	centerReg(buttonSoundOn);
	buttonSoundOff = new createjs.Bitmap(loader.getResult('buttonSoundOff'));
	centerReg(buttonSoundOff);
	buttonSoundOn.visible = false;
	
	buttonExit = new createjs.Bitmap(loader.getResult('buttonExit'));
	centerReg(buttonExit);
	buttonSettings = new createjs.Bitmap(loader.getResult('buttonSettings'));
	centerReg(buttonSettings);
	
	createHitarea(buttonFullscreen);
	createHitarea(buttonSoundOn);
	createHitarea(buttonSoundOff);
	createHitarea(buttonExit);
	createHitarea(buttonSettings);
	optionsContainer = new createjs.Container();
	optionsContainer.addChild(buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonExit);
	optionsContainer.visible = false;
	
	//exit
	itemConfirm = new createjs.Bitmap(loader.getResult('itemConfirm'));
	
	buttonConfirm = new createjs.Bitmap(loader.getResult('buttonOk'));
	centerReg(buttonConfirm);
	buttonConfirm.x = canvasW/100* 60;
	buttonConfirm.y = canvasH/100 * 61;
	
	buttonCancel = new createjs.Bitmap(loader.getResult('buttonCancel'));
	centerReg(buttonCancel);
	buttonCancel.x = canvasW/100 * 67;
	buttonCancel.y = canvasH/100 * 61;
	
	confirmContainer.addChild(itemConfirm, buttonConfirm, buttonCancel);
	confirmContainer.visible = false;
	
	if(guide){
		guideline = new createjs.Shape();	
		guideline.graphics.setStrokeStyle(2).beginStroke('red').drawRect((stageW-contentW)/2, (stageH-contentH)/2, contentW, contentH);
	}
	
	mainContainer.addChild(shadowMain, logo, buttonBegin);
	instructionContainer.addChild(instruction, buttonOk);
	instructionContainer.visible = false;
	gameContainer.addChild(isoFloor, restaurant, mapContainer, objectsContainer, gameBar, dayTxt, timeTxt, timeAlertTxt, scoreTxt, instructionContainer);
	gameContainer.y = canvasH;
	resultContainer.addChild(scoreContainer, shadowResult, result, buttonReplay);
	
	if(shareEnable){
		resultContainer.addChild(buttonFacebook, buttonTwitter, buttonWhatsapp);
	}
	
	moveContainer.addChild(mainContainer, resultContainer);
	canvasContainer.addChild(bg, moveContainer, gameContainer, confirmContainer, optionsContainer, buttonSettings, guideline);
	stage.addChild(canvasContainer);
	
	resizeCanvas();
}


/*!
 * 
 * RESIZE GAME CANVAS - This is the function that runs to resize game canvas
 * 
 */
function resizeCanvas(){
 	if(canvasContainer!=undefined){
		gameBar.y = canvasH - (offset.y + 130);
		dayTxt.y = canvasH - (offset.y + 83);
		timeTxt.y = timeAlertTxt.y = canvasH - (offset.y + 84);
		scoreTxt.y = canvasH - (offset.y + 40);
		
		buttonSettings.x = (canvasW - offset.x) - 50;
		buttonSettings.y = offset.y + 45;
		
		var distanceNum = 50;
		if(curPage != 'game'){
			buttonExit.visible = false;
			buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
			buttonSoundOn.x = buttonSoundOff.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+(distanceNum);
			
			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*2);
		}else{
			buttonExit.visible = true;
			buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+distanceNum;
			buttonSoundOn.x = buttonSoundOff.x;
			buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y+(distanceNum);
			
			buttonFullscreen.x = buttonSettings.x;
			buttonFullscreen.y = buttonSettings.y+(distanceNum*2);
			
			buttonExit.x = buttonSettings.x;
			buttonExit.y = buttonSettings.y+(distanceNum*3);
		}
	}
}

/*!
 * 
 * REMOVE GAME CANVAS - This is the function that runs to remove game canvas
 * 
 */
 function removeGameCanvas(){
	 stage.autoClear = true;
	 stage.removeAllChildren();
	 stage.update();
	 createjs.Ticker.removeEventListener("tick", tick);
	 createjs.Ticker.removeEventListener("tick", stage);
 }

/*!
 * 
 * CANVAS LOOP - This is the function that runs for canvas loop
 * 
 */ 
function tick(event) {
	updateGame();
	stage.update(event);
}

/*!
 * 
 * CANVAS MISC FUNCTIONS
 * 
 */
function centerReg(obj){
	obj.regX=obj.image.naturalWidth/2;
	obj.regY=obj.image.naturalHeight/2;
}

function createHitarea(obj){
	obj.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, obj.image.naturalWidth, obj.image.naturalHeight));	
}