package lumensPages;

import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import lumensDataProvider.lumensConfigReader;

public class TC15_Zipcode {
	
	   WebDriver driver;
	   Properties prop;
	   lumensConfigReader configfile;
	   
	   public TC15_Zipcode(WebDriver driver) {
		   this.driver=driver;
	   }

	   public void Zipcode() throws InterruptedException {
		   Thread.sleep(5000);
		   configfile = new lumensConfigReader();
	       prop = configfile.init_prop();
	       try
	       {
	    	   driver.findElement(By.xpath(prop.getProperty("viewingcart"))).click();  
	       }
	       catch(org.openqa.selenium.StaleElementReferenceException ex)
	       {
	    	   driver.findElement(By.xpath(prop.getProperty("viewingcart"))).click();  
	       }
	       
	       Thread.sleep(2000);
	       driver.findElement(By.xpath(prop.getProperty("Zcheck"))).click();
	       Thread.sleep(2000);
	       driver.findElement(By.xpath(prop.getProperty("zfirst"))).sendKeys("Divya");
	       driver.findElement(By.xpath(prop.getProperty("zlast"))).sendKeys("sri");
	       //driver.findElement(By.xpath(prop.getProperty("zaddress"))).sendKeys("gzl");
	       driver.findElement(By.xpath(prop.getProperty("zphone"))).sendKeys("9640661588");
	       driver.findElement(By.xpath(prop.getProperty("Go"))).click();
	       driver.findElement(By.xpath(prop.getProperty("zcity"))).sendKeys("guntur");
	       Thread.sleep(2000);
	       //Select select=new Select(driver.findElement(By.xpath(prop.getProperty("zdrop"))));
	       //select.selectByIndex(1);
	       Thread.sleep(2000);
	       driver.findElement(By.xpath(prop.getProperty("zipcode"))).sendKeys("522415");
	       Thread.sleep(2000);
	       
	   }
}





