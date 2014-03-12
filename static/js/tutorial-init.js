TUTORIAL_UX = {
  Views: {},
  Models:{},
  init: function(){
  	// setup frame views and models

    // instantiate the models
    TUTORIAL_UX.Models.HeaderInstance = new TUTORIAL_UX.Models.Header();
    TUTORIAL_UX.Models.MenuInstance = new TUTORIAL_UX.Models.Menu();
    TUTORIAL_UX.Models.MainInstance = new TUTORIAL_UX.Models.Main();

    // instantiate the views and tie to models
  	TUTORIAL_UX.Views.HeaderInstance = new TUTORIAL_UX.Views.Header({model: TUTORIAL_UX.Models.HeaderInstance});
  	TUTORIAL_UX.Views.SubheaderInstance = new TUTORIAL_UX.Views.Subheader().render();
  	TUTORIAL_UX.Views.SidebarInstance = new TUTORIAL_UX.Views.Sidebar({model: TUTORIAL_UX.Models.MenuInstance});
  	TUTORIAL_UX.Views.MainInstance = new TUTORIAL_UX.Views.Main({model: TUTORIAL_UX.Models.MainInstance});

    // load the data, which will update the views!
    TUTORIAL_UX.Models.HeaderInstance.fetch({
      async: false,
      dataType: 'html'
    });
    TUTORIAL_UX.Models.MenuInstance.fetch({
      async: false,
      dataType: 'html'
    });
    TUTORIAL_UX.Models.MainInstance.fetch({
      async: false,
      dataType: 'html',
      url: '/tutorial/view2'
    });
  }
}