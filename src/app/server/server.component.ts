import { CssSelector } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html"
})
export class ServerComponent{
    serverID = 10;
    serverStatus = 'Online';

    getServerStatus(){
        return this.serverStatus;
    }
}