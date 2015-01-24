// ==UserScript==
// @name        Discussion Board Patch
// @namespace   https://lms.rmit.edu.au/webapps/discussionboard
// @version     3
// @grant       none
// @match       https://lms.rmit.edu.au/webapps/discussionboard/do/message*
// @match       https://lms.rmit.edu.au/webapps/discussionboard/do/forum*
// @match       https://lms.rmit.edu.au/webapps/discussionboard/do/conference*
// ==/UserScript==

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **
 * Summary:                                                                   *
 *    Patches the discussion board.                                           *
 *                                                                            *
 * Author(s):                                                                 *
 *    Steven David GRUEBER                                                    *
 *    Shyam NATH - "Shyam Has Your Anomaly Mitigated! :D" (recursive bacronym)*
 *                                                                            *
 * Last Modified:                                                             *
 *    2015-01-24 13:42:25                                                     *
 ** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/******************************************************************************
 * Function retrieves the element with the ID of string.                      *
 * Trevor posted this in the Web Programming discussion board.                *
 ******************************************************************************/
function getId(string) {
  return document.getElementById(string);
}

/******************************************************************************
 * Function retrieves the elements with the class of string.                  *
 ******************************************************************************/
function getClass(string) {
  return document.getElementsByClassName(string);
}

/******************************************************************************
 * Hides the white bar from the top of the page, along with a usability       *
 * feature.                                                                   *
 *                                                                            *
 * The button with the ID "appTabList" would be useful to keep on screen...   *
 * http://stackoverflow.com/a/18681207                                        *
 * ...For the next update! :D                                                 *
 ******************************************************************************/
var obtrusiveHeader           = getId("globalNavPageNavArea");
obtrusiveHeader.style.display = 'none';

/******************************************************************************
 * Marks posts as read, posts must be expanded.                               *
 ******************************************************************************/
var autoMarker            = getId("globalNavPageContentArea");
autoMarker.style.overflow = 'visible';
autoMarker.style.height   = '100%';

/******************************************************************************
 * Expands posts as the user scrolls the page over them.                      *
 ******************************************************************************/
window.addEventListener("scroll", expandAllMessagesInTheTree, false);

/******************************************************************************
 * Keeps the useful side-bar navigational tool on the screen at all times.    *
 *                                                                            *
 * Fails to work on the Web Programming "conference" pages for unkown reasons.*
 * Manual input from the console behaves predictably though...                *
 ******************************************************************************/
var navBox            = getId("navigationPane");
navBox.style.position = 'fixed';
navBox.style.top      = '55px';

/******************************************************************************
 * Keeps the Quick Links attached to the useful side-bar navigational tool.   *
 *                                                                            *
 * Fails to work on the Web Programming "conference" pages for unkown reasons.*
 * Manual input from the console behaves predictably though...                *
 ******************************************************************************/
var quickLinks            = getId("quick_links_wrap");
quickLinks.style.position = 'fixed';
quickLinks.style.top      = '55px';

/******************************************************************************
 * Keeps the drop-down menu and logout buttons on the screen in the top-right *
 * corner.                                                                    *
 *                                                                            *
 * Fails to work on the Web Programming "conference" pages for unkown reasons.*
 * Manual input from the console behaves predictably though...                *
 ******************************************************************************/
var buttons               = getClass("global-nav-bar-wrap");
buttons[0].style.position = 'fixed';
buttons[0].style.top      = '0px';
buttons[0].style.right    = '0px';

/******************************************************************************
 * One of these could be used to make the Help button more visible.           *
 * But it adds a secondary scroll bar...                                      *
 ******************************************************************************/
//document.body.style.paddingTop = '10px';
//document.body.style.marginTop = '10px';

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **
 * G+ Student Group: https://plus.google.com/communities/106999491150778386594*
 *                                                                            *
 * RMIT                                                                       *
 * OUA                                                                        *
 * Bachelor                                                                   *
 * Of                                                                         *
 * Technology                                                                 *
 * Students                                                                   *
 *                                                                            *
We are Robots. We are Students. We do not plagiarise. We do not cheat. Employ us!
 ** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
