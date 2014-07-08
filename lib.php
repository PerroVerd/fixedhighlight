<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

defined('MOODLE_INTERNAL') || die();

/**
 * Plugin for Moodle highlight with predefined colors buttons.
 *
 * @package   tinymce_fixedhighlight
 * @copyright 2014 EOIBCNVH 
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class tinymce_fixedhighlight extends editor_tinymce_plugin {
    /** @var array list of buttons defined by this plugin */
    protected $buttons = array('fixedhighlight1', 'fixedhighlight2', 'fixedhighlight3', 'fixedhighlight4');

    protected function update_init_params(array &$params, context $context,
            array $options = null) {

        if ($row = $this->find_button($params, 'unlink')) {
            // Add button after 'unlink'.
            $this->add_button_after($params, $row, 'fixedhighlight1', 'unlink');
            $this->add_button_after($params, $row, 'fixedhighlight2', 'unlink');
            $this->add_button_after($params, $row, 'fixedhighlight3', 'unlink');
            $this->add_button_after($params, $row, 'fixedhighlight4', 'unlink');
        } else {
            // Add this button in the end of the first row (by default 'unlink' button should be in the first row).
            $this->add_button_after($params, 3, 'fixedhighlight1');
            $this->add_button_after($params, 3, 'fixedhighlight2');
            $this->add_button_after($params, 3, 'fixedhighlight3');
            $this->add_button_after($params, 3, 'fixedhighlight4');
        }

        // Add JS file, which uses default name.
        $this->add_js_plugin($params);
    }
}
