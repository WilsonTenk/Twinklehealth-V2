<footer class="bg-gray-900 text-gray-300 pt-20 pb-10">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-gray-800 pb-12">
            {/* Brand */}
            <div class="space-y-6">
                <div class="inline-block cursor-pointer bg-white p-2 rounded-lg">
                    <img src="<?php echo get_template_directory_uri(); ?>/logo.png" alt="Twinkle Health Foundation"
                        class="h-10 w-auto object-contain" />
                </div>
                <p class="text-sm leading-relaxed">
                    Transforming lives through accessible healthcare and community empowerment. We believe quality
                    healthcare is a fundamental right.
                </p>
                <div class="flex space-x-2">
                    <a href="https://www.facebook.com/share/1A5aJvWC52/?mibextid=wwXIfr" target="_blank"
                        rel="noopener noreferrer"
                        class="bg-gray-800 p-2 rounded-full hover:bg-primary-600 text-white transition-all hover:scale-110">
                        <i data-lucide="facebook" class="w-[18px] h-[18px]"></i>
                    </a>
                    <a href="https://x.com/twinklehealthf?s=21" target="_blank" rel="noopener noreferrer"
                        class="bg-gray-800 p-2 rounded-full hover:bg-primary-600 text-white transition-all hover:scale-110">
                        <i data-lucide="twitter" class="w-[18px] h-[18px]"></i>
                    </a>
                    <a href="https://www.instagram.com/twinklehealthfoundation?igsh=MTF0NHE0Nmhib24zMQ=="
                        target="_blank" rel="noopener noreferrer"
                        class="bg-gray-800 p-2 rounded-full hover:bg-primary-600 text-white transition-all hover:scale-110">
                        <i data-lucide="instagram" class="w-[18px] h-[18px]"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/twinkle-health-foundation/" target="_blank"
                        rel="noopener noreferrer"
                        class="bg-gray-800 p-2 rounded-full hover:bg-primary-600 text-white transition-all hover:scale-110">
                        <i data-lucide="linkedin" class="w-[18px] h-[18px]"></i>
                    </a>
                    <a href="https://youtube.com/@twinklehealthfoundation?si=T2jV4gdnc5UhMiHZ" target="_blank"
                        rel="noopener noreferrer"
                        class="bg-gray-800 p-2 rounded-full hover:bg-primary-600 text-white transition-all hover:scale-110">
                        <i data-lucide="youtube" class="w-[18px] h-[18px]"></i>
                    </a>
                    <a href="https://www.tiktok.com/@twinkle.health.fo?_r=1&_t=ZM-92UJHl963eF" target="_blank"
                        rel="noopener noreferrer"
                        class="bg-gray-800 p-2 rounded-full hover:bg-primary-600 text-white transition-all hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Links */}
            <div>
                <h3 class="text-white font-bold text-lg mb-6">Quick Links</h3>
                <ul class="space-y-4">
                    <?php
                    $links = ['About', 'Projects', 'Blog', 'Get Involved'];
                    foreach ($links as $link) {
                        echo '<li><a href="' . home_url('/' . strtolower(str_replace(' ', '-', $link))) . '" class="hover:text-primary-400 transition-colors text-sm flex items-center"><i data-lucide="arrow-right" class="mr-2 w-3 h-3"></i> ' . $link . '</a></li>';
                    }
                    ?>
                </ul>
            </div>

            {/* Services Links */}
            <div>
                <h3 class="text-white font-bold text-lg mb-6">Services</h3>
                <ul class="space-y-4">
                    <?php
                    $services = ['Health Education', 'Medical Services', 'Community Support', 'Livelihood'];
                    foreach ($services as $service) {
                        echo '<li><a href="' . home_url('/projects') . '" class="hover:text-primary-400 transition-colors text-sm flex items-center"><i data-lucide="arrow-right" class="mr-2 w-3 h-3"></i> ' . $service . '</a></li>';
                    }
                    ?>
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h3 class="text-white font-bold text-lg mb-6">Contact Us</h3>
                <div class="space-y-4 mb-6">
                    <div class="flex items-center space-x-3">
                        <i data-lucide="mail" class="text-primary-500 w-4 h-4"></i>
                        <span>info@twinklehealth.org</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <i data-lucide="phone" class="text-primary-500 w-4 h-4"></i>
                        <span>054 348 3159</span>
                    </div>
                </div>

                <div id="footer-form-container">
                    <form id="footer-newsletter" class="relative">
                        <input type="email" name="email" placeholder="Your Email Address"
                            class="w-full bg-gray-800 border border-gray-700 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary-500 transition-colors text-white placeholder-gray-500"
                            required />
                        <button type="submit"
                            class="absolute right-2 top-2 bg-primary-600 p-1.5 rounded text-white hover:bg-primary-500 transition-colors">
                            <i data-lucide="arrow-right" class="w-4 h-4"></i>
                        </button>
                    </form>
                    <div id="footer-success"
                        class="hidden bg-green-500/10 text-green-400 p-4 rounded-lg text-sm border border-green-500/20">
                        <p class="font-bold">Subscribed!</p>
                        <p>Thank you for joining our newsletter.</p>
                    </div>
                    <div id="footer-error" class="hidden text-red-400 text-xs mt-2">Failed to subscribe. Please try
                        again.</div>
                </div>
            </div>
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2025 Twinkle Health Foundation. All rights reserved.</p>
            <div class="flex space-x-6 mt-4 md:mt-0">
                <a href="#" class="hover:text-white transition-colors">Terms & Conditions</a>
                <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            </div>
        </div>
    </div>
</footer>

<script>
    const footerForm = document.getElementById('footer-newsletter');
    const footerSuccess = document.getElementById('footer-success');
    const footerError = document.getElementById('footer-error');

    if (footerForm) {
        footerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = footerForm.querySelector('input[name="email"]').value;
            if (!email) return;

            // Simple loading state
            const btn = footerForm.querySelector('button');
            const originalContent = btn.innerHTML;
            btn.innerHTML = '<div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>';
            btn.disabled = true;

            try {
                const response = await fetch("https://formsubmit.co/ajax/twinklehealthfoundation@gmail.com", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        _subject: "New Newsletter Subscriber",
                        _template: "table"
                    })
                });

                if (response.ok) {
                    footerForm.classList.add('hidden');
                    footerSuccess.classList.remove('hidden');
                } else {
                    footerError.classList.remove('hidden');
                    btn.innerHTML = originalContent;
                    btn.disabled = false;
                }
            } catch (error) {
                console.error(error);
                footerError.classList.remove('hidden');
                btn.innerHTML = originalContent;
                btn.disabled = false;
            }
        });
    }
</script>

<?php wp_footer(); ?>
</body>

</html>