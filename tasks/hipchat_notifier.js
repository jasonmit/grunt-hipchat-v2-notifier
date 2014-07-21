(function() {
  module.exports = function(grunt) {
    var Hipchatter;
    Hipchatter = require('hipchatter');
    return grunt.registerMultiTask('hipchat_notifier', 'Send a message to a Hipchat room', function() {
      var done, hipchat, options, params, _ref;
      grunt.config.requires('hipchat_notifier.options.authToken');
      grunt.config.requires('hipchat_notifier.options.roomId');
      options = this.options({
        color: 'yellow',
        notify: false,
        message: 'Hello world',
        message_format: 'html'
      });
      grunt.verbose.writeflags(options, 'Options');
      grunt.verbose.writeln("Token: " + options.authToken);
      done = this.async();
      hipchat = new Hipchatter(options.authToken);
      grunt.verbose.writeln("Room: " + options.roomId);
      grunt.log.writeln('Sending Hipchat notification...');
      params = {
        color: (_ref = typeof options.color === "function" ? options.color() : void 0) != null ? _ref : options.color,
        message: options.message,
        message_format: options.message_format,
        notify: options.notify,
        token: options.token
      };
      return hipchat.notify(options.roomId, params, function(success) {
        grunt.log.writeln('Notification sent!');
        return done();
      });
    });
  };

}).call(this);
