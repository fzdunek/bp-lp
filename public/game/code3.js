gdjs.SettingsCode = {};
gdjs.SettingsCode.localVariables = [];
gdjs.SettingsCode.idToCallbackMap = new Map();
gdjs.SettingsCode.GDMusicVolObjects1= [];
gdjs.SettingsCode.GDMusicVolObjects2= [];
gdjs.SettingsCode.GDMusicVolObjects3= [];
gdjs.SettingsCode.GDSoundVolumeObjects1= [];
gdjs.SettingsCode.GDSoundVolumeObjects2= [];
gdjs.SettingsCode.GDSoundVolumeObjects3= [];
gdjs.SettingsCode.GDBackgroundObjects1= [];
gdjs.SettingsCode.GDBackgroundObjects2= [];
gdjs.SettingsCode.GDBackgroundObjects3= [];
gdjs.SettingsCode.GDMusicVolumeObjects1= [];
gdjs.SettingsCode.GDMusicVolumeObjects2= [];
gdjs.SettingsCode.GDMusicVolumeObjects3= [];
gdjs.SettingsCode.GDSoundVolObjects1= [];
gdjs.SettingsCode.GDSoundVolObjects2= [];
gdjs.SettingsCode.GDSoundVolObjects3= [];
gdjs.SettingsCode.GDBackObjects1= [];
gdjs.SettingsCode.GDBackObjects2= [];
gdjs.SettingsCode.GDBackObjects3= [];
gdjs.SettingsCode.GDBackToMainObjects1= [];
gdjs.SettingsCode.GDBackToMainObjects2= [];
gdjs.SettingsCode.GDBackToMainObjects3= [];
gdjs.SettingsCode.GDDeathAnimObjects1= [];
gdjs.SettingsCode.GDDeathAnimObjects2= [];
gdjs.SettingsCode.GDDeathAnimObjects3= [];
gdjs.SettingsCode.GDZagraj_9595jeszcze_9595razObjects1= [];
gdjs.SettingsCode.GDZagraj_9595jeszcze_9595razObjects2= [];
gdjs.SettingsCode.GDZagraj_9595jeszcze_9595razObjects3= [];
gdjs.SettingsCode.GDHightScore_9595_9595_9595wynikiObjects1= [];
gdjs.SettingsCode.GDHightScore_9595_9595_9595wynikiObjects2= [];
gdjs.SettingsCode.GDHightScore_9595_9595_9595wynikiObjects3= [];
gdjs.SettingsCode.GDDistance2Objects1= [];
gdjs.SettingsCode.GDDistance2Objects2= [];
gdjs.SettingsCode.GDDistance2Objects3= [];


gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BackToMain"), gdjs.SettingsCode.GDBackToMainObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDBackToMainObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackToMainObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.SettingsCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MusicVolume"), gdjs.SettingsCode.GDMusicVolumeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDMusicVolumeObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDMusicVolumeObjects2[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDMusicVolumeObjects2[k] = gdjs.SettingsCode.GDMusicVolumeObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDMusicVolumeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDMusicVolumeObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music").setNumber((( gdjs.SettingsCode.GDMusicVolumeObjects2.length === 0 ) ? 0 :gdjs.SettingsCode.GDMusicVolumeObjects2[0].Value(null)));
}
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music")));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundVolume"), gdjs.SettingsCode.GDSoundVolumeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDSoundVolumeObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDSoundVolumeObjects2[i].IsBeingDragged(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDSoundVolumeObjects2[k] = gdjs.SettingsCode.GDSoundVolumeObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDSoundVolumeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SettingsCode.GDSoundVolumeObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound").setNumber((( gdjs.SettingsCode.GDSoundVolumeObjects2.length === 0 ) ? 0 :gdjs.SettingsCode.GDSoundVolumeObjects2[0].Value(null)));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.SettingsCode.GDBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("BackToMain"), gdjs.SettingsCode.GDBackToMainObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDBackObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDBackObjects2[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDBackObjects2[k] = gdjs.SettingsCode.GDBackObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDBackObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDBackToMainObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDBackToMainObjects2[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDBackToMainObjects2[k] = gdjs.SettingsCode.GDBackToMainObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDBackToMainObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18560500);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonHover", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), gdjs.randomFloatInRange(1, 1.1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.SettingsCode.GDBackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDBackObjects2.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDBackObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDBackObjects2[k] = gdjs.SettingsCode.GDBackObjects2[i];
        ++k;
    }
}
gdjs.SettingsCode.GDBackObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeStringInJSONFile("Settings", "Settings", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackToMain"), gdjs.SettingsCode.GDBackToMainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SettingsCode.GDBackToMainObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDBackToMainObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SettingsCode.GDBackToMainObjects1[k] = gdjs.SettingsCode.GDBackToMainObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDBackToMainObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeStringInJSONFile("Settings", "Settings", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


};gdjs.SettingsCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.SettingsCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicVolume"), gdjs.SettingsCode.GDMusicVolumeObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundVolume"), gdjs.SettingsCode.GDSoundVolumeObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackgroundObjects1[i].setColor(gdjs.evtTools.common.toString(gdjs.randomInRange(0, 255)) + ";" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 255)) + ";" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 255)));
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDSoundVolumeObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDSoundVolumeObjects1[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), null);
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDMusicVolumeObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDMusicVolumeObjects1[i].SetValue(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music")), null);
}
}

