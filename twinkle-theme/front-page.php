<?php get_header(); ?>

<div class="overflow-hidden">
    <!-- Hero Section -->
    <section
        class="relative bg-gradient-to-br from-primary-50 dark:from-primary-900/50 to-white dark:to-gray-900 py-20 lg:py-32 overflow-hidden">
        <div class="absolute top-0 right-0 w-1/3 h-full bg-primary-100/50 -skew-x-12 translate-x-20 z-0"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-accent-100 rounded-full blur-3xl opacity-50 z-0"></div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div class="space-y-8 animate-fade-in">
                    <div
                        class="inline-flex items-center space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm border border-primary-100 dark:border-primary-800 text-primary-700 dark:text-primary-400 font-medium text-sm">
                        <i data-lucide="heart" class="w-[14px] h-[14px] fill-current text-accent-500"></i>
                        <span>Healthcare is an Act of A Soft Heart!</span>
                    </div>
                    <h1
                        class="text-5xl lg:text-7xl font-heading font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
                        Together We <br />
                        <span
                            class="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500">Create
                            Change</span>
                    </h1>
                    <p class="text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
                        We believe that every small act of healthcare can create a ripple of change. Join our mission to
                        transform communities.
                    </p>

                    <div class="flex flex-wrap gap-6 items-center">
                        <!-- Donation Button -->
                        <a target="_blank" rel="noopener noreferrer" href="https://paystack.shop/pay/cc8m08ql-f"
                            class="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent-500 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-accent-500/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                            <span class="relative z-10 flex items-center gap-2">
                                <i data-lucide="heart" class="w-5 h-5 fill-current animate-pulse"></i>
                                Make a Donation
                            </span>
                            <div
                                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        </a>

                        <div
                            class="flex items-center space-x-4 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <div class="flex -space-x-3">
                                <?php
                                $hero_users = [
                                    "images/PHOTO-2025-04-14-16-35-00 (3).jpg",
                                    "images/PHOTO-2025-04-14-16-35-01 (2).jpg",
                                    "images/PHOTO-2025-04-14-17-02-55 (2).jpg"
                                ];
                                foreach ($hero_users as $img): ?>
                                    <img src="<?php echo get_template_directory_uri() . '/' . $img; ?>"
                                        class="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                                <?php endforeach; ?>
                                <div
                                    class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-[10px] font-bold border-2 border-white overflow-hidden">
                                    <span class="count-up" data-end="3000" data-suffix="+">0</span>
                                </div>
                            </div>
                            <div class="text-xs font-bold text-gray-500 dark:text-gray-400 leading-tight">
                                Community Members <br /> Served
                            </div>
                        </div>
                    </div>

                </div>
                <div class="relative animate-fade-in" style="animation-delay: 0.2s">
                    <div
                        class="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800 z-10 transform hover:rotate-1 transition-transform duration-500">
                        <img src="<?php echo get_template_directory_uri(); ?>/images/PHOTO-2025-04-14-16-34-57 (3).jpg"
                            alt="Healthcare worker" class="w-full h-auto" />
                        <div
                            class="absolute bottom-8 left-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-5 rounded-xl shadow-lg max-w-xs border-l-4 border-accent-500">
                            <div class="flex items-center space-x-3 mb-2">
                                <div
                                    class="bg-green-100 dark:bg-green-900/50 p-2 rounded-full text-green-600 dark:text-green-400">
                                    <i data-lucide="check" class="w-4 h-4" stroke-width="3"></i>
                                </div>
                                <span class="font-bold text-gray-900 dark:text-white">Mission Success</span>
                            </div>
                            <p class="text-sm text-gray-600 dark:text-gray-300">Recent campaign helped 500+ children
                                with basic vaccinations.</p>
                        </div>
                    </div>
                    <!-- Dots decoration -->
                    <div class="absolute -top-10 -right-10 z-0 opacity-40">
                        <div class="grid grid-cols-5 gap-2">
                            <?php for ($i = 0; $i < 25; $i++): ?>
                                <div class="w-2 h-2 bg-primary-400 rounded-full"></div>
                            <?php endfor; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section Summary -->
    <section class="reveal py-24 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="relative order-2 lg:order-1">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/PHOTO-2025-04-14-16-34-58 (3).jpg"
                        alt="About Us"
                        class="rounded-tr-[100px] rounded-bl-[100px] rounded-tl-3xl rounded-br-3xl shadow-2xl w-full object-cover h-[600px]" />
                    <div
                        class="absolute -bottom-10 -right-10 bg-accent-500 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                        <p class="text-4xl font-bold font-heading mb-1">
                            <span class="count-up" data-end="10" data-suffix="+">0</span>
                        </p>
                        <p class="text-sm opacity-90 uppercase tracking-wide">Years of <br />Experience</p>
                    </div>
                </div>

                <div class="order-1 lg:order-2">
                    <div class="mb-8 text-left">
                        <span
                            class="text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider text-sm mb-3 block">About
                            Us</span>
                        <h2
                            class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            We are committed to your health goals!</h2>
                        <div class="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6"></div>
                        <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Twinkle Health Foundation is dedicated to transforming healthcare accessibility in
                            underserved communities. We believe that quality healthcare is a fundamental right, not a
                            privilege.
                        </p>
                    </div>

                    <div
                        class="bg-primary-50 dark:bg-primary-900/30 p-6 rounded-2xl border border-primary-100 dark:border-primary-800 mb-8 flex flex-col md:flex-row gap-6 items-center">
                        <div class="flex-1">
                            <div class="flex items-center space-x-3 mb-4">
                                <div
                                    class="bg-white dark:bg-gray-800 p-2 rounded-full shadow-sm text-primary-600 dark:text-primary-400">
                                    <i data-lucide="heart" class="w-5 h-5"></i>
                                </div>
                                <h3 class="font-bold text-gray-900 dark:text-white text-lg">Our Core Missions</h3>
                            </div>
                            <ul class="space-y-3">
                                <?php
                                $missions = [
                                    "Health Education Through Drama",
                                    "Free Medical Services",
                                    "Community Needs Support",
                                    "Livelihood Initiatives",
                                    "Prison therapy"
                                ];
                                foreach ($missions as $item): ?>
                                    <li class="flex items-start space-x-2 text-gray-700 dark:text-gray-300 text-sm">
                                        <i data-lucide="check" class="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0"></i>
                                        <span><?php echo $item; ?></span>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-6">
                        <a href="<?php echo home_url('/about'); ?>"
                            class="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-full font-bold transition-colors flex items-center justify-center space-x-2">
                            <span>Explore More</span>
                            <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </a>
                        <div class="flex items-center space-x-3">
                            <div class="bg-primary-100 p-3 rounded-full text-primary-600">
                                <i data-lucide="phone" class="w-6 h-6"></i>
                            </div>
                            <div>
                                <span class="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Call
                                    Any Time</span>
                                <a href="tel:0543483159"
                                    class="text-lg font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400">054
                                    348 3159</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-800">
        <div class="container mx-auto px-4">
            <div class="reveal">
                <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div class="max-w-2xl">
                        <div class="mb-8 text-left">
                            <span
                                class="text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider text-sm mb-3 block">Our
                                Projects</span>
                            <h2
                                class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                Projects We Implement!</h2>
                            <div class="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <a href="<?php echo home_url('/projects'); ?>"
                            class="text-primary-600 font-bold flex items-center hover:underline">
                            View All Projects <i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i>
                        </a>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <?php
                    $args = array(
                        'post_type' => 'project',
                        'posts_per_page' => 3
                    );
                    $projects = new WP_Query($args);

                    if ($projects->have_posts()):
                        while ($projects->have_posts()):
                            $projects->the_post();
                            get_template_part('template-parts/content', 'project');
                        endwhile;
                        wp_reset_postdata();
                    else:
                        ?>
                        <div class="col-span-3 text-center py-10 text-gray-500">
                            No projects found. Please add projects in the admin dashboard.
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="reveal py-24 bg-primary-900 text-white relative overflow-hidden">
        <div class="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2">
        </div>
        <div
            class="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 opacity-10 rounded-full translate-x-1/3 translate-y-1/3">
        </div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <div class="mb-8 text-center">
                    <span
                        class="text-white/80 font-bold uppercase tracking-wider text-sm mb-3 block">Testimonials</span>
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                        What People Say About Us</h2>
                    <div class="w-20 h-1.5 bg-gradient-to-r from-white to-white/50 rounded-full mb-6 mx-auto"></div>
                    <p class="text-lg text-white/90 leading-relaxed">
                        Real stories from the communities we serve and the volunteers who make it happen.
                    </p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <?php
                $testimonials = [
                    [
                        "text" => "The health education drama was transformative for our village. We finally understand how to prevent common illnesses in a way that makes sense to us.",
                        "name" => "Adwoa Mansa",
                        "role" => "Community Leader",
                        "image" => "images/PHOTO-2025-04-14-16-34-59 (2).jpg"
                    ],
                    [
                        "text" => "I've seen many NGOs come and go, but Twinkle Health stays. They listen to what we actually need before acting. Their impact is real.",
                        "name" => "Kwame Osei",
                        "role" => "Headmaster, Local School",
                        "image" => "images/PHOTO-2025-04-14-16-34-59 (3).jpg"
                    ],
                    [
                        "text" => "Providing reading glasses to us has given us a new vision. We are forever grateful for the medical team's dedication.",
                        "name" => "Grace Antwi",
                        "role" => "Mother",
                        "image" => "images/PHOTO-2025-04-14-16-35-00 (2).jpg"
                    ]
                ];
                foreach ($testimonials as $t):
                    ?>
                    <div
                        class="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-2xl relative hover:bg-white/15 transition-colors flex flex-col h-full">
                        <i data-lucide="quote" class="text-accent-500 mb-6 opacity-80 flex-shrink-0 w-10 h-10"></i>
                        <p class="text-lg text-gray-100 mb-8 leading-relaxed italic flex-grow">
                            "<?php echo $t['text']; ?>"
                        </p>
                        <div class="flex items-center mt-auto">
                            <img src="<?php echo get_template_directory_uri() . '/' . $t['image']; ?>"
                                alt="<?php echo $t['name']; ?>"
                                class="w-12 h-12 rounded-full object-cover border-2 border-accent-500 mr-4" />
                            <div>
                                <h4 class="font-bold text-white"><?php echo $t['name']; ?></h4>
                                <p class="text-primary-200 text-sm"><?php echo $t['role']; ?></p>
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Blog Section -->
    <section class="py-24 bg-white dark:bg-gray-900">
        <div class="container mx-auto px-4">
            <div class="reveal">
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <div class="mb-8 text-center">
                        <span
                            class="text-primary-600 dark:text-primary-400 font-bold uppercase tracking-wider text-sm mb-3 block">Blog
                            & Stories</span>
                        <h2
                            class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                            Latest News & Stories</h2>
                        <div
                            class="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6 mx-auto">
                        </div>
                        <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Stay updated with our community impact and healthcare initiatives through our latest
                            articles.
                        </p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <?php
                    $args = array(
                        'post_type' => 'post',
                        'posts_per_page' => 3
                    );
                    $blog = new WP_Query($args);

                    if ($blog->have_posts()):
                        while ($blog->have_posts()):
                            $blog->the_post();
                            get_template_part('template-parts/content', 'post');
                        endwhile;
                        wp_reset_postdata();
                    else:
                        ?>
                        <div class="col-span-3 text-center py-10 text-gray-500">
                            No posts found.
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
        <div class="absolute top-0 left-10 w-32 h-32 bg-primary-100 rounded-full blur-3xl opacity-60"></div>
        <div class="absolute bottom-10 right-10 w-40 h-40 bg-accent-100 rounded-full blur-3xl opacity-60"></div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="reveal">
                <div class="text-center max-w-3xl mx-auto mb-12">
                    <div
                        class="inline-flex items-center justify-center p-3 bg-white dark:bg-gray-900 rounded-full shadow-sm mb-6 text-primary-600 dark:text-primary-400">
                        <i data-lucide="help-circle" class="w-6 h-6"></i>
                    </div>
                    <h2
                        class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        Have questions? We have answers. If you don't see what you're looking for, feel free to contact
                        us.
                    </p>
                </div>

                <div class="max-w-3xl mx-auto">
                    <?php
                    $faqs = [
                        [
                            "question" => "How is my donation used?",
                            "answer" => "We ensure 100% transparency. 85% of all donations go directly to our programs (medical supplies, education materials, community support), while 15% goes to transportation. Nothing comes to the administrative and running of the NGO."
                        ],
                        [
                            "question" => "Can I volunteer if I'm not a medical professional?",
                            "answer" => "Absolutely! We need skills of all kinds - from teaching and drama to logistics, photography, and fundraising. We provide training for all our volunteers before deployment."
                        ],
                        [
                            "question" => "Where does Twinkle Health Foundation operate?",
                            "answer" => "We currently focus on rural and peri-urban communities in Ghana, specifically in the Eastern, Western and Central regions, with plans to expand to the Ashanti and Northern regions."
                        ],
                        [
                            "question" => "Are donations tax-deductible?",
                            "answer" => "Yes, we are a registered non-profit organization. All donations above GHS 50 are eligible for tax deductions. We provide annual tax receipts to all our donors."
                        ]
                    ];

                    foreach ($faqs as $index => $faq): ?>
                        <div
                            class="accordion-item mb-4 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                            <button
                                class="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none group"
                                onclick="toggleAccordion(this)">
                                <span
                                    class="font-bold text-lg text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                                    <?php echo $faq['question']; ?>
                                </span>
                                <div
                                    class="icon-container flex-shrink-0 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 flex items-center justify-center transition-all duration-300 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/30 group-hover:text-primary-500 dark:group-hover:text-primary-400">
                                    <i data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-300"></i>
                                </div>
                            </button>
                            <div class="content grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-in-out">
                                <div class="overflow-hidden">
                                    <div
                                        class="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-dashed border-gray-100 dark:border-gray-700 mt-2 pt-4">
                                        <?php echo $faq['answer']; ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </section>
