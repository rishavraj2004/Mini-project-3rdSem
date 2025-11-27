// Selecting elements using class selectors
const textArea = document.querySelector('.main-input-field');
const idInput = document.querySelectorAll('.input-field')[0];
const passInput = document.querySelectorAll('.input-field')[1];
const submitBtn = document.querySelector('.submit-btn');

// Create a temporary message popup
function showMessage(message, type) {
    const msg = document.createElement("div");
    msg.innerText = message;
    msg.style.padding = "12px";
    msg.style.marginTop = "10px";
    msg.style.borderRadius = "8px";
    msg.style.fontWeight = "bold";
    msg.style.textAlign = "center";
    msg.style.animation = "fadeIn 0.3s";

    // Color
    msg.style.background = type === "success" ? "#4CAF50" : "#E53935";
    msg.style.color = "white";

    document.body.appendChild(msg);

    setTimeout(() => msg.remove(), 2500);
}

submitBtn.addEventListener('click', async () => {
    const text = textArea.value.trim();
    const id = idInput.value.trim();
    const password = passInput.value.trim();

    if (!text || !id || !password) {
        showMessage("All fields are required!", "error");
        return;
    }

    showMessage("Saving... Please wait", "success");

    try {
        // Hash password
        const hashedPass = CryptoJS.SHA256(password).toString();

        // Save to Firestore
        await db.collection("texts").doc(id).set({
            text: text,
            password: hashedPass,
            createdAt: Date.now()
        });

        showMessage("Text saved successfully!", "success");

        // Clear fields
        textArea.value = "";
        idInput.value = "";
        passInput.value = "";

    } catch (error) {
        showMessage("Error saving text!", "error");
        console.error(error);
    }
});
