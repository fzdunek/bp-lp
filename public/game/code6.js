gdjs.Koniec_32gryCode = {};
gdjs.Koniec_32gryCode.localVariables = [];
gdjs.Koniec_32gryCode.idToCallbackMap = new Map();
gdjs.Koniec_32gryCode.GDtlo_9595wynikObjects1= [];
gdjs.Koniec_32gryCode.GDtlo_9595wynikObjects2= [];
gdjs.Koniec_32gryCode.GDDeathAnimObjects1= [];
gdjs.Koniec_32gryCode.GDDeathAnimObjects2= [];
gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects1= [];
gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects2= [];
gdjs.Koniec_32gryCode.GDHightScore_9595_9595_9595wynikiObjects1= [];
gdjs.Koniec_32gryCode.GDHightScore_9595_9595_9595wynikiObjects2= [];
gdjs.Koniec_32gryCode.GDDistance2Objects1= [];
gdjs.Koniec_32gryCode.GDDistance2Objects2= [];


gdjs.Koniec_32gryCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HightScore___wyniki"), gdjs.Koniec_32gryCode.GDHightScore_9595_9595_9595wynikiObjects1);
{gdjs.evtTools.storage.readNumberFromJSONFile("GameHighscore", "GameHighscore", runtimeScene, runtimeScene.getScene().getVariables().get("HighScore"));
}
{for(var i = 0, len = gdjs.Koniec_32gryCode.GDHightScore_9595_9595_9595wynikiObjects1.length ;i < len;++i) {
    gdjs.Koniec_32gryCode.GDHightScore_9595_9595_9595wynikiObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("HighScore"))));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zagraj_jeszcze_raz"), gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects1.length;i<l;++i) {
    if ( gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects1[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects1[k] = gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects1[i];
        ++k;
    }
}
gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18676564);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonHover", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), gdjs.randomFloatInRange(1, 1.1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zagraj_jeszcze_raz"), gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects1.length;i<l;++i) {
    if ( gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects1[k] = gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects1[i];
        ++k;
    }
}
gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HightScore___wyniki"), gdjs.Koniec_32gryCode.GDHightScore_9595_9595_9595wynikiObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
{for(var i = 0, len = gdjs.Koniec_32gryCode.GDHightScore_9595_9595_9595wynikiObjects1.length ;i < len;++i) {
    gdjs.Koniec_32gryCode.GDHightScore_9595_9595_9595wynikiObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("HighScore"))));
}
}
}

}


};

gdjs.Koniec_32gryCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Koniec_32gryCode.GDtlo_9595wynikObjects1.length = 0;
gdjs.Koniec_32gryCode.GDtlo_9595wynikObjects2.length = 0;
gdjs.Koniec_32gryCode.GDDeathAnimObjects1.length = 0;
gdjs.Koniec_32gryCode.GDDeathAnimObjects2.length = 0;
gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects1.length = 0;
gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects2.length = 0;
gdjs.Koniec_32gryCode.GDHightScore_9595_9595_9595wynikiObjects1.length = 0;
gdjs.Koniec_32gryCode.GDHightScore_9595_9595_9595wynikiObjects2.length = 0;
gdjs.Koniec_32gryCode.GDDistance2Objects1.length = 0;
gdjs.Koniec_32gryCode.GDDistance2Objects2.length = 0;

gdjs.Koniec_32gryCode.eventsList0(runtimeScene);
gdjs.Koniec_32gryCode.GDtlo_9595wynikObjects1.length = 0;
gdjs.Koniec_32gryCode.GDtlo_9595wynikObjects2.length = 0;
gdjs.Koniec_32gryCode.GDDeathAnimObjects1.length = 0;
gdjs.Koniec_32gryCode.GDDeathAnimObjects2.length = 0;
gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects1.length = 0;
gdjs.Koniec_32gryCode.GDZagraj_9595jeszcze_9595razObjects2.length = 0;
gdjs.Koniec_32gryCode.GDHightScore_9595_9595_9595wynikiObjects1.length = 0;
gdjs.Koniec_32gryCode.GDHightScore_9595_9595_9595wynikiObjects2.length = 0;
gdjs.Koniec_32gryCode.GDDistance2Objects1.length = 0;
gdjs.Koniec_32gryCode.GDDistance2Objects2.length = 0;


return;

}

gdjs['Koniec_32gryCode'] = gdjs.Koniec_32gryCode;
