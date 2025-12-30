<!DOCTYPE html>
<html <?php language_attributes(); ?> class="scroll-smooth">

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/logo.png">
    <?php wp_head(); ?>
</head>

<body <?php body_class('bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300'); ?>>

    <!-- Dark Mode Script -->
    <script>
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    </script>

    <header id="main-header" class="sticky top-0 z-50 transition-all duration-300 bg-white dark:bg-gray-900 py-4">
        <div class="container mx-auto px-4 relative">

            <!-- Search Overlay -->
            <div id="search-overlay"
                class="absolute inset-0 bg-white dark:bg-gray-900 z-20 flex items-center px-4 transition-all duration-300 transform opacity-0 -translate-y-4 invisible pointer-events-none">
                <form action="/" method="get" class="w-full flex items-center max-w-4xl mx-auto">
                    <i data-lucide="search" class="text-primary-500 mr-4 flex-shrink-0 w-6 h-6"></i>
                    <input type="text" name="s" placeholder="Type to search..."
                        class="flex-grow py-2 text-xl text-gray-800 dark:text-white placeholder-gray-300 focus:outline-none bg-transparent border-b-2 border-transparent focus:border-primary-100 transition-colors" />
                    <div class="flex items-center space-x-2 ml-4">
                        <button type="submit"
                            class="bg-primary-600 text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-primary-700 transition-colors">
                            Search
                        </button>
                        <button type="button" id="close-search"
                            class="p-2 text-gray-400 hover:text-red-500 transition-colors">
                            <i data-lucide="x" class="w-6 h-6"></i>
                        </button>
                    </div>
                </form>
            </div>

            <div id="header-content"
                class="flex justify-between items-center transition-opacity duration-300 opacity-100">
                <!-- Logo -->
                <a href="<?php echo home_url(); ?>" class="flex items-center group">
                    <img src="<?php echo get_template_directory_uri(); ?>/logo.png" alt="<?php bloginfo('name'); ?>"
                        class="h-12 w-auto object-contain transform group-hover:scale-105 transition-transform" />
                </a>

                <!-- Desktop Nav -->
                <nav class="hidden lg:flex items-center space-x-8">
                    <?php
                    wp_nav_menu(array(
                        'theme_location' => 'primary',
                        'container' => false,
                        'menu_class' => 'flex items-center space-x-8',
                        'items_wrap' => '%3$s',
                        'link_before' => '',
                        'link_after' => '',
                        'fallback_cb' => false,
                        'walker' => new Walker_Nav_Menu() // Default or Custom
                    ));
                    // Hardcoded fallback if no menu set
                    if (!has_nav_menu('primary')) {
                        $items = ['Home', 'About', 'Projects', 'Blog', 'Get Involved'];
                        foreach ($items as $item) {
                            $link = home_url('/' . strtolower(str_replace(' ', '-', $item)));
                            if ($item === 'Home')
                                $link = home_url();
                            echo '<a href="' . $link . '" class="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-semibold uppercase tracking-wide transition-all hover:-translate-y-0.5">' . $item . '</a>';
                        }
                    }
                    ?>
                </nav>

                <!-- Actions -->
                <div class="flex items-center space-x-3">
                    <button id="theme-toggle"
                        class="p-2.5 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors rounded-full"
                        aria-label="Toggle Dark Mode">
                        <i data-lucide="sun" class="w-5 h-5 hidden dark:block"></i>
                        <i data-lucide="moon" class="w-5 h-5 block dark:hidden"></i>
                    </button>
                    <button id="open-search"
                        class="p-2.5 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors rounded-full"
                        aria-label="Open Search">
                        <i data-lucide="search" class="w-5 h-5"></i>
                    </button>
                    <a href="<?php echo home_url('/get-involved'); ?>"
                        class="hidden sm:flex bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-primary-500/30 items-center space-x-2 hover:-translate-y-0.5">
                        <i data-lucide="heart" class="w-4 h-4 fill-current"></i>
                        <span>Donate</span>
                    </a>
                    <button id="mobile-menu-btn" class="lg:hidden p-2 text-gray-800 dark:text-white">
                        <i data-lucide="menu" class="w-6 h-6"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>

    <!-- Mobile Sidebar -->
    <div id="mobile-sidebar"
        class="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-all duration-300 opacity-0 invisible">
        <div id="mobile-sidebar-content"
            class="fixed top-0 right-0 h-full w-[300px] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-out translate-x-full">
            <div class="p-6 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
                <span class="text-xl font-heading font-bold text-gray-900 dark:text-gray-100">Menu</span>
                <button id="close-sidebar"
                    class="p-2 text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors bg-gray-50 dark:bg-gray-800 rounded-full">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>
            <nav class="flex flex-col p-6 space-y-2">
                <?php
                // Simple mobile menu fallback
                $items = ['Home', 'About', 'Projects', 'Blog', 'Get Involved'];
                foreach ($items as $item) {
                    $link = home_url('/' . strtolower(str_replace(' ', '-', $item)));
                    if ($item === 'Home')
                        $link = home_url();
                    echo '<a href="' . $link . '" class="text-left px-4 py-3 rounded-xl text-lg font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-all">' . $item . '</a>';
                }
                ?>
            </nav>
            <div class="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 dark:bg-gray-800">
                <a href="<?php echo home_url('/get-involved'); ?>"
                    class="w-full bg-primary-600 text-white py-3 rounded-xl font-bold shadow-lg flex items-center justify-center space-x-2">
                    <i data-lucide="heart" class="w-[18px] h-[18px] fill-current"></i>
                    <span>Donate Now</span>
                </a>
            </div>
        </div>
    </div>

    <script>
        // Initialize Lucide Icons
        document.addEventListener('DOMContentLoaded', () => {
            if (window.lucide) lucide.createIcons();
        });

        // Dark Mode Toggle
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('click', () => {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
        });

        // Sticky Header
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('bg-white/95', 'dark:bg-gray-900/95', 'backdrop-blur-md', 'shadow-md', 'py-2');
                header.classList.remove('bg-white', 'dark:bg-gray-900', 'py-4');
            } else {
                header.classList.remove('bg-white/95', 'dark:bg-gray-900/95', 'backdrop-blur-md', 'shadow-md', 'py-2');
                header.classList.add('bg-white', 'dark:bg-gray-900', 'py-4');
            }
        });

        // Search Toggle
        const searchOverlay = document.getElementById('search-overlay');
        const headerContent = document.getElementById('header-content');
        const openSearch = document.getElementById('open-search');
        const closeSearch = document.getElementById('close-search');

        openSearch.addEventListener('click', () => {
            searchOverlay.classList.remove('opacity-0', '-translate-y-4', 'invisible', 'pointer-events-none');
            searchOverlay.classList.add('opacity-100', 'translate-y-0', 'visible');
            headerContent.classList.add('opacity-0');
            setTimeout(() => document.querySelector('input[name="s"]').focus(), 100);
        });

        closeSearch.addEventListener('click', () => {
            searchOverlay.classList.add('opacity-0', '-translate-y-4', 'invisible', 'pointer-events-none');
            searchOverlay.classList.remove('opacity-100', 'translate-y-0', 'visible');
            headerContent.classList.remove('opacity-0');
        });

        // Mobile Sidebar
        const mobileSidebar = document.getElementById('mobile-sidebar');
        const mobileSidebarContent = document.getElementById('mobile-sidebar-content');
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const closeSidebar = document.getElementById('close-sidebar');

        function toggleSidebar(show) {
            if (show) {
                mobileSidebar.classList.remove('opacity-0', 'invisible');
                mobileSidebarContent.classList.remove('translate-x-full');
                mobileSidebarContent.classList.add('translate-x-0');
            } else {
                mobileSidebar.classList.add('opacity-0', 'invisible');
                mobileSidebarContent.classList.add('translate-x-full');
                mobileSidebarContent.classList.remove('translate-x-0');
            }
        }

        mobileMenuBtn.addEventListener('click', () => toggleSidebar(true));
        closeSidebar.addEventListener('click', () => toggleSidebar(false));
        mobileSidebar.addEventListener('click', (e) => {
            if (e.target === mobileSidebar) toggleSidebar(false);
        });
    </script>