gdjs.CharacterSelectionCode = {};
gdjs.CharacterSelectionCode.localVariables = [];
gdjs.CharacterSelectionCode.idToCallbackMap = new Map();
gdjs.CharacterSelectionCode.GDBackObjects1= [];
gdjs.CharacterSelectionCode.GDBackObjects2= [];
gdjs.CharacterSelectionCode.GDBackObjects3= [];
gdjs.CharacterSelectionCode.GDBackObjects4= [];
gdjs.CharacterSelectionCode.GDBackgroundObjects1= [];
gdjs.CharacterSelectionCode.GDBackgroundObjects2= [];
gdjs.CharacterSelectionCode.GDBackgroundObjects3= [];
gdjs.CharacterSelectionCode.GDBackgroundObjects4= [];
gdjs.CharacterSelectionCode.GDArrowRightObjects1= [];
gdjs.CharacterSelectionCode.GDArrowRightObjects2= [];
gdjs.CharacterSelectionCode.GDArrowRightObjects3= [];
gdjs.CharacterSelectionCode.GDArrowRightObjects4= [];
gdjs.CharacterSelectionCode.GDVirtualGuyObjects1= [];
gdjs.CharacterSelectionCode.GDVirtualGuyObjects2= [];
gdjs.CharacterSelectionCode.GDVirtualGuyObjects3= [];
gdjs.CharacterSelectionCode.GDVirtualGuyObjects4= [];
gdjs.CharacterSelectionCode.GDNinjaFrogObjects1= [];
gdjs.CharacterSelectionCode.GDNinjaFrogObjects2= [];
gdjs.CharacterSelectionCode.GDNinjaFrogObjects3= [];
gdjs.CharacterSelectionCode.GDNinjaFrogObjects4= [];
gdjs.CharacterSelectionCode.GDMaskDudeObjects1= [];
gdjs.CharacterSelectionCode.GDMaskDudeObjects2= [];
gdjs.CharacterSelectionCode.GDMaskDudeObjects3= [];
gdjs.CharacterSelectionCode.GDMaskDudeObjects4= [];
gdjs.CharacterSelectionCode.GDArrowLeftObjects1= [];
gdjs.CharacterSelectionCode.GDArrowLeftObjects2= [];
gdjs.CharacterSelectionCode.GDArrowLeftObjects3= [];
gdjs.CharacterSelectionCode.GDArrowLeftObjects4= [];
gdjs.CharacterSelectionCode.GDDeathAnimObjects1= [];
gdjs.CharacterSelectionCode.GDDeathAnimObjects2= [];
gdjs.CharacterSelectionCode.GDDeathAnimObjects3= [];
gdjs.CharacterSelectionCode.GDDeathAnimObjects4= [];
gdjs.CharacterSelectionCode.GDZagraj_9595jeszcze_9595razObjects1= [];
gdjs.CharacterSelectionCode.GDZagraj_9595jeszcze_9595razObjects2= [];
gdjs.CharacterSelectionCode.GDZagraj_9595jeszcze_9595razObjects3= [];
gdjs.CharacterSelectionCode.GDZagraj_9595jeszcze_9595razObjects4= [];
gdjs.CharacterSelectionCode.GDHightScore_9595_9595_9595wynikiObjects1= [];
gdjs.CharacterSelectionCode.GDHightScore_9595_9595_9595wynikiObjects2= [];
gdjs.CharacterSelectionCode.GDHightScore_9595_9595_9595wynikiObjects3= [];
gdjs.CharacterSelectionCode.GDHightScore_9595_9595_9595wynikiObjects4= [];
gdjs.CharacterSelectionCode.GDDistance2Objects1= [];
gdjs.CharacterSelectionCode.GDDistance2Objects2= [];
gdjs.CharacterSelectionCode.GDDistance2Objects3= [];
gdjs.CharacterSelectionCode.GDDistance2Objects4= [];


