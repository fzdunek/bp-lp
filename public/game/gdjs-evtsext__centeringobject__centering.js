
gdjs.evtsExt__CenteringObject__Centering = gdjs.evtsExt__CenteringObject__Centering || {};

/**
 * Behavior generated from Centering
 */
gdjs.evtsExt__CenteringObject__Centering.Centering = class Centering extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__CenteringObject__Centering.Centering.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.CenterMode = behaviorData.CenterMode !== undefined ? behaviorData.CenterMode : "Center X";
    this._behaviorData.TopEdgeAnchor = "No anchor";
    this._behaviorData.RightEdgeAnchor = "No anchor";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.CenterMode !== newBehaviorData.CenterMode)
      this._behaviorData.CenterMode = newBehaviorData.CenterMode;
    if (oldBehaviorData.TopEdgeAnchor !== newBehaviorData.TopEdgeAnchor)
      this._behaviorData.TopEdgeAnchor = newBehaviorData.TopEdgeAnchor;
    if (oldBehaviorData.RightEdgeAnchor !== newBehaviorData.RightEdgeAnchor)
      this._behaviorData.RightEdgeAnchor = newBehaviorData.RightEdgeAnchor;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    CenterMode: this._behaviorData.CenterMode,
    TopEdgeAnchor: this._behaviorData.TopEdgeAnchor,
    RightEdgeAnchor: this._behaviorData.RightEdgeAnchor,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.CenterMode !== undefined)
      this._behaviorData.CenterMode = networkSyncData.props.CenterMode;
    if (networkSyncData.props.TopEdgeAnchor !== undefined)
      this._behaviorData.TopEdgeAnchor = networkSyncData.props.TopEdgeAnchor;
    if (networkSyncData.props.RightEdgeAnchor !== undefined)
      this._behaviorData.RightEdgeAnchor = networkSyncData.props.RightEdgeAnchor;
  }

  // Properties:
  
  _getCenterMode() {
    return this._behaviorData.CenterMode !== undefined ? this._behaviorData.CenterMode : "Center X";
  }
  _setCenterMode(newValue) {
    this._behaviorData.CenterMode = newValue;
  }
  _getTopEdgeAnchor() {
    return this._behaviorData.TopEdgeAnchor !== undefined ? this._behaviorData.TopEdgeAnchor : "No anchor";
  }
  _setTopEdgeAnchor(newValue) {
    this._behaviorData.TopEdgeAnchor = newValue;
  }
  _getRightEdgeAnchor() {
    return this._behaviorData.RightEdgeAnchor !== undefined ? this._behaviorData.RightEdgeAnchor : "No anchor";
  }
  _setRightEdgeAnchor(newValue) {
    this._behaviorData.RightEdgeAnchor = newValue;
  }
}

/**
 * Shared data generated from Centering
 */
gdjs.evtsExt__CenteringObject__Centering.Centering.SharedData = class CenteringSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__CenteringObject__Centering.Centering.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._CenteringObject_CenteringSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._CenteringObject_CenteringSharedData = new gdjs.evtsExt__CenteringObject__Centering.Centering.SharedData(
      initialData
    );
  }
  return instanceContainer._CenteringObject_CenteringSharedData;
}

// Methods:
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXContext = {};
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXContext.idToCallbackMap = new Map();
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXContext.GDObjectObjects1= [];
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXContext.GDObjectObjects2= [];


gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXContext.GDObjectObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
}

}


};

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CenteringObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CenteringObject"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterProportionalXContext = {};
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterProportionalXContext.idToCallbackMap = new Map();
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterProportionalXContext.GDObjectObjects1= [];
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterProportionalXContext.GDObjectObjects2= [];


gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterProportionalXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterProportionalXContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterProportionalXContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterProportionalXContext.GDObjectObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}
}

}


};

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterProportionalX = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CenteringObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CenteringObject"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterProportionalXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterProportionalXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterProportionalXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterProportionalXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterProportionalXContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterYContext = {};
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterYContext.idToCallbackMap = new Map();
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterYContext.GDObjectObjects1= [];
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterYContext.GDObjectObjects2= [];


gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterYContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterYContext.GDObjectObjects1[i].setCenterYInScene(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}
}

}


};

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CenteringObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CenteringObject"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterYContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXYContext = {};
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXYContext.idToCallbackMap = new Map();
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXYContext.GDObjectObjects1= [];
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXYContext.GDObjectObjects2= [];


gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXYContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CenterX(eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXYContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXYContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CenterY(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXY = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CenteringObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CenteringObject"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterXYContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.onCreatedContext = {};
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CenterAllAxis(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CenteringObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CenteringObject"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CenterAllAxis(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).AnchorRight(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CenteringObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CenteringObject"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext = {};
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.idToCallbackMap = new Map();
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1= [];
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects2= [];


gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterMode()) == "None");
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterMode()) == "Center X");
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CenterX(eventsFunctionContext);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterMode()) == "Center Y");
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CenterY(eventsFunctionContext);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterMode()) == "Center X and Y");
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CenterXY(eventsFunctionContext);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterMode()) == "Proportional X");
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterMode()) == "Proportional Y");
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCenterMode()) == "Proportional Y");
}
if (isConditionTrue_0) {
}

}


{



}


};

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxis = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CenteringObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CenteringObject"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.CenterAllAxisContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext = {};
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.idToCallbackMap = new Map();
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1= [];
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects2= [];


gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1[i].getVariables().get("CreatedPositionX")).setNumber((gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1[i].getX()));
}
}
{for(var i = 0, len = gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1[i].getVariables().get("CreatedPositionY")).setNumber((gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1[i].getY()));
}
}

{ //Subevents
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRightEdgeAnchor()) == "No anchor");
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRightEdgeAnchor()) == "Window left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1[i].setX(0 + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1[i].getVariables().get("CreatedPositionX"))));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRightEdgeAnchor()) == "Window right");
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1[i].getWidth()));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getRightEdgeAnchor()) == "Proportional");
}
if (isConditionTrue_0) {
}

}


};

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRight = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CenteringObject"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CenteringObject"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CenteringObject__Centering.Centering.prototype.AnchorRightContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("CenteringObject::Centering", gdjs.evtsExt__CenteringObject__Centering.Centering);
