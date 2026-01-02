gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.idToCallbackMap = new Map();
gdjs.LeaderboardCode.GDMainMenuObjects2_1final = [];

gdjs.LeaderboardCode.GDTypeNameObjects1= [];
gdjs.LeaderboardCode.GDTypeNameObjects2= [];
gdjs.LeaderboardCode.GDTypeNameObjects3= [];
gdjs.LeaderboardCode.GDSoundVolumeObjects1= [];
gdjs.LeaderboardCode.GDSoundVolumeObjects2= [];
gdjs.LeaderboardCode.GDSoundVolumeObjects3= [];
gdjs.LeaderboardCode.GDBackgroundObjects1= [];
gdjs.LeaderboardCode.GDBackgroundObjects2= [];
gdjs.LeaderboardCode.GDBackgroundObjects3= [];
gdjs.LeaderboardCode.GDMusicVolumeObjects1= [];
gdjs.LeaderboardCode.GDMusicVolumeObjects2= [];
gdjs.LeaderboardCode.GDMusicVolumeObjects3= [];
gdjs.LeaderboardCode.GDNewHighscoreObjects1= [];
gdjs.LeaderboardCode.GDNewHighscoreObjects2= [];
gdjs.LeaderboardCode.GDNewHighscoreObjects3= [];
gdjs.LeaderboardCode.GDRetryObjects1= [];
gdjs.LeaderboardCode.GDRetryObjects2= [];
gdjs.LeaderboardCode.GDRetryObjects3= [];
gdjs.LeaderboardCode.GDMainMenuObjects1= [];
gdjs.LeaderboardCode.GDMainMenuObjects2= [];
gdjs.LeaderboardCode.GDMainMenuObjects3= [];
gdjs.LeaderboardCode.GDSubmitViewObjects1= [];
gdjs.LeaderboardCode.GDSubmitViewObjects2= [];
gdjs.LeaderboardCode.GDSubmitViewObjects3= [];
gdjs.LeaderboardCode.GDLeaderboardNameObjects1= [];
gdjs.LeaderboardCode.GDLeaderboardNameObjects2= [];
gdjs.LeaderboardCode.GDLeaderboardNameObjects3= [];
gdjs.LeaderboardCode.GDDeathAnimObjects1= [];
gdjs.LeaderboardCode.GDDeathAnimObjects2= [];
gdjs.LeaderboardCode.GDDeathAnimObjects3= [];
gdjs.LeaderboardCode.GDZagraj_9595jeszcze_9595razObjects1= [];
gdjs.LeaderboardCode.GDZagraj_9595jeszcze_9595razObjects2= [];
gdjs.LeaderboardCode.GDZagraj_9595jeszcze_9595razObjects3= [];
gdjs.LeaderboardCode.GDHightScore_9595_9595_9595wynikiObjects1= [];
gdjs.LeaderboardCode.GDHightScore_9595_9595_9595wynikiObjects2= [];
gdjs.LeaderboardCode.GDHightScore_9595_9595_9595wynikiObjects3= [];
gdjs.LeaderboardCode.GDDistance2Objects1= [];
gdjs.LeaderboardCode.GDDistance2Objects2= [];
gdjs.LeaderboardCode.GDDistance2Objects3= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MainMenu"), gdjs.LeaderboardCode.GDMainMenuObjects2);
gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.LeaderboardCode.GDRetryObjects2);
gdjs.copyArray(runtimeScene.getObjects("SubmitView"), gdjs.LeaderboardCode.GDSubmitViewObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRetryObjects2.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRetryObjects2[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRetryObjects2[k] = gdjs.LeaderboardCode.GDRetryObjects2[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRetryObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDMainMenuObjects2.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDMainMenuObjects2[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDMainMenuObjects2[k] = gdjs.LeaderboardCode.GDMainMenuObjects2[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDMainMenuObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDSubmitViewObjects2.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDSubmitViewObjects2[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDSubmitViewObjects2[k] = gdjs.LeaderboardCode.GDSubmitViewObjects2[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDSubmitViewObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18622220);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonHover", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), gdjs.randomFloatInRange(1, 1.1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Retry"), gdjs.LeaderboardCode.GDRetryObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRetryObjects2.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRetryObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRetryObjects2[k] = gdjs.LeaderboardCode.GDRetryObjects2[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRetryObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{

gdjs.LeaderboardCode.GDMainMenuObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.LeaderboardCode.GDMainMenuObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("MainMenu"), gdjs.LeaderboardCode.GDMainMenuObjects3);
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDMainMenuObjects3.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDMainMenuObjects3[i].IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.LeaderboardCode.GDMainMenuObjects3[k] = gdjs.LeaderboardCode.GDMainMenuObjects3[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDMainMenuObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.LeaderboardCode.GDMainMenuObjects3.length; j < jLen ; ++j) {
        if ( gdjs.LeaderboardCode.GDMainMenuObjects2_1final.indexOf(gdjs.LeaderboardCode.GDMainMenuObjects3[j]) === -1 )
            gdjs.LeaderboardCode.GDMainMenuObjects2_1final.push(gdjs.LeaderboardCode.GDMainMenuObjects3[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.LeaderboardCode.GDMainMenuObjects2_1final, gdjs.LeaderboardCode.GDMainMenuObjects2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SubmitView"), gdjs.LeaderboardCode.GDSubmitViewObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDSubmitViewObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDSubmitViewObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDSubmitViewObjects1[k] = gdjs.LeaderboardCode.GDSubmitViewObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDSubmitViewObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("LeaderboardName"), gdjs.LeaderboardCode.GDLeaderboardNameObjects1);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "1239d70f-7c90-4ab2-ba86-2d0948ccc19b", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("HighScore")), (( gdjs.LeaderboardCode.GDLeaderboardNameObjects1.length === 0 ) ? "" :gdjs.LeaderboardCode.GDLeaderboardNameObjects1[0].getText()));
}
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "1239d70f-7c90-4ab2-ba86-2d0948ccc19b", true);
}
}

}


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.LeaderboardCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDBackgroundObjects1[i].setColor(gdjs.evtTools.common.toString(gdjs.randomInRange(0, 255)) + ";" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 255)) + ";" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 255)));
}
}
{gdjs.evtTools.storage.readNumberFromJSONFile("GameHighscore", "GameHighscore", runtimeScene, runtimeScene.getScene().getVariables().get("HighScore"));
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.LeaderboardCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDBackgroundObjects1[i].setYOffset(gdjs.LeaderboardCode.GDBackgroundObjects1[i].getYOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 20));
}
}
{for(var i = 0, len = gdjs.LeaderboardCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDBackgroundObjects1[i].setXOffset(gdjs.LeaderboardCode.GDBackgroundObjects1[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 20));
}
}
}

}


