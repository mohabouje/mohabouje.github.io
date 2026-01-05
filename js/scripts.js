/*!
    Title: Dev Portfolio Template
    Version: 2.0.0
    Last Change: 01/05/2026
    Author: Mohammed Boujemaoui
    Repo: https://github.com/mohabouje/mohabouje.github.io

    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function($) {
    'use strict';

    // Remove no-js class
    $('html').removeClass('no-js');

    // Smooth scroll to section when nav is clicked
    $('header a').on('click', function(e) {
        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        const heading = $(this).attr('href');
        const scrollDistance = $(heading).offset().top;
        const duration = Math.abs(window.pageYOffset - scrollDistance) / 5;

        $('html, body').animate({
            scrollTop: scrollDistance
        }, duration);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#lead-down span').on('click', function() {
        const scrollDistance = $('#lead').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance
        }, 500);
    });

    // Create timeline
    $('#experience-timeline').each(function() {
        const $timeline = $(this);
        const $userContent = $timeline.children('div');

        // Create each timeline block
        $userContent.each(function() {
            $(this).addClass('vtimeline-content')
                   .wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
        });

        // Add icons to each block
        $timeline.find('.vtimeline-point').each(function() {
            $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
        });

        // Add dates to the timeline if exists
        $timeline.find('.vtimeline-content').each(function() {
            const date = $(this).data('date');
            if (date) {
                $(this).parent().prepend(`<span class="vtimeline-date">${date}</span>`);
            }
        });
    });

    // Open mobile menu
    $('#mobile-menu-open').on('click', function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').on('click', function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').on('click', function(e) {
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('#more-projects').fadeIn(300);
        });
    });

})(jQuery);