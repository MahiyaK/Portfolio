


AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
        
        feather.replace();
        
        // Animate progress bars on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const progressBars = document.querySelectorAll('.progress-bar');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const width = entry.target.style.width;
                        entry.target.style.width = '0';
                        setTimeout(() => {
                            entry.target.style.width = width;
                        }, 100);
                    }
                });
            }, { threshold: 0.5 });
            
            progressBars.forEach(bar => {
                observer.observe(bar);
            });
        });

        // Mobile menu toggle
        document.getElementById('menu-btn').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', function() {
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });

        feather.replace();
