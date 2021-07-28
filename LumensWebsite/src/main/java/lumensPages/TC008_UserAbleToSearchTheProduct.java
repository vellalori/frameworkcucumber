package lumensPages;

import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import lumensDataProvider.lumensConfigReader;

public class TC008_UserAbleToSearchTheProduct {
	WebDriver driver;
	Properties prop;
	lumensConfigReader configfile;

	public TC008_UserAbleToSearchTheProduct(WebDriver driver) {
		this.driver = driver;
	}

	public void SearchProduct(){
	   
	   configfile = new lumensConfigReader();
	   prop = configfile.init_prop();
	   driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	   WebElement searchbar = driver.findElement(By.xpath(prop.getProperty("Searchbar")));
	   searchbar.sendKeys(prop.getProperty("searchproduct"));
	   
	   WebElement searchbutton = driver.findElement(By.xpath(prop.getProperty("Searchbtn")));
	   searchbutton.click();
	   
	   
	   
	}   
}
