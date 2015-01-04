var app = app || {};

(function(){
	
	// --------- Remote Das --------- //
	app.groupDao = brite.registerDao(new RemoteDaoHandler("Group"));
	app.contactDao  = brite.registerDao(new RemoteDaoHandler("Contact"));
	app.groupContactDao  = brite.registerDao(new RemoteDaoHandler("GroupContact"));
	// --------- /Remote Das --------- //


})();