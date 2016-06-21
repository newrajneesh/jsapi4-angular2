var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', './map.component', './attribute.component', './points.model', 'esri/geometry/Point', 'esri/Graphic', 'esri/Color', 'esri/symbols/SimpleMarkerSymbol'], function (require, exports, core_1, map_component_1, attribute_component_1, points_model_1, Point, Graphic, Color, SimpleMarkerSymbol) {
    "use strict";
    var AppComponent = (function () {
        function AppComponent(pointsModel) {
            this.pointsModel = pointsModel;
            this._pointIndex = 0;
            this._pointLongitude = -82.43;
            this._pointLatitude = 35.61;
            this._defaultSymbol = new SimpleMarkerSymbol({
                style: 'circle',
                size: 12,
                color: new Color("#000000")
            });
        }
        AppComponent.prototype.ngOnInit = function () {
        };
        AppComponent.prototype.onClearClicked = function () {
            this.pointsModel.clear();
        };
        AppComponent.prototype.onAddClicked = function () {
            this._pointIndex++;
            this._pointLatitude += 0.001;
            this._pointLongitude += 0.001;
            var g = new Graphic({
                geometry: new Point({
                    x: this._pointLongitude,
                    y: this._pointLatitude,
                    spatialReference: 4326
                }),
                attributes: {
                    index: this._pointIndex
                },
                symbol: this._defaultSymbol
            });
            this.pointsModel.addPoint(g);
        };
        AppComponent.prototype.onViewCreated = function () {
            console.log('view created');
        };
        AppComponent = __decorate([
            core_1.Component({
                directives: [map_component_1.MapComponent, attribute_component_1.AttributeComponent],
                selector: 'my-app',
                templateUrl: './app/app.component.html'
            }), 
            __metadata('design:paramtypes', [points_model_1.PointsModel])
        ], AppComponent);
        return AppComponent;
    }());
    exports.AppComponent = AppComponent;
});
//# sourceMappingURL=app.component.js.map