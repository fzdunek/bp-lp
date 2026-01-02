
if (typeof gdjs.evtsExt__AdvancedHTTP__ReadResponseText !== "undefined") {
  gdjs.evtsExt__AdvancedHTTP__ReadResponseText.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AdvancedHTTP__ReadResponseText = {};
gdjs.evtsExt__AdvancedHTTP__ReadResponseText.idToCallbackMap = new Map();


gdjs.evtsExt__AdvancedHTTP__ReadResponseText.userFunc0x9f2be8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const logger = (this.logger || (this.logger = new gdjs.Logger("Advanced HTTP")));
const advancedHTTP = (gdjs._advancedHTTP || (gdjs._advancedHTTP = { responses: new Map(), id: 1 }));

/** @type {gdjs.Variable} */
const response = eventsFunctionContext.getArgument("Response");
/** @type {gdjs.Variable} */
const body = eventsFunctionContext.getArgument("Body");

const id = response.getChild("id").getAsNumber();
const responseBody = response.getChild("body").getAsString();

if (responseBody !== "0") {
    body.setString(responseBody);
    eventsFunctionContext.task.resolve();
    return;
}

if (!advancedHTTP.responses.has(id)) {
    eventsFunctionContext.task.resolve();
    logger.error(`Couldn't read the body of a request. Either an invalid request has passed, or the body has already been disposed of. The body must be read within 10 seconds of the request succeeding, as it will then be disposed of.`);
    return;
}

const fetchResponse = advancedHTTP.responses.get(id);

eventsFunctionContext.task = new gdjs.PromiseTask(
    fetchResponse
        .text()
        .then((text) => {
            body.setString(text);
        })
        .catch((e) => {
            logger.error(`An error occured while reading the body of a request: ${e}`)
        })
)

};
gdjs.evtsExt__AdvancedHTTP__ReadResponseText.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AdvancedHTTP__ReadResponseText.userFunc0x9f2be8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__AdvancedHTTP__ReadResponseText.func = function(runtimeScene, Response, Body, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
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
if (argName === "Response") return Response;
if (argName === "Body") return Body;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__AdvancedHTTP__ReadResponseText.eventsList0(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__AdvancedHTTP__ReadResponseText.registeredGdjsCallbacks = [];