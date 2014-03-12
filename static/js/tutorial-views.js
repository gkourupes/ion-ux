// Views are backbone objects responsible for updating html elements of
// the page.  The "el" property represents the ID of an HTML element that 
// is on the page.  The render function is responsible for populating the
// contents of the Views element.
//
// see http://backbonejs.org/#View for detailed documentation.


// renders the contents of the Header div of the page frame.
TUTORIAL_UX.Views.Header = Backbone.View.extend({
	el: '#header',
	initialize: function() {
		this.model.on('change:html', this.render, this);
	},
	render: function(){
		console.log('rendering header view');
		this.$el.html(this.model.html);
		return this;
	}
});

// responds to model in two ways.  Captures fetched template
// and renders with loaded template when data (session) is
// fetched.
TUTORIAL_UX.Views.Topbar = Backbone.View.extend({
	el: '#topbar',
	initialize: function(){
		this.model.on('change:html', this.setTemplate, this);
		this.model.on('change:session', this.render, this);
	},
	setTemplate: function(){
		console.log('setting topbar template');
		this.template = _.template(this.model.html);
		return this;
	},
	render: function(){
		console.log('rendering topbar view');
		this.$el.html(this.template(this.model.data));
		return this;
	}
});

// renders the contents of the Left div of the page frame.
TUTORIAL_UX.Views.Sidebar = Backbone.View.extend({
	el: '#left',
	initialize: function(){
		this.model.on("change:html", this.render, this);
	},
	render: function(){
		console.log('rendering sidebar view');
		this.$el.html(this.model.html);
		return this;
	}
});

// renders the contents of the Subheader div of the page frame.
TUTORIAL_UX.Views.Subheader = Backbone.View.extend({
	el: '#subheader',
	render: function(){
		this.$el.html('Subheader');
		return this;
	}
});

// renders the contents of the dynamic-container div of the page frame.
TUTORIAL_UX.Views.Main = Backbone.View.extend({
	el: '#dynamic-container',
	initialize: function(){
		this.model.on("change:html", this.render, this);
	},
	render: function(){
		console.log('rendering main view');
		this.$el.html(this.model.html);
		return this;
	}
});