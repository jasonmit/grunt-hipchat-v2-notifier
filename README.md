# Grunt: Hipchat Notifier
> Send grunt messages to a Hipchat channel

[![status](https://sourcegraph.com/api/repos/github.com/logankoester/grunt-hipchat-v2-notifier/badges/status.png)](https://sourcegraph.com/github.com/logankoester/grunt-hipchat-v2-notifier)
[![Dependency Status](https://david-dm.org/logankoester/grunt-hipchat-v2-notifier.png)](https://david-dm.org/logankoester/grunt-hipchat-v2-notifier)
[![devDependency Status](https://david-dm.org/logankoester/grunt-hipchat-v2-notifier/dev-status.png)](https://david-dm.org/logankoester/grunt-hipchat-v2-notifier#info=devDependencies)
[![Gittip](http://img.shields.io/gittip/logankoester.png)](https://www.gittip.com/logankoester/)

[![NPM](https://nodei.co/npm/grunt-hipchat-v2-notifier.png?downloads=true)](https://nodei.co/npm/grunt-hipchat-v2-notifier/)

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-hipchat-v2-notifier --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-hipchat-v2-notifier');
```

## The "hipchat_notifier" task

### Overview
In your project's Gruntfile, add a section named `hipchat_notifier` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  hipchat_notifier: {

    // You probably want to set your Hipchat options globally...

    options: {
      authToken: "", // Create an authToken at https://hipchat.com/admin/api
      roomId: "" // Numeric Hipchat roomId or room name
    },

    // Now create as many messages as you like!

    hello_grunt: {
      options: {
        message: "Hello!", // A message to send
        from: "Grunt", // Name for the sender
        color: "purple", // Color of the message
        message_format: "html" // Can either be 'text' or 'html' format
      }
    },

    // Send dynamic message based off anything Node/Grunt/Javascript can do!
    
    dynamic_hello_grunt: {
      options: {
        message: function() { // Functions must return a string
          var pkg = grunt.config.data.pkg;
          return 'Running grunt on ' + pkg.name + ' on version ' + pkg.name;
        },
        from: function() {  // Return the run-time user, or something more creative.
          return someUsernameGenerator() || process.env['USER'];
        },
        // Change color dynamically based on some global state, function response, etc
        color: function() {
          return (grunt.config.data.someBoolean && allIsWell()) ? 'green' : 'red';
        }
      }
    }

  },
})
```

## Release History
* 0.2.2 - Updated hipchat-client, fixes syntax error in example
* 0.2.1 - Updated hipchat-client - roomId can now be either numeric or room name.
* 0.2.0 - Added support for Hipchat message_format to allow for emoticons and @mentions
* 0.1.1 - Added support for dynamic messaging
* 0.1.0 - First release


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/logankoester/grunt-hipchat-v2-notifier/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

[![xrefs](https://sourcegraph.com/api/repos/github.com/logankoester/grunt-hipchat-v2-notifier/badges/xrefs.png)](https://sourcegraph.com/github.com/logankoester/grunt-hipchat-v2-notifier)
[![funcs](https://sourcegraph.com/api/repos/github.com/logankoester/grunt-hipchat-v2-notifier/badges/funcs.png)](https://sourcegraph.com/github.com/logankoester/grunt-hipchat-v2-notifier)
[![top func](https://sourcegraph.com/api/repos/github.com/logankoester/grunt-hipchat-v2-notifier/badges/top-func.png)](https://sourcegraph.com/github.com/logankoester/grunt-hipchat-v2-notifier)
[![library users](https://sourcegraph.com/api/repos/github.com/logankoester/grunt-hipchat-v2-notifier/badges/library-users.png)](https://sourcegraph.com/github.com/logankoester/grunt-hipchat-v2-notifier)
[![authors](https://sourcegraph.com/api/repos/github.com/logankoester/grunt-hipchat-v2-notifier/badges/authors.png)](https://sourcegraph.com/github.com/logankoester/grunt-hipchat-v2-notifier)
[![Total views](https://sourcegraph.com/api/repos/github.com/logankoester/grunt-hipchat-v2-notifier/counters/views.png)](https://sourcegraph.com/github.com/logankoester/grunt-hipchat-v2-notifier)
[![Views in the last 24 hours](https://sourcegraph.com/api/repos/github.com/logankoester/grunt-hipchat-v2-notifier/counters/views-24h.png)](https://sourcegraph.com/github.com/logankoester/grunt-hipchat-v2-notifier)
