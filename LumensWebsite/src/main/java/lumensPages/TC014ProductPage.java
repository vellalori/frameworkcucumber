package lumensPages;

import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import lumensDataProvider.lumensConfigReader;

public class TC014ProductPage {
	WebDriver driver;
	   Properties prop;
	   lumensConfigReader configfile;
	   
	   public TC014ProductPage(WebDriver driver) {
		   this.driver=driver;
	   }
	   public void navigateBack() {
			configfile = new lumensConfigReader();
			prop = configfile.init_prop();
			
		   WebDriverWait wait = new WebDriverWait(driver,60);
			  wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("lightings"))));
			 
		   Actions act=new Actions(driver);
		   act.moveToElement(driver.findElement(By.xpath(prop.getProperty("lightings"))))
		   .moveToElement(driver.findElement(By.xpath(prop.getProperty("chandeliers")))).click().build().perform();
		   driver.navigate().back();

	   }

}
