/**
 * Auto-generated action file for "WebSite Management Client" API.
 *
 * Generated at: 2019-05-07T14:39:26.997Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / azure-com-web-service-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Sites_CreateOrUpdateSiteConfigSlot'
 * Endpoint Path: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/web'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "resourceGroupName",
    "name",
    "slot",
    "subscriptionId",
    "api-version"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "resourceGroupName": "resourceGroupName",
    "name": "name",
    "slot": "slot",
    "subscriptionId": "subscriptionId",
    "api_version": "api-version",
    "alwaysOn": "alwaysOn",
    "url": "url",
    "apiDefinition": "apiDefinition",
    "appCommandLine": "appCommandLine",
    "appSettings": "appSettings",
    "autoHealEnabled": "autoHealEnabled",
    "actionType": "actionType",
    "exe": "exe",
    "parameters": "parameters",
    "customAction": "customAction",
    "minProcessExecutionTime": "minProcessExecutionTime",
    "actions": "actions",
    "privateBytesInKB": "privateBytesInKB",
    "count": "count",
    "timeInterval": "timeInterval",
    "requests": "requests",
    "timeTaken": "timeTaken",
    "slowRequests": "slowRequests",
    "statusCodes": "statusCodes",
    "triggers": "triggers",
    "autoHealRules": "autoHealRules",
    "autoSwapSlotName": "autoSwapSlotName",
    "connectionStrings": "connectionStrings",
    "allowedOrigins": "allowedOrigins",
    "cors": "cors",
    "defaultDocuments": "defaultDocuments",
    "detailedErrorLoggingEnabled": "detailedErrorLoggingEnabled",
    "documentRoot": "documentRoot",
    "rampUpRules": "rampUpRules",
    "experiments": "experiments",
    "handlerMappings": "handlerMappings",
    "httpLoggingEnabled": "httpLoggingEnabled",
    "ipSecurityRestrictions": "ipSecurityRestrictions",
    "javaContainer": "javaContainer",
    "javaContainerVersion": "javaContainerVersion",
    "javaVersion": "javaVersion",
    "maxDiskSizeInMb": "maxDiskSizeInMb",
    "maxMemoryInMb": "maxMemoryInMb",
    "maxPercentageCpu": "maxPercentageCpu",
    "limits": "limits",
    "loadBalancing": "loadBalancing",
    "localMySqlEnabled": "localMySqlEnabled",
    "logsDirectorySizeLimit": "logsDirectorySizeLimit",
    "managedPipelineMode": "managedPipelineMode",
    "metadata": "metadata",
    "netFrameworkVersion": "netFrameworkVersion",
    "nodeVersion": "nodeVersion",
    "numberOfWorkers": "numberOfWorkers",
    "phpVersion": "phpVersion",
    "publishingPassword": "publishingPassword",
    "publishingUsername": "publishingUsername",
    "pythonVersion": "pythonVersion",
    "remoteDebuggingEnabled": "remoteDebuggingEnabled",
    "remoteDebuggingVersion": "remoteDebuggingVersion",
    "requestTracingEnabled": "requestTracingEnabled",
    "requestTracingExpirationTime": "requestTracingExpirationTime",
    "scmType": "scmType",
    "tracingOptions": "tracingOptions",
    "use32BitWorkerProcess": "use32BitWorkerProcess",
    "virtualApplications": "virtualApplications",
    "vnetName": "vnetName",
    "webSocketsEnabled": "webSocketsEnabled",
    "properties": "properties",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = cfg.body_content_type;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['azure_auth'] = {token: cfg['azure_auth']};

    let callParams = {
        spec: spec,
        operationId: 'Sites_CreateOrUpdateSiteConfigSlot',
        pathName: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{name}/slots/{slot}/config/web',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}