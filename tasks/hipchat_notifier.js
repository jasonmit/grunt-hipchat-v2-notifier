(function() {
  module.exports = function(grunt) {
    var HipchatClient;
    HipchatClient = require('hipchatter');
    return grunt.registerMultiTask('hipchatter', 'Send a message to a Hipchat room', function() {
      var done, hipchat, options, params, _ref, _ref1;
      grunt.config.requires('hipchat_notifier.options.authToken');
      grunt.config.requires('hipchat_notifier.options.roomId');
      options = this.options({
        from: 'GruntJS',
        color: 'yellow',
        notify: 0,
        message_format: 'html'
      });
      grunt.verbose.writeflags(options, 'Options');
      grunt.verbose.writeln("Token: " + options.authToken);
      done = this.async();
      hipchat = new Hipchatter(options.authToken);
      grunt.verbose.writeln("Room: " + options.room);
      grunt.log.writeln('Sending Hipchat notification...');
      params = {
        from: (_ref = typeof options.from === "function" ? options.from() : void 0) != null ? _ref : options.from,
        color: (_ref1 = typeof options.color === "function" ? options.color() : void 0) != null ? _ref1 : options.color,
        notify: options.notify,
        message: options.message(),
        message_format: options.message_format
      };
      return hipchat.notify(options.roomId, params, function(success) {
        grunt.log.writeln('Notification sent!');
        return done();
      });
    });
  };

}).call(this);
