// Modal functionality
      function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add keyboard event listener for escape key
        document.addEventListener('keydown', handleEscapeKey);
      }

      function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Remove keyboard event listener
        document.removeEventListener('keydown', handleEscapeKey);
      }

      function handleEscapeKey(event) {
        if (event.key === 'Escape') {
          // Find and close any open modal
          const openModal = document.querySelector('.modal[style*="block"]');
          if (openModal) {
            openModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            document.removeEventListener('keydown', handleEscapeKey);
          }
        }
      }

      // Close modal when clicking outside of modal content
      window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
          event.target.style.display = 'none';
          document.body.style.overflow = 'auto';
          document.removeEventListener('keydown', handleEscapeKey);
        }
      }

function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

const typingText = document.getElementById("typing-text");

      const texts = ["Flutter Developer", "Full-Stack Developer"];
      let textIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function typeEffect() {
        const currentText = texts[textIndex];
        if (isDeleting) {
          typingText.textContent = currentText.substring(0, charIndex--);
        } else {
          typingText.textContent = currentText.substring(0, charIndex++);
        }

        if (!isDeleting && charIndex === currentText.length + 1) {
          // Pause before deleting
          isDeleting = true;
          setTimeout(typeEffect, 1000);
          return;
        } else if (isDeleting && charIndex === 0) {
          // Move to next text
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(typeEffect, isDeleting ? 80 : 120);
      }

      // Start animation
      typeEffect();