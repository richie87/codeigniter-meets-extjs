Ext.define('CImeetsExtJS.view.movie.Surface', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.movie-surface',
    
    initComponent: function() {
        Ext.apply(this, {
            id: 'movie-surface',
            layout: 'border',
            border: false,
            bodyPadding: 0,
            
            items: [{
				xtype: 'movie-grid',
				region: 'center'
			}]
        });

        this.callParent(arguments);
    }
});