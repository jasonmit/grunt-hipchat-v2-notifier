#
# * grunt-hipchat-v2-notifier
# * https://github.com/logankoester/grunt-hipchat-v2-notifier
# *
# * Copyright (c) 2013-2014 Logan Koester
# * Licensed under the MIT license.
#
module.exports = (grunt) ->
  Hipchatter = require 'hipchatter'

  grunt.registerMultiTask 'hipchat_notifier', 'Send a message to a Hipchat room', ->
    grunt.config.requires 'hipchat_notifier.options.roomId'

    options = @options(
      color: 'yellow'
      notify: false
      message: 'Hello world'
      message_format: 'html'
    )

    grunt.verbose.writeflags options, 'Options'

    grunt.verbose.writeln "Token: #{options.authToken}"
    done = @async()
    hipchat = new Hipchatter(options.authToken)

    grunt.verbose.writeln "Room: #{options.roomId}"
    grunt.log.writeln 'Sending Hipchat notification...'

    params =
      color: options.color?() ? options.color
      message: options.message
      message_format: options.message_format
      notify: options.notify
      token: options.token

    hipchat.notify options.roomId, params, (success) ->
      grunt.log.writeln 'Notification sent!'
      done()
