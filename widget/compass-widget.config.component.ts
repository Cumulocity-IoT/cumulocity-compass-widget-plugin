/*
* Copyright (c) 2019 Software AG, Darmstadt, Germany and/or its licensors
*
* SPDX-License-Identifier: Apache-2.0
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
 */
import { Component, Input, OnInit } from "@angular/core";
import * as _ from 'lodash';
import { ControlContainer, NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ICompassConfig } from "./i-compass-config";
import { FetchClient } from "@c8y/client";

@Component({
    selector: 'compass-widget-config-component',
    templateUrl: './compass-widget.config.component.html',
    viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})

export class CompassWidgetConfig implements OnInit {

    @Input() config: ICompassConfig;

    public allLoaded = false;

    oldDeviceId: string = '';
    public supportedSeries: string[];

    constructor(private fetchClient: FetchClient) {
        this.allLoaded = true;
    }

    ngOnInit() {
        // Populate the dropdown data if a device id has been previously selected
        if (this.config && this.config.device && this.config.device.id) {
            this.loadFragmentSeries();
        }
    }

    public async loadFragmentSeries(): Promise<void> {
        if ( !_.has(this.config, "device.id")) {
            console.log("Cannot get Measurement fragment and series because the device id is blank.");
        } else {
            if (this.oldDeviceId !== this.config.device.id) {
                this.fetchClient.fetch('/inventory/managedObjects/'+ this.config.device.id +'/supportedSeries').then((resp) => {
                    resp.json().then((jsonResp) => {
                        if(jsonResp !== undefined) {
                            this.supportedSeries = jsonResp.c8y_SupportedSeries;
                        }
                    });
                });
                this.oldDeviceId = this.config.device.id;
            }
        }
    }

}