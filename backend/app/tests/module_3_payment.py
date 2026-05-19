from selenium.webdriver.common.by import By
from app.core.testing import BaseTest

class PaymentTest(BaseTest):
    def run_test(self):
        try:
            self.launch_browser("https://example.com/checkout")
            
            card_field = self.find_element((By.ID, "card-number"))
            card_field.send_keys("4242424242424242")
            
            expiry_field = self.find_element((By.ID, "expiry-date"))
            expiry_field.send_keys("12/26")
            
            cvc_field = self.find_element((By.ID, "cvc"))
            cvc_field.send_keys("123")
            
            pay_button = self.find_element((By.ID, "pay-btn"))
            pay_button.click()
            
            # Wait for redirection to success page
            success_msg = self.find_element((By.ID, "payment-success"))
            if "Payment Successful" in success_msg.text:
                return True, "Payment flow successful"
            else:
                path = self.capture_screenshot("payment_flow_fail")
                return False, f"Payment flow verification failed. Screenshot: {path}"
        except Exception as e:
            path = self.capture_screenshot("payment_test_fail")
            return False, f"Payment test failed: {str(e)}. Screenshot: {path}"
        finally:
            self.close()
