////////////////////////////////////////////////////////////
// GAME v1.5
////////////////////////////////////////////////////////////

/*!
 * 
 * GAME SETTING CUSTOMIZATION START
 * 
 */

//objects array list
var objects_arr = [{src:'assets/interior_window.png', id:'window', regX:22, regY:270},
					{src:'assets/interior_table.png', id:'table', regX:43, regY:60},
					{src:'assets/interior_table_small.png', id:'table_small', regX:38, regY:57},
					{src:'assets/interior_chair_down.png', id:'chair_d', regX:20, regY:42},
					{src:'assets/interior_chair_up.png', id:'chair_u', regX:22, regY:55},
					{src:'assets/interior_chair_left.png', id:'chair_l', regX:21, regY:43},
					{src:'assets/interior_chair_right.png', id:'chair_r', regX:24, regY:52},
					{src:'assets/interior_kitchen.png', id:'kitchen', regX:27, regY:80},
					{src:'assets/interior_bar.png', id:'bar', regX:86, regY:106},
					{src:'assets/interior_cashier.png', id:'cashier', regX:18, regY:55},
					{src:'assets/interior_queue.png', id:'queueCounter', regX:22, regY:52},
					{src:'assets/interior_plant.png', id:'plant', regX:13, regY:42},
					{src:'assets/interior_fence.png', id:'fence', regX:33, regY:54}];

//objects place in position array list			
var position_arr = [{id:'window', r:17, c:0, slot:[{r:17, c:0},{r:17, c:1},{r:17, c:2},{r:17, c:3},{r:17, c:4},{r:17, c:5},{r:17, c:6}], block:[{r:17, c:0},{r:17, c:1},{r:17, c:2},{r:17, c:3},{r:17, c:5},{r:17, c:6}]},
					{id:'table', r:6, c:1, block:[{r:6, c:1}], type:'table'},
					{id:'chair_d', r:7, c:1, block:[{r:7, c:1}], type:'chair', table:1},
					{id:'chair_u', r:5, c:1, block:[{r:5, c:1}], type:'chair', table:1},
					{id:'chair_l', r:6, c:0, block:[{r:6, c:0}], type:'chair', table:1},
					{id:'chair_r', r:6, c:2, block:[{r:6, c:2}], type:'chair', table:1},
					
					{id:'table', r:10, c:1, block:[{r:10, c:1}], type:'table'},
					{id:'chair_d', r:11, c:1, block:[{r:11, c:1}], type:'chair', table:6},
					{id:'chair_u', r:9, c:1, block:[{r:9, c:1}], type:'chair', table:6},
					{id:'chair_l', r:10, c:0, block:[{r:10, c:0}], type:'chair', table:6},
					{id:'chair_r', r:10, c:2, block:[{r:10, c:2}], type:'chair', table:6},
					
					{id:'table', r:14, c:1, block:[{r:14, c:1}], type:'table'},
					{id:'chair_d', r:15, c:1, block:[{r:15, c:1}], type:'chair', table:11},
					{id:'chair_u', r:13, c:1, block:[{r:13, c:1}], type:'chair', table:11},
					{id:'chair_l', r:14, c:0, block:[{r:14, c:0}], type:'chair', table:11},
					{id:'chair_r', r:14, c:2, block:[{r:14, c:2}], type:'chair', table:11},
					
					{id:'table_small', r:6, c:4, block:[{r:6, c:4}], type:'table'},
					{id:'chair_d', r:7, c:4, block:[{r:7, c:4}], type:'chair', table:16},
					{id:'chair_u', r:5, c:4, block:[{r:5, c:4}], type:'chair', table:16},
					
					{id:'table_small', r:6, c:6, block:[{r:6, c:6}], type:'table'},
					{id:'chair_d', r:7, c:6, block:[{r:7, c:6}], type:'chair', table:19},
					{id:'chair_u', r:5, c:6, block:[{r:5, c:6}], type:'chair', table:19},
					
					{id:'table_small', r:10, c:4, block:[{r:10, c:4}], type:'table'},
					{id:'chair_d', r:11, c:4, block:[{r:11, c:4}], type:'chair', table:22},
					{id:'chair_u', r:9, c:4, block:[{r:9, c:4}], type:'chair', table:22},
					
					{id:'table_small', r:10, c:6, block:[{r:10, c:6}], type:'table'},
					{id:'chair_d', r:11, c:6, block:[{r:11, c:6}], type:'chair', table:25},
					{id:'chair_u', r:9, c:6, block:[{r:9, c:6}], type:'chair', table:25},
					
					{id:'table_small', r:14, c:4, block:[{r:14, c:4}], type:'table'},
					{id:'chair_d', r:15, c:4, block:[{r:15, c:4}], type:'chair', table:28},
					{id:'chair_u', r:13, c:4, block:[{r:13, c:4}], type:'chair', table:28},
					
					{id:'table_small', r:14, c:6, block:[{r:14, c:6}], type:'table'},
					{id:'chair_d', r:15, c:6, block:[{r:15, c:6}], type:'chair', table:31},
					{id:'chair_u', r:13, c:6, block:[{r:13, c:6}], type:'chair', table:31},
					
					{id:'bar', r:3, c:1, slot:[{r:1, c:1},{r:2, c:1},{r:3, c:1},{r:3, c:2},{r:3, c:3},{r:3, c:4}], block:[{r:1, c:1},{r:2, c:1},{r:3, c:1},{r:3, c:2},{r:3, c:3},{r:3, c:4}], type:'bar', seq:0},
					{id:'cashier', r:3, c:3, slot:[{r:3, c:2},{r:3, c:3}], block:[], type:'cashier', exact:[{r:2, c:3}], seq:1},
					{id:'kitchen', r:0, c:4, slot:[{r:0, c:3},{r:0, c:4},{r:0, c:5}], block:[{r:0, c:0},{r:0, c:1},{r:0, c:2},{r:0, c:3},{r:0, c:4},{r:0, c:5},{r:0, c:6}], type:'kitchen'},
					{id:'queueCounter', r:18, c:3, block:[{r:18, c:3}], type:'queueCounter', exact:[{r:18, c:4}]},
					{id:'plant', r:1, c:0, block:[{r:1, c:0}], type:'plant'},
					{id:'fence', r:19, c:1, block:[], type:'fence'},
					{id:'fence', r:19, c:2, block:[], type:'fence'}];

//items array list				
var item_arr = [{src:'assets/item_food_up.png', id:'food_u', regX:26, regY:57},
				{src:'assets/item_food_down.png', id:'food_d', regX:26, regY:57},
				{src:'assets/item_food_left.png', id:'food_l', regX:26, regY:57},
				{src:'assets/item_food_right.png', id:'food_r', regX:26, regY:57},
				{src:'assets/item_food_up_clean.png', id:'food_u_clean', regX:26, regY:57},
				{src:'assets/item_food_down_clean.png', id:'food_d_clean', regX:26, regY:57},
				{src:'assets/item_food_left_clean.png', id:'food_l_clean', regX:26, regY:57},
				{src:'assets/item_food_right_clean.png', id:'food_r_clean', regX:26, regY:57},
				{src:'assets/icon_servefood.png', id:'icon_servefood', regX:25, regY:123},
				{src:'assets/icon_indicator.png', id:'icon_indicator', regX:17, regY:90},
				{src:'assets/icon_order.png', id:'icon_order', regX:37, regY:100},
				{src:'assets/icon_bill.png', id:'icon_bill', regX:37, regY:100},
				{src:'assets/icon_queue_1.png', id:'icon_queue_1', regX:37, regY:120},
				{src:'assets/icon_queue_2.png', id:'icon_queue_2', regX:37, regY:120},
				{src:'assets/icon_queue_3.png', id:'icon_queue_3', regX:37, regY:120},
				{src:'assets/icon_queue_4.png', id:'icon_queue_4', regX:37, regY:120}];

//peoples array list			
var people_arr = [{src:'assets/human_Spritesheet8x1.png'},
				{src:'assets/human_f_a_Spritesheet3x3.png'},
				{src:'assets/human_f_b_Spritesheet3x3.png'},
				{src:'assets/human_f_c_Spritesheet3x3.png'},
				{src:'assets/human_m_a_Spritesheet3x3.png'},
				{src:'assets/human_m_b_Spritesheet3x3.png'},
				{src:'assets/human_m_c_Spritesheet3x3.png'}];

