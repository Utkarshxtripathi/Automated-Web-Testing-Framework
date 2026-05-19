from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os
import time

class BaseTest:
    def __init__(self):
        chrome_options = Options()
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        
        # Make surechromedriver is installed or accessible via PATH
        self.driver = webdriver.Chrome(options=chrome_options)
        self.wait = WebDriverWait(self.driver, 10)

    def launch_browser(self, url):
        self.driver.get(url)

    def find_element(self, locator):
        return self.wait.until(EC.presence_of_element_located(locator))

    def capture_screenshot(self, name):
        if not os.path.exists("screenshots"):
            os.makedirs("screenshots")
        path = f"screenshots/{name}_{int(time.time())}.png"
        self.driver.save_screenshot(path)
        return path

    def close(self):
        if self.driver:
            self.driver.quit()
