// Selecting elements using class selectors
const textArea = document.querySelector('.main-input-field');
const idInput = document.querySelectorAll('.input-field')[0];
const passInput = document.querySelectorAll('.input-field')[1];
const submitBtn = document.querySelector('.submit-btn');
const charCount = document.getElementById('char-count');
const successMessage = document.getElementById('success-message');

// Character count functionality
if (textArea && charCount) {
    textArea.addEventListener('input', function () {
        charCount.textContent = this.value.length;
    });
}

// Create a temporary message popup
function showMessage(message, type) {
    const msg = document.createElement("div");
    msg.innerText = message;
    msg.style.position = "fixed";
    msg.style.top = "20px";
    msg.style.right = "20px";
    msg.style.padding = "16px 20px";
    msg.style.borderRadius = "10px";
    msg.style.fontWeight = "600";
    msg.style.textAlign = "center";
    msg.style.zIndex = "1000";
    msg.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.15)";
    msg.style.animation = "slideIn 0.3s ease";
    msg.style.fontSize = "15px";

    // Color based on type
    if (type === "success") {
        msg.style.background = "linear-gradient(135deg, #2ecc71, #27ae60)";
        msg.style.color = "white";
    } else if (type === "error") {
        msg.style.background = "linear-gradient(135deg, #e74c3c, #c0392b)";
        msg.style.color = "white";
    } else {
        msg.style.background = "linear-gradient(135deg, #3498db, #2980b9)";
        msg.style.color = "white";
    }

    document.body.appendChild(msg);

    // Remove message after 3 seconds
    setTimeout(() => {
        msg.style.animation = "slideOut 0.3s ease";
        setTimeout(() => {
            if (msg.parentNode) {
                msg.parentNode.removeChild(msg);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { 
            opacity: 0; 
            transform: translateX(100px); 
        }
        to { 
            opacity: 1; 
            transform: translateX(0); 
        }
    }
    
    @keyframes slideOut {
        from { 
            opacity: 1; 
            transform: translateX(0); 
        }
        to { 
            opacity: 0; 
            transform: translateX(100px); 
        }
    }
`;
document.head.appendChild(style);

submitBtn.addEventListener('click', async () => {
    const text = textArea.value.trim();
    const id = idInput.value.trim();
    const password = passInput.value.trim();

    if (!text || !id || !password) {
        showMessage("All fields are required!", "error");
        return;
    }

    // Show loading state on button
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Saving...';
    submitBtn.disabled = true;

    try {
        // Hash password
        const hashedPass = CryptoJS.SHA256(password).toString();

        // Save to Firestore
        await db.collection("texts").doc(id).set({
            text: text,
            password: hashedPass,
            createdAt: Date.now()
        });

        // Show success message in the form
        if (successMessage) {
            successMessage.style.display = 'block';
            successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Note saved successfully!';
        }

        // Also show popup message
        showMessage("Note saved successfully!", "success");

        // Clear fields after delay
        setTimeout(() => {
            textArea.value = "";
            idInput.value = "";
            passInput.value = "";
            charCount.textContent = "0";

            // Hide success message after 3 seconds
            if (successMessage) {
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 3000);
            }
        }, 1000);

    } catch (error) {
        showMessage("Error saving note! Please try again.", "error");
        console.error("Firestore error:", error);
    } finally {
        // Restore button state
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }
});

// Enhanced copy button functionality for text page
const copyBtn = document.querySelector('.copy-btn');
if (copyBtn) {
    copyBtn.addEventListener('click', function () {
        const textToCopy = document.querySelector('.final-text').textContent;

        // Create a temporary textarea element to copy from
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        // Visual feedback
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fas fa-check"></i> Copied!';
        this.classList.add('copied');

        // Show confirmation message
        showMessage("Text copied to clipboard!", "success");

        // Reset button after 2 seconds
        setTimeout(() => {
            this.innerHTML = originalText;
            this.classList.remove('copied');
        }, 2000);
    });
}

// Function to show the text page (for retrieve functionality)
function showTextPage() {
    const textPage = document.querySelector('.text-page');
    const container = document.querySelector('.container');

    if (textPage && container) {
        container.style.display = 'none';
        textPage.style.display = 'block';
    }
}

// Enhanced input validation
function setupInputValidation() {
    const inputs = document.querySelectorAll('.input-field, .main-input-field');

    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            if (this.value.trim() === '') {
                this.style.borderColor = '#e74c3c';
            } else {
                this.style.borderColor = '#386641';
            }
        });

        input.addEventListener('input', function () {
            this.style.borderColor = '#386641';
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    setupInputValidation();

    // If we're on the text page, show it
    if (document.querySelector('.text-page')) {
        showTextPage();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function (e) {
    // Ctrl+Enter to submit form (if we're on create page)
    if (e.ctrlKey && e.key === 'Enter' && textArea && textArea === document.activeElement) {
        submitBtn.click();
    }

    // Escape to clear form
    if (e.key === 'Escape') {
        if (textArea && textArea.value) {
            if (confirm('Clear all inputs?')) {
                textArea.value = '';
                idInput.value = '';
                passInput.value = '';
                charCount.textContent = "0";
            }
        }
    }
});