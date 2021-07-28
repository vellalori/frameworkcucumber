package lumensPages;

import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import lumensDataProvider.lumensConfigReader;

public class TC16_quantity {
	
	   WebDriver driver;
	   Properties prop;
	   lumensConfigReader configfile;
	   
	   public TC16_quantity(WebDriver driver) {
		   this.driver=driver;
	   }

	   public void quantity() throws InterruptedException {
		   
		   configfile = new lumensConfigReader();
	       prop = configfile.init_prop();
	       
	       driver.findElement(By.xpath(prop.getProperty("cart"))).click();
	       Thread.sleep(3000);
	       driver.findElement(By.xpath(prop.getProperty("count"))).click();
	       Thread.sleep(3000);
	       
	   }
}





