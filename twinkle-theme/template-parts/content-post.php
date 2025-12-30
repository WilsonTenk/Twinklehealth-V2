<article
    class="h-full flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800 group">
    <div class="relative h-60 overflow-hidden">
        <?php if (has_post_thumbnail()): ?>
            <img src="<?php the_post_thumbnail_url('medium_large'); ?>" alt="<?php the_title(); ?>"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
        <?php else: ?>
            <div class="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                <i data-lucide="image" class="text-gray-300 dark:text-gray-600 w-12 h-12"></i>
            </div>
        <?php endif; ?>
        <div
            class="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-600 dark:text-primary-400 shadow-sm">
            <?php
            $categories = get_the_category();
            if (!empty($categories)) {
                echo esc_html($categories[0]->name);
            } else {
                echo 'News';
            }
            ?>
        </div>
    </div>
    <div class="p-6 flex flex-col flex-grow">
        <div class="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4 space-x-4">
            <div class="flex items-center">
                <i data-lucide="calendar" class="w-3 h-3 mr-1"></i>
                <span><?php echo get_the_date('M d, Y'); ?></span>
            </div>
            <div class="flex items-center">
                <i data-lucide="clock" class="w-3 h-3 mr-1"></i>
                <span><?php echo ceil(str_word_count(get_the_content()) / 200); ?> min read</span>
            </div>
        </div>
        <h3
            class="text-xl font-bold font-heading mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            <a href="<?php the_permalink(); ?>">
                <?php the_title(); ?>
            </a>
        </h3>
        <p class="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
            <?php echo wp_trim_words(get_the_excerpt(), 15); ?>
        </p>
        <div class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div class="flex items-center space-x-2">
                <div
                    class="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-700 dark:text-primary-400 font-bold text-xs">
                    <?php echo substr(get_the_author(), 0, 1); ?>
                </div>
                <span class="text-xs font-medium text-gray-700 dark:text-gray-300"><?php the_author(); ?></span>
            </div>
            <a href="<?php the_permalink(); ?>"
                class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 p-2 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors">
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </a>
        </div>
    </div>
</article>