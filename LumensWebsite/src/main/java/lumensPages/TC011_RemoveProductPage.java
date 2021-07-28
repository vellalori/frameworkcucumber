package lumensPages;

import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import lumensDataProvider.lumensConfigReader;

public class TC011_RemoveProductPage {
	WebDriver driver;
	Properties prop;
	lumensConfigReader configfile;

	public TC011_RemoveProductPage(WebDriver driver) {
		this.driver = driver;
	}
	
	public void cart()
	{
		configfile = new lumensConfigReader();
		prop = configfile.init_prop();
		Actions action = new Actions(driver);
		
		WebElement mycart = driver.findElement(By.xpath(prop.getProperty("Cart")));
		action.moveToElement(mycart).click().build().perform();
	}
	
	public void removeproduct()
	{
		configfile = new lumensConfigReader();
		prop = configfile.init_prop();
		
		driver.findElement(By.xpath(prop.getProperty("removeproduct"))).click();
	}
}