{


gdjs.LeaderboardCode.eventsList0(runtimeScene);
}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDTypeNameObjects1.length = 0;
gdjs.LeaderboardCode.GDTypeNameObjects2.length = 0;
gdjs.LeaderboardCode.GDTypeNameObjects3.length = 0;
gdjs.LeaderboardCode.GDSoundVolumeObjects1.length = 0;
gdjs.LeaderboardCode.GDSoundVolumeObjects2.length = 0;
gdjs.LeaderboardCode.GDSoundVolumeObjects3.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects3.length = 0;
gdjs.LeaderboardCode.GDMusicVolumeObjects1.length = 0;
gdjs.LeaderboardCode.GDMusicVolumeObjects2.length = 0;
gdjs.LeaderboardCode.GDMusicVolumeObjects3.length = 0;
gdjs.LeaderboardCode.GDNewHighscoreObjects1.length = 0;
gdjs.LeaderboardCode.GDNewHighscoreObjects2.length = 0;
gdjs.LeaderboardCode.GDNewHighscoreObjects3.length = 0;
gdjs.LeaderboardCode.GDRetryObjects1.length = 0;
gdjs.LeaderboardCode.GDRetryObjects2.length = 0;
gdjs.LeaderboardCode.GDRetryObjects3.length = 0;
gdjs.LeaderboardCode.GDMainMenuObjects1.length = 0;
gdjs.LeaderboardCode.GDMainMenuObjects2.length = 0;
gdjs.LeaderboardCode.GDMainMenuObjects3.length = 0;
gdjs.LeaderboardCode.GDSubmitViewObjects1.length = 0;
gdjs.LeaderboardCode.GDSubmitViewObjects2.length = 0;
gdjs.LeaderboardCode.GDSubmitViewObjects3.length = 0;
gdjs.LeaderboardCode.GDLeaderboardNameObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardNameObjects2.length = 0;
gdjs.LeaderboardCode.GDLeaderboardNameObjects3.length = 0;
gdjs.LeaderboardCode.GDDeathAnimObjects1.length = 0;
gdjs.LeaderboardCode.GDDeathAnimObjects2.length = 0;
gdjs.LeaderboardCode.GDDeathAnimObjects3.length = 0;
gdjs.LeaderboardCode.GDZagraj_9595jeszcze_9595razObjects1.length = 0;
gdjs.LeaderboardCode.GDZagraj_9595jeszcze_9595razObjects2.length = 0;
gdjs.LeaderboardCode.GDZagraj_9595jeszcze_9595razObjects3.length = 0;
gdjs.LeaderboardCode.GDHightScore_9595_9595_9595wynikiObjects1.length = 0;
gdjs.LeaderboardCode.GDHightScore_9595_9595_9595wynikiObjects2.length = 0;
gdjs.LeaderboardCode.GDHightScore_9595_9595_9595wynikiObjects3.length = 0;
gdjs.LeaderboardCode.GDDistance2Objects1.length = 0;
gdjs.LeaderboardCode.GDDistance2Objects2.length = 0;
gdjs.LeaderboardCode.GDDistance2Objects3.length = 0;