gdjs.CharacterSelectionCode.mapOfGDgdjs_9546CharacterSelectionCode_9546GDVirtualGuyObjects3ObjectsGDgdjs_9546CharacterSelectionCode_9546GDNinjaFrogObjects3ObjectsGDgdjs_9546CharacterSelectionCode_9546GDMaskDudeObjects3Objects = Hashtable.newFrom({"VirtualGuy": gdjs.CharacterSelectionCode.GDVirtualGuyObjects3, "NinjaFrog": gdjs.CharacterSelectionCode.GDNinjaFrogObjects3, "MaskDude": gdjs.CharacterSelectionCode.GDMaskDudeObjects3});
gdjs.CharacterSelectionCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("MaskDude"), gdjs.CharacterSelectionCode.GDMaskDudeObjects3);
gdjs.copyArray(runtimeScene.getObjects("NinjaFrog"), gdjs.CharacterSelectionCode.GDNinjaFrogObjects3);
gdjs.copyArray(runtimeScene.getObjects("VirtualGuy"), gdjs.CharacterSelectionCode.GDVirtualGuyObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.CharacterSelectionCode.mapOfGDgdjs_9546CharacterSelectionCode_9546GDVirtualGuyObjects3ObjectsGDgdjs_9546CharacterSelectionCode_9546GDNinjaFrogObjects3ObjectsGDgdjs_9546CharacterSelectionCode_9546GDMaskDudeObjects3Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.CharacterSelectionCode.GDMaskDudeObjects3 */
/* Reuse gdjs.CharacterSelectionCode.GDNinjaFrogObjects3 */
/* Reuse gdjs.CharacterSelectionCode.GDVirtualGuyObjects3 */
{for(var i = 0, len = gdjs.CharacterSelectionCode.GDVirtualGuyObjects3.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDVirtualGuyObjects3[i].hide();
}
for(var i = 0, len = gdjs.CharacterSelectionCode.GDNinjaFrogObjects3.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDNinjaFrogObjects3[i].hide();
}
for(var i = 0, len = gdjs.CharacterSelectionCode.GDMaskDudeObjects3.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDMaskDudeObjects3[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaskDude"), gdjs.CharacterSelectionCode.GDMaskDudeObjects2);
gdjs.copyArray(runtimeScene.getObjects("NinjaFrog"), gdjs.CharacterSelectionCode.GDNinjaFrogObjects2);
gdjs.copyArray(runtimeScene.getObjects("VirtualGuy"), gdjs.CharacterSelectionCode.GDVirtualGuyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDVirtualGuyObjects2.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDVirtualGuyObjects2[i].getVariableNumber(gdjs.CharacterSelectionCode.GDVirtualGuyObjects2[i].getVariables().get("Character")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character")) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDVirtualGuyObjects2[k] = gdjs.CharacterSelectionCode.GDVirtualGuyObjects2[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDVirtualGuyObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDNinjaFrogObjects2.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDNinjaFrogObjects2[i].getVariableNumber(gdjs.CharacterSelectionCode.GDNinjaFrogObjects2[i].getVariables().get("Character")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character")) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDNinjaFrogObjects2[k] = gdjs.CharacterSelectionCode.GDNinjaFrogObjects2[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDNinjaFrogObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDMaskDudeObjects2.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDMaskDudeObjects2[i].getVariableNumber(gdjs.CharacterSelectionCode.GDMaskDudeObjects2[i].getVariables().get("Character")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character")) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDMaskDudeObjects2[k] = gdjs.CharacterSelectionCode.GDMaskDudeObjects2[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDMaskDudeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CharacterSelectionCode.GDMaskDudeObjects2 */
/* Reuse gdjs.CharacterSelectionCode.GDNinjaFrogObjects2 */
/* Reuse gdjs.CharacterSelectionCode.GDVirtualGuyObjects2 */
{for(var i = 0, len = gdjs.CharacterSelectionCode.GDVirtualGuyObjects2.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDVirtualGuyObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.CharacterSelectionCode.GDNinjaFrogObjects2.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDNinjaFrogObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.CharacterSelectionCode.GDMaskDudeObjects2.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDMaskDudeObjects2[i].hide(false);
}
}
}

}


};gdjs.CharacterSelectionCode.mapOfGDgdjs_9546CharacterSelectionCode_9546GDVirtualGuyObjects2ObjectsGDgdjs_9546CharacterSelectionCode_9546GDNinjaFrogObjects2ObjectsGDgdjs_9546CharacterSelectionCode_9546GDMaskDudeObjects2Objects = Hashtable.newFrom({"VirtualGuy": gdjs.CharacterSelectionCode.GDVirtualGuyObjects2, "NinjaFrog": gdjs.CharacterSelectionCode.GDNinjaFrogObjects2, "MaskDude": gdjs.CharacterSelectionCode.GDMaskDudeObjects2});
gdjs.CharacterSelectionCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character")) > 2;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character")) < 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character").setNumber(2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaskDude"), gdjs.CharacterSelectionCode.GDMaskDudeObjects2);
gdjs.copyArray(runtimeScene.getObjects("NinjaFrog"), gdjs.CharacterSelectionCode.GDNinjaFrogObjects2);
gdjs.copyArray(runtimeScene.getObjects("VirtualGuy"), gdjs.CharacterSelectionCode.GDVirtualGuyObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects(runtimeScene, gdjs.CharacterSelectionCode.mapOfGDgdjs_9546CharacterSelectionCode_9546GDVirtualGuyObjects2ObjectsGDgdjs_9546CharacterSelectionCode_9546GDNinjaFrogObjects2ObjectsGDgdjs_9546CharacterSelectionCode_9546GDMaskDudeObjects2Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.CharacterSelectionCode.GDMaskDudeObjects2 */
/* Reuse gdjs.CharacterSelectionCode.GDNinjaFrogObjects2 */
/* Reuse gdjs.CharacterSelectionCode.GDVirtualGuyObjects2 */
{for(var i = 0, len = gdjs.CharacterSelectionCode.GDVirtualGuyObjects2.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDVirtualGuyObjects2[i].hide();
}
for(var i = 0, len = gdjs.CharacterSelectionCode.GDNinjaFrogObjects2.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDNinjaFrogObjects2[i].hide();
}
for(var i = 0, len = gdjs.CharacterSelectionCode.GDMaskDudeObjects2.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDMaskDudeObjects2[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MaskDude"), gdjs.CharacterSelectionCode.GDMaskDudeObjects1);
gdjs.copyArray(runtimeScene.getObjects("NinjaFrog"), gdjs.CharacterSelectionCode.GDNinjaFrogObjects1);
gdjs.copyArray(runtimeScene.getObjects("VirtualGuy"), gdjs.CharacterSelectionCode.GDVirtualGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDVirtualGuyObjects1.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDVirtualGuyObjects1[i].getVariableNumber(gdjs.CharacterSelectionCode.GDVirtualGuyObjects1[i].getVariables().get("Character")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character")) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDVirtualGuyObjects1[k] = gdjs.CharacterSelectionCode.GDVirtualGuyObjects1[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDVirtualGuyObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDNinjaFrogObjects1.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDNinjaFrogObjects1[i].getVariableNumber(gdjs.CharacterSelectionCode.GDNinjaFrogObjects1[i].getVariables().get("Character")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character")) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDNinjaFrogObjects1[k] = gdjs.CharacterSelectionCode.GDNinjaFrogObjects1[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDNinjaFrogObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDMaskDudeObjects1.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDMaskDudeObjects1[i].getVariableNumber(gdjs.CharacterSelectionCode.GDMaskDudeObjects1[i].getVariables().get("Character")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character")) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDMaskDudeObjects1[k] = gdjs.CharacterSelectionCode.GDMaskDudeObjects1[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDMaskDudeObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CharacterSelectionCode.GDMaskDudeObjects1 */
/* Reuse gdjs.CharacterSelectionCode.GDNinjaFrogObjects1 */
/* Reuse gdjs.CharacterSelectionCode.GDVirtualGuyObjects1 */
{for(var i = 0, len = gdjs.CharacterSelectionCode.GDVirtualGuyObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDVirtualGuyObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.CharacterSelectionCode.GDNinjaFrogObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDNinjaFrogObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.CharacterSelectionCode.GDMaskDudeObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDMaskDudeObjects1[i].hide(false);
}
}
}

}


};gdjs.CharacterSelectionCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.CharacterSelectionCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowLeft"), gdjs.CharacterSelectionCode.GDArrowLeftObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDArrowLeftObjects2.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDArrowLeftObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDArrowLeftObjects2[k] = gdjs.CharacterSelectionCode.GDArrowLeftObjects2[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDArrowLeftObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character").sub(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowRight"), gdjs.CharacterSelectionCode.GDArrowRightObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDArrowRightObjects2.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDArrowRightObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDArrowRightObjects2[k] = gdjs.CharacterSelectionCode.GDArrowRightObjects2[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDArrowRightObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Character").add(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowLeft"), gdjs.CharacterSelectionCode.GDArrowLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("ArrowRight"), gdjs.CharacterSelectionCode.GDArrowRightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDArrowRightObjects1.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDArrowRightObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDArrowRightObjects1[k] = gdjs.CharacterSelectionCode.GDArrowRightObjects1[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDArrowRightObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDArrowLeftObjects1.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDArrowLeftObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDArrowLeftObjects1[k] = gdjs.CharacterSelectionCode.GDArrowLeftObjects1[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDArrowLeftObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonHover", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), gdjs.randomFloatInRange(1, 1.1));
}

{ //Subevents
gdjs.CharacterSelectionCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.CharacterSelectionCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.CharacterSelectionCode.GDBackObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDBackObjects2.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDBackObjects2[i].IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDBackObjects2[k] = gdjs.CharacterSelectionCode.GDBackObjects2[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDBackObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18268364);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "ButtonHover", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound")), gdjs.randomFloatInRange(1, 1.1));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.CharacterSelectionCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CharacterSelectionCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.CharacterSelectionCode.GDBackObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.CharacterSelectionCode.GDBackObjects1[k] = gdjs.CharacterSelectionCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.CharacterSelectionCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeStringInJSONFile("Settings", "Settings", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


};gdjs.CharacterSelectionCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.CharacterSelectionCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.CharacterSelectionCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDBackgroundObjects1[i].setColor(gdjs.evtTools.common.toString(gdjs.randomInRange(0, 255)) + ";" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 255)) + ";" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 255)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.CharacterSelectionCode.GDBackgroundObjects1);
{for(var i = 0, len = gdjs.CharacterSelectionCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDBackgroundObjects1[i].setYOffset(gdjs.CharacterSelectionCode.GDBackgroundObjects1[i].getYOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 20));
}
}
{for(var i = 0, len = gdjs.CharacterSelectionCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.CharacterSelectionCode.GDBackgroundObjects1[i].setXOffset(gdjs.CharacterSelectionCode.GDBackgroundObjects1[i].getXOffset() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 20));
}
}
}

}


