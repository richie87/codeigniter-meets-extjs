Ext.define('CImeetsExtJS.view.movie.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.movie-window',
    height: 420,
    width: Ext.getBody().getViewSize().width / 2,
    modal: true,
    title : 'Movie',
	iconCls: 'fam film',

    initComponent: function() {
        Ext.apply(this, {
            layout: 'border',
            items: [{
                xtype: 'movie-form',
				flex: 1,
				region: 'center'
            }],
			
			dockedItems: [{
				xtype: 'toolbar',
				dock: 'bottom',
				items: ['->', {
					iconCls: 'fam cancel',
					text: 'Cancel',
					scope: this,
					handler: this.close
				},{
					iconCls: 'fam disk',
					text: 'Save',
					action: 'save'
				}]
			}]
        });

        this.callParent(arguments);
    }
});