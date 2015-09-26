Router.map(function() {
  return this.route('dashboard/reactionFaker', {
    controller: ShopAdminController,
    path: 'dashboard/settings/reaction-faker',
    template: 'reactionFaker'
  });
});
