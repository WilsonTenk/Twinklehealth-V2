<?php

function twinkle_enqueue_scripts()
{
    // Tailwind CSS CDN
    wp_enqueue_script('tailwind-cdn', 'https://cdn.tailwindcss.com', array(), null, false);

    // Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700&display=swap', array(), null);

    // Theme Styles
    wp_enqueue_style('twinkle-style', get_stylesheet_uri());

    // Lucide Icons
    wp_enqueue_script('lucide', 'https://unpkg.com/lucide@latest', array(), null, false);
}
add_action('wp_enqueue_scripts', 'twinkle_enqueue_scripts');

// Tailwind Configuration (Injected into Head)
function twinkle_tailwind_config()
{
    ?>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        heading: ['Plus Jakarta Sans', 'sans-serif'],
                    },
                    colors: {
                        primary: {
                            50: '#f0fdfa',
                            100: '#ccfbf1',
                            200: '#99f6e4',
                            300: '#5eead4',
                            400: '#2dd4bf',
                            500: '#14b8a6',
                            600: '#0d9488',
                            700: '#0f766e',
                            800: '#115e59',
                            900: '#134e4a',
                        },
                        accent: {
                            500: '#f97316',
                            600: '#ea580c',
                        }
                    },
                    animation: {
                        'fade-in': 'fadeIn 0.5s ease-out forwards',
                        'slide-down': 'slideDown 0.3s ease-out forwards',
                        'marquee': 'marquee 40s linear infinite',
                    },
                    keyframes: {
                        fadeIn: {
                            '0%': { opacity: '0' },
                            '100%': { opacity: '1' },
                        },
                        slideDown: {
                            '0%': { transform: 'translateY(-10px)', opacity: '0' },
                            '100%': { transform: 'translateY(0)', opacity: '1' },
                        },
                        marquee: {
                            '0%': { transform: 'translateX(0)' },
                            '100%': { transform: 'translateX(-50%)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
            background: #0d9488;
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #0f766e;
        }

        .reveal {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);
            will-change: opacity, transform;
        }

        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
    <?php
}
add_action('wp_head', 'twinkle_tailwind_config');

// Theme Support
function twinkle_setup()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'twinkle'),
    ));
}
add_action('after_setup_theme', 'twinkle_setup');

// Register Projects Custom Post Type
function twinkle_register_projects_cpt()
{
    register_post_type('project', array(
        'labels' => array(
            'name' => __('Projects', 'twinkle'),
            'singular_name' => __('Project', 'twinkle'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-heart', // Suitable icon
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'show_in_rest' => true, // Enable Gutenberg
    ));
}
add_action('init', 'twinkle_register_projects_cpt');
