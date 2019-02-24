"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var element_registry_1 = require("nativescript-angular/element-registry");
var nativescript_fresco_directives_1 = require("./nativescript-fresco-directives");
var __1 = require("../");
var TNSFrescoModule = (function () {
    function TNSFrescoModule() {
    }
    TNSFrescoModule = __decorate([
        core_1.NgModule({
            declarations: [nativescript_fresco_directives_1.NSFRESCO_DIRECTIVES],
            exports: [nativescript_fresco_directives_1.NSFRESCO_DIRECTIVES],
        })
    ], TNSFrescoModule);
    return TNSFrescoModule;
}());
exports.TNSFrescoModule = TNSFrescoModule;
element_registry_1.registerElement("FrescoDrawee", function () { return __1.FrescoDrawee; });
//# sourceMappingURL=nativescript-fresco.module.js.map