//entrance array list
var entrace_arr = {enter:[{r:18, c:6},{r:19, c:6}], //people enter area
					queue:[{r:18, c:2},{r:18, c:1},{r:18, c:0},{r:19, c:0},{r:19, c:1},{r:19, c:2},{r:19, c:3},{r:19, c:4}],  //people queue area
					exit:[{r:18, c:6},{r:19, c:6}]};  //people exit area

var gameScore = 40; //game score per person
var gameScoreDisplay = '$[NUMBER] / $[TARGET]'; //game score display
									
var gameSetting = {moveSpeed:.2, //movement speed
				peopleTimer:15, //human enter restaurant timer
				menuTimer:5, //menu timer
				orderTimer:.2, //order timer
				cookTimer:10, //cooking timer
				dineTimer:18, //dine timer
				paymentTimer:.2}; //pay timer

var level_setting = {dailyPeopleTimer:3, //daily increase (human enter restaurant)
					dailySpeedIncrease:.05, //daily increase (movement speed)
					dayTimer:60000, //daily timer
					scoreTarget:[80,160,560,960,1400,2000,2600,3300,4100,6000], //daily score target
					queueTotal_arr:[2,2,1,4,2,1,2,2,2,4,2,4,1,4]}; //total queue array list
	

//Social share, [SCORE] will replace with game score
var shareEnable = true; //toggle share
var shareTitle = 'Highscore on Open Restaurant Game is $[SCORE] in total [DAY] days';//social share score title
var shareMessage = '$[SCORE] in [DAY] days is mine new highscore on Open Restaurant Game! Try it now!'; //social share score message

/*!
 *
 * GAME SETTING CUSTOMIZATION END
 *
 */
var isometricData = {guide:false, array:[], x:256, y:353, row:20, column:7, width:32.3, height:19, xCorrect:29, yCorrect:16.8};
var playerData = {day:0, time:0, startTime:0, nowTime:0, score:0};
var gameData = {paused:true, r:18, c:4, action:'', peopleTimer:0, peopleNum:0, queueNum:0, queueTotal:0, queueTotal_arr:[], queueSlot_arr:[], queueCounterNum:0, cashierNum:0, kitchenNum:0, kitchenList_arr:[], dayTimer:0, scoreTarget:0, totalPay:0, dailySpeed:0, dailySpeedManager:0, soundTimer:false};
var tweenData = {score:0, scoreTarget:0, day:0};

/*!
 * 
 * GAME BUTTONS - This is the function that runs to setup button event
 * 
 */
function buildGameButton(){
	buttonBegin.cursor = "pointer";
	buttonBegin.addEventListener("click", function(evt) {
		playSound('soundButton');
		goPage('game');
	});
	
	buttonOk.cursor = "pointer";
	buttonOk.addEventListener("click", function(evt) {
		playSound('soundButton');
		displayInstruction(false);
		startGame();
	});
	
	buttonFacebook.cursor = "pointer";
	buttonFacebook.addEventListener("click", function(evt) {
		share('facebook');
	});
	buttonTwitter.cursor = "pointer";
	buttonTwitter.addEventListener("click", function(evt) {
		share('twitter');
	});
	buttonWhatsapp.cursor = "pointer";
	buttonWhatsapp.addEventListener("click", function(evt) {
		share('whatsapp');
	});
	
	buttonReplay.cursor = "pointer";
	buttonReplay.addEventListener("click", function(evt) {
		playSound('soundButton');
		goPage('game');
	});
	
	buttonSoundOff.cursor = "pointer";
	buttonSoundOff.addEventListener("click", function(evt) {
		toggleGameMute(true);
	});
	
	buttonSoundOn.cursor = "pointer";
	buttonSoundOn.addEventListener("click", function(evt) {
		toggleGameMute(false);
	});
	
	buttonFullscreen.cursor = "pointer";
	buttonFullscreen.addEventListener("click", function(evt) {
		toggleFullScreen();
	});
	
	buttonExit.cursor = "pointer";
	buttonExit.addEventListener("click", function(evt) {
		toggleConfirm(true);
	});
	
	buttonSettings.cursor = "pointer";
	buttonSettings.addEventListener("click", function(evt) {
		toggleOption();
	});
	
	buttonConfirm.cursor = "pointer";
	buttonConfirm.addEventListener("click", function(evt) {
		toggleConfirm(false);
		stopGame();
		goPage('main');
		toggleOption();
	});
	
	buttonCancel.cursor = "pointer";
	buttonCancel.addEventListener("click", function(evt) {
		toggleConfirm(false);
	});
}


/*!
 * 
 * DISPLAY PAGES - This is the function that runs to display pages
 * 
 */
var curPage=''
function goPage(page){
	curPage=page;
	
	animateButton(buttonBegin, false);
	animateButton(buttonReplay, false);
	
	var targetContainer = null;
	switch(page){
		case 'main':
			moveScreen(false);
			resultContainer.visible=false;
			targetContainer = mainContainer;
			animateButton(buttonBegin, true, true);
		break;
		
		case 'game':
			moveScreen(true);
			prepareGame();
		break;
		
		case 'result':
			mainContainer.visible=false;
			targetContainer = resultContainer;
			stopGame();
			calculateResult();
			playSound('soundFail');
			moveScreen(false);
			animateButton(buttonReplay, true, true);
			saveGame(playerData.score);
		break;
	}
	
	if(targetContainer != null){
		targetContainer.visible = true;
		targetContainer.alpha = 0;
		TweenMax.to(targetContainer, .5, {alpha:1, overwrite:true});
	}
	
	resizeCanvas();
}

function toggleConfirm(con){
	confirmContainer.visible = con;
	
	if(curPage == 'result'){
		return;	
	}
	
	if(con){
		TweenMax.pauseAll(true, true);
		gameData.paused = true;
	}else{
		TweenMax.resumeAll(true, true)
		gameData.paused = false;
	}
}

function animateButton(obj, con, alpha){
	if(con){
		var alphaNum = 1;
		if(alpha){
			alpha = false;
			alphaNum = .5;
		}else{
			alpha = true;
		}
		TweenMax.to(obj, .2, {alpha:alphaNum, overwrite:true, onComplete:animateButton, onCompleteParams:[obj, con, alpha]});
	}else{
		TweenMax.to(obj, .2, {alpha:1, overwrite:true});	
	}
}

function moveScreen(con){
	if(con){
		TweenMax.to(moveContainer, .5, {y:-canvasH, overwrite:true});
		TweenMax.to(gameContainer, .5, {y:0, overwrite:true});
	}else{
		TweenMax.to(moveContainer, .5, {y:0, overwrite:true});
		TweenMax.to(gameContainer, .5, {y:canvasH, overwrite:true});	
	}
}

/*!
 * 
 * START GAME - This is the function that runs to start play game
 * 
 */
function prepareGame(){
	resetGame();
	
	playerData.day = tweenData.day = 1;
	playerData.score = tweenData.score = 0;
	playerData.time = 0;
	
	gameData.action = '';
	gameData.paused = true;
	gameData.queueNum = 0;
	gameData.queueTotal = 0;
	gameData.queueTotal_arr = level_setting.queueTotal_arr;
	gameData.peopleTimer = gameSetting.peopleTimer;
	gameData.dayTimer = level_setting.dayTimer;
	gameData.scoreTarget = tweenData.scoreTarget = level_setting.scoreTarget[0];
	gameData.dailySpeedManager = 1;
	gameData.dailySpeed = 1;
	gameData.peopleNum = 0;
	gameData.soundTimer = false;
	gameData.kitchenList_arr = [];
	
	createHuman('manager');
	updateTime();
	updateScore();
	timeAlertTxt.alpha = 0;
	displayInstruction(true);
}

function displayInstruction(con){
	instructionContainer.visible = con;
	
	if(con){
		instructionContainer.alpha = 0;
		TweenMax.to(instructionContainer, .5, {delay:1, alpha:1, overwrite:true});		
	}
}

function startGame(){
	resetTime();
	gameData.paused = false;
	startQueueTimer(true);
}

 /*!
 * 
 * STOP GAME - This is the function that runs to stop play game
 * 
 */
function stopGame(){
	gameData.paused = true;
	TweenMax.killAll(false, true, false);
}

