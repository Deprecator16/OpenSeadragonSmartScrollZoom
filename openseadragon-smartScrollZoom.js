/**
 * @file OpenSeadragon plugin that allows for adjustment of zoom speed based upon the speed that the user scrolls the mouse wheel
 * @author Bassil Virk
 * @version 1.0.0
 */

 (function($){

    $.Viewer.prototype.smartScrollZoom = function (options) {
        if (!this.smartScrollZoomInstance) {
            options = options || {};
            options.viewer = this;
            this.smartScrollZoomInstance = new $.SmartScrollZoom(options);
        } else {
            this.smartScrollZoomInstance.setOptions(options);
        }
    };

    /**
     * @class SmartScrollZoom
     * @classdesc Changes zoom speed based on scrolling speed
     * @memberof OpenSeadragon
     * @param {Object} options
     * @param {Number} options.timeThreshold - Amount of time that the minimum number of scrolls must occur within before logic begins
     * @param {Number} options.minScrolls - Required number of consecutive scrolls that must take place within the specified time 
     * threshold of each other before logic begins
     * @param {Number} options.minZoomPerScroll - Minimum factor to zoom by with a single scroll. Setting this to 1 will affectively 
     * result in no zoom while logic is not being executing
     * @param {Number} options.maxZoomPerScroll - Maximum zoom factor that can be reached
     * @param {Number} options.zoomIncrement - Amount to increment zoom factor by with every scroll after minScrolls
     */
    $.SmartScrollZoom = function (options) {

    };

    $.SmartScrollZoom.prototype = {
        
        /**
         * Set new options
         * 
         * @function
         * @memberof OpenSeadragon.SmartScrollZoom
         * @since 1.0.0
         * @version 1.0.0
         * @param {Object} options 
         */
        setOptions: function (options) {
            
            //If no new options were specifed, do nothing
            if (!options) {
                return;
            }

            //Set time threshold
            if (options.timeThreshold !== undefined) {
                this.timeThreshold = options.timeThreshold;
            }

            //Set minimum scroll number
            if (options.minScrolls !== undefined) {
                this.minScrolls = options.minScrolls;
            }

            //Set minimum zoom per scroll
            if (options.minZoomPerScroll !== undefined) {
                this.minZoomPerScroll = options.minZoomPerScroll;
            }

            //Set maximum zoom per scroll
            if (options.maxZoomPerScroll !== undefined) {
                this.maxZoomPerScroll = options.maxZoomPerScroll;
            }

            //Set zoom increment
            if (options.zoomIncrement !== undefined) {
                this.zoomIncrement = options.zoomIncrement;
            }
        },
    };
 })