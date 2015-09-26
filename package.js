Package.describe({
  name: 'gouthamve:reaction-faker',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Fake User, Product and Other data for Reaction Commerce',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/gouthamve/reaction-faker-tests',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  api.use('ecmascript');
  api.use("blaze-html-templates");
  api.use("check");
  api.use("session");


  api.use("random");


  api.use('gbit:faker@0.0.4');
  api.use("reactioncommerce:core@0.8.0");
  api.use('iron:router@1.0.9', 'client');

  api.imply('gbit:faker');

  api.addFiles([
    "client/templates/reactionFaker/reactionFaker.html",
    "client/templates/reactionFaker/reactionFaker.js"
  ], "client");

  api.addFiles([
    "common/routing.js",
    "common/collections.js"
  ]);

  api.addFiles([
    "server/register.js",
    "server/methods/methods.js"
  ], "server");


});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('gouthamve:reaction-faker');
});
