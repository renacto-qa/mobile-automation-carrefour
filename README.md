# 📱 Mobile Automation – WebdriverIO + Appium

![Pipeline Status](https://github.com/renacto-qa/mobile-automation-carrefour/actions/workflows/mobile-tests.yml/badge.svg)

Mobile automation project developed using the official **WebdriverIO Native Demo App**, following a professional automation architecture pattern and CI/CD best practices.

---

## 🏗 Technologies Used

- **Language:** JavaScript (Node.js)
- **Test Framework:** WebdriverIO (v9)
- **Mobile Automation:** Appium
- **Test Runner:** Mocha
- **Reporting:** Allure Report
- **Cloud Device Platform:** BrowserStack (Android Real Device)
- **CI/CD:** GitHub Actions
- **Version Control:** Git (SSH configured)

---

## 🏛 Enterprise-Level Setup

This project includes:

- 🔐 Secure SSH authentication
- 🔑 Secrets management via GitHub Actions
- ☁️ Real device cloud execution (BrowserStack)
- 📊 Allure reporting with artifact upload
- 🔄 Retry strategy for cloud stability
- 📸 Automatic screenshots on failure
- 🚀 Automated CI pipeline on every push to `main`

---

## 📁 Project Structure


mobile-automation-carrefour
├── .github/
│ └── workflows/
│ └── mobile-tests.yml
├── test/
│ ├── specs/
│ └── pages/
├── apps/ (ignored in git)
├── wdio.conf.js
├── wdio.browserstack.conf.js
├── wdio.ios.conf.js
└── package.json


---

## ✅ Test Coverage

### 🔐 Authentication
- Successful login
- Invalid login validation
- Error message validation
- User registration

### 📄 Forms
- Field interaction
- Button actions
- Validation checks

### 🔄 Navigation
- Screen navigation
- Horizontal swipe
- Vertical swipe
- Drag & Drop interaction

---

## 🧱 Architecture Highlights

- Page Object Model (POM)
- Smoke & Regression suites
- Spec retry strategy
- Centralized configuration
- Fail-fast execution strategy
- Cloud-ready configuration

---

## 🌍 Execution Environments

### 🤖 Android – Local Emulator


npm run android


Runs locally using Appium.

---

### 🤖 Android – Real Device (BrowserStack)


npm run browserstack


Runs on:
- Samsung Galaxy S23
- Android 13
- Real cloud device
- Network & console logs enabled
- Screenshot on failure

---

### 🍏 iOS – Simulator


npm run ios


⚠️ Requires macOS + Xcode.

---

## 📊 Reporting

Allure is fully integrated.

Generate report locally:


npm run allure


Pipeline uploads `allure-results` as artifact automatically.

---

## 🔁 Smoke vs Regression

Run specific suite:

### Smoke


wdio run ./wdio.browserstack.conf.js --suite smoke


### Regression


wdio run ./wdio.browserstack.conf.js --suite regression


---

## 🚀 CI/CD Pipeline

GitHub Actions pipeline:

- Trigger: Push to `main`
- Node setup
- Dependency install
- BrowserStack execution
- Allure artifact upload
- Status badge integration

This ensures:

✔ Continuous validation  
✔ Cloud execution  
✔ Traceability  
✔ Professional DevOps integration  

---

## 📦 Application Used

WebdriverIO Native Demo App  
https://github.com/webdriverio/native-demo-app

---

## 📈 Professional Highlights

This project demonstrates:

- Mobile automation best practices
- Cloud device execution
- CI/CD integration
- Secure credential handling
- Structured logging & reporting
- Scalable framework architecture

---

## 👨‍💻 Author

Renato de Souza Lima  
QA Automation Engineer