{


gdjs.CharacterSelectionCode.eventsList2(runtimeScene);
}


{


gdjs.CharacterSelectionCode.eventsList3(runtimeScene);
}


};

gdjs.CharacterSelectionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CharacterSelectionCode.GDBackObjects1.length = 0;
gdjs.CharacterSelectionCode.GDBackObjects2.length = 0;
gdjs.CharacterSelectionCode.GDBackObjects3.length = 0;
gdjs.CharacterSelectionCode.GDBackObjects4.length = 0;
gdjs.CharacterSelectionCode.GDBackgroundObjects1.length = 0;
gdjs.CharacterSelectionCode.GDBackgroundObjects2.length = 0;
gdjs.CharacterSelectionCode.GDBackgroundObjects3.length = 0;
gdjs.CharacterSelectionCode.GDBackgroundObjects4.length = 0;
gdjs.CharacterSelectionCode.GDArrowRightObjects1.length = 0;
gdjs.CharacterSelectionCode.GDArrowRightObjects2.length = 0;
gdjs.CharacterSelectionCode.GDArrowRightObjects3.length = 0;
gdjs.CharacterSelectionCode.GDArrowRightObjects4.length = 0;
gdjs.CharacterSelectionCode.GDVirtualGuyObjects1.length = 0;
gdjs.CharacterSelectionCode.GDVirtualGuyObjects2.length = 0;
gdjs.CharacterSelectionCode.GDVirtualGuyObjects3.length = 0;
gdjs.CharacterSelectionCode.GDVirtualGuyObjects4.length = 0;
gdjs.CharacterSelectionCode.GDNinjaFrogObjects1.length = 0;
gdjs.CharacterSelectionCode.GDNinjaFrogObjects2.length = 0;
gdjs.CharacterSelectionCode.GDNinjaFrogObjects3.length = 0;
gdjs.CharacterSelectionCode.GDNinjaFrogObjects4.length = 0;
gdjs.CharacterSelectionCode.GDMaskDudeObjects1.length = 0;
gdjs.CharacterSelectionCode.GDMaskDudeObjects2.length = 0;
gdjs.CharacterSelectionCode.GDMaskDudeObjects3.length = 0;
gdjs.CharacterSelectionCode.GDMaskDudeObjects4.length = 0;
gdjs.CharacterSelectionCode.GDArrowLeftObjects1.length = 0;
gdjs.CharacterSelectionCode.GDArrowLeftObjects2.length = 0;
gdjs.CharacterSelectionCode.GDArrowLeftObjects3.length = 0;
gdjs.CharacterSelectionCode.GDArrowLeftObjects4.length = 0;
gdjs.CharacterSelectionCode.GDDeathAnimObjects1.length = 0;
gdjs.CharacterSelectionCode.GDDeathAnimObjects2.length = 0;
gdjs.CharacterSelectionCode.GDDeathAnimObjects3.length = 0;
gdjs.CharacterSelectionCode.GDDeathAnimObjects4.length = 0;
gdjs.CharacterSelectionCode.GDZagraj_9595jeszcze_9595razObjects1.length = 0;
gdjs.CharacterSelectionCode.GDZagraj_9595jeszcze_9595razObjects2.length = 0;
gdjs.CharacterSelectionCode.GDZagraj_9595jeszcze_9595razObjects3.length = 0;
gdjs.CharacterSelectionCode.GDZagraj_9595jeszcze_9595razObjects4.length = 0;
gdjs.CharacterSelectionCode.GDHightScore_9595_9595_9595wynikiObjects1.length = 0;
gdjs.CharacterSelectionCode.GDHightScore_9595_9595_9595wynikiObjects2.length = 0;
gdjs.CharacterSelectionCode.GDHightScore_9595_9595_9595wynikiObjects3.length = 0;
gdjs.CharacterSelectionCode.GDHightScore_9595_9595_9595wynikiObjects4.length = 0;
gdjs.CharacterSelectionCode.GDDistance2Objects1.length = 0;
gdjs.CharacterSelectionCode.GDDistance2Objects2.length = 0;
gdjs.CharacterSelectionCode.GDDistance2Objects3.length = 0;
gdjs.CharacterSelectionCode.GDDistance2Objects4.length = 0;