gdjs.LeaderboardCode.eventsList1(runtimeScene);
gdjs.LeaderboardCode.GDTypeNameObjects1.length = 0;
gdjs.LeaderboardCode.GDTypeNameObjects2.length = 0;
gdjs.LeaderboardCode.GDTypeNameObjects3.length = 0;
gdjs.LeaderboardCode.GDSoundVolumeObjects1.length = 0;
gdjs.LeaderboardCode.GDSoundVolumeObjects2.length = 0;
gdjs.LeaderboardCode.GDSoundVolumeObjects3.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDBackgroundObjects3.length = 0;
gdjs.LeaderboardCode.GDMusicVolumeObjects1.length = 0;
gdjs.LeaderboardCode.GDMusicVolumeObjects2.length = 0;
gdjs.LeaderboardCode.GDMusicVolumeObjects3.length = 0;
gdjs.LeaderboardCode.GDNewHighscoreObjects1.length = 0;
gdjs.LeaderboardCode.GDNewHighscoreObjects2.length = 0;
gdjs.LeaderboardCode.GDNewHighscoreObjects3.length = 0;
gdjs.LeaderboardCode.GDRetryObjects1.length = 0;
gdjs.LeaderboardCode.GDRetryObjects2.length = 0;
gdjs.LeaderboardCode.GDRetryObjects3.length = 0;
gdjs.LeaderboardCode.GDMainMenuObjects1.length = 0;
gdjs.LeaderboardCode.GDMainMenuObjects2.length = 0;
gdjs.LeaderboardCode.GDMainMenuObjects3.length = 0;
gdjs.LeaderboardCode.GDSubmitViewObjects1.length = 0;
gdjs.LeaderboardCode.GDSubmitViewObjects2.length = 0;
gdjs.LeaderboardCode.GDSubmitViewObjects3.length = 0;
gdjs.LeaderboardCode.GDLeaderboardNameObjects1.length = 0;
gdjs.LeaderboardCode.GDLeaderboardNameObjects2.length = 0;
gdjs.LeaderboardCode.GDLeaderboardNameObjects3.length = 0;
gdjs.LeaderboardCode.GDDeathAnimObjects1.length = 0;
gdjs.LeaderboardCode.GDDeathAnimObjects2.length = 0;
gdjs.LeaderboardCode.GDDeathAnimObjects3.length = 0;
gdjs.LeaderboardCode.GDZagraj_9595jeszcze_9595razObjects1.length = 0;
gdjs.LeaderboardCode.GDZagraj_9595jeszcze_9595razObjects2.length = 0;
gdjs.LeaderboardCode.GDZagraj_9595jeszcze_9595razObjects3.length = 0;
gdjs.LeaderboardCode.GDHightScore_9595_9595_9595wynikiObjects1.length = 0;
gdjs.LeaderboardCode.GDHightScore_9595_9595_9595wynikiObjects2.length = 0;
gdjs.LeaderboardCode.GDHightScore_9595_9595_9595wynikiObjects3.length = 0;
gdjs.LeaderboardCode.GDDistance2Objects1.length = 0;
gdjs.LeaderboardCode.GDDistance2Objects2.length = 0;
gdjs.LeaderboardCode.GDDistance2Objects3.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
