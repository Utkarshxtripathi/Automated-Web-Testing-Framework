# Project Report: Automated Web Testing Framework

## 1. Abstract
The "Automated Web Testing Framework" is a Quality Assurance solution built to reduce manual testing overhead and improve the reliability of web applications. The project implements an automated testing suite that validates core workflows—including user authentication and payment processing—using Python, Selenium, and FastAPI. By automating defect detection, capturing execution evidence (screenshots), and logging bug severity metrics, the framework accelerates the QA lifecycle and supports faster software release cycles.

## 2. Introduction
**Problem Statement:** Manual testing of web applications is repetitive, time-consuming, and prone to human error. Development teams require robust tooling to continuously validate critical user paths without scaling manual QA resources linearly.

**Objectives:** 
- Automate repetitive regression tests for Login, Signup, and Payment.
- Build an automated bug reporting mechanism that captures visual evidence and classifies issues.
- Provide quick, reliable execution metrics to assess application health.

**Scope:** The system leverages browser automation via Selenium WebDriver to execute end-to-end web tests. It supports both positive and negative test cases, saving detailed execution logs to a database and persisting screenshots locally upon test failure.

## 3. Background & Literature Review
Current solutions for UI automation range from modern tools like Cypress and Playwright to established frameworks like Selenium WebDriver. While Cypress excels in frontend testing, Selenium remains a versatile standard for cross-browser support and complex DOM interactions. However, many legacy Selenium implementations suffer from maintenance overhead, tight coupling, and flaky tests. 

This project addresses those common pitfalls by wrapping the Selenium engine in a modern Python FastAPI backend. This design provides an API-driven architecture for test execution, making it highly modular. The structure allows seamless integration into CI/CD pipelines, abstracting the complexity of WebDriver configuration away from the test triggers.

## 4. System Architecture & Methodology
The framework follows a three-tier architecture:

- **Automation Engine:** Developed in Python with Selenium WebDriver. It utilizes the Page Object Model (POM) pattern. Individual test classes (`LoginTest`, `SignupTest`, `PaymentTest`) handle browser interactions in an isolated environment.
- **Backend Service:** A FastAPI application offering high-performance asynchronous API endpoints. These endpoints allow developers to trigger tests, query statuses, and retrieve execution logs.
- **Task Queue & Persistence:** Background job processing is managed via Celery and Redis to ensure API responsiveness during long-running test suites. Relational data (test outcomes, bug reports) is handled by PostgreSQL via SQLAlchemy.

**Methodology:**
Tests are structured to cover valid business logic and edge cases. During execution, the validation layer asserts the presence and state of target DOM elements. If a timeout occurs or an assertion fails, the engine intercepts the exception, captures a timestamped screenshot (e.g., `login_fail_168439.png`), and gracefully tears down the WebDriver session.

## 5. Implementation & Results
The testing logic is separated into distinct operational modules.

### 5.1 Test Execution Modules
- **Authentication (`module_1_login.py` & `module_2_signup.py`):** Validates the login endpoints and registration flows. Checks cover proper routing upon successful login, as well as handling of invalid credentials and form validation errors.
- **Checkout (`module_3_payment.py`):** Asserts the functionality of cart systems and mock payment gateway redirections.

### 5.2 Testing Outcomes
Local execution of the suite verified the framework's error-handling capabilities. 
- **Defect Detection:** The validation layer correctly threw `TimeoutException` instances when target elements (e.g., `#email`, `#password`) were not present on the test server.
- **Evidence Collection:** The framework captured high-resolution PNG screenshots for every failed assertion and stored them in the `screenshots/` directory.

These results demonstrate the framework's core reliability: it executes browser interactions efficiently, handles unexpected DOM states without crashing the runner, and collects precise visual evidence for debugging.

## 6. Conclusion & Future Scope
**Conclusion:** 
The framework successfully achieves end-to-end UI automation. Integrating Selenium's browser control with a FastAPI service creates an extensible testing pipeline that effectively catches defects and simplifies bug reporting.

**Future Scope:**
- **CI/CD Integration:** Adding GitHub Actions pipelines to trigger the test suite against staging environments on every pull request.
- **Playwright Migration:** Providing an alternative execution engine using Playwright to benefit from auto-waiting and reduced test execution time.
- **Interactive Dashboard:** Deploying the Next.js frontend to visualize historical test data, track flaky tests, and generate Jira tickets directly from bug logs.
- **Cloud Infrastructure:** Connecting the WebDriver instances to BrowserStack or AWS Device Farm for concurrent cross-browser execution.
