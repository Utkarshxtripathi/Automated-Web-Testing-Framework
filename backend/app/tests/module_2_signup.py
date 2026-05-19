from selenium.webdriver.common.by import By
from app.core.testing import BaseTest

class SignupTest(BaseTest):
    def run_test(self):
        try:
            self.launch_browser("https://example.com/signup")
            
            email_field = self.find_element((By.ID, "email"))
            email_field.send_keys("newuser@example.com")
            
            password_field = self.find_element((By.ID, "password"))
            password_field.send_keys("Weak")
            
            # Test password strength
            strength_indicator = self.find_element((By.ID, "password-strength"))
            if "Weak" not in strength_indicator.text:
                path = self.capture_screenshot("password_strength_fail")
                return False, f"Password strength validation failed. Screenshot: {path}"

            password_field.clear()
            password_field.send_keys("StrongPassword123!")

            # Submit without mandatory fields
            submit_button = self.find_element((By.ID, "signup-btn"))
            submit_button.click()

            error_msg = self.find_element((By.ID, "terms-error"))
            if not error_msg:
                path = self.capture_screenshot("mandatory_field_fail")
                return False, f"Mandatory field validation failed. Screenshot: {path}"
            
            return True, "Signup validations successful"
        except Exception as e:
            path = self.capture_screenshot("signup_test_fail")
            return False, f"Signup test failed: {str(e)}. Screenshot: {path}"
        finally:
            self.close()
