Ext.define('CImeetsExtJS.view.movie.Form', {
	extend: 'Ext.form.Panel',
    alias : 'widget.movie-form',
    border : false,
	bodyPadding : 10,

   initComponent: function() {
	   Ext.apply(this, {
			fieldDefaults: {
				anchor: '100%',
				labelAlign: 'left',
				allowBlank: false,
				combineErrors: true,
				msgTarget: 'side'
			},
	
			items: [{
				xtype: 'textfield',
				name : 'id',
				fieldLabel: 'id',
				hidden:true,
				allowBlank: true
			},{
				xtype: 'textfield',
				name : 'title',
				fieldLabel: 'Title'
			},{
				xtype: 'numberfield',
				allowNegative:false,
				allowDecimals:false,
				maxValue:2050,
				minValue:1900,
				fieldLabel: 'Year',
				name:'year'
			},{
				xtype: 'numberfield',
				allowNegative:false,
				allowDecimals:false,
				maxValue:600,
				minValue:1,
				fieldLabel: 'Runtime in minutes',
				name:'runtime'
			},{
				xtype : 'htmleditor',
				name : 'description',
				height : 250,
				fieldLabel : 'Description',
				enableColors : true,
				enableAlignments : true,
				enableLists : true,
				enableSourceEdit : false,
				enableFontSize : true,
				enableFont : false
			}]
	    });
	

        this.callParent(arguments);
    }
});
