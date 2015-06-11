Router.configure({
  layoutTemplate: 'global',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.onBeforeAction('loading');