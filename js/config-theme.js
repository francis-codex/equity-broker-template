/* --------------------------------------------------------------------------
 * File        : config-theme.js
 * Author      : indonez
 * Author URI  : http://www.indonez.com
 *
 * Indonez Copyright 2020 All Rights Reserved.
 * -------------------------------------------------------------------------- 
 * javascript handle initialization
    1. Slideshow
    2. Mobile nav button
    3. Tradingview widget
    4. Step hover animations
 * -------------------------------------------------------------------------- */

    'use strict';

    const HomepageApp = {
        //----------- 1. Slideshow -----------
        theme_slideshow: function() {
            UIkit.slideshow('.in-slideshow', {
                autoplay: true,
                autoplayInterval: 8000,
                pauseOnHover: false,
                animation: 'slide',
                minHeight: 440,
                maxHeight: 580
            });
        },
        //---------- 2. Mobile nav button -----------
        theme_mobilenav: function() {
            new MobileNavbar({
                addonButtons: true,                 // options to use addon buttons, set it "false" if you won't use addon buttons
                buttons: [
                    {
                        name: 'Log in',             // custom button name
                        url: '',                    // custom button url
                        type: 'primary',            // button type (default, primary, secondary, danger, text)
                        icon: 'sign-in-alt'         // button icon, you can use all icons from here : https://fontawesome.com/icons?d=gallery&s=solid&m=free
                    },
                ]
            }).init();
        },
        //---------- 3. Tradingview widget -----------
        theme_tradingview: function() {
            const path = location.pathname;

            if(path.includes('index') || !path.includes('.html')) {
                new TradingviewWidget({
                    element: "#tradingview-widget",
                    height: 361,
                    type: "market-overview",
                    theme: "light",
                    symbol: [                       // array of instruments symbol based on Tradingview
                        {s: "FX:EURUSD"},
                        {s: "FX:GBPUSD"},
                        {s: "FX:USDJPY"},
                        {s: "FX:USDCHF"},
                        {s: "FX:AUDUSD"},
                        {s: "FX:USDCAD"}
                    ]
                }).init()
            }
            if(path.includes('homepage2')) {
                new TradingviewWidget({
                    element: "#tradingview-widget",
                    height: 375,
                    type: "symbol-overview",
                    theme: "dark",
                    symbol : "GOOGL"                // symbol based on Tradingview
                }).init()
            }
        },
        //---------- 4. Step hover animations -----------
        theme_stephover: function() {
            if(document.querySelector('.in-equity-12') !== null) {
                const stepsEl = document.querySelectorAll('.in-steps')

                stepsEl[0].classList.add('active-step')
                stepsEl.forEach(el => {
                    el.addEventListener('mouseover', () => {
                        stepsEl[0].classList.remove('active-step')
                        el.classList.add('active-step')
                    })
                    el.addEventListener('mouseout', () => {
                        el.classList.remove('active-step')
                        stepsEl[0].classList.add('active-step')
                    })
                })
            }
        },
        theme_init: function() {
            HomepageApp.theme_slideshow();
            HomepageApp.theme_mobilenav();
            HomepageApp.theme_tradingview();
            HomepageApp.theme_stephover();
        }
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        HomepageApp.theme_init();
    });