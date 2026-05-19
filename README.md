# Automated Web Testing Framework using Selenium

A comprehensive, enterprise-grade automated web testing framework built with Python, FastAPI, Selenium, and React (Next.js). This project provides a robust solution for automating testing tasks, capturing visual evidence of failures, and managing QA processes efficiently.

## Features
- **Automated Workflows:** Covers critical test suites including Login, Signup, and Payment.
- **Robust Failure Detection:** Automatically catches exceptions (e.g., TimeoutException) when expected elements are not found.
- **Visual Bug Tracking:** Generates and saves high-resolution screenshots for any failed test scenarios.
- **Modern Tech Stack:** FastAPI for the backend service and a modular Page Object Model (POM) testing architecture.

## Getting Started

### Prerequisites
- Python 3.10+
- Node.js (for the frontend, optional)
- Chrome / ChromeDriver

### Installation
1. Clone the repository.
2. Setup the Python environment in the `backend/` directory:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # Or `venv\Scripts\activate` on Windows
   pip install -r requirements.txt
   ```
3. Run the backend tests:
   ```bash
   pytest app/tests/
   ```

For detailed insights into the project's architecture, methodology, and design choices, please see `Final_Report.md`.
