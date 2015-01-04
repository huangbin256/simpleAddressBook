(function(){
	
	brite.registerView("GroupContact",{

		create: function(data){
			var view = this;
			view.contact = data.contact;
			return $.when(app.contactDao.get(view.contact.id), app.groupContactDao.list({filter:{contactId:view.contact.id}}), app.groupDao.list()).pipe(function(contact, contactGroups, groups){
				view.contact = contact;
				for(var i = 0; i < groups.length; i++){
					for(var j = 0; j < contactGroups.length; j++){
						if(contactGroups[j].groupId == groups[i].id){
							groups[i].checked = true;
							break;
						}
					}
				}

				view.contact.contactGroups = groups;
				return render("GroupContact",view.contact);	
			});
		}, 

		postDisplay: function(){
			var view = this;
			app.contactDao.get(view.contact.id).done(function(contact){
				view.$el.dxPush(contact);
			});
		},

		events:{
			"change; .contact-group":function(event){
				var view = this;
				var $checkbox = $(event.currentTarget);
				var groupId = $checkbox.attr("data-group-id") * 1;

				var groupContact = {};
				groupContact.groupId = groupId;
				groupContact.contactId = view.contact.id;
				if($checkbox.is(":checked")){
					brite.dao("GroupContact").create(groupContact);
				}else{
					brite.dao("GroupContact").delete(JSON.stringify(groupContact));
				}
			}
		}
		
	});

})();