function resetGame(){
	//reset queue
	$.interior[gameData.queueCounterNum].status = 'none';
	$.interior[gameData.queueCounterNum].people = [];
	
	for(var n=0; n<4; n++){
		$.interior[gameData.queueCounterNum+'icon_queue_'+(n+1)].visible = false;		
	}
	
	for(var n=0; n<gameData.queueSlot_arr.length; n++){
		gameData.queueSlot_arr[n].stand = null;
	}
	
	//reset table
	for(var intNum=0;intNum<position_arr.length;intNum++){
		if(position_arr[intNum].type == 'table'){
			$.interior[intNum].status = 'none';
			$.interior[intNum].people = [];
			$.interior[intNum+'icon_order'].visible = false;
			$.interior[intNum+'icon_indicator'].visible = false;
			$.interior[intNum+'icon_bill'].visible = false;
			
			$.interior[intNum+'food_u'].visible = false;
			$.interior[intNum+'food_d'].visible = false;
			$.interior[intNum+'food_l'].visible = false;
			$.interior[intNum+'food_r'].visible = false;
			$.interior[intNum+'food_u_clean'].visible = false;
			$.interior[intNum+'food_d_clean'].visible = false;
			$.interior[intNum+'food_l_clean'].visible = false;
			$.interior[intNum+'food_r_clean'].visible = false;
		}	
	}
	
	//reset kitchen
	$.interior[gameData.kitchenNum+'icon_servefood'].visible = false;
	
	//reset human
	for(var i=1; i<gameData.peopleNum; i++) {
		objectsContainer.removeChild($.peopleList[i]);
    }
	
	objectsContainer.removeChild($.peopleList['manager']);	
}

function saveGame(score){
	/*$.ajax({
      type: "POST",
      url: 'saveResults.php',
      data: {score:score},
      success: function (result) {
          console.log(result);
      }
    });*/
}


/*!
 * 
 * UPDATE GAME - This is the function that runs to loop game update
 * 
 */
function updateGame(){
	if(!gameData.paused){
		playerData.nowTime = new Date();
		playerData.currentTime = (playerData.nowTime.getTime() - playerData.startTime.getTime());
		playerData.currentTime = playerData.currentTime + playerData.accumulateTime;
		playerData.time = playerData.currentTime;
		
		updateTime();
	}
}

/*!
 * 
 * ISOMETRIC MAP - This is the function that runs to build isometric map
 * 
 */
function createIsometricMap(){
	var startX = isometricData.x;
	var startY = isometricData.y;
	var conX = startX;
	var conY = startY;
	var isoNum = 0;
	
	for(var row = 0; row < isometricData.row; row++){
		conX = startX + (isometricData.xCorrect * row);
		conY = startY + (isometricData.yCorrect * row);
		
		isometricData.array[row] = [];
		for(var column = 0; column < isometricData.column; column++){
			var newISO = isoFloor.clone();
			newISO.x = conX;
			newISO.y = conY;
			newISO.r = row;
			newISO.c = column;
			newISO.clickNum = isoNum;
			newISO.walkable = true;
			isometricData.array[row][column] = newISO;
			if(!isometricData.guide){
				newISO.visible = false;	
			}
			
			var itemFor_arr = [];
			for(var intNum=0;intNum<position_arr.length;intNum++){
				if(row == position_arr[intNum].r && column == position_arr[intNum].c){
					$.interior[intNum] = $.objects[position_arr[intNum].id].clone();
					$.interior[intNum].clickNum = intNum;
					$.interior[intNum].r = row;
					$.interior[intNum].c = column;
					$.interior[intNum].x = conX;
					$.interior[intNum].y = conY;
					$.interior[intNum].type = position_arr[intNum].type;
					
					if(position_arr[intNum].type == 'table'){
						$.interior[intNum].status = 'none';
						$.interior[intNum].people = [];
						
						itemFor_arr = ['food_u','food_d','food_l','food_r','food_u_clean','food_d_clean','food_l_clean','food_r_clean','icon_indicator','icon_order','icon_bill'];
					}else if(position_arr[intNum].type == 'kitchen'){
						gameData.kitchenNum = intNum;
						
						itemFor_arr = ['icon_servefood'];
					}else if(position_arr[intNum].type == 'cashier'){
						gameData.cashierNum = intNum;
					}else if(position_arr[intNum].type == 'chair'){
						$.interior[intNum].direction = position_arr[intNum].id.substring(6,7);
					}else if(position_arr[intNum].type == 'queueCounter'){
						$.interior[intNum].status = 'none';
						$.interior[intNum].people = [];
						gameData.queueCounterNum = intNum;
						itemFor_arr = ['icon_queue_1','icon_queue_2','icon_queue_3','icon_queue_4'];
					}
					
					if(typeof position_arr[intNum].exact != 'undefined'){
						$.interior[intNum].exactR = position_arr[intNum].exact[0].r;
						$.interior[intNum].exactC = position_arr[intNum].exact[0].c;
					}
					
					if(position_arr[intNum].table != 'undefined'){
						$.interior[intNum].table = position_arr[intNum].table;
					}
					
					objectsContainer.addChild($.interior[intNum]);
					
					if($.interior[intNum+'_food'] != null){
						objectsContainer.addChild($.interior[intNum+'_food']);
					}
					
					for(var itemNum=0;itemNum<itemFor_arr.length;itemNum++){
						$.interior[intNum+itemFor_arr[itemNum]] = $.items[itemFor_arr[itemNum]].clone();
						$.interior[intNum+itemFor_arr[itemNum]].x = conX;
						$.interior[intNum+itemFor_arr[itemNum]].y = conY+1;
						$.interior[intNum+itemFor_arr[itemNum]].visible = false;
						objectsContainer.addChild($.interior[intNum+itemFor_arr[itemNum]]);	
					}
					buildInteriorEvent($.interior[intNum]);
				}
			}
			
			newISO.cursor = "pointer";
			newISO.addEventListener("click", function(evt) {
				generatePath('manager', evt.target.r, evt.target.c);
			});
						
			conX += isometricData.width;
			conY -= isometricData.height;
			isoNum++;
			
			mapContainer.addChild(newISO);
		}
	}
	
	//additional slot
	for(var intNum=0;intNum<position_arr.length;intNum++){
		if(typeof position_arr[intNum].slot != 'undefined'){
			if(position_arr[intNum].slot.length > 0){
				for(var slotNum=0; slotNum<position_arr[intNum].slot.length; slotNum++){
					var seqNum = position_arr[intNum].seq;
					seqNum = isNaN(seqNum) ? 0 : seqNum;
					$.interior[intNum+'_'+slotNum] = $.interior[intNum].clone();
					$.interior[intNum+'_'+slotNum].r = position_arr[intNum].slot[slotNum].r;
					$.interior[intNum+'_'+slotNum].c = position_arr[intNum].slot[slotNum].c;
					var maskShape = new createjs.Shape();
					var targetISO = isometricData.array[position_arr[intNum].slot[slotNum].r][position_arr[intNum].slot[slotNum].c];
					maskShape.graphics.beginFill("#FF0000").drawRect(-32, -200, 64, 230);
					maskShape.x = targetISO.x;
					maskShape.y = targetISO.y+seqNum;
					
					var regX = Number(targetISO.x - $.interior[intNum+'_'+slotNum].x);
					var regY = Number(targetISO.y - $.interior[intNum+'_'+slotNum].y);
					$.interior[intNum+'_'+slotNum].x = targetISO.x;
					$.interior[intNum+'_'+slotNum].y = targetISO.y+seqNum;
					$.interior[intNum+'_'+slotNum].mask = maskShape;
					$.interior[intNum+'_'+slotNum].regX += regX;
					$.interior[intNum+'_'+slotNum].regY += regY;
					$.interior[intNum+'_'+slotNum].type = position_arr[intNum].type;
					objectsContainer.addChild($.interior[intNum+'_'+slotNum]);
					
					buildInteriorEvent($.interior[intNum+'_'+slotNum]);
				}
				$.interior[intNum].visible = false;
			}
		}
	}
	
	//store queue list
	for(var l = 0; l < entrace_arr.queue.length; l++){
		gameData.queueSlot_arr.push({iso:isometricData.array[entrace_arr.queue[l].r][entrace_arr.queue[l].c], r:entrace_arr.queue[l].r, c:entrace_arr.queue[l].c, stand:null});	
	}
}

/*!
 * 
 * INTERIOR OBJECT - This is the function that runs for interior object event
 * 
 */
 