</div>

<script>
    // Count Up Animation
    const counters = document.querySelectorAll('.count-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const end = parseInt(el.getAttribute('data-end'));
                const suffix = el.getAttribute('data-suffix');
                let start = 0;
                const duration = 2000;
                const increment = end / (duration / 16);

                const timer = setInterval(() => {
                    start += increment;
                    if (start >= end) {
                        el.innerText = end + suffix;
                        clearInterval(timer);
                    } else {
                        el.innerText = Math.floor(start) + suffix;
                    }
                }, 16);

                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));

    // Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(r => revealObserver.observe(r));

    // FAQ Accordion
    function toggleAccordion(btn) {
        const item = btn.parentElement;
        const iconContainer = btn.querySelector('.icon-container');
        const icon = iconContainer.querySelector('i');
        const content = item.querySelector('.content');

        // Close others (optional, for accordion behavior)
        // document.querySelectorAll('.accordion-item').forEach(i => {
        //    if(i !== item) { ... close functionality ... }
        // });

        if (content.classList.contains('grid-rows-[1fr]')) {
            // Close
            content.classList.remove('grid-rows-[1fr]', 'opacity-100');
            content.classList.add('grid-rows-[0fr]', 'opacity-0');
            item.classList.remove('shadow-lg', 'border-primary-100', 'dark:border-primary-800');

            iconContainer.classList.remove('bg-primary-100', 'dark:bg-primary-900/50', 'text-primary-600', 'dark:text-primary-400', 'rotate-180');
            iconContainer.classList.add('bg-gray-100', 'dark:bg-gray-800', 'text-gray-400', 'dark:text-gray-500');
        } else {
            // Open
            content.classList.remove('grid-rows-[0fr]', 'opacity-0');
            content.classList.add('grid-rows-[1fr]', 'opacity-100');
            item.classList.add('shadow-lg', 'border-primary-100', 'dark:border-primary-800');

            iconContainer.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'text-gray-400', 'dark:text-gray-500');
            iconContainer.classList.add('bg-primary-100', 'dark:bg-primary-900/50', 'text-primary-600', 'dark:text-primary-400', 'rotate-180');
        }
    }
</script>

<?php get_footer(); ?>