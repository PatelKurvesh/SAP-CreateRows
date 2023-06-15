sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";

	return Controller.extend("vsdSAP-CreateRows.controller.View1", {
		
		onInit : function(){
			var oJson = new JSONModel({
				Data : []
			});
			this.getView().setModel(oJson , "Json");
		},
		
		onCreate : function(){
			var oModel = this.getView().getModel("Json");
			var oInput = oModel.getProperty("/InputValue");
			if (oInput){
				for (var i = 1 ; i <= oInput ; i++ ){
					var oData = oModel.getProperty("/Data");
					oData.push({
						"No" : null,
						"Name" : null
					});
					oModel.setProperty("/Data" , oData);
					oModel.refresh(true);
				}
			}
		},
		
		onSave : function(){
			var oModel = this.getView().getModel("Json");
			var oNewData = oModel.getProperty("/Data");
			oModel.setProperty("/newData" , oNewData);
		}

	});
});