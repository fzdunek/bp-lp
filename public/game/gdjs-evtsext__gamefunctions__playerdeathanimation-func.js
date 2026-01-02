
if (typeof gdjs.evtsExt__GameFunctions__PlayerDeathAnimation !== "undefined") {
  gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GameFunctions__PlayerDeathAnimation = {};
gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.idToCallbackMap = new Map();
gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.GDCharacterObjects1= [];
gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.GDCharacterObjects2= [];


gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Character"), gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.GDCharacterObjects1);
{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.2);
}
{for(var i = 0, len = gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.GDCharacterObjects1[i].addPolarForce(-(90), 150, 1);
}
}
{for(var i = 0, len = gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.GDCharacterObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("PlatformerObject"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.GDCharacterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.GDCharacterObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Hit");
}
}
}

}


};

gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.func = function(runtimeScene, Character, Animation, PlatformerObject, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Character": Character
},
  _objectArraysMap: {
"Character": gdjs.objectsListsToArray(Character)
},
  _behaviorNamesMap: {
"Animation": Animation
, "PlatformerObject": PlatformerObject
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GameFunctions"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GameFunctions"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.GDCharacterObjects1.length = 0;
gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.GDCharacterObjects2.length = 0;

gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.GDCharacterObjects1.length = 0;
gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.GDCharacterObjects2.length = 0;


return;
}

gdjs.evtsExt__GameFunctions__PlayerDeathAnimation.registeredGdjsCallbacks = [];