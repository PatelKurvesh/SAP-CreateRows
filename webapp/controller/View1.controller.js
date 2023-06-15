sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/export/library",
	"sap/ui/export/Spreadsheet"
], function(Controller,JSONModel,exportLibrary,Spreadsheet) {
	"use strict";
	
	var EdmType = exportLibrary.EdmType;
	
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
			if (oInput>0){
				for (var i = 1 ; i <= oInput ; i++ ){
					var oData = oModel.getProperty("/Data");
					oData.push({
						"No" : null,
						"Name" : null
					});
					oModel.setProperty("/Data" , oData);
					oModel.refresh(true);
				}
			}else{
				this.getView().byId("lbl").setText("Please Enter Valid Positive Number");
			}
		},
		
		onSave : function(){
			sap.m.MessageToast.show("Data is Store Successfully");
			var oModel = this.getView().getModel("Json");
			var oNewData = oModel.getProperty("/Data");
			oModel.setProperty("/newData" , oNewData);
		},
		
	


	});
});