// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import cm = require('../../agent/common');
import ifm = require('../../agent/interfaces');
import baseifm = require('vso-node-api/interfaces/common/VsoBaseInterfaces');
import webapi = require('vso-node-api/WebApi');
import agentifm = require('vso-node-api/interfaces/TaskAgentInterfaces')
import fm = require('../lib/feedback');

export class TestExecutionContext implements cm.IExecutionContext {

    constructor(jobInfo: cm.IJobInfo) {
        this.jobInfo = jobInfo;
        this.variables = jobInfo.variables;
        this.taskDefinitions = {};
        this.workingDirectory = this.variables[cm.vars.agentWorkingDirectory];
        this.service = new fm.TestFeedbackChannel()
    }

    public recordId: string;

    // communication
    public service: cm.IServiceChannel;
    public hostContext: cm.IHostContext;
    public authHandler: baseifm.IRequestHandler;
    getWebApi(): webapi.WebApi {
        throw DOMException.NOT_SUPPORTED_ERR
    }
    
    // inputs
    public processVariables(): void {}
    public jobInfo: cm.IJobInfo;
    public inputs: ifm.TaskInputs;
    public variables: { [key: string]: string };
    public taskDefinitions: { [key: string]: agentifm.TaskDefinition };
    
    // environment
    public config: cm.IConfiguration;
    public traceWriter: cm.ITraceWriter;
    public workingDirectory: string;
    public scmPath: string;
    public debugOutput: boolean;
    
    // results
    public result: agentifm.TaskResult;
    public resultMessage: string;

    // output
    public writeConsoleSection(message: string): void {
        throw DOMException.NOT_SUPPORTED_ERR
    }
    
    // status
    public setTaskStarted(name: string): void {
        throw DOMException.NOT_SUPPORTED_ERR
    }

    public setTaskResult(name: string, result: agentifm.TaskResult): void {
        throw DOMException.NOT_SUPPORTED_ERR
    }

    public registerPendingTask(id: string, name: string, order: number): void {
        throw DOMException.NOT_SUPPORTED_ERR
    }

    public setJobInProgress(): void {
        throw DOMException.NOT_SUPPORTED_ERR
    }

    // output channel
    public finishJob(result: agentifm.TaskResult): Q.Promise<any> {
        throw DOMException.NOT_SUPPORTED_ERR
    }

    public debug(message: string): void {
    }

    public error(message: string): void {
    }

    public info(message: string): void {
        console.log(message);
    }

    public verbose(message: string): void {
        console.log(message);
    }

    public warning(message: string): void {
    }

    //trace
    public trace(message: string): void {
    }
}