function buildInteriorEvent(interiorObj){
	var interiorEvent_arr = ['queueCounter','table','kitchen'];
	if(interiorEvent_arr.indexOf(interiorObj.type) != -1){
		interiorObj.cursor = "pointer";
		interiorObj.addEventListener("click", function(evt) {
			if(gameData.action == '' && !gameData.paused)
			checkInteriorObjAction(evt.target);
		});
	}
}

function checkInteriorObjAction(interiorObj){
	//console.log('interior : '+interiorObj.type+' '+interiorObj.r+' '+interiorObj.c);
	var targetManager = $.peopleList['manager'];
	targetManager.actionObj = interiorObj;
	targetManager.faceR = targetManager.faceC = null;
	targetManager.exactR = targetManager.exactC = null;
	
	if(interiorObj.exactR != null && interiorObj.exactC != null){
		targetManager.exactR = interiorObj.exactR;
		targetManager.exactC = interiorObj.exactC;
	}
	
	if(targetManager.action == 'inCounter'){
		targetManager.action = '';	
	}
	
	displayTotalQueue(false);
	switch(interiorObj.type){
		case 'queueCounter':
			if(targetManager.action == '' || targetManager.action == 'inCounter'){
				findPath('manager', interiorObj.r, interiorObj.c, true, 'goCounter');
			}
		break;
		
		case 'table':
			if(interiorObj.status == 'none' && $.interior[gameData.queueCounterNum].status == 'ready'){
				if(inviteQueue(interiorObj.clickNum, $.interior[gameData.queueCounterNum].people[0])){
					$.interior[gameData.queueCounterNum].people.splice(0,1);
					$.interior[gameData.queueCounterNum].status = 'none';
					findPath('manager', interiorObj.r, interiorObj.c, false, 'invite');
				}else{
					targetManager.action = 'inCounter';
					displayTotalQueue(true);	
				}
			}else if(targetManager.action == '' && interiorObj.status == 'menu'){
				interiorObj.status = '';
				findPath('manager', interiorObj.r, interiorObj.c, false, 'order');	
			}else if(targetManager.action == 'foodOnHand' && interiorObj.status == 'waitFood'){
				if(gameData.kitchenList_arr[0] == interiorObj.clickNum){
					findPath('manager', interiorObj.r, interiorObj.c, false, 'serveFood');
				}
			}else if(targetManager.action == '' && interiorObj.status == 'bill'){
				findPath('manager', interiorObj.r, interiorObj.c, false, 'acceptPayment');
			}else if(targetManager.action == '' && interiorObj.status == 'clean'){
				findPath('manager', interiorObj.r, interiorObj.c, false, 'cleanTable');
			}
		break;
		
		case 'kitchen':
			if(targetManager.action == '' && gameData.kitchenList_arr.length > 0){
				findPath('manager', $.interior[gameData.kitchenNum].r+1, $.interior[gameData.kitchenNum].c, true, 'takeFood');
			}
		break;
	}
}

function createGrid(){
	grid_arr = new PF.Grid(isometricData.row, isometricData.column);
	var isoNum = 0;
	for(var row = 0; row < isometricData.row; row++){
		for(var column = 0; column < isometricData.column; column++){
			for(var intNum = 0; intNum < position_arr.length; intNum++){
				var blockArray = position_arr[intNum].block;
				for(var bNum = 0; bNum < blockArray.length; bNum++){
					if(row == blockArray[bNum].r && column == blockArray[bNum].c){
						var targetISO = isometricData.array[row][column];
						targetISO.walkable = false;
						grid_arr.setWalkableAt(row, column, false);
					}
				}
			}
			isoNum++;
		}
	}
}

/*!
 * 
 * GENERATE PATH - This is the function that runs to generate path
 * 
 */
 
function generatePath(num, r, c){
	createGrid();
	
	//reset
	$.peopleList[num].path_arr = [];
	var finder = new PF.AStarFinder({
		allowDiagonal: false
	});
	
	$.peopleList[num].path_arr = finder.findPath($.peopleList[num].r, $.peopleList[num].c, r, c, grid_arr);
	
	if($.peopleList[num].path_arr.length == 0){
		//console.log('no path');
	}else{
		$.peopleList[num].r = r;
		$.peopleList[num].c = c;
		$.peopleList[num].pathNum = 1;
		moveHuman(num);
	}
}

/*!
 * 
 * CREATE HUMAN - This is the function that runs to create human
 * 
 */
function createHuman(type){
	var newHuman;
	if(type == 'manager'){
		newHuman = $.peoples[0].clone();
		newHuman.r = newHuman.nextR = gameData.r;
		newHuman.c = newHuman.nextC = gameData.c;
		$.peopleList['manager'] = newHuman;
	}else{
		var randomNum = Math.floor(Math.random()*(people_arr.length-1));
		newHuman = $.peoples[randomNum+1].clone();
		var randomPos = Math.floor(Math.random()*entrace_arr.enter.length);
		newHuman.r = newHuman.nextR = entrace_arr.enter[randomPos].r;
		newHuman.c = newHuman.nextC = entrace_arr.enter[randomPos].c;
		newHuman.clickNum = gameData.peopleNum;
		$.peopleList[gameData.peopleNum] = newHuman;
	}
	
	var targetISO = isometricData.array[newHuman.r][newHuman.c];
	newHuman.x = targetISO.x;
	newHuman.y = targetISO.y;
	newHuman.action = '';
	newHuman.tweenComplete = false;
	newHuman.type = 'human';
	newHuman.path_arr = [];
	newHuman.pathNum = 0;
	
	objectsContainer.addChild(newHuman);
	sortObjectIndex();
	
	if(type != 'manager'){
		var randomNum = Math.floor(Math.random()*9)*.2;
		newHuman.visible = false;
		TweenMax.to(newHuman, randomNum, {overwrite:true, onComplete:enterQueue, onCompleteParams:[gameData.peopleNum]});	
	}else{
		newHuman.action = 'inCounter';
		//newHuman.action = '';
		//findPath('manager', 14, 1, false, 'move');
	}
	gameData.peopleNum++;
}


/*!
 * 
 * QUEUE - This is the function that runs to update queue
 * 
 */
function startQueueTimer(con){
	var timerNum = gameData.peopleTimer;
	timerNum = timerNum <= 5 ? 5 : timerNum;
	if(con){
		timerNum = 1;
	}
	TweenMax.to($.interior[gameData.queueCounterNum], timerNum, {overwrite:true, onComplete:createQueuePeople});
}

function createQueuePeople(){
	var total = gameData.queueTotal_arr[gameData.queueNum];
	var totalAvailable = 0;
	for(var n=0; n<gameData.queueSlot_arr.length; n++){
		if(gameData.queueSlot_arr[n].stand == null){
			totalAvailable++;
		}
	}
	
	if(total <= totalAvailable){
		$.interior[gameData.queueCounterNum].people.push(total);
		gameData.queueNum++;
		if(gameData.queueNum > gameData.queueTotal_arr.length-1){
			gameData.queueNum = 0;
			shuffle(gameData.queueTotal_arr);
		};
		for(var n=0; n<total; n++){
			createHuman();
		}	
	}
	
	startQueueTimer(false);
}

/*!
 * 
 * ENTER QUEUE - This is the function that runs to enter queue
 * 
 */
function enterQueue(num){
	for(var n=0; n<gameData.queueSlot_arr.length; n++){
		if(gameData.queueSlot_arr[n].stand == null){
			playSound('soundStep');
			$.peopleList[num].visible = true;
			gameData.queueSlot_arr[n].stand = $.peopleList[num];
			setQueueDirection(num, n);
			findPath(num, gameData.queueSlot_arr[n].r, gameData.queueSlot_arr[n].c, true, 'queue');
			return;
		}
	}
}

/*!
 * 
 * INVITE QUEUE - This is the function that runs to invite queue
 * 
 */
