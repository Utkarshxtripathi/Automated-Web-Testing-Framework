from selenium.webdriver.common.by import By
from app.core.testing import BaseTest

class LoginTest(BaseTest):
    def run_positive_test(self):
        try:
            self.launch_browser("https://example.com/login")
            
            # This is a mockup of the login process
            email_field = self.find_element((By.ID, "email"))
            email_field.send_keys("testuser@example.com")
            
            password_field = self.find_element((By.ID, "password"))
            password_field.send_keys("SecurePassword123!")
            
            submit_button = self.find_element((By.ID, "login-btn"))
            submit_button.click()
            
            # Verify login success by checking for dashboard element
            self.find_element((By.ID, "dashboard-header"))
            return True, "Login successful"
        except Exception as e:
            path = self.capture_screenshot("login_positive_fail")
            return False, f"Login failed: {str(e)}. Screenshot: {path}"
        finally:
            self.close()

    def run_negative_test(self):
        try:
            self.launch_browser("https://example.com/login")
            
            email_field = self.find_element((By.ID, "email"))
            email_field.send_keys("wronguser@example.com")
            
            password_field = self.find_element((By.ID, "password"))
            password_field.send_keys("WrongPass!")
            
            submit_button = self.find_element((By.ID, "login-btn"))
            submit_button.click()
            
            # Verify error message
            error_msg = self.find_element((By.ID, "error-message"))
            if "Invalid credentials" in error_msg.text:
                return True, "Negative login successful"
            else:
                return False, "Error message not found"
        except Exception as e:
            path = self.capture_screenshot("login_negative_fail")
            return False, f"Negative test failed: {str(e)}. Screenshot: {path}"
        finally:
            self.close()
