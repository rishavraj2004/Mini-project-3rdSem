# 📝 Trust Note

A secure, password-protected text sharing web application built using **HTML, CSS, JavaScript, and Firebase Firestore**.  
Users can create a secret note, assign an ID and password, and share it securely with anyone.  
The receiver can retrieve the note only after entering the correct credentials.

---

## 🚀 Features

### 🔐 Secure Note Creation

- User enters text, sets an ID and password.
- Password is **hashed using SHA-256** before storage (CryptoJS).
- Note is securely stored inside Firebase Firestore.

### 🔑 Secure Note Retrieval

- Receiver enters the same ID + password.
- Password hash is compared for verification.
- Only correct credentials reveal the note.

### 🧾 Full-Screen Note Viewer

- After successful login, the note is shown on a fresh, clean, full-screen page.
- The login page automatically hides to maintain privacy.

### 📋 One-Click Copy

- A **"Copy Text"** button lets users instantly copy the retrieved note.

### 💨 Smooth UI/UX

- Beautiful success & error toast messages.
- Responsive design for mobile, tablet, and desktop.
- Styled with modern UI elements and clean layout.

### 🌐 Online Deployment

The project is fully deployable on:

- **Netlify**
- **Firebase Hosting**
- **GitHub Pages**

---

## 🏗️ Tech Stack

### 👨‍💻 Frontend

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Responsive Design**

### 🔥 Backend (Serverless)

- **Firebase Firestore**
- **Firebase App (Compat) SDK**
- **CryptoJS** (for password hashing)

---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/rishavraj007/trust-note.git
cd trust-note
```

## 2️⃣ Replace the Firebase-config with yours

```
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "XXXXXXXXXXXXXXXX"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

```

## 3️⃣ Run index.html on live server

## All Set , Ready to Use

## 🧭 How to Use Trust Note

Trust Note is extremely easy to use. Follow these steps to create and share secure notes.

---

### ✨ 1. Open the Website

Go to the landing page:
https://trust-note.netlify.app/

You will see two main options:

- **Create & Share Note**
- **Retrieve Note**

---

### 📝 2. Create a Secure Note

1. Click **"Start sharing"**
2. You will be taken to the **Create Note** page
3. Enter your text in the large text box
4. Enter a unique **Note ID** (example: mynote123)
5. Enter a **Password** to protect the note
6. Click **Submit**

✔ The note is now securely saved  
✔ Only people with the same ID + Password can access it

You can now share:

- **ID**
- **Password**

with anyone you want.

---

### 🔑 3. Retrieve a Note

1. From the landing page, click **"Retrieve/Recieve Note"**
2. Enter the **Note ID** provided to you
3. Enter the **Password**
4. Click **Sign In**

If credentials are correct:

✔ The login page hides  
✔ A **fresh full-page view** with the note appears  
✔ You can read the note securely

---

### 📋 4. Copy the Note

Below the note, click:

**Copy Text**

✔ The entire note will be copied to your clipboard  
✔ A success message “Text Copied!” appears

You can now paste it anywhere:  
WhatsApp, email, Google Docs, etc.

---

### 🔐 5. Security Notes

- The password is **never stored in plain text**
- It is hashed using **SHA-256**
- Only the correct hash will unlock the note
- Firestore will not reveal your text without ID + password

---

### 🎉 You're Ready to Use Trust Note!

Fast  
Secure  
Private  
Simple