{ //Subevents
gdjs.SettingsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.SettingsCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackgroundObjects1[i].setYOffset(gdjs.SettingsCode.GDBackgroundObjects1[i].getYOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 20));
}
}
{for(var i = 0, len = gdjs.SettingsCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDBackgroundObjects1[i].setXOffset(gdjs.SettingsCode.GDBackgroundObjects1[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 20));
}
}
}

}


{


gdjs.SettingsCode.eventsList1(runtimeScene);
}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDMusicVolObjects1.length = 0;
gdjs.SettingsCode.GDMusicVolObjects2.length = 0;
gdjs.SettingsCode.GDMusicVolObjects3.length = 0;
gdjs.SettingsCode.GDSoundVolumeObjects1.length = 0;
gdjs.SettingsCode.GDSoundVolumeObjects2.length = 0;
gdjs.SettingsCode.GDSoundVolumeObjects3.length = 0;
gdjs.SettingsCode.GDBackgroundObjects1.length = 0;
gdjs.SettingsCode.GDBackgroundObjects2.length = 0;
gdjs.SettingsCode.GDBackgroundObjects3.length = 0;
gdjs.SettingsCode.GDMusicVolumeObjects1.length = 0;
gdjs.SettingsCode.GDMusicVolumeObjects2.length = 0;
gdjs.SettingsCode.GDMusicVolumeObjects3.length = 0;
gdjs.SettingsCode.GDSoundVolObjects1.length = 0;
gdjs.SettingsCode.GDSoundVolObjects2.length = 0;
gdjs.SettingsCode.GDSoundVolObjects3.length = 0;
gdjs.SettingsCode.GDBackObjects1.length = 0;
gdjs.SettingsCode.GDBackObjects2.length = 0;
gdjs.SettingsCode.GDBackObjects3.length = 0;
gdjs.SettingsCode.GDBackToMainObjects1.length = 0;
gdjs.SettingsCode.GDBackToMainObjects2.length = 0;
gdjs.SettingsCode.GDBackToMainObjects3.length = 0;
gdjs.SettingsCode.GDDeathAnimObjects1.length = 0;
gdjs.SettingsCode.GDDeathAnimObjects2.length = 0;
gdjs.SettingsCode.GDDeathAnimObjects3.length = 0;
gdjs.SettingsCode.GDZagraj_9595jeszcze_9595razObjects1.length = 0;
gdjs.SettingsCode.GDZagraj_9595jeszcze_9595razObjects2.length = 0;
gdjs.SettingsCode.GDZagraj_9595jeszcze_9595razObjects3.length = 0;
gdjs.SettingsCode.GDHightScore_9595_9595_9595wynikiObjects1.length = 0;
gdjs.SettingsCode.GDHightScore_9595_9595_9595wynikiObjects2.length = 0;
gdjs.SettingsCode.GDHightScore_9595_9595_9595wynikiObjects3.length = 0;
gdjs.SettingsCode.GDDistance2Objects1.length = 0;
gdjs.SettingsCode.GDDistance2Objects2.length = 0;
gdjs.SettingsCode.GDDistance2Objects3.length = 0;

gdjs.SettingsCode.eventsList2(runtimeScene);
gdjs.SettingsCode.GDMusicVolObjects1.length = 0;
gdjs.SettingsCode.GDMusicVolObjects2.length = 0;
gdjs.SettingsCode.GDMusicVolObjects3.length = 0;
gdjs.SettingsCode.GDSoundVolumeObjects1.length = 0;
gdjs.SettingsCode.GDSoundVolumeObjects2.length = 0;
gdjs.SettingsCode.GDSoundVolumeObjects3.length = 0;
gdjs.SettingsCode.GDBackgroundObjects1.length = 0;
gdjs.SettingsCode.GDBackgroundObjects2.length = 0;
gdjs.SettingsCode.GDBackgroundObjects3.length = 0;
gdjs.SettingsCode.GDMusicVolumeObjects1.length = 0;
gdjs.SettingsCode.GDMusicVolumeObjects2.length = 0;
gdjs.SettingsCode.GDMusicVolumeObjects3.length = 0;
gdjs.SettingsCode.GDSoundVolObjects1.length = 0;
gdjs.SettingsCode.GDSoundVolObjects2.length = 0;
gdjs.SettingsCode.GDSoundVolObjects3.length = 0;
gdjs.SettingsCode.GDBackObjects1.length = 0;
gdjs.SettingsCode.GDBackObjects2.length = 0;
gdjs.SettingsCode.GDBackObjects3.length = 0;
gdjs.SettingsCode.GDBackToMainObjects1.length = 0;
gdjs.SettingsCode.GDBackToMainObjects2.length = 0;
gdjs.SettingsCode.GDBackToMainObjects3.length = 0;
gdjs.SettingsCode.GDDeathAnimObjects1.length = 0;
gdjs.SettingsCode.GDDeathAnimObjects2.length = 0;
gdjs.SettingsCode.GDDeathAnimObjects3.length = 0;
gdjs.SettingsCode.GDZagraj_9595jeszcze_9595razObjects1.length = 0;
gdjs.SettingsCode.GDZagraj_9595jeszcze_9595razObjects2.length = 0;
gdjs.SettingsCode.GDZagraj_9595jeszcze_9595razObjects3.length = 0;
gdjs.SettingsCode.GDHightScore_9595_9595_9595wynikiObjects1.length = 0;
gdjs.SettingsCode.GDHightScore_9595_9595_9595wynikiObjects2.length = 0;
gdjs.SettingsCode.GDHightScore_9595_9595_9595wynikiObjects3.length = 0;
gdjs.SettingsCode.GDDistance2Objects1.length = 0;
gdjs.SettingsCode.GDDistance2Objects2.length = 0;
gdjs.SettingsCode.GDDistance2Objects3.length = 0;


return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
