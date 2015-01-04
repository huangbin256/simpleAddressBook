(function(){

	brite.registerView("GroupView",{

		create: function(data){
			var view = this;
			view.group = data.group;
			return render("GroupView",{group:view.group});
		},

		postDisplay: function(data){
			var view = this; 

			// build the list of tabNames
			// {tabName:$tabLi,...}
			view.tabs = {};
			view.$el.find("li[data-tab]").each(function(idx,tabLi){
				var $tabLi = $(tabLi);
				var tabName = $tabLi.attr("data-tab");
				view.tabs[tabName] = $tabLi;

			});

			view.$contactsTabLi = view.$el.find(".tab-contacts");
			view.$tabCtn = view.$el.find(".tabctn");


			refreshContent.call(view);
		}, 

		daoEvents: {

			"dataChange; Group": function(event){
				var view = this;
				var daoEvent = event.daoEvent;
				var group = daoEvent.result;
				if (group.id === view.group.id){
					view.group = group;
					view.$el.find("[data-prop='Group.name']").empty().html(group.name);
				}
			}, 

			"dataChange; Contact": function(){
				var view = this;
				refreshContent.call(view);
			}
		}, 

		docEvents: {
			"REFRESH_CONTENT": function(event, group){
				var view = this;
				view.group = group;
				refreshContent.call(this);
				view.$el.find("[data-prop='Group.name']").empty().html(group.name);
				view.$el.attr("data-entity-id", view.group.id);
			}
		}

	});


	// --------- Private Methods --------- //

	// refresh the tab lis with the appropriate one selected, and the tab content to match the selected tab0
	function refreshContent(){

		var view = this;
		// first, determine the type of tab we will show
		var tabType = "contacts"; // "contacts", "settings", "contact"
		if (app.ctx.pathAt(0) === "contact"){
			tabType = "contact";
		}

		// regardless of the tab, remove the "li.active", and empty the tab content
		view.$el.find("li.active").removeClass("active");
		view.$tabCtn.bEmpty();

		// render contacts
		if (tabType === "contacts"){
			brite.display("GroupContacts", view.$tabCtn, {group:view.group});
			view.$contactsTabLi.addClass("active");
		}

		// render a specific contact
		else if (tabType === "contact"){
			// remove eventual contact tab
			view.$el.find(".tab-contact").remove();

			var contactId = app.ctx.pathAt(1) * 1;
			// build the temporary contact info
			var contact = {
				id: contactId
			};

			// create and activate the contact tab
			var $contactTabLi = $(render("GroupView-contact-tab-li",{groupId:view.group.id,contactId:contactId}));
			$contactTabLi.addClass("active");
			view.$contactsTabLi.after($contactTabLi);

			// render the content 
			brite.display("GroupContact",view.$tabCtn.bEmpty(),{contact:contact});
		}

	}
	// --------- /Private Methods --------- //


})();