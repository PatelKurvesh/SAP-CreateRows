sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
	
], function(Controller, JSONModel) {
	"use strict";


	return Controller.extend("vsdSAP-CreateRows.controller.View1", {

			onInit: function() {
				var oJson = new JSONModel({
					Data: []
				});
			
				this.getView().setModel(oJson, "Json");
				this.oModel = this.getView().getModel("Json");
				this.aData = this.oModel.getProperty("/Data");
			},

			onCreate: function() {
				var oInput = this.oModel.getProperty("/InputValue");
				if (oInput > 0) {
					for (var i = 1; i <= oInput; i++) {
						this.onPush();
					}
				} else {
					this.getView().byId("lbl").setText("Please Enter Valid Positive Number");
				}
			},

			onPush: function() {
				var oData = this.oModel.getProperty("/Data");
				oData.push({
					"No": null,
					"Name": null
				});
				this.oModel.setProperty("/Data", oData);
				this.oModel.refresh(true);
			},

		onAdd : function() {
			this.onPush();
		},

		onSave: function() {

			
			sap.m.MessageToast.show("Data is Store Successfully");
			this.oModel.setProperty("/newData", this.aData);

		}

	});
});