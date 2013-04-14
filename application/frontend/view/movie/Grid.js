Ext.define('CImeetsExtJS.view.movie.Grid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.movie-grid',
	id: 'movieGrid',
    iconCls: 'fam film',
	title : 'Movies',
	store: 'Movies',
	
	initComponent: function() {
		Ext.apply(this, {
			dockedItems: [{
				xtype: 'toolbar',
				items: [{
					iconCls: 'fam add',
					itemId: 'add',
					text: 'Add Movie',
					action: 'add'
				}]
			},{
				xtype: 'pagingtoolbar',
				dock: 'bottom',
				store: 'Movies',
				displayInfo: true
			}],

			columns: [{
				header: 'ID',
				hidden:true,
				dataIndex: 'id',
				flex:0
			},{
				header: 'Title',
				flex:2,
				dataIndex: 'title'
			},{
				header: 'Runtime in minutes',
				flex:1,
				dataIndex: 'runtime'
			},{
				header: 'Year',
				flex:0,
				dataIndex: 'year'
			}]
        });
		
		this.callParent(arguments);
	}
});
