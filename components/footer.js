class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <style>
                .footer-link:hover {
                    color: #3b82f6;
                    transform: translateX(5px);
                }
            </style>
            <footer class="bg-gray-800 text-white py-12">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div>
                            <h3 class="text-xl font-bold mb-4 flex items-center">
                                <i data-feather="book" class="mr-2"></i> A1 Tutorials
                            </h3>
                            <p class="text-gray-400">Your ultimate companion for school exam preparation with comprehensive study materials and guidance.</p>
                        </div>
                        
                        
                        
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Contact Us</h4>
                            <ul class="space-y-2">
                                <li class="flex items-center text-gray-400"><i data-feather="mail" class="w-4 h-4 mr-2 flex-shrink-0"></i> a1tutoriallucknow@gmail.com</li>
                                <li class="flex items-center text-gray-400"><i data-feather="phone" class="w-4 h-4 mr-2"></i> +91 7607063167</li>
                                <li class="flex items-center text-gray-400"><i data-feather="phone" class="w-4 h-4 mr-2"></i> 05224723626</li>
                                <li class="flex items-center text-gray-400"><i data-feather="map-pin" class="w-4 h-4 mr-2"></i> Lucknow, India</li>
                            </ul>
                            <div class="flex space-x-4 mt-4">
                                <a href="https://www.facebook.com/profile.php?id=100071165829307&mibextid=ZbWKwL" class="text-gray-400 hover:text-primary transition duration-300"><i data-feather="facebook"></i></a>
                                <a href="https://www.instagram.com/a1_tutorialslko?igsh=MnhlcHAxc3p6bnpr" class="text-gray-400 hover:text-primary transition duration-300"><i data-feather="instagram"></i></a>
                            </div>
                        </div>


                        <div>
                            <h4 class="text-lg font-semibold mb-2">Web Developer</h4>
                            <p class="text-gray-400 mb-2">
                             Developed by Harsh with ❤️
                            </p>
                            <li class="flex items-center text-gray-400"><i data-feather="mail" class="w-4 h-4 mr-2 flex-shrink-0"></i> h4rsh.editzzz@gmail.com</li>   
                        </div>           
                    </div>
                    
                    <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>© 2026 A1 Tutorials. All rights reserved.</p>
                    </div>
                </div>
            </footer>
            
            <script>
                feather.replace();
            </script>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);