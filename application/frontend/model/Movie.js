Ext.define('CImeetsExtJS.model.Movie', {
    extend: 'Ext.data.Model',
	
	fields: [{
        name: 'id',
        type: 'int'
    },{
        name: 'title',
        type: 'string'
    },{
        name: 'year',
        type: 'int'
    },{
        name: 'runtime',
        type: 'int'
    },{
        name: 'description',
        type: 'string'
    }],
    
    idProperty: 'id',
    
    proxy: {
        type: 'ajax',
        api: {
        	create: 'movies/create', 
            read: 'movies/read',
            update: 'movies/update',
            destroy: 'movies/destroy',
        },
        reader: {
            type: 'json',
            root: 'items',
            totalProperty: 'total',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'items'
        }
    }
});