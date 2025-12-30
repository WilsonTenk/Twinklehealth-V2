<div
    class="h-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group border border-gray-100 dark:border-gray-800">
    <div class="relative overflow-hidden h-64">
        <?php if (has_post_thumbnail()): ?>
            <img src="<?php the_post_thumbnail_url('large'); ?>" alt="<?php the_title(); ?>"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700">
        <?php else: ?>
            <div class="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                <span class="text-gray-400">No Image</span>
            </div>
        <?php endif; ?>
        <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        </div>
    </div>
    <div class="p-8 flex-grow flex flex-col relative">
        <h3
            class="text-2xl font-bold font-heading mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            <a href="<?php the_permalink(); ?>">
                <?php the_title(); ?>
            </a>
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed flex-grow">
            <?php echo wp_trim_words(get_the_excerpt(), 20); ?>
        </p>
        <div class="pt-6 border-t border-gray-100 dark:border-gray-800 mt-auto">
            <a href="<?php the_permalink(); ?>"
                class="inline-flex items-center text-primary-600 dark:text-primary-400 font-bold hover:translate-x-1 transition-transform">
                <span>View Project</span>
                <i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i>
            </a>
        </div>
    </div>
</div>