function inviteQueue(tableNum, total){
	//find table first
	var chair_arr = [];
	for(var chairNum=0;chairNum<position_arr.length;chairNum++){
		if($.interior[chairNum].type == 'chair' && tableNum == $.interior[chairNum].table){
			chair_arr.push($.interior[chairNum]);
		}
	}
	
	shuffle(chair_arr);
	if(total <= chair_arr.length && $.interior[tableNum].status == 'none'){
		$.interior[tableNum].status = 'sit';
		$.interior[tableNum].peopleCount = 0;
		$.interior[tableNum].peopleTotal = total;
		$.interior[tableNum].direction_arr = [];
		
		var count = 0;
		for(var n=0; n<gameData.queueSlot_arr.length; n++){
			if(gameData.queueSlot_arr[n].stand != null && count < total){
				var targetChair = chair_arr[count];
				var targetHuman = gameData.queueSlot_arr[n].stand;
				$.interior[tableNum].direction_arr.push(targetChair.direction);
				targetHuman.actionObj = targetChair;
				
				findPath(targetHuman.clickNum, targetChair.r, targetChair.c, false, 'sit');
				gameData.queueSlot_arr[n].stand = null;
				
				$.interior[tableNum].people.push(targetHuman);
				count++;
			}
		}
		
		rearrangeQueue();
		return true;
	}else{
		return false;	
	}
}

/*!
 * 
 * REARRANGE QUEUE - This is the function that runs to rearrange queue list
 * 
 */
function rearrangeQueue(){
	for(var n=0; n<gameData.queueSlot_arr.length; n++){
		if(gameData.queueSlot_arr[n].stand == null){
			var nextCount = n+1;
			if(nextCount < gameData.queueSlot_arr.length){
				for(var p=nextCount; p<gameData.queueSlot_arr.length; p++){
					if(gameData.queueSlot_arr[p].stand != null){
						gameData.queueSlot_arr[n].stand = gameData.queueSlot_arr[p].stand;
						gameData.queueSlot_arr[p].stand = null;
						
						setQueueDirection(gameData.queueSlot_arr[n].stand.clickNum, n);
						findPath(gameData.queueSlot_arr[n].stand.clickNum, gameData.queueSlot_arr[n].r, gameData.queueSlot_arr[n].c, true, 'queue');
						p = gameData.queueSlot_arr.length;
					}
				}		
			}
		}
	}
}

function setQueueDirection(num, queueNum){
	var targetHuman = $.peopleList[num];
	targetHuman.faceC = targetHuman.faceR = null;
	
	if(queueNum == 0){
		if(!isNaN($.interior[gameData.queueCounterNum].exactR) && !isNaN($.interior[gameData.queueCounterNum].exactC)){
			targetHuman.faceR = $.interior[gameData.queueCounterNum].exactR;
			targetHuman.faceC = $.interior[gameData.queueCounterNum].exactC;
		}else{
			targetHuman.faceR = $.interior[gameData.queueCounterNum].r;
			targetHuman.faceC = $.interior[gameData.queueCounterNum].c;	
		}
	}else{
		targetHuman.faceR = gameData.queueSlot_arr[queueNum-1].r;
		targetHuman.faceC = gameData.queueSlot_arr[queueNum-1].c;
	}
}

/*!
 * 
 * LEAVE RESTAURANT - This is the function that runs to leave restaurant
 * 
 */
function leaveRestaurant(tableNum){
	gameData.totalPay = $.interior[tableNum].people.length;
	for(var n=0; n<$.interior[tableNum].people.length; n++){
		var targetHuman = $.interior[tableNum].people[n];
		var randomPos = Math.floor(Math.random()*entrace_arr.exit.length);
		findPath(targetHuman.clickNum, entrace_arr.exit[randomPos].r, entrace_arr.exit[randomPos].c, true, 'leave');
	}
	
	$.interior[tableNum].people = [];
}

/*!
 * 
 * MOVE HUMAN - This is the function that runs to move human
 * 
 */
function moveHuman(num){
	sortObjectIndex();
	
	var targetHuman = $.peopleList[num];
	targetHuman.tweenComplete = true;
	
	if($.peopleList[num].pathNum < $.peopleList[num].path_arr.length){
		var x = Number($.peopleList[num].path_arr[$.peopleList[num].pathNum][0]);
		var y = Number($.peopleList[num].path_arr[$.peopleList[num].pathNum][1]);
		var targetISO = isometricData.array[x][y];
		targetHuman.nextR = targetISO.r;
		targetHuman.nextC = targetISO.c;
		targetHuman.oldX = targetHuman.x;
		targetHuman.oldY = targetHuman.y;
		targetHuman.newX = targetISO.x;
		targetHuman.newY = targetISO.y;
		targetHuman.distance = getDistance(targetHuman.oldX, targetHuman.oldY, targetHuman.newX, targetHuman.newY);
		targetHuman.sortIndex = false;
		targetHuman.direction = getDirection(targetHuman.oldX, targetHuman.oldY, targetHuman.newX, targetHuman.newY);
		targetHuman.tweenComplete = false;
		updateHumanPos(targetHuman);
		
		$.peopleList[num].pathNum++;
		var moveSpeed = num == 'manager' ? (gameSetting.moveSpeed * gameData.dailySpeedManager) : gameSetting.moveSpeed;
		TweenMax.to(targetHuman, moveSpeed, {x:targetHuman.newX, y:targetHuman.newY+2, overwrite:true, onUpdate:updateHumanMove, onUpdateParams:[targetHuman], onComplete:moveHuman, onCompleteParams:[num], ease:Linear.easeNone});
	}else{
		updateHumanAction(num);
	}
}

/*!
 * 
 * UPDATE HUMAN DIRECTION - This is the function that runs to update human direction
 * 
 */
function updateHumanPos(targetHuman){
	if(targetHuman.action == 'serveFood' || targetHuman.action == 'foodOnHand'){
		targetHuman.gotoAndStop('e'+targetHuman.direction);
	}else{
		targetHuman.gotoAndStop(targetHuman.direction);
	}
}

function updateHumanMove(obj){
	var percent = 1;
	if(obj.direction == 'u'){
		percent = 1;
	}else if(obj.direction == 'd'){
		percent = 1;
	}else if(obj.direction == 'l'){
		percent = 2;
	}else if(obj.direction == 'r'){
		percent = 5;
	}
	
	if(getDistance(obj.x, obj.y, obj.newX, obj.newY) < (obj.distance/percent) && !obj.sortIndex){
		obj.sortIndex = true;
		obj.r = obj.nextR;
		obj.c = obj.nextC;
		sortObjectIndex();
	}
}

/*!
 * 
 * UPDATE HUMAN ACTION - This is the function that runs to update human action
 * 
 */
