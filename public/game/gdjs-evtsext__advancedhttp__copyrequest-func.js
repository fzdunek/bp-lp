
if (typeof gdjs.evtsExt__AdvancedHTTP__CopyRequest !== "undefined") {
  gdjs.evtsExt__AdvancedHTTP__CopyRequest.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AdvancedHTTP__CopyRequest = {};
gdjs.evtsExt__AdvancedHTTP__CopyRequest.idToCallbackMap = new Map();


gdjs.evtsExt__AdvancedHTTP__CopyRequest.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().get("__AdvancedHTTP").getChild("Requests").getChild(eventsFunctionContext.getArgument("OriginRequest"))), runtimeScene.getGame().getVariables().get("__AdvancedHTTP").getChild("Requests").getChild(eventsFunctionContext.getArgument("Request")));
}
}

}


};

gdjs.evtsExt__AdvancedHTTP__CopyRequest.func = function(runtimeScene, Request, OriginRequest, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("AdvancedHTTP"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("AdvancedHTTP"),
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
if (argName === "Request") return Request;
if (argName === "OriginRequest") return OriginRequest;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__AdvancedHTTP__CopyRequest.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__AdvancedHTTP__CopyRequest.registeredGdjsCallbacks = [];