sap.ui.controller("addresscomplete.businesspartner", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf addresscomplete.businesspartner
*/
	// inputId: '',

	  onInit: function () {
	   
	  },
	
		onAddressTyped: function(oEvent){
			var sTerm = oEvent.getParameter("suggestValue");
			if (sTerm.length >= 8){
				var aFilters = [];
			    if (sTerm) {	    
			    // google place URL for Ajax call
			   	var url = "proxy/http/maps.googleapis.com/maps/api/geocode/json?address=" + sTerm + "&sensor=false"			    
			     var oModel1 = new sap.ui.model.json.JSONModel(); 			     
			     //Ajax Call Google Place API with Callback function and JSONP data type     
		          $  
		                              .ajax({  
		                                        url : url,  
		                                        jsonpCallback : 'getJSON',  
		                                        contentType : "application/json",  
		                                        dataType : 'json',  
		                                        success : function(data, textStatus, jqXHR) {  
		                                         // set formatted address Json file to Odata Modle        
		                                        	oModel1.setData(data);  
		                                                  sap.ui.getCore().setModel(oModel1);
		                                           // Binding formatted address with suggestion items   
		                                                  aFilters.push(new sap.ui.model.Filter("formatted_address", sap.ui.model.FilterOperator.Contains, ""));
		                                		          oEvent.getSource().getBinding("suggestionItems").filter(aFilters);	           
		                                        }
		                              });
		          	          
			};    
		};
		},	  
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf addresscomplete.businesspartner
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf addresscomplete.businesspartner
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf addresscomplete.businesspartner
*/
//	onExit: function() {
//
//	}

});