gdjs.CharacterSelectionCode.eventsList4(runtimeScene);
gdjs.CharacterSelectionCode.GDBackObjects1.length = 0;
gdjs.CharacterSelectionCode.GDBackObjects2.length = 0;
gdjs.CharacterSelectionCode.GDBackObjects3.length = 0;
gdjs.CharacterSelectionCode.GDBackObjects4.length = 0;
gdjs.CharacterSelectionCode.GDBackgroundObjects1.length = 0;
gdjs.CharacterSelectionCode.GDBackgroundObjects2.length = 0;
gdjs.CharacterSelectionCode.GDBackgroundObjects3.length = 0;
gdjs.CharacterSelectionCode.GDBackgroundObjects4.length = 0;
gdjs.CharacterSelectionCode.GDArrowRightObjects1.length = 0;
gdjs.CharacterSelectionCode.GDArrowRightObjects2.length = 0;
gdjs.CharacterSelectionCode.GDArrowRightObjects3.length = 0;
gdjs.CharacterSelectionCode.GDArrowRightObjects4.length = 0;
gdjs.CharacterSelectionCode.GDVirtualGuyObjects1.length = 0;
gdjs.CharacterSelectionCode.GDVirtualGuyObjects2.length = 0;
gdjs.CharacterSelectionCode.GDVirtualGuyObjects3.length = 0;
gdjs.CharacterSelectionCode.GDVirtualGuyObjects4.length = 0;
gdjs.CharacterSelectionCode.GDNinjaFrogObjects1.length = 0;
gdjs.CharacterSelectionCode.GDNinjaFrogObjects2.length = 0;
gdjs.CharacterSelectionCode.GDNinjaFrogObjects3.length = 0;
gdjs.CharacterSelectionCode.GDNinjaFrogObjects4.length = 0;
gdjs.CharacterSelectionCode.GDMaskDudeObjects1.length = 0;
gdjs.CharacterSelectionCode.GDMaskDudeObjects2.length = 0;
gdjs.CharacterSelectionCode.GDMaskDudeObjects3.length = 0;
gdjs.CharacterSelectionCode.GDMaskDudeObjects4.length = 0;
gdjs.CharacterSelectionCode.GDArrowLeftObjects1.length = 0;
gdjs.CharacterSelectionCode.GDArrowLeftObjects2.length = 0;
gdjs.CharacterSelectionCode.GDArrowLeftObjects3.length = 0;
gdjs.CharacterSelectionCode.GDArrowLeftObjects4.length = 0;
gdjs.CharacterSelectionCode.GDDeathAnimObjects1.length = 0;
gdjs.CharacterSelectionCode.GDDeathAnimObjects2.length = 0;
gdjs.CharacterSelectionCode.GDDeathAnimObjects3.length = 0;
gdjs.CharacterSelectionCode.GDDeathAnimObjects4.length = 0;
gdjs.CharacterSelectionCode.GDZagraj_9595jeszcze_9595razObjects1.length = 0;
gdjs.CharacterSelectionCode.GDZagraj_9595jeszcze_9595razObjects2.length = 0;
gdjs.CharacterSelectionCode.GDZagraj_9595jeszcze_9595razObjects3.length = 0;
gdjs.CharacterSelectionCode.GDZagraj_9595jeszcze_9595razObjects4.length = 0;
gdjs.CharacterSelectionCode.GDHightScore_9595_9595_9595wynikiObjects1.length = 0;
gdjs.CharacterSelectionCode.GDHightScore_9595_9595_9595wynikiObjects2.length = 0;
gdjs.CharacterSelectionCode.GDHightScore_9595_9595_9595wynikiObjects3.length = 0;
gdjs.CharacterSelectionCode.GDHightScore_9595_9595_9595wynikiObjects4.length = 0;
gdjs.CharacterSelectionCode.GDDistance2Objects1.length = 0;
gdjs.CharacterSelectionCode.GDDistance2Objects2.length = 0;
gdjs.CharacterSelectionCode.GDDistance2Objects3.length = 0;
gdjs.CharacterSelectionCode.GDDistance2Objects4.length = 0;


return;

}

gdjs['CharacterSelectionCode'] = gdjs.CharacterSelectionCode;
