const idBox = document.querySelector('.boxuser');
const passBox = document.querySelector('.password');
const signBtn = document.querySelector('.signin-btn');

const textPage = document.querySelector('.text-page');
const finalText = document.querySelector('.final-text');

// Temporary popup messages
function showMessage(message, type) {
    const msg = document.createElement("div");

    msg.innerText = message;
    msg.style.padding = "12px";
    msg.style.marginTop = "10px";
    msg.style.borderRadius = "8px";
    msg.style.fontWeight = "bold";
    msg.style.textAlign = "center";
    msg.style.position = "fixed";
    msg.style.top = "20px";
    msg.style.left = "50%";
    msg.style.transform = "translateX(-50%)";
    msg.style.zIndex = "9999";

    msg.style.background = type === "success" ? "#4CAF50" : "#E53935";
    msg.style.color = "white";

    document.body.appendChild(msg);

    setTimeout(() => msg.remove(), 2500);
}

signBtn.addEventListener("click", async () => {

    const id = idBox.value.trim();
    const password = passBox.value.trim();

    if (!id || !password) {
        showMessage("Both fields are required!", "error");
        return;
    }

    showMessage("Checking credentials...", "success");

    try {
        const docRef = db.collection("texts").doc(id);
        const docSnap = await docRef.get();

        if (!docSnap.exists) {
            showMessage("ID not found!", "error");
            return;
        }

        const data = docSnap.data();
        const hashedInput = CryptoJS.SHA256(password).toString();

        if (hashedInput !== data.password) {
            showMessage("Incorrect password!", "error");
            return;
        }

        // SUCCESS
        showMessage("Login successful!", "success");

        // Hide login page
        document.querySelector('.container').style.display = "none";

        // Show full-page text screen
        textPage.style.display = "block";

        // Display retrieved text
        finalText.innerText = data.text;

    } catch (error) {
        showMessage("Error retrieving text!", "error");
        console.error(error);
    }
});

// COPY BUTTON LOGIC
const copyBtn = document.querySelector('.copy-btn');

copyBtn.addEventListener('click', () => {
    const text = finalText.innerText;

    navigator.clipboard.writeText(text).then(() => {
        showMessage("Text copied!", "success");
    }).catch(() => {
        showMessage("Failed to copy text!", "error");
    });
});
