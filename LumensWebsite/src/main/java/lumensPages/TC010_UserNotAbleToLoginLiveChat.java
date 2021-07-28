package lumensPages;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import lumensDataProvider.lumensConfigReader;

public class TC010_UserNotAbleToLoginLiveChat {

	WebDriver driver;
	Properties prop;
	lumensConfigReader configfile;

	public TC010_UserNotAbleToLoginLiveChat(WebDriver driver) {
		this.driver = driver;
	}

	public void InvalidCredentials() {

		configfile = new lumensConfigReader();
		prop = configfile.init_prop();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		WebElement name = driver.findElement(By.xpath(prop.getProperty("Name")));
		name.sendKeys(prop.getProperty("ValidUserName"));
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		WebElement Invalidemail = driver.findElement(By.xpath(prop.getProperty("EnterEmail")));
		Invalidemail.sendKeys(prop.getProperty("InvalidemailId"));
	}
}