function updateHumanAction(num){
	var targetHuman = $.peopleList[num];

	var targetFace = isometricData.array[targetHuman.faceR][targetHuman.faceC];
	targetHuman.direction = getDirection(targetHuman.x, targetHuman.y, targetFace.x, targetFace.y);
	updateHumanPos(targetHuman);
	
	switch(targetHuman.action){
		case 'goCounter':
			gameData.action = '';
			targetHuman.action = 'inCounter';
			displayTotalQueue(true);
		break;
		
		case 'invite':
			gameData.action = '';
			targetHuman.action = '';
		break;
		
		case 'order':
			var orderTimer = gameSetting.orderTimer * gameData.dailySpeed;
			TweenMax.to(targetHuman, orderTimer, {overwrite:true, onComplete:function(){
				gameData.action = '';
				targetHuman.action = '';
				updateTable(targetHuman.actionObj.clickNum, 'waitFood');
				playSound('soundOrder');
				
				var cookTimer = gameSetting.cookTimer * gameData.dailySpeed;
				TweenMax.to($.interior[targetHuman.actionObj.clickNum], cookTimer, {overwrite:true, onComplete:updateKitchen, onCompleteParams:[targetHuman.actionObj.clickNum, true]});
				//findPath('manager', $.interior[gameData.kitchenNum].r, $.interior[gameData.kitchenNum].c, false, 'sendOrder');
			}});
		break;
		
		case 'sendOrder':
			gameData.action = '';
			targetHuman.action = '';
			
			var cookTimer = gameSetting.cookTimer * gameData.dailySpeed;
			TweenMax.to($.interior[targetHuman.actionObj.clickNum], cookTimer, {overwrite:true, onComplete:updateKitchen, onCompleteParams:[targetHuman.actionObj.clickNum, true]});
		break;
		
		case 'takeFood':
			gameData.action = '';
			targetHuman.action = 'foodOnHand';
			updateKitchen('', false);
			updateHumanPos(targetHuman);
		break;
		
		case 'serveFood':
			gameData.action = '';
			targetHuman.action = '';
			gameData.kitchenList_arr.splice(0,1);
			updateHumanPos(targetHuman);
			updateTable(targetHuman.actionObj.clickNum, 'food');
			playSound('soundPlate');
			
			var dineTimer = gameSetting.dineTimer * gameData.dailySpeed;
			TweenMax.to($.interior[targetHuman.actionObj.clickNum], dineTimer, {overwrite:true, onComplete:updateTable, onCompleteParams:[targetHuman.actionObj.clickNum, 'bill']});
		break;
		
		case 'acceptPayment':
			var paymentTimer = gameSetting.paymentTimer * gameData.dailySpeed;
			TweenMax.to(targetHuman, paymentTimer, {overwrite:true, onComplete:function(){
				gameData.action = '';
				targetHuman.action = '';
				updateTable(targetHuman.actionObj.clickNum, 'clean');
				leaveRestaurant(targetHuman.actionObj.clickNum);
				playSound('soundBill');
				
				if($.interior[gameData.cashierNum].exactR != null && $.interior[gameData.cashierNum].exactC != null){
					targetHuman.exactR = $.interior[gameData.cashierNum].exactR;
					targetHuman.exactC = $.interior[gameData.cashierNum].exactC;
				}
				increaseScore();
				//findPath('manager', $.interior[gameData.cashierNum].r, $.interior[gameData.cashierNum].c, false, 'toCashier');
			}});
		break;
		
		case 'toCashier':
			gameData.action = '';
			targetHuman.action = '';
			increaseScore();
		break;
		
		case 'cleanTable':
			gameData.action = '';
			targetHuman.action = '';
			updateTable(targetHuman.actionObj.clickNum, 'none');
			playSound('soundClean');
		break;
		
		case 'queue':
			targetHuman.action = '';
			displayTotalQueue(true);
		break;
		
		case 'sit':
			targetHuman.action = '';
			targetHuman.x = targetHuman.actionObj.x;
			targetHuman.y = targetHuman.actionObj.y+.1;
			targetHuman.gotoAndStop('e'+targetHuman.actionObj.direction);
			sortObjectIndex();
			playSound('soundStep');
			
			$.interior[targetHuman.actionObj.table].peopleCount++;
			if($.interior[targetHuman.actionObj.table].peopleCount == $.interior[targetHuman.actionObj.table].peopleTotal){
				var menuTimer = gameSetting.menuTimer * gameData.dailySpeed;
				TweenMax.to($.interior[targetHuman.actionObj.table], menuTimer, {overwrite:true, onComplete:updateTable, onCompleteParams:[targetHuman.actionObj.table, 'menu']});
			}
		break;
		
		case 'leave':
			$.peopleList[targetHuman.clickNum] = null;
			objectsContainer.removeChild(targetHuman);
		break;
	}
	//console.log('action : '+num+' '+targetHuman.action);	
}

/*!
 * 
 * DISPLAY QUEUE NUMBER - This is the function that runs to display queue number
 * 
 */
function displayTotalQueue(con){
	for(var n=0; n<4; n++){
		$.interior[gameData.queueCounterNum+'icon_queue_'+(n+1)].visible = false;		
	}
	
	var interiorObj = $.interior[gameData.queueCounterNum];
	if(con && interiorObj.people.length > 0){
		var count = 0;
		var maxTotal = Number(interiorObj.people[0]);
		for(var n=0; n<gameData.queueSlot_arr.length; n++){
			var targetHuman = gameData.queueSlot_arr[n].stand;
			if(targetHuman != null && targetHuman.tweenComplete){
				count += 1;
			}
		}
		
		if(count >= maxTotal && $.peopleList['manager'].action == 'inCounter'){
			interiorObj.status = 'ready';
			$.interior[gameData.queueCounterNum+'icon_queue_'+maxTotal].visible = true;
			playSound('soundPop');
		}
	}
}

/*!
 * 
 * UPDATE TABLE - This is the function that runs to update table
 * 
 */
function updateTable(tableNum, status){
	//console.log('update table : ' + status);
	$.interior[tableNum].status = status;
	
	var targetTable = $.interior[tableNum];
	$.interior[tableNum+'icon_order'].visible = false;
	$.interior[tableNum+'icon_indicator'].visible = false;
	$.interior[tableNum+'icon_bill'].visible = false;
	
	switch(status){
		case 'menu':
			$.interior[tableNum+'icon_order'].visible = true;
			playSound('soundPop');
		break;
		
		case 'food':
			for(var n=0; n<targetTable.direction_arr.length; n++){
				$.interior[tableNum+'food_'+targetTable.direction_arr[n]].visible = true;
			}
		break;
			
		case 'bill':
			$.interior[tableNum+'icon_bill'].visible = true;
			playSound('soundPop');
			
			for(var n=0; n<targetTable.direction_arr.length; n++){
				$.interior[tableNum+'food_'+targetTable.direction_arr[n]].visible = false;
				$.interior[tableNum+'food_'+targetTable.direction_arr[n]+'_clean'].visible = true;
			}
		break;
		
		case 'none':
			for(var n=0; n<targetTable.direction_arr.length; n++){
				$.interior[tableNum+'food_'+targetTable.direction_arr[n]+'_clean'].visible = false;
			}
		break;
	}
}

/*!
 * 
 * UPDATE KITCHEN - This is the function that runs to update kitchen
 * 
 */
function updateKitchen(tableNum, con){
	if(con){
		$.interior[gameData.kitchenNum+'icon_servefood'].visible = true;
		gameData.kitchenList_arr.push(tableNum);
		playSound('soundPop');
		playSound('soundBell');
	}else{
		if(gameData.kitchenList_arr.length > 0){
			$.interior[gameData.kitchenNum+'icon_servefood'].visible = false;
			$.interior[gameData.kitchenList_arr[0]+'icon_indicator'].visible = true;
			
			if(gameData.kitchenList_arr.length-1 > 0){
				$.interior[gameData.kitchenNum+'icon_servefood'].visible = true;
			}
		}	
	}
}

/*!
 * 
 * GET DIRECTION - This is the function that runs to get direction
 * 
 */
function getDirection(fromX, fromY, toX, toY){
    var radiance = 180/Math.PI;
    var walkdirection = -(Math.atan2(toX-fromX, toY-fromY))*radiance;
	walkdirection = Math.floor(walkdirection)+180;
	
	var direct = 'u';
	if(walkdirection >= 270 && walkdirection <= 360){
		//302
		direct = 'u';
	}else if(walkdirection >= 0 && walkdirection <= 79){
		//56
		direct = 'r';
	}else if(walkdirection >= 80 && walkdirection <= 200){
		//117
		direct = 'd';
	}else if(walkdirection >= 180 && walkdirection <= 269){
		//242
		direct = 'l';
	}
	return direct;
}

/*!
 * 
 * FIND PATH - This is the function that runs to find path
 * 
 */
