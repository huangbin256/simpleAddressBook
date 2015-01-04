(function(){

	brite.registerView("GroupListView",{

		create: function(){
			return app.groupDao.list({orderBy:"name"}).pipe(function(result){
				return render("GroupListView",{groups:result});	
			});
		},

		postDisplay: function(){
			var view = this;
			view.$addNewGroup = view.$el.find(".add-new-group");
		}, 

		events: {
			"click; .glyphicon-remove": function(event){
				var view = this;
				var $removeIcon = $(event.currentTarget);
				var $group = $removeIcon.closest(".group");
				var groupId = $group.attr("data-entity-id");
				app.groupDao.delete(groupId);
			}, 

			"click; .add-new-group a": function(event){
				var view = this;
				view.$addNewGroup.addClass("active");
				view.$addNewGroup.find("input").focus();
			}, 

			"keyup; .add-new-group input": function(event){
				var view = this;
				var $input = $(event.target);
				var key = event.which;
				var newGroup;
				// press enter
				if (key === 13){
					newGroup = {name: $input.val()};
					$input.val("");
					app.groupDao.create(newGroup).done(function(groupCreated){
						window.location = "#group/" + groupCreated.id;
						view.$addNewGroup.removeClass("active");
						$input.val("");						
					});
				}
				// press esc
				else if (key === 27){
					view.$addNewGroup.removeClass("active");
					$input.val("");
				}

			}
		},

		daoEvents: {
			"dataChange; Group": refreshLis
		},

		docEvents: {
			"APP_CTX_CHANGE": function(event,ctx){
				selectCurrentGroup.call(this,ctx);
			}
		}

	});	

	// --------- Private Methods --------- //
	function refreshLis(){
		var view = this;
		app.groupDao.list({orderBy:"name"}).done(function(result){
			var html = render("GroupListView-lis",{groups:result});	
			view.$el.find("ul").bEmpty().html(html);
			var groupId = app.ctx.get().groupId;
			selectCurrentGroup.call(view);
		});
	}

	function selectCurrentGroup(newCtx){
		var view = this;
		var ctx = newCtx || app.ctx.get();
		view.$el.find("li[data-entity='Group'].active").removeClass("active");
		if(ctx.params.groupId){
			var $li = view.$el.find("li[data-entity='Group'][data-entity-id='" + ctx.params.groupId + "']");
			$li.addClass("active");
		}else{
			view.$el.find("li[data-entity='Group']:first").addClass("active");
		}
	}
	// --------- /Private Methods --------- //

})();