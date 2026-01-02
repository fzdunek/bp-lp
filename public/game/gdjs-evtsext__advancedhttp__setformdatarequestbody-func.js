
if (typeof gdjs.evtsExt__AdvancedHTTP__SetFormDataRequestBody !== "undefined") {
  gdjs.evtsExt__AdvancedHTTP__SetFormDataRequestBody.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AdvancedHTTP__SetFormDataRequestBody = {};
gdjs.evtsExt__AdvancedHTTP__SetFormDataRequestBody.idToCallbackMap = new Map();


gdjs.evtsExt__AdvancedHTTP__SetFormDataRequestBody.userFunc0x9de2f8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.Variable.copy(
    eventsFunctionContext.getArgument("Body"),
    runtimeScene.getGame().getVariables().get("__AdvancedHTTP")
        .getChild("Requests")
        .getChild(eventsFunctionContext.getArgument("Request"))
        .getChild("FormData"),
    /* mergeVariables = */true
);

};
gdjs.evtsExt__AdvancedHTTP__SetFormDataRequestBody.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__AdvancedHTTP__SetFormDataRequestBody.userFunc0x9de2f8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__AdvancedHTTP__SetFormDataRequestBody.func = function(runtimeScene, Request, Body, parentEventsFunctionContext) {
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
if (argName === "Body") return Body;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__AdvancedHTTP__SetFormDataRequestBody.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__AdvancedHTTP__SetFormDataRequestBody.registeredGdjsCallbacks = [];