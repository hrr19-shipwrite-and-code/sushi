System.register(['@angular/http', '@angular/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1;
    var ProjectService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            ProjectService = (function () {
                function ProjectService(http) {
                    this.http = http;
                }
                // API call to grab project by Id
                // getProject(id) {
                //   return this.http.get('http://localhost:1337/api/project/id/' + id)
                //     .map(res => res.json())
                // }
                ProjectService.prototype.getProject = function (id) {
                    return {
                        "id": 1,
                        "title": "blah",
                        "description": null,
                        "views": 3,
                        "thumbnail": null,
                        "deploy": null,
                        "github": null,
                        "contribute": null,
                        "progress": null,
                        "createdAt": "2016-11-14T20:09:17.000Z",
                        "updatedAt": "2016-11-16T05:22:39.000Z",
                        "ProfileId": 1,
                        "Profile": {
                            "name": "Mike",
                            "url": "mike"
                        },
                        "Images": ["https://d13yacurqjgara.cloudfront.net/users/684814/screenshots/3091594/creative_agency_-_landing_apge.jpg"],
                        "Comments": [],
                        "Teches": [{ name: 'React' }],
                        "likes": 1
                    };
                };
                ProjectService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ProjectService);
                return ProjectService;
            }());
            exports_1("ProjectService", ProjectService);
        }
    }
});
//# sourceMappingURL=project.services.js.map