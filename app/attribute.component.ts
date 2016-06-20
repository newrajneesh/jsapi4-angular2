import { Component, OnInit } from '@angular/core';

import Graphic = require("esri/Graphic");
import Collection = require("esri/core/Collection");
import Point = require("esri/geometry/Point");

import { PointsModel } from './points.model';

@Component({
  selector: 'attribute-display',
  templateUrl: './app/attribute.component.html',
  //providers: [PointsModel]
})
export class AttributeComponent implements OnInit {
  points: Collection;
  constructor(private pointsModel:PointsModel) { }

  ngOnInit() { 
    this.points = this.pointsModel.getPointGraphics();
   }
}