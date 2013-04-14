Ext.Loader.setConfig({enabled: true});

Ext.require('Ext.data.StoreManager', function() {
    var messages = {
        'destroy': {
            headline: 'Deleted',
            text: 'Data has been deleted.'
        },
        'update': {
            headline: 'Updated',
            text: 'Data were updated.'
        },
        'create': {
            headline: 'Created',
            text: 'Data were stored.'
        }
    };

    Ext.data.StoreManager.on('add', function(index, store) {
        store.on('write', function(proxy, operation) {
            if (operation.action == 'update' || operation.action == 'destroy' || operation.action == 'create') {
                var message = messages[operation.action],
                    panel = Ext.get('msg-div') || Ext.core.DomHelper.insertFirst(document.body, {
                        id: 'msg-div'
                    }, true),
                    toast = Ext.core.DomHelper.append(panel, '<div class="msg"><h3>' + message.headline.toUpperCase() + '</h3><p>' + (operation.resultSet.message || message.text) + '</p></div>', true);

                toast.hide();
                toast.slideIn('t').ghost("t", {
                    delay: 2000,
                    remove: true
                });
            }
        });
    });
});

Ext.application({
    name: 'CImeetsExtJS',
	appFolder: 'application/frontend',
    controllers: ['Surface', 'Movies'],
    autoCreateViewport: true
});