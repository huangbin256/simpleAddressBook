(function(){

	brite.registerView("MainView",{parent:"body"}, {

		create: function(){
			return render("MainView");
		}, 

		init: function(){
			var view = this;
			// display the list view
			return brite.display("GroupListView",view.$el.find(".MainView-leftPanel")).whenInit;
		},

		postDisplay: function(){
			var view = this;
			view.$contentPanel = view.$el.find(".MainView-contentPanel");
		}, 

		docEvents: {

			"APP_CTX_CHANGE": function(event,ctx){
				var view = this;
				var group = {id:"", name: "All"};
				var dfd = $.Deferred();
				if (ctx.params.groupId){
					app.groupDao.get(ctx.params.groupId).done(function(result){
						dfd.resolve(result);
					});
				}else{
					dfd.resolve(group);
				}

				dfd.done(function(group){
					view.groupId = group.groupId;
					
					if(view.$contentPanel.find(".GroupView").size()>0){
						view.$el.trigger("REFRESH_CONTENT", group);
					}else{
						view.$contentPanel.bEmpty();
						brite.display("GroupView",view.$el.find(".MainView-contentPanel"),{group:group});
					}
				});
			}

		}

	});

})();
