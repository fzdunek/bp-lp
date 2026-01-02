
if (typeof gdjs.evtsExt__AdvancedHTTP__ExecuteRequest !== "undefined") {
  gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__AdvancedHTTP__ExecuteRequest = {};
gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.idToCallbackMap = new Map();


gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.userFunc0x9ebad0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const logger = (this.logger || (this.logger = new gdjs.Logger("Advanced HTTP")));
const advancedHTTP = (gdjs._advancedHTTP || (gdjs._advancedHTTP = { responses: new Map(), id: 1 }));

/** @type {gdjs.Variable} */
const result = eventsFunctionContext.getArgument("Response");
const requestName = eventsFunctionContext.getArgument("Request");
const request = runtimeScene
    .getGame()
    .getVariables()
    .get("__AdvancedHTTP")
    .getChild("Requests")
    .getChild(requestName)
    .toJSObject();
if (!request.Options) request.Options = {}
if (request.Options.method === 'GET' || request.Options.method === 'HEAD') delete request.Options.body;

if (typeof request.URL !== "string") {
    eventsFunctionContext.task.resolve();
    logger.error(`Couldn't execute request '${requestName}' - has it been properly initialized?`);
    return;
}

function isContentful(obj) {
    for (var x in obj) { return true; }
    return false;
}
const hasFormData = request.FormData && isContentful(request.FormData)
console.log(isContentful(request.FormData), request.FormData)

if (hasFormData) {
    if (request.Options.body && request.Options.body !== "") {
        console.warn(`The request ${requestName} has both form data and a separate body - the body will be ignored and replaced by the form data.`);
    }

    delete request.Options.body;
}

if (request.CORS) {
    // Cache makes sense only on the client. CF Workers does not support cache property on fetch anyways.
    const cache = request.Options.cache;
    delete request.Options.cache;
    eventsFunctionContext.task = new gdjs.PromiseTask(
        fetch(`https://cors.arthuro555.com?${JSON.stringify({
            url: request.URL,
            options: request.Options,
            formData: isContentful(request.FormData) ? request.FormData : undefined
        })}`, { keepalive: true, cache })
            .then(async (response) => {
                const { ok, status, headers, body } = await response.json();
                result.fromJSObject({
                    ok,
                    status,
                    headers,
                    body,
                });
            })
            .catch((e) => {
                logger.error(`Couldn't execute request '${requestName}': ${e}`);
            })
    );
} else {
    if (hasFormData && request.Options.method !== 'GET' && request.Options.method !== 'HEAD') {
        const fd = request.Options.body = new FormData();
        for (const key of Object.keys(request.FormData)) {
            fd.append(key, request.FormData[key])
        }
    }

    eventsFunctionContext.task = new gdjs.PromiseTask(
        fetch(request.URL, { keepalive: true, ...request.Options })
            .then((response) => {
                const id = advancedHTTP.id++;
                const { ok, status, headers } = response;
                result.fromJSObject({
                    id,
                    ok,
                    status,
                    headers: Object.fromEntries(headers.entries()),
                });
                result.getChild("id").setNumber(id);
                advancedHTTP.responses.set(id, response);
                setTimeout(() => advancedHTTP.responses.delete(id), 10_000);
            })
            .catch((e) => {
                logger.error(`Couldn't execute request '${requestName}': ${e}`);
            })
    );
}
};
gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.userFunc0x9ebad0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.func = function(runtimeScene, Request, Response, parentEventsFunctionContext) {
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
if (argName === "Request") return Request;
if (argName === "Response") return Response;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.eventsList0(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__AdvancedHTTP__ExecuteRequest.registeredGdjsCallbacks = [];