FlowRouter.route('/', {
    name: 'home',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'home'});
    }
});

FlowRouter.route('/staff', {
    name: 'staff',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'staff'});
    }
});


FlowRouter.route('/staffInsert', {
    name: 'staffInsert',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'staffInsert'});
    }
});

FlowRouter.route('/staffUpdate/:id', {
    name: 'staffUpdate',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'staffUpdate'});
    }
});
FlowRouter.route('/about', {
    name: 'about',
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout', {content: 'about'});
    }
});