function findPath(num, r, c, con, action){
	//console.log('find nearest : '+num+' '+r+' '+c+' '+action);
	var allPath_arr = [];
	var arrayNearest_arr = [{c:0, r:-1},
							{c:-1, r:0},{c:1, r:0},
							{c:0, r:1}];
	//shuffle(arrayNearest_arr);
	arrayNearest_arr.unshift({c:0, r:0});
	for(var n=0; n<arrayNearest_arr.length; n++){
		allPath_arr.push(arrayNearest_arr[n]);	
	}
	
	//widest
	var arrayWidest_arr = [{c:-1, r:-1},{c:1, r:-1},
						{c:-1, r:1},{c:1, r:1}];
	for(var n=0; n<arrayWidest_arr.length; n++){
		allPath_arr.push(arrayWidest_arr[n]);	
	}
	//shuffle(arrayWidest_arr);
	/*for(var n=0; n<arrayWidest_arr.length; n++){
		arrayNearest_arr.push(arrayWidest_arr[n]);	
	}*/
	
	var targetHuman = $.peopleList[num];
	targetHuman.action = action;
	
	if(num == 'manager'){
		gameData.action = action;
		targetHuman.faceR = r;
		targetHuman.faceC = c;	
	}
	
	if(targetHuman.exactR != null && targetHuman.exactC != null){
		r = targetHuman.exactR;
		c = targetHuman.exactC;
	}
	if(findExistPath(num,r,c,allPath_arr) && !con){
		updateHumanAction(num);
	}else{
		var phaseExact = false;
		var phaseNearest = false;
		var getNearest_arr = [];
		
		if(con){
			phaseExact = true;
			var column = Number(c) + Number(arrayNearest_arr[0].c);
			var row = Number(r) + Number(arrayNearest_arr[0].r);
			
			if(targetHuman.r == row && targetHuman.c == column){
				updateHumanAction(num);
			}else{
				generatePath(num, row, column);
			}	
		}else {
			if(!phaseExact){
				for(var n=0; n<arrayNearest_arr.length; n++){
					var column = Number(c) + Number(arrayNearest_arr[n].c);
					var row = Number(r) + Number(arrayNearest_arr[n].r);	
					if(column >= 0 && column <= isometricData.column && row >= 0 && row <= isometricData.row){
						var targetISO = isometricData.array[row][column];
						if(typeof isometricData.array[row][column] != 'undefined'){
							if(targetISO.walkable){
								//console.log(getDistance(targetHuman.x, targetHuman.y, targetISO.x, targetISO.y))
								getNearest_arr.push({r:row, c:column, distance:getDistance(targetHuman.x, targetHuman.y, targetISO.x, targetISO.y)});
							}
						}
					}
				}
				
				sortOnObject(getNearest_arr, 'distance', false);
				
				for(var n=0; n<getNearest_arr.length; n++){
					phaseNearest = true;
					if(targetHuman.r == getNearest_arr[n].r && targetHuman.c == getNearest_arr[n].c){
						updateHumanAction(num);
					}else{
						generatePath(num, getNearest_arr[n].r, getNearest_arr[n].c);
					}	
					n = getNearest_arr.length;
				}
			}
			
			if(!phaseNearest){
				getNearest_arr = [];
				for(var n=0; n<arrayWidest_arr.length; n++){
					var column = Number(c) + Number(arrayWidest_arr[n].c);
					var row = Number(r) + Number(arrayWidest_arr[n].r);	
					if(column >= 0 && column <= isometricData.column && row >= 0 && row <= isometricData.row){
						var targetISO = isometricData.array[row][column];
						if(typeof isometricData.array[row][column] != 'undefined'){
							if(targetISO.walkable){
								getNearest_arr.push({r:row, c:column, distance:getDistance(targetHuman.x, targetHuman.y, targetISO.x, targetISO.y)});
							}
						}
					}
				}
				
				sortOnObject(getNearest_arr, 'distance', false);
				
				for(var n=0; n<getNearest_arr.length; n++){
					if(targetHuman.r == getNearest_arr[n].r && targetHuman.c == getNearest_arr[n].c){
						updateHumanAction(num);
					}else{
						generatePath(num, getNearest_arr[n].r, getNearest_arr[n].c);
					}	
					n = getNearest_arr.length;
				}
			}
		}
		
		/*var getNearest_arr = [];
		for(var n=0; n<arrayNearest_arr.length; n++){
			var column = Number(c) + Number(arrayNearest_arr[n].c);
			var row = Number(r) + Number(arrayNearest_arr[n].r);
			if(column >= 0 && column <= isometricData.column && row >= 0 && row <= isometricData.row){
				var targetISO = isometricData.array[row][column];
				if(typeof isometricData.array[row][column] != 'undefined'){
					if(targetISO.walkable){
						getNearest_arr.push({r:row, c:column, distance:getDistance(targetHuman.x, targetHuman.y, targetISO.x, targetISO.y)})
						n = arrayNearest_arr.length;
						
						if(targetHuman.r == row && targetHuman.c == column){
							updateHumanAction(num);
						}else{
							generatePath(num, row, column);
						}
					}
				}
			}
		}*/
		
		/*var getNearest_arr = [];
		for(var n=0; n<arrayNearest_arr.length; n++){
			var column = Number(c) + Number(arrayNearest_arr[n].c);
			var row = Number(r) + Number(arrayNearest_arr[n].r);	
			if(column >= 0 && column <= isometricData.column && row >= 0 && row <= isometricData.row){
				var targetISO = array[row][column];
				if(typeof array[row][column] != 'undefined'){
					if(targetISO.walkable){
						getNearest_arr.push({r:row, c:column, distance:getDistance(targetHuman.x, targetHuman.y, targetISO.x, targetISO.y)});
					}
				}
			}
		}
		
		sortOnObject(getNearest_arr, 'distance', false);
		
		for(var n=0; n<getNearest_arr.length; n++){
			if(targetHuman.r == getNearest_arr[n].r && targetHuman.c == getNearest_arr[n].c){
				updateHumanAction(num);
			}else{
				console.log('in :'+getNearest_arr[n].r+' '+getNearest_arr[n].c);
				generatePath(num, getNearest_arr[n].r, getNearest_arr[n].c);
			}	
			return;
		}
		
		getNearest_arr = [];
		for(var n=0; n<arrayWidest_arr.length; n++){
			var column = Number(c) + Number(arrayWidest_arr[n].c);
			var row = Number(r) + Number(arrayWidest_arr[n].r);	
			if(column >= 0 && column <= isometricData.column && row >= 0 && row <= isometricData.row){
				var targetISO = array[row][column];
				if(typeof array[row][column] != 'undefined'){
					if(targetISO.walkable){
						getNearest_arr.push({r:row, c:column, distance:getDistance(targetHuman.x, targetHuman.y, targetISO.x, targetISO.y)});
					}
				}
			}
		}
		
		sortOnObject(getNearest_arr, 'distance', false);
		
		for(var n=0; n<getNearest_arr.length; n++){
			if(targetHuman.r == getNearest_arr[n].r && targetHuman.c == getNearest_arr[n].c){
				updateHumanAction(num);
			}else{
				generatePath(num, getNearest_arr[n].r, getNearest_arr[n].c);
			}	
			return;
		}*/
		
		/*var getNearest_arr = [];
		for(var n=0; n<arrayNearest_arr.length; n++){
			var column = Number(c) + Number(arrayNearest_arr[n].c);
			var row = Number(r) + Number(arrayNearest_arr[n].r);
			if(column >= 0 && column <= isometricData.column && row >= 0 && row <= isometricData.row){
				var targetISO = array[row][column];
				if(typeof array[row][column] != 'undefined'){
					if(targetISO.walkable){
						getNearest_arr.push({r:row, c:column, distance:getDistance(targetHuman.x, targetHuman.y, targetISO.x, targetISO.y)})
						n = arrayNearest_arr.length;
						
						if(targetHuman.r == row && targetHuman.c == column){
							updateHumanAction(num);
						}else{
							generatePath(num, row, column);
						}
					}
				}
			}
		}*/
		
		/*sortOnObject(getNearest_arr, 'distance', false);
		
		for(var n=0; n<getNearest_arr.length; n++){
			if(targetHuman.r == getNearest_arr[n].r && targetHuman.c == getNearest_arr[n].c){
				updateHumanAction(num);
			}else{
				generatePath(num, getNearest_arr[n].r, getNearest_arr[n].c);
			}	
			return;
		}*/
	}
}

function findExistPath(num, r, c, array){
	for(var n=0; n<array.length; n++){
		var column = Number(c) + Number(array[n].c);
		var row = Number(r) + Number(array[n].r);
		var targetHuman = $.peopleList[num];
		if(targetHuman.r == row && targetHuman.c == column){
			return true;
		}
	}
	
	return false;
}

/*!
 * 
 * SORT OBJECT INDEX - This is the function that runs to soft object index
 * 
 */
