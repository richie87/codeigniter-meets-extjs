Ext.define('CImeetsExtJS.store.Movies', {
    extend: 'Ext.data.Store',
    model: 'CImeetsExtJS.model.Movie',
    autoLoad: true,
	remoteSort: true,
    pageSize: 45,
    sorters: [{
		property: 'id',
		direction: 'desc'
    }]
});