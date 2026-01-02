gdjs.CreditsCode = {};
gdjs.CreditsCode.localVariables = [];
gdjs.CreditsCode.idToCallbackMap = new Map();
gdjs.CreditsCode.GDBackObjects1= [];
gdjs.CreditsCode.GDBackObjects2= [];
gdjs.CreditsCode.GDBackObjects3= [];
gdjs.CreditsCode.GDMadeWithObjects1= [];
gdjs.CreditsCode.GDMadeWithObjects2= [];
gdjs.CreditsCode.GDMadeWithObjects3= [];
gdjs.CreditsCode.GDBackgroundObjects1= [];
gdjs.CreditsCode.GDBackgroundObjects2= [];
gdjs.CreditsCode.GDBackgroundObjects3= [];
gdjs.CreditsCode.GDGdevelopCompleteLogoBlackObjects1= [];
gdjs.CreditsCode.GDGdevelopCompleteLogoBlackObjects2= [];
gdjs.CreditsCode.GDGdevelopCompleteLogoBlackObjects3= [];
gdjs.CreditsCode.GDDeathAnimObjects1= [];
gdjs.CreditsCode.GDDeathAnimObjects2= [];
gdjs.CreditsCode.GDDeathAnimObjects3= [];
gdjs.CreditsCode.GDZagraj_9595jeszcze_9595razObjects1= [];
gdjs.CreditsCode.GDZagraj_9595jeszcze_9595razObjects2= [];
gdjs.CreditsCode.GDZagraj_9595jeszcze_9595razObjects3= [];
gdjs.CreditsCode.GDHightScore_9595_9595_9595wynikiObjects1= [];
gdjs.CreditsCode.GDHightScore_9595_9595_9595wynikiObjects2= [];
gdjs.CreditsCode.GDHightScore_9595_9595_9595wynikiObjects3= [];
gdjs.CreditsCode.GDDistance2Objects1= [];
gdjs.CreditsCode.GDDistance2Objects2= [];
gdjs.CreditsCode.GDDistance2Objects3= [];


gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.CreditsCode.GDBackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDBackObjects2.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDBackObjects2[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDBackObjects2[k] = gdjs.CreditsCode.GDBackObjects2[i];
        ++k;
    }
}
gdjs.CreditsCode.GDBackObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18595164);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonHover", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), gdjs.randomFloatInRange(1, 1.1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.CreditsCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CreditsCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.CreditsCode.GDBackObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CreditsCode.GDBackObjects1[k] = gdjs.CreditsCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.CreditsCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


};gdjs.CreditsCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.CreditsCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDBackgroundObjects1[i].setColor(gdjs.evtTools.common.toString(gdjs.randomInRange(0, 255)) + ";" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 255)) + ";" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 255)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.CreditsCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDBackgroundObjects1[i].setYOffset(gdjs.CreditsCode.GDBackgroundObjects1[i].getYOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 20));
}
}
{for(var i = 0, len = gdjs.CreditsCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDBackgroundObjects1[i].setXOffset(gdjs.CreditsCode.GDBackgroundObjects1[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 20));
}
}
}

}


{


gdjs.CreditsCode.eventsList0(runtimeScene);
}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDBackObjects1.length = 0;
gdjs.CreditsCode.GDBackObjects2.length = 0;
gdjs.CreditsCode.GDBackObjects3.length = 0;
gdjs.CreditsCode.GDMadeWithObjects1.length = 0;
gdjs.CreditsCode.GDMadeWithObjects2.length = 0;
gdjs.CreditsCode.GDMadeWithObjects3.length = 0;
gdjs.CreditsCode.GDBackgroundObjects1.length = 0;
gdjs.CreditsCode.GDBackgroundObjects2.length = 0;
gdjs.CreditsCode.GDBackgroundObjects3.length = 0;
gdjs.CreditsCode.GDGdevelopCompleteLogoBlackObjects1.length = 0;
gdjs.CreditsCode.GDGdevelopCompleteLogoBlackObjects2.length = 0;
gdjs.CreditsCode.GDGdevelopCompleteLogoBlackObjects3.length = 0;
gdjs.CreditsCode.GDDeathAnimObjects1.length = 0;
gdjs.CreditsCode.GDDeathAnimObjects2.length = 0;
gdjs.CreditsCode.GDDeathAnimObjects3.length = 0;
gdjs.CreditsCode.GDZagraj_9595jeszcze_9595razObjects1.length = 0;
gdjs.CreditsCode.GDZagraj_9595jeszcze_9595razObjects2.length = 0;
gdjs.CreditsCode.GDZagraj_9595jeszcze_9595razObjects3.length = 0;
gdjs.CreditsCode.GDHightScore_9595_9595_9595wynikiObjects1.length = 0;
gdjs.CreditsCode.GDHightScore_9595_9595_9595wynikiObjects2.length = 0;
gdjs.CreditsCode.GDHightScore_9595_9595_9595wynikiObjects3.length = 0;
gdjs.CreditsCode.GDDistance2Objects1.length = 0;
gdjs.CreditsCode.GDDistance2Objects2.length = 0;
gdjs.CreditsCode.GDDistance2Objects3.length = 0;

gdjs.CreditsCode.eventsList1(runtimeScene);
gdjs.CreditsCode.GDBackObjects1.length = 0;
gdjs.CreditsCode.GDBackObjects2.length = 0;
gdjs.CreditsCode.GDBackObjects3.length = 0;
gdjs.CreditsCode.GDMadeWithObjects1.length = 0;
gdjs.CreditsCode.GDMadeWithObjects2.length = 0;
gdjs.CreditsCode.GDMadeWithObjects3.length = 0;
gdjs.CreditsCode.GDBackgroundObjects1.length = 0;
gdjs.CreditsCode.GDBackgroundObjects2.length = 0;
gdjs.CreditsCode.GDBackgroundObjects3.length = 0;
gdjs.CreditsCode.GDGdevelopCompleteLogoBlackObjects1.length = 0;
gdjs.CreditsCode.GDGdevelopCompleteLogoBlackObjects2.length = 0;
gdjs.CreditsCode.GDGdevelopCompleteLogoBlackObjects3.length = 0;
gdjs.CreditsCode.GDDeathAnimObjects1.length = 0;
gdjs.CreditsCode.GDDeathAnimObjects2.length = 0;
gdjs.CreditsCode.GDDeathAnimObjects3.length = 0;
gdjs.CreditsCode.GDZagraj_9595jeszcze_9595razObjects1.length = 0;
gdjs.CreditsCode.GDZagraj_9595jeszcze_9595razObjects2.length = 0;
gdjs.CreditsCode.GDZagraj_9595jeszcze_9595razObjects3.length = 0;
gdjs.CreditsCode.GDHightScore_9595_9595_9595wynikiObjects1.length = 0;
gdjs.CreditsCode.GDHightScore_9595_9595_9595wynikiObjects2.length = 0;
gdjs.CreditsCode.GDHightScore_9595_9595_9595wynikiObjects3.length = 0;
gdjs.CreditsCode.GDDistance2Objects1.length = 0;
gdjs.CreditsCode.GDDistance2Objects2.length = 0;
gdjs.CreditsCode.GDDistance2Objects3.length = 0;


return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
