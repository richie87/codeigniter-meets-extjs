Ext.define('CImeetsExtJS.controller.Movies', {
    extend:	'Ext.app.Controller',
    stores:	['Movies'],
    models:	['Movie'],
    views: 	['movie.Grid', 'movie.Window', 'movie.Form', 'movie.Surface'],

    refs: [{
		ref: 'movieGrid',
		selector: 'movie-grid'
	}],
	
    init: function() {
		this.contextmenu = Ext.create('Ext.menu.Menu', {
            id: 'movie-grid-ctx',
            items: [{
                text: 'Edit',
                action: 'update-movie',
                iconCls: 'fam book_edit'
            }, {
                text: 'Delete',
                action: 'delete-movie',
                iconCls: 'fam delete'
            }]
        });
		
        this.control({
			'movie-grid dataview': {
				itemdblclick: this.addEditMovie,
				itemcontextmenu: this.listContextMenu,
            },
            'movie-grid button[action=add]': {
            	click: this.addEditMovie
            },
			'menu[id=movie-grid-ctx] > menuitem': {
                click: this.listContextMenuItem
            },            
            'movie-window button[action=save]': {
                click: this.saveMovie
            }
        });
    },
	
	listContextMenu: function(view, record, item, index, event) {
        event.stopEvent();
        view.up('panel').getSelectionModel().select(index);
        this.contextmenu.showAt(event.getXY());
        return false;
    },

    listContextMenuItem: function(item) {
        var grid = this.getMovieGrid(),
			record = grid.getSelectionModel().getLastSelected();
       
        if (item.action === 'update-movie') {
            this.addEditMovie(grid, record);
        }
        
        if (item.action === 'delete-movie') {
            this.deleteMovie(grid, record);
        }      
    },
    
    addEditMovie: function(grid, record) {
		var window = Ext.create('CImeetsExtJS.view.movie.Window'),
			form = window.down('form');
		
		if(record) {
			form.loadRecord(record);
        }
		
		window.show();
    },    
    
    saveMovie: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        
		if (form.getForm().isValid()) {
			if (values.id > 0){
				record.set(values);
			} else{
				record = Ext.create('CImeetsExtJS.model.Movie');
				record.set(values);
				this.getMoviesStore().add(record);
			}
			
			win.close();
			this.getMoviesStore().sync().load();
        }
    },
	
	deleteMovie: function(grid, record) {
        if (record) {
            Ext.Msg.confirm('Delete', 'Do you really want to delete this movie?', function(btn) {
                if (btn === 'yes') {
                    grid.getStore().remove(record);
                    grid.getStore().sync();               
                }
            });
        }
    }
});
