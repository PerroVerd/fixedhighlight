/**
 * @author Celso Gonzalez
 */

(function() {
    // Do not load language pack in moodle plugins.

    tinymce.create('tinymce.plugins.fixedhighlightPlugin', {
        /**
         * Initializes the plugin, this will be executed after the plugin has been created.
         * This call is done before the editor instance has finished it's initialization so use the onInit event
         * of the editor instance to intercept that event.
         *
         * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
         * @param {string} url Absolute URL to where the plugin is located.
         */
        init : function(ed, url) {
            // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceMoodleNolink');
            ed.addCommand('mceFixedHighlight1', function() {
               ed.selection.setContent('<span style="background-color:#0F0">' + ed.selection.getContent() + '</span>');
            });
            ed.addCommand('mceFixedHighlight2', function() {
               ed.selection.setContent('<span style="background-color:yellow">' + ed.selection.getContent() + '</span>');
            });
            ed.addCommand('mceFixedHighlight3', function() {
               ed.selection.setContent('<span style="background-color:#0FF">' + ed.selection.getContent() + '</span>');
            });
            ed.addCommand('mceFixedHighlight4', function() {
               ed.selection.setContent('<span style="background-color:red">' + ed.selection.getContent() + '</span>');
            });


            // Register moodlenolink button
            ed.addButton('fixedhighlight1', {
                title : 'fixedhighlight1.desc',
                cmd : 'mceFixedHighlight1',
                image : url + '/img/highlight_green.png'
            });
            ed.addButton('fixedhighlight2', {
                title : 'fixedhighlight2.desc',
                cmd : 'mceFixedHighlight2',
                image : url + '/img/highlight_yellow.png'
            });
            ed.addButton('fixedhighlight3', {
                title : 'fixedhighlight3.desc',
                cmd : 'mceFixedHighlight3',
                image : url + '/img/highlight_blue.png'
            });
            ed.addButton('fixedhighlight4', {
                title : 'fixedhighlight4.desc',
                cmd : 'mceFixedHighlight4',
                image : url + '/img/highlight_red.png'
            });

        },

        /**
         * Returns information about the plugin as a name/value array.
         * The current keys are longname, author, authorurl, infourl and version.
         *
         * @return {Object} Name/value array containing information about the plugin.
         */
        getInfo : function() {
            return {
                longname : 'fixedhighlight plugin',
                author : 'Celso Gonzalez',
                authorurl : 'http://moodle.com/hq',
                infourl : 'http://docs.moodle.org/en/TinyMCE',
                version : "1.1"
            };
        }
    });

    // Register plugin.
    tinymce.PluginManager.add('fixedhighlight', tinymce.plugins.fixedhighlightPlugin);
})();
