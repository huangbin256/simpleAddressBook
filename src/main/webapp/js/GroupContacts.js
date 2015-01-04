(function(){
	
	brite.registerView("GroupContacts",{

		create: function(data){
			var view = this;
			view.group = data.group;
			return render("GroupContacts",view.group);
		}, 


		postDisplay: function(){
			var view = this;
			view.$tbody = view.$el.find("tbody");
			refreshContent.call(view);

		},

		events: {
			"click; .glyphicon-remove": function(event){
				var view = this;
				var $removeIcon = $(event.currentTarget);
				var $contact = $removeIcon.closest("tr");
				var contactId = $contact.attr("data-entity-id");
				app.contactDao.delete(contactId);
			},

			"keyup; input.newContact": function(event){
				var view = this;
				var $input = $(event.target);
				var key = event.which; 
				// press enter
				if (key === 13){
					var newContact = {};
					newContact.email = $input.val();
					newContact.groupId = view.group.id * 1;
					brite.dao("Contact").create(newContact).done(function(result){
						if(view.group.id){
							var groupContact = {};
							groupContact.groupId = view.group.id * 1;
							groupContact.contactId = result.id;
							brite.dao("GroupContact").create(groupContact);
						}
					});
				}
				// press esc
				else if (key === 27){
					$input.val("");
				}
			}

		} // /events
	});

	// --------- Private Methods --------- //
	function refreshContent(){
		var view = this;
		app.contactDao.list({filter:{groupId:view.group.id}}).done(function(result){
			var html = render("GroupContacts-tbody",{id:view.group.id,contacts:result});			
			view.$tbody.bEmpty().html(html);
			if(view.$el){
				view.$el.find("input.newContact").focus();
			}
		});
	}
	// --------- /Private Methods --------- //	

})();