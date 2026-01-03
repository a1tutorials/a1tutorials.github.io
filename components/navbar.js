class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="fixed w-full bg-white z-50 shadow">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center py-4">
            <span class="text-xl font-bold text-gray-800">A1 Tutorials</span>

            <div class="hidden md:flex items-center space-x-8">
              <a href="#home" class="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#classes" class="text-gray-700 hover:text-blue-600 font-medium">Classes</a>
              <a href="#about" class="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="tel:+917607063167" class="bg-green-600 text-white px-4 py-2 rounded-lg">
                Call Us
              </a>
            </div>

            <!-- Mobile button -->
            <button id="menuBtn" class="md:hidden text-2xl">☰</button>
          </div>

          <!-- Mobile menu -->
          <div id="mobileMenu" class="hidden md:hidden pb-4">
            <a href="#home" class="block py-2">Home</a>
            <a href="#classes" class="block py-2">Classes</a>
            <a href="#about" class="block py-2">About</a>
            <a href="tel:+917607063167" class="block py-2 font-bold">Call Us</a>
          </div>
        </div>
      </nav>
    `;

    // ✅ THIS is the important part
    const btn = this.querySelector("#menuBtn");
    const menu = this.querySelector("#mobileMenu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
}

customElements.define("custom-navbar", CustomNavbar);