function sortObjectIndex(){
	gameData.index_arr = [];
	/*for(var i=0; i<objectsContainer.numChildren; i++) {
		var targetObj = objectsContainer.getChildAt(i);
		gameData.index_arr.push({obj:targetObj, row:targetObj.r, column:targetObj.c});
    }
	
	sortOnObject(gameData.index_arr, 'column', true);
	sortOnObject(gameData.index_arr, 'row', false);*/
	
	/*for(var i=0; i<objectsContainer.numChildren; i++) {
		var targetObj = objectsContainer.getChildAt(i);
		if(targetObj.type == 'human'){
			gameData.index_arr.push({obj:targetObj, posY:targetObj.y+17});
		}else{
			gameData.index_arr.push({obj:targetObj, posY:targetObj.y});	
		}
    }
	sortOnObject(gameData.index_arr, 'posY', false);*/
	
	/*for(var i=0; i<objectsContainer.numChildren; i++) {
		for(var k=0; k<objectsContainer.numChildren-1; k++) {
			var targetObj = objectsContainer.getChildAt(k);
			var targetObj2 = objectsContainer.getChildAt(k+1);
			targetObj.idiot_depth = Math.floor(targetObj.y*canvasW+targetObj.x);
			targetObj2.idiot_depth = Math.floor(targetObj2.y*canvasW+targetObj2.x);
			if ((targetObj.idiot_depth>targetObj2.idiot_depth) && (objectsContainer.getChildIndex(targetObj)<objectsContainer.getChildIndex(targetObj2))) {
				swapIndex(targetObj, targetObj2);
				app = targetObj;
				targetObj = targetObj2;
				targetObj2 = app;
			}
			if ((targetObj.idiot_depth<targetObj2.idiot_depth) && (objectsContainer.getChildIndex(targetObj)>objectsContainer.getChildIndex(targetObj2))) {
				swapIndex(targetObj, targetObj2);
				app = targetObj;
				targetObj = targetObj2;
				targetObj2 = app;
			}
		}
	}*/
	
	for(var i=0; i<objectsContainer.numChildren; i++) {
		var targetObj = objectsContainer.getChildAt(i);
		gameData.index_arr.push({obj:targetObj, depth:Math.floor((targetObj.y-1)*canvasW+targetObj.x)});
    }
	sortOnObject(gameData.index_arr, 'depth', false);
	
	var indexNum = 0;
	for(var n=0;n<gameData.index_arr.length;n++){
		objectsContainer.setChildIndex(gameData.index_arr[n].obj, indexNum);
		indexNum++;
	}
}

/*!
 * 
 * GAME STATS - This is the function that runs to update game stats
 * 
 */
function updateScore(){
	var cureScore = gameScoreDisplay.replace('[TARGET]',Math.floor(tweenData.scoreTarget));
	cureScore = cureScore.replace('[NUMBER]', Math.floor(tweenData.score));
	scoreTxt.text = cureScore;
}

function increaseScore(){
	playerData.score += gameScore * gameData.totalPay;
	TweenMax.to(tweenData, 1, {scoreTarget:gameData.scoreTarget, score:playerData.score, overwrite:true, onUpdate:updateScore});
}


function updateTime(){
	dayTxt.text = playerData.day;
	
	var distanceTimer = gameData.dayTimer - playerData.time;
	
	if(distanceTimer <= 10000){
		if(!gameData.soundTimer){
			gameData.soundTimer = true;
			playSoundLoop('soundTimer');
			animateButton(timeAlertTxt, true);
		}
	}else{
		timeAlertTxt.alpha = 0;
		gameData.soundTimer = false;	
		stopSoundLoop('soundTimer');
	}
	
	if(distanceTimer <= 0){
		if(playerData.score >= gameData.scoreTarget){
			resetTime();
			setNextLevel();
		}else{
			animateButton(timeAlertTxt, false);
			timeAlertTxt.alpha = 0;
			stopSoundLoop('soundTimer');
			endGame();
		}
	}else{
		timeTxt.text = timeAlertTxt.text = millisecondsToTime(distanceTimer);
	}
}

function resetTime(){
	playerData.startTime = new Date();	
	playerData.accumulateTime = 0;
	playerData.currentTime = 0;
}

function pauseGameTimer(con){
	if(con){
		playerData.accumulateTime = playerData.currentTime;
	}else{
		playerData.startTime = new Date();	
	}
}

function endGame(){
	stopGame();
	playSound('soundAlarm');
	TweenMax.to(mapContainer, 1, {overwrite:true, onComplete:function(){
		goPage('result');
	}});	
}

/*!
 * 
 * NEXT LEVEL - This is the function that runs to set next level
 * 
 */
function setNextLevel(){
	animateButton(timeAlertTxt, false);
	timeAlertTxt.alpha = 0;
	
	playSound('soundDay');
	playerData.day++;
	gameData.dailySpeedManager -= level_setting.dailySpeedIncrease;
	gameData.peopleTimer -= level_setting.dailyPeopleTimer;
	gameData.scoreTarget = level_setting.scoreTarget[playerData.day-1];
	
	TweenMax.to(tweenData, 1, {scoreTarget:gameData.scoreTarget, score:playerData.score, overwrite:true, onUpdate:updateScore});
}

/*!
 * 
 * MILLISECONDS CONVERT - This is the function that runs to convert milliseconds to time
 * 
 */
function millisecondsToTime(milli) {
	var milliseconds = milli % 1000;
	var seconds = Math.floor((milli / 1000) % 60);
	var minutes = Math.floor((milli / (60 * 1000)) % 60);
	
	if(seconds<10){
		seconds = '0'+seconds;  
	}
	
	if(minutes<10){
		minutes = '0'+minutes;  
	}
	
	return minutes+':'+seconds;
}

/*!
 * 
 * RESULT SCORE - This is the function that runs to build result score
 * 
 */
function calculateResult(){
	playerData.score = Math.floor(playerData.score * playerData.day);
	TweenMax.to(tweenData, 2, {score:playerData.score, day:playerData.day, overwrite:true, onUpdate:buildResultScore});
}

function buildResultScore(){
	scoreContainer.removeAllChildren();
	
	var scoreString = String(Math.floor(tweenData.score));
	scoreString = addCommas(scoreString);
	var startX = canvasW/100*33.5;
	var startY = canvasH/100*77;
	var countX = startX;
	var countY = startY;
	var scoreObject_arr = [];
	
	for(var i=0; i<scoreString.length; i++) {
		var thisNum = scoreString.substring(i,i+1);
		thisNum = thisNum == ',' ? 'Comma' : thisNum;
		
		var newNumber = $.numbers[thisNum].clone();
		newNumber.x = countX;
		newNumber.y = countY;
		
		thisNum = thisNum == 'Comma' ? 10 : thisNum;
		countX += numbers_arr[thisNum].width + 13;
		countY = startY - ((countX - startX) * .55);
		scoreObject_arr.push(newNumber);
	}
	
	for(var i=scoreObject_arr.length-1; i>=0; i--) {
		scoreContainer.addChild(scoreObject_arr[i]);
	}
	
	var thisDay = $.numbers[Number((Math.floor(tweenData.day)))].clone();
	thisDay.x = canvasW/100*42.5;
	thisDay.y = canvasH/100*54;
	scoreContainer.addChild(thisDay);
}
/*!
 * 
 * OPTIONS - This is the function that runs to toggle options
 * 
 */

function toggleOption(){
	if(optionsContainer.visible){
		optionsContainer.visible = false;
	}else{
		optionsContainer.visible = true;
	}
}


/*!
 * 
 * OPTIONS - This is the function that runs to mute and fullscreen
 * 
 */
function toggleGameMute(con){
	buttonSoundOff.visible = false;
	buttonSoundOn.visible = false;
	toggleMute(con);
	if(con){
		buttonSoundOn.visible = true;
	}else{
		buttonSoundOff.visible = true;	
	}
}

function toggleFullScreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

function toggleConfirm(con){
	confirmContainer.visible = con;
	pauseGameTimer(con);
	
	if(con){
		TweenMax.pauseAll(true, true);
		gameData.paused = true;
	}else{
		TweenMax.resumeAll(true, true)
		gameData.paused = false;
	}
}


/*!
 * 
 * SHARE - This is the function that runs to open share url
 * 
 */
function share(action){
	gtag('event','click',{'event_category':'share','event_label':action});
	
	var loc = location.href
	loc = loc.substring(0, loc.lastIndexOf("/") + 1);
	
	var title = '';
	var text = '';
	
	title = shareTitle.replace("[SCORE]", addCommas(playerData.score));
	title = title.replace("[DAY]", playerData.day);
	
	text = shareMessage.replace("[SCORE]", addCommas(playerData.score));
	text = text.replace("[DAY]", playerData.day);
	var shareurl = '';
	
	if( action == 'twitter' ) {
		shareurl = 'https://twitter.com/intent/tweet?url='+loc+'&text='+text;
	}else if( action == 'facebook' ){
		shareurl = 'https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(loc+'share.php?desc='+text+'&title='+title+'&url='+loc+'&thumb='+loc+'share.jpg&width=590&height=300');
	}else if( action == 'google' ){
		shareurl = 'https://plus.google.com/share?url='+loc;
	}else if( action == 'whatsapp' ){
		shareurl = "whatsapp://send?text=" + encodeURIComponent(text) + " - " + encodeURIComponent(loc);
	}
	
	window.open(shareurl);
}