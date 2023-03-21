////////////////////////////////////////////////////////////
// CANVAS LOADER
////////////////////////////////////////////////////////////

 /*!
 * 
 * START CANVAS PRELOADER - This is the function that runs to preload canvas asserts
 * 
 */
function initPreload(){
	toggleLoader(true);
	
	checkMobileEvent();
	
	$(window).resize(function(){
		resizeGameFunc();
	});
	resizeGameFunc();
	
	loader = new createjs.LoadQueue(false);
	manifest=[
			{src:'assets/background.png', id:'background'},
			{src:'assets/logo.png', id:'logo'},
			{src:'assets/shadow_main.png', id:'shadowMain'},
			{src:'assets/button_begin.png', id:'buttonBegin'},
			{src:'assets/floor.png', id:'isoFloor'},
			{src:'assets/restaurant.png', id:'restaurant'},
			{src:'assets/bar.png', id:'gameBar'},
			{src:'assets/instruction.png', id:'instruction'},
			{src:'assets/button_ok.png', id:'buttonOk'},
			{src:'assets/number_0.png', id:'number0'},
			{src:'assets/number_1.png', id:'number1'},
			{src:'assets/number_2.png', id:'number2'},
			{src:'assets/number_3.png', id:'number3'},
			{src:'assets/number_4.png', id:'number4'},
			{src:'assets/number_5.png', id:'number5'},
			{src:'assets/number_6.png', id:'number6'},
			{src:'assets/number_7.png', id:'number7'},
			{src:'assets/number_8.png', id:'number8'},
			{src:'assets/number_9.png', id:'number9'},
			{src:'assets/number_comma.png', id:'numberComma'},
			{src:'assets/result.png', id:'result'},
			{src:'assets/shadow_result.png', id:'shadowResult'},
			{src:'assets/button_facebook.png', id:'buttonFacebook'},
			{src:'assets/button_twitter.png', id:'buttonTwitter'},
			{src:'assets/button_whatsapp.png', id:'buttonWhatsapp'},
			{src:'assets/button_replay.png', id:'buttonReplay'},
			{src:'assets/button_fullscreen.png', id:'buttonFullscreen'},
			{src:'assets/button_sound_on.png', id:'buttonSoundOn'},
			{src:'assets/button_sound_off.png', id:'buttonSoundOff'},
			{src:'assets/button_exit.png', id:'buttonExit'},
			{src:'assets/item_confirm.png', id:'itemConfirm'},
			{src:'assets/button_cancel.png', id:'buttonCancel'},
			{src:'assets/button_exit.png', id:'buttonExit'},
			{src:'assets/button_settings.png', id:'buttonSettings'}
	];
			
	for(n=0;n<objects_arr.length;n++){
		manifest.push({src:objects_arr[n].src, id:objects_arr[n].id});	
	}
	
	for(n=0;n<item_arr.length;n++){
		manifest.push({src:item_arr[n].src, id:item_arr[n].id});	
	}
	
	for(n=0;n<people_arr.length;n++){
		manifest.push({src:people_arr[n].src, id:'people'+n});	
	}
	
	soundOn = true;
	if($.browser.mobile || isTablet){
		if(!enableMobileSound){
			soundOn=false;
		}
	}
	
	if(soundOn){
		manifest.push({src:'assets/sounds/musicGame.ogg', id:'musicGame'});
		manifest.push({src:'assets/sounds/soundBell.ogg', id:'soundBell'});
		manifest.push({src:'assets/sounds/soundBill.ogg', id:'soundBill'});
		manifest.push({src:'assets/sounds/soundOrder.ogg', id:'soundOrder'});
		manifest.push({src:'assets/sounds/soundPop.ogg', id:'soundPop'});
		manifest.push({src:'assets/sounds/soundButton.ogg', id:'soundButton'});
		manifest.push({src:'assets/sounds/soundFail.ogg', id:'soundFail'});
		manifest.push({src:'assets/sounds/soundDay.ogg', id:'soundDay'});
		manifest.push({src:'assets/sounds/soundPlate.ogg', id:'soundPlate'});
		manifest.push({src:'assets/sounds/soundClean.ogg', id:'soundClean'});
		manifest.push({src:'assets/sounds/soundTimer.ogg', id:'soundTimer'});
		manifest.push({src:'assets/sounds/soundAlarm.ogg', id:'soundAlarm'});
		manifest.push({src:'assets/sounds/soundStep.ogg', id:'soundStep'});
		
		createjs.Sound.alternateExtensions = ["mp3"];
		loader.installPlugin(createjs.Sound);
	}
	
	loader.addEventListener("complete", handleComplete);
	loader.addEventListener("fileload", fileComplete);
	loader.addEventListener("error",handleFileError);
	loader.on("progress", handleProgress, this);
	loader.loadManifest(manifest);
}

/*!
 * 
 * CANVAS FILE COMPLETE EVENT - This is the function that runs to update when file loaded complete
 * 
 */
function fileComplete(evt) {
	var item = evt.item;
	//console.log("Event Callback file loaded ", evt.item.id);
}

/*!
 * 
 * CANVAS FILE HANDLE EVENT - This is the function that runs to handle file error
 * 
 */
function handleFileError(evt) {
	console.log("error ", evt);
}

/*!
 * 
 * CANVAS PRELOADER UPDATE - This is the function that runs to update preloder progress
 * 
 */
function handleProgress() {
	$('#mainLoader span').html(Math.round(loader.progress/1*100)+'%');
}

/*!
 * 
 * CANVAS PRELOADER COMPLETE - This is the function that runs when preloader is complete
 * 
 */
function handleComplete() {
	toggleLoader(false);
	initMain();
};

/*!
 * 
 * TOGGLE LOADER - This is the function that runs to display/hide loader
 * 
 */
function toggleLoader(con){
	if(con){
		$('#mainLoader').show();
	}else{
		$('#mainLoader').hide();
	}
}