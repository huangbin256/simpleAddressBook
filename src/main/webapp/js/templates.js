Handlebars.templates = Handlebars.templates || {};


// template --- GroupContact ---
Handlebars.templates['GroupContact'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"GroupContact\" data-entity=\"Contact\" data-entity-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n	<h2>#"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + " - <span class=\"dx dx-title\"  data-prop=\"Contact.email\" data-editable=\"\">"
    + escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper)))
    + "</span></h2>\r\n	\r\n	<h4>Groups </h4>\r\n	<div class=\"contact-groups\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.contactGroups : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\r\n</div>";
},"1":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "			<div>\r\n			<input type=\"checkbox\" class=\"contact-group\" ";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.checked : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + " data-group-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" /> "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n			</div>\r\n";
},"2":function(depth0,helpers,partials,data) {
  return "checked";
  },"useData":true}
);

// template --- GroupContacts ---
Handlebars.templates['GroupContacts'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"GroupContacts\">\n	<table class=\"table table-striped table-hover\">\n		<thead>\n			<tr>\n				<th style=\"width:32px\">ID</th>\n				<th>Email</th>\n				<th style=\"width:50px\"></th>\n			</tr>\n		</thead>\n		<tbody>\n\n		</tbody>\n	</table>\n</div>";
  },"useData":true}
);

// template --- GroupContacts-tbody ---
Handlebars.templates['GroupContacts-tbody'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "<tr>\n	<td></td>\n	<td>\n	<input type=\"text\" class=\"newContact form-control\" placeholder=\"New contact\">\n	</td>\n	<td></td>\n</tr>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.contacts : depth0), {"name":"each","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"1":function(depth0,helpers,partials,data,depths) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "	<tr data-entity=\"Contact\" data-entity-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n		<td>"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "</td>\n		<td><a href=\"#contact/"
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "!groupId="
    + escapeExpression(lambda((depths[1] != null ? depths[1].id : depths[1]), depth0))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper)))
    + "</a></td>\n		<td><i class=\"glyphicon glyphicon-remove\"></i></td>\n	</tr>\n";
},"useData":true,"useDepths":true}
);

// template --- GroupListView ---
Handlebars.templates['GroupListView'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"GroupListView\">\n	<h2>Groups</h2>\n	<ul>\n";
  stack1 = this.invokePartial(partials['GroupListView-lis'], '	', 'GroupListView-lis', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</ul>\n	<div class=\"add-new-group\">\n		<a class=\"action\">Add New Group</a>\n		<input type=\"text\" class=\"form-control\" >\n	</div>\n</div>";
},"usePartial":true,"useData":true}
);

// template --- GroupListView-lis ---
Handlebars.templates['GroupListView-lis'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<li class=\"group\" data-entity=\"Group\" data-entity-id=\"\">\n			<a href=\"#\">All</a>\n		</li>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.groups : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "		<li class=\"group\" data-entity=\"Group\" data-entity-id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n			<a href=\"#!groupId="
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</a>\n			<i class=\"glyphicon glyphicon-remove\"></i>\n		</li>\n";
},"useData":true}
);

// template --- GroupView ---
Handlebars.templates['GroupView'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"GroupView\" data-entity=\"Group\" data-entity-id=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">\n		<header>\n			<h2 data-prop=\"Group.name\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.id : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + ">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.name : stack1), depth0))
    + "</h2>\n		</header>\n	\n		<div class=\"GroupView-content\">\n			<ul class=\"nav nav-tabs\">\n				<li class=\"tab-contacts\">\n					<a href=\"#!groupId="
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.id : stack1), depth0))
    + "\">Contacts</a>\n				</li>\n			</ul>\n			<div class=\"tabctn\">\n			</div>\n		</div>\n	</div>";
},"1":function(depth0,helpers,partials,data) {
  return "data-editable=\"\"";
  },"useData":true}
);

// template --- GroupView-contact-tab-li ---
Handlebars.templates['GroupView-contact-tab-li'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li class=\"tab-contact\"><a href=\"#contact/"
    + escapeExpression(((helper = (helper = helpers.contactId || (depth0 != null ? depth0.contactId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"contactId","hash":{},"data":data}) : helper)))
    + "!groupId="
    + escapeExpression(((helper = (helper = helpers.groupId || (depth0 != null ? depth0.groupId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"groupId","hash":{},"data":data}) : helper)))
    + "\">#"
    + escapeExpression(((helper = (helper = helpers.contactId || (depth0 != null ? depth0.contactId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"contactId","hash":{},"data":data}) : helper)))
    + "</a></li>";
},"useData":true}
);

// template --- MainView ---
Handlebars.templates['MainView'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"MainView\">\r\n	<nav class=\"navbar navbar-default\" role=\"navigation\">\r\n		<!-- Brand and toggle get grouped for better mobile display -->\r\n		<div class=\"navbar-header\">\r\n			<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\r\n				<span class=\"sr-only\">Toggle navigation</span>\r\n				<span class=\"icon-bar\"></span>\r\n				<span class=\"icon-bar\"></span>\r\n				<span class=\"icon-bar\"></span>\r\n			</button>\r\n			<a class=\"navbar-brand\" href=\"#\">AddressBook</a>\r\n		</div>\r\n		\r\n		<!-- Collect the nav links, forms, and other content for toggling -->\r\n		<div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n			<ul class=\"nav navbar-nav navbar-right\">\r\n				<li class=\"dropdown\">\r\n					<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">user name <b class=\"caret\"></b></a>\r\n					<ul class=\"dropdown-menu\">\r\n						<li><a href=\"#\">Logoff</a></li>\r\n					</ul>\r\n				</li>\r\n			</ul>\r\n		</div><!-- /.navbar-collapse -->\r\n	</nav>\r\n\r\n	<section class=\"MainView-content\">\r\n		<div class=\"MainView-leftPanel\"></div>\r\n		<div class=\"MainView-contentPanel\"></div>\r\n	</section>\r\n</div>";
  },"useData":true}
);
