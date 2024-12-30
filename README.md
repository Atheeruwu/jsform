DEPLOYED:https://atheeruwu.github.io/jsform/

### **Project Overview: Login and Registration Form**

In this project, I built a responsive login and registration form with a smooth transition between the login and signup forms. The goal was to provide a user-friendly experience, allowing users to toggle between login and signup forms with seamless UI changes.

---

### **Key Functionalities and Code Breakdown**

#### **1. Toggling Between Login and Signup Forms**

The main functionality of this project is switching between the login and signup forms. This is handled using JavaScript by adding/removing the `active` class to the respective form and tab.

**JavaScript Code:**

```javascript
const loginTab = document.querySelector('.login-tab');
const signUpTab = document.querySelector('.signup-tab');
const loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

// Function to switch forms and update active tabs
const showForm = formToShow => {
  loginForm.classList.toggle('active', formToShow === 'login');
  signupForm.classList.toggle('active', formToShow === 'signup');
  loginTab.classList.toggle('active', formToShow === 'login');
  signUpTab.classList.toggle('active', formToShow === 'signup');
};

// Default form displayed on page load
showForm('login');

// Event listeners for tab switching
loginTab.addEventListener('click', () => showForm('login'));
signUpTab.addEventListener('click', () => showForm('signup'));
```

**Explanation:**
- The `showForm` function toggles the visibility of the login and signup forms based on the `formToShow` parameter.
- It also switches the active tab to highlight the currently active form.
- The `addEventListener` on each tab allows the user to click and toggle between the forms.

---

#### **2. HTML Structure for Forms**

The HTML consists of two main sections: one for the login form and one for the signup form. Each form is initially hidden or shown based on user interaction with the tabs.

**HTML Snippet:**

```html
<div class="auth-links">
  <a href="#" class="login-tab active">Login</a>
  <a href="#" class="signup-tab">Sign up</a>
</div>
<div class="form-wrapper">
  <div class="form-box login-form active"> <!-- Login Form -->
    <h1>Login</h1>
    <form>...</form>
  </div>
  <div class="form-box signup-form"> <!-- Signup Form -->
    <h1>Sign Up</h1>
    <form>...</form>
  </div>
</div>
```

**Explanation:**
- The `auth-links` div contains two anchor tags that act as tabs for toggling between login and signup.
- The `form-wrapper` holds the actual forms, each inside a `form-box`. Only one form is visible at a time based on the `active` class.

---

#### **3. CSS for Styling and Layout**

CSS is used to style the layout, including the active states of tabs, forms, and buttons. It also manages the visibility of forms and ensures that the UI remains responsive on various screen sizes.

**CSS Snippet:**

```css
.auth-links a.active { 
  background: #4CAF50; 
  color: white; 
  transition: background 0.3s ease, color 0.3s ease; 
}

.form-box { 
  display: none; 
}

.form-box.active { 
  display: block; /* Only show active form */
}

.login-btn, .signup-btn { 
  background-color: #4CAF50; 
  color: white; 
  font-size: 1.7rem; 
  padding: 1rem; 
  border-radius: 0.5rem; 
  cursor: pointer;
}

@media (max-width: 600px) {
  body { font-size: 1.4rem; }
  .auth-links a { padding: 0.7rem; }
}
```

Explanation:
- The `active` class is used to show the currently active tab and form.
- The `form-box` is hidden by default and only displayed when it has the `active` class.
- The `login-btn` and `signup-btn` are styled with a green background for consistency and user focus.
- Media queries ensure that the form is responsive, adapting to smaller screen sizes.

![signup ](https://github.com/user-attachments/assets/0d31055a-c561-4caf-9bad-844e6b11f05f)



![login](https://github.com/user-attachments/assets/16d8d52b-d8e0-4f32-9b9b-315d5230ded9)
