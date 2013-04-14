Ext.onReady(function(){
    Ext.QuickTips.init();
 
    var login = new Ext.FormPanel({
        labelWidth: 80,
        url: 'auth/login', 
        frame: true,
        title: 'Enter login data', 
        defaultType: 'textfield',
		monitorValid: true,
        items: [{ 
			fieldLabel: 'Username', 
			name: 'username', 
			allowBlank: false 
		},{ 
			fieldLabel: 'Password', 
			name: 'password', 
			inputType: 'password', 
			allowBlank: false
		}],

		buttons:[{ 
			text: 'Login',
			formBind: true,
			id: 'submit',
			width:220,
			handler: function(){
				login.getForm().submit({ 
					method: 'POST', 
					waitTitle: 'Connecting', 
					waitMsg: 'Sending data...',
					success: function(){
						var redirect = '/'; 
						window.location = redirect;
					},
					failure: function(form, action){
						if(action.failureType == 'server'){ 
							Ext.Msg.alert('Login failed!', 'Login data is incorrect!'); 
						} else { 
							Ext.Msg.alert('Warning!', 'The authentication server is not responding : ' + action.response.responseText); 
						}
						
						login.getForm().reset(); 
					} 
				}); 
			}
		}]
    });
	
    var win = new Ext.Window({
        layout: 'fit',
        closable: false,
		height: 130,
        resizable: false,
        border: false,
        items: [login]
	});
	win.show();
});