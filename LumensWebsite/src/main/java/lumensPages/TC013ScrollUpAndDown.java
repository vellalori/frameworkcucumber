package lumensPages;

import java.util.Properties;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import lumensDataProvider.lumensConfigReader;

public class TC013ScrollUpAndDown {
	WebDriver driver;
	   Properties prop;
	   lumensConfigReader configfile;
	   
	   public TC013ScrollUpAndDown(WebDriver driver) {
		   this.driver=driver;
	   }
	   public void scroll() throws Exception {
		   JavascriptExecutor js = (JavascriptExecutor) driver;
		  // js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
		  
		 //  js.executeScript("window.scrollTo(0, -document.body.scrollHeight)");
		   
			js.executeScript("window.scrollBy(0,500)");Thread.sleep(2000);
			
			js.executeScript("window.scrollBy(0,-500)");
	   }

}
