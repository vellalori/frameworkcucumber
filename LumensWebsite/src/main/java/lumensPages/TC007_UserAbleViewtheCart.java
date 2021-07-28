package lumensPages;

import java.io.File;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import lumensDataProvider.lumensConfigReader;

public class TC007_UserAbleViewtheCart {
	
	WebDriver driver;
	   Properties prop;
	   lumensConfigReader configfile;
	   
	   public TC007_UserAbleViewtheCart(WebDriver driver) {
		   this.driver=driver;
	   }
	   
	   public void checkoutproduct() throws Exception{
	   
	   configfile = new lumensConfigReader();
	   prop = configfile.init_prop();
	   
	   Actions actions = new Actions(driver);
		WebElement Account = driver.findElement(By.xpath(prop.getProperty("Cart")));
		driver.manage().timeouts().implicitlyWait(60,TimeUnit.SECONDS);
		actions.moveToElement(Account).click().build().perform();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	   driver.findElement(By.xpath(prop.getProperty("viewcartbtn")));
	   driver.manage().timeouts().implicitlyWait(60,TimeUnit.SECONDS);Thread.sleep(2000);
	   

	   }

}
