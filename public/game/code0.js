gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.idToCallbackMap = new Map();
gdjs.MenuCode.GDStartGameObjects1= [];
gdjs.MenuCode.GDStartGameObjects2= [];
gdjs.MenuCode.GDStartGameObjects3= [];
gdjs.MenuCode.GDSettingsObjects1= [];
gdjs.MenuCode.GDSettingsObjects2= [];
gdjs.MenuCode.GDSettingsObjects3= [];
gdjs.MenuCode.GDLeaderboardObjects1= [];
gdjs.MenuCode.GDLeaderboardObjects2= [];
gdjs.MenuCode.GDLeaderboardObjects3= [];
gdjs.MenuCode.GDCharactersObjects1= [];
gdjs.MenuCode.GDCharactersObjects2= [];
gdjs.MenuCode.GDCharactersObjects3= [];
gdjs.MenuCode.GDQuitObjects1= [];
gdjs.MenuCode.GDQuitObjects2= [];
gdjs.MenuCode.GDQuitObjects3= [];
gdjs.MenuCode.GDPlatformObjects1= [];
gdjs.MenuCode.GDPlatformObjects2= [];
gdjs.MenuCode.GDPlatformObjects3= [];
gdjs.MenuCode.GDCreditsObjects1= [];
gdjs.MenuCode.GDCreditsObjects2= [];
gdjs.MenuCode.GDCreditsObjects3= [];
gdjs.MenuCode.GDGreenBackgroundObjects1= [];
gdjs.MenuCode.GDGreenBackgroundObjects2= [];
gdjs.MenuCode.GDGreenBackgroundObjects3= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDBP_9595TloObjects1= [];
gdjs.MenuCode.GDBP_9595TloObjects2= [];
gdjs.MenuCode.GDBP_9595TloObjects3= [];
gdjs.MenuCode.GDWild_9595Bean_9595logo_9595_9595_9595menuObjects1= [];
gdjs.MenuCode.GDWild_9595Bean_9595logo_9595_9595_9595menuObjects2= [];
gdjs.MenuCode.GDWild_9595Bean_9595logo_9595_9595_9595menuObjects3= [];
gdjs.MenuCode.GDDeathAnimObjects1= [];
gdjs.MenuCode.GDDeathAnimObjects2= [];
gdjs.MenuCode.GDDeathAnimObjects3= [];
gdjs.MenuCode.GDZagraj_9595jeszcze_9595razObjects1= [];
gdjs.MenuCode.GDZagraj_9595jeszcze_9595razObjects2= [];
gdjs.MenuCode.GDZagraj_9595jeszcze_9595razObjects3= [];
gdjs.MenuCode.GDHightScore_9595_9595_9595wynikiObjects1= [];
gdjs.MenuCode.GDHightScore_9595_9595_9595wynikiObjects2= [];
gdjs.MenuCode.GDHightScore_9595_9595_9595wynikiObjects3= [];
gdjs.MenuCode.GDDistance2Objects1= [];
gdjs.MenuCode.GDDistance2Objects2= [];
gdjs.MenuCode.GDDistance2Objects3= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "DST-TowerDefenseTheme2.mp3", 0, true, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music")), 1);
}
}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Settings", "Settings");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readStringFromJSONFile("Settings", "Settings", runtimeScene, runtimeScene.getScene().getVariables().get("TempSettings"));
}
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("TempSettings")), runtimeScene.getGame().getVariables().getFromIndex(0));
}

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Characters"), gdjs.MenuCode.GDCharactersObjects2);
gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.MenuCode.GDCreditsObjects2);
gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.MenuCode.GDLeaderboardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.MenuCode.GDQuitObjects2);
gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.MenuCode.GDSettingsObjects2);
gdjs.copyArray(runtimeScene.getObjects("StartGame"), gdjs.MenuCode.GDStartGameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDStartGameObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDStartGameObjects2[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDStartGameObjects2[k] = gdjs.MenuCode.GDStartGameObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDStartGameObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSettingsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSettingsObjects2[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSettingsObjects2[k] = gdjs.MenuCode.GDSettingsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDSettingsObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDQuitObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDQuitObjects2[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDQuitObjects2[k] = gdjs.MenuCode.GDQuitObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDQuitObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCharactersObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCharactersObjects2[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCharactersObjects2[k] = gdjs.MenuCode.GDCharactersObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDCharactersObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCreditsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCreditsObjects2[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCreditsObjects2[k] = gdjs.MenuCode.GDCreditsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDCreditsObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDLeaderboardObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDLeaderboardObjects2[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDLeaderboardObjects2[k] = gdjs.MenuCode.GDLeaderboardObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDLeaderboardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18200692);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonHover", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), gdjs.randomFloatInRange(1, 1.1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartGame"), gdjs.MenuCode.GDStartGameObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDStartGameObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDStartGameObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDStartGameObjects2[k] = gdjs.MenuCode.GDStartGameObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDStartGameObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboard"), gdjs.MenuCode.GDLeaderboardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDLeaderboardObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDLeaderboardObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDLeaderboardObjects2[k] = gdjs.MenuCode.GDLeaderboardObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDLeaderboardObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "1239d70f-7c90-4ab2-ba86-2d0948ccc19b", true);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Characters"), gdjs.MenuCode.GDCharactersObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCharactersObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCharactersObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCharactersObjects2[k] = gdjs.MenuCode.GDCharactersObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDCharactersObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "CharacterSelection", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Settings"), gdjs.MenuCode.GDSettingsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDSettingsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDSettingsObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDSettingsObjects2[k] = gdjs.MenuCode.GDSettingsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDSettingsObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Settings");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Credits"), gdjs.MenuCode.GDCreditsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDCreditsObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDCreditsObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDCreditsObjects2[k] = gdjs.MenuCode.GDCreditsObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDCreditsObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Credits", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.MenuCode.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDQuitObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDQuitObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDQuitObjects1[k] = gdjs.MenuCode.GDQuitObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDQuitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};gdjs.MenuCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(1), false);
}

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.eventsList2(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDStartGameObjects1.length = 0;
gdjs.MenuCode.GDStartGameObjects2.length = 0;
gdjs.MenuCode.GDStartGameObjects3.length = 0;
gdjs.MenuCode.GDSettingsObjects1.length = 0;
gdjs.MenuCode.GDSettingsObjects2.length = 0;
gdjs.MenuCode.GDSettingsObjects3.length = 0;
gdjs.MenuCode.GDLeaderboardObjects1.length = 0;
gdjs.MenuCode.GDLeaderboardObjects2.length = 0;
gdjs.MenuCode.GDLeaderboardObjects3.length = 0;
gdjs.MenuCode.GDCharactersObjects1.length = 0;
gdjs.MenuCode.GDCharactersObjects2.length = 0;
gdjs.MenuCode.GDCharactersObjects3.length = 0;
gdjs.MenuCode.GDQuitObjects1.length = 0;
gdjs.MenuCode.GDQuitObjects2.length = 0;
gdjs.MenuCode.GDQuitObjects3.length = 0;
gdjs.MenuCode.GDPlatformObjects1.length = 0;
gdjs.MenuCode.GDPlatformObjects2.length = 0;
gdjs.MenuCode.GDPlatformObjects3.length = 0;
gdjs.MenuCode.GDCreditsObjects1.length = 0;
gdjs.MenuCode.GDCreditsObjects2.length = 0;
gdjs.MenuCode.GDCreditsObjects3.length = 0;
gdjs.MenuCode.GDGreenBackgroundObjects1.length = 0;
gdjs.MenuCode.GDGreenBackgroundObjects2.length = 0;
gdjs.MenuCode.GDGreenBackgroundObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDBP_9595TloObjects1.length = 0;
gdjs.MenuCode.GDBP_9595TloObjects2.length = 0;
gdjs.MenuCode.GDBP_9595TloObjects3.length = 0;
gdjs.MenuCode.GDWild_9595Bean_9595logo_9595_9595_9595menuObjects1.length = 0;
gdjs.MenuCode.GDWild_9595Bean_9595logo_9595_9595_9595menuObjects2.length = 0;
gdjs.MenuCode.GDWild_9595Bean_9595logo_9595_9595_9595menuObjects3.length = 0;
gdjs.MenuCode.GDDeathAnimObjects1.length = 0;
gdjs.MenuCode.GDDeathAnimObjects2.length = 0;
gdjs.MenuCode.GDDeathAnimObjects3.length = 0;
gdjs.MenuCode.GDZagraj_9595jeszcze_9595razObjects1.length = 0;
gdjs.MenuCode.GDZagraj_9595jeszcze_9595razObjects2.length = 0;
gdjs.MenuCode.GDZagraj_9595jeszcze_9595razObjects3.length = 0;
gdjs.MenuCode.GDHightScore_9595_9595_9595wynikiObjects1.length = 0;
gdjs.MenuCode.GDHightScore_9595_9595_9595wynikiObjects2.length = 0;
gdjs.MenuCode.GDHightScore_9595_9595_9595wynikiObjects3.length = 0;
gdjs.MenuCode.GDDistance2Objects1.length = 0;
gdjs.MenuCode.GDDistance2Objects2.length = 0;
gdjs.MenuCode.GDDistance2Objects3.length = 0;

gdjs.MenuCode.eventsList3(runtimeScene);
gdjs.MenuCode.GDStartGameObjects1.length = 0;
gdjs.MenuCode.GDStartGameObjects2.length = 0;
gdjs.MenuCode.GDStartGameObjects3.length = 0;
gdjs.MenuCode.GDSettingsObjects1.length = 0;
gdjs.MenuCode.GDSettingsObjects2.length = 0;
gdjs.MenuCode.GDSettingsObjects3.length = 0;
gdjs.MenuCode.GDLeaderboardObjects1.length = 0;
gdjs.MenuCode.GDLeaderboardObjects2.length = 0;
gdjs.MenuCode.GDLeaderboardObjects3.length = 0;
gdjs.MenuCode.GDCharactersObjects1.length = 0;
gdjs.MenuCode.GDCharactersObjects2.length = 0;
gdjs.MenuCode.GDCharactersObjects3.length = 0;
gdjs.MenuCode.GDQuitObjects1.length = 0;
gdjs.MenuCode.GDQuitObjects2.length = 0;
gdjs.MenuCode.GDQuitObjects3.length = 0;
gdjs.MenuCode.GDPlatformObjects1.length = 0;
gdjs.MenuCode.GDPlatformObjects2.length = 0;
gdjs.MenuCode.GDPlatformObjects3.length = 0;
gdjs.MenuCode.GDCreditsObjects1.length = 0;
gdjs.MenuCode.GDCreditsObjects2.length = 0;
gdjs.MenuCode.GDCreditsObjects3.length = 0;
gdjs.MenuCode.GDGreenBackgroundObjects1.length = 0;
gdjs.MenuCode.GDGreenBackgroundObjects2.length = 0;
gdjs.MenuCode.GDGreenBackgroundObjects3.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDBP_9595TloObjects1.length = 0;
gdjs.MenuCode.GDBP_9595TloObjects2.length = 0;
gdjs.MenuCode.GDBP_9595TloObjects3.length = 0;
gdjs.MenuCode.GDWild_9595Bean_9595logo_9595_9595_9595menuObjects1.length = 0;
gdjs.MenuCode.GDWild_9595Bean_9595logo_9595_9595_9595menuObjects2.length = 0;
gdjs.MenuCode.GDWild_9595Bean_9595logo_9595_9595_9595menuObjects3.length = 0;
gdjs.MenuCode.GDDeathAnimObjects1.length = 0;
gdjs.MenuCode.GDDeathAnimObjects2.length = 0;
gdjs.MenuCode.GDDeathAnimObjects3.length = 0;
gdjs.MenuCode.GDZagraj_9595jeszcze_9595razObjects1.length = 0;
gdjs.MenuCode.GDZagraj_9595jeszcze_9595razObjects2.length = 0;
gdjs.MenuCode.GDZagraj_9595jeszcze_9595razObjects3.length = 0;
gdjs.MenuCode.GDHightScore_9595_9595_9595wynikiObjects1.length = 0;
gdjs.MenuCode.GDHightScore_9595_9595_9595wynikiObjects2.length = 0;
gdjs.MenuCode.GDHightScore_9595_9595_9595wynikiObjects3.length = 0;
gdjs.MenuCode.GDDistance2Objects1.length = 0;
gdjs.MenuCode.GDDistance2Objects2.length = 0;
gdjs.MenuCode.GDDistance2Objects3.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
