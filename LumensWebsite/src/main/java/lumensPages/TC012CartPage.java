package lumensPages;

import java.io.File;
import java.io.IOException;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import lumensDataProvider.lumensConfigReader;

public class TC012CartPage {
		WebDriver driver;
		   Properties prop;
		   lumensConfigReader configfile;
		   
		   public TC012CartPage(WebDriver driver) {
			   this.driver=driver;
		   }
	
		   public void Promocode() throws Exception
			{
				configfile = new lumensConfigReader();
				prop = configfile.init_prop();
				Actions action = new Actions(driver);
				
				WebElement mycart = driver.findElement(By.xpath(prop.getProperty("Cart")));
				action.moveToElement(mycart).click().build().perform();
				
				driver.findElement(By.xpath(prop.getProperty("Promocode"))).click();
				driver.findElement(By.xpath(prop.getProperty("Promocode"))).sendKeys("AABCDED");
				Thread.sleep(2000);
				driver.findElement(By.xpath(prop.getProperty("Applybtn"))).click();Thread.sleep(3000);
				
				TakesScreenshot ts=	(TakesScreenshot)driver;
				File source=ts.getScreenshotAs(OutputType.FILE);
				FileUtils.copyFile(source, new File("./Screenshots/Promocode.png"));
				System.out.println("screenshot captured");
				
			}


}
	
