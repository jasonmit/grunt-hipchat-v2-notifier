#
# * grunt-hipchat-v2-notifier
# * https://github.com/logankoester/grunt-hipchat-v2-notifier
# *
# * Copyright (c) 2013-2014 Logan Koester
# * Licensed under the MIT license.
#
module.exports = (grunt) ->
  HipchatClient = require 'hipchatter'

  grunt.registerMultiTask 'hipchatter', 'Send a message to a Hipchat room', ->
    grunt.config.requires 'hipchat_notifier.options.authToken'
    grunt.config.requires 'hipchat_notifier.options.roomId'

    options = @options(
      from: 'GruntJS'
      color: 'yellow'
      notify: 0
      message_format: 'html'
    )

    grunt.verbose.writeflags options, 'Options'

    grunt.verbose.writeln "Token: #{options.authToken}"
    done = @async()
    hipchat = new Hipchatter(options.authToken)

    grunt.verbose.writeln "Room: #{options.room}"
    grunt.log.writeln 'Sending Hipchat notification...'

    params =
      from: options.from?() ? options.from
      color: options.color?() ? options.color
      notify: options.notify
      message: options.message()
      message_format: options.message_format

    hipchat.notify options.roomId, params, (success) ->
      grunt.log.writeln 'Notification sent!'
      done()
