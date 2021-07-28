package LumensStepDefinition;

import java.io.File;
import java.io.FileInputStream;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import lumensDataFactory.lumensDataFactory;
import lumensDataProvider.lumensConfigReader;
import lumensPages.LoginPage;
import lumensPages.TC001_CreateAccount;
import lumensPages.TC002_LoginValidation_Titleverification;
import lumensPages.TC004_Userselectsceilinglights;
import lumensPages.TC005_ApplyFilterandSelectProduct;
import lumensPages.TC006_Usersaddsproducttocart;
import lumensPages.TC007_UserAbleViewtheCart;
import lumensPages.TC008_UserAbleToSearchTheProduct;
import lumensPages.TC009_UserAbleToLoginLiveChat;
import lumensPages.TC010_UserNotAbleToLoginLiveChat;
import lumensPages.TC011_RemoveProductPage;
import lumensPages.TC012CartPage;
import lumensPages.TC013ScrollUpAndDown;
import lumensPages.TC014ProductPage;

import lumensPages.TC017_LogoutFunctionality;
import lumensPages.TC15_Zipcode;
import lumensPages.TC16_quantity;
import lumensUtils.LumensExcelReader;


public class LumensStepdefinition {

WebDriver driver;
	
	lumensConfigReader configfile;
	Properties prop;
	lumensDataFactory DriverFactory;

    
	@Before(order = 0)
    public void getProperty() {
		configfile = new lumensConfigReader();
        prop = configfile.init_prop();
    }

 

    @Before(order = 1)
    public void launchBrowser() {
        String browserName = prop.getProperty("browser");
        DriverFactory = new lumensDataFactory();
        driver = DriverFactory.init_driver(browserName);
        
    }
    
	/****************************************************************************
	'* Function			: Create Account
	'* TestcaseNO		: TC002&003 
	'* APPLICATION NAME	: www.Lumens.com
	'* CREATED BY		: Aarathi Manivannan
	'* CREATED DATE		: 26-07-2021
	'***************************************************************************/
	
	@Given("^user should open link$")
	public void user_should_open_link() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();

        driver.get(prop.getProperty("url"));

        WebDriverWait wait = new WebDriverWait(driver,60);
  	  wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("Popup"))));
  	  driver.findElement(By.xpath(prop.getProperty("Popup"))).click();Thread.sleep(5000);
	}

	@And("^click on accountand enter credentials \"([^\"]*)\" and (\\d+)$")
	public void click_on_accountand_enter_credentials_and(String SheetName, int RowNumber) throws Throwable {
		
		  
		  Actions actions = new Actions(driver); 
		  WebElement Account = driver.findElement(By.xpath(prop.getProperty("Account")));
		  actions.moveToElement(Account).build().perform();
		  
	
		 driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		 
	       driver.findElement(By.xpath(prop.getProperty("MyAccount"))).click();
		LumensExcelReader reader=new LumensExcelReader();
		TC001_CreateAccount create=new TC001_CreateAccount(driver);
		List<Map<String,String>> testData =reader.getData("F:\\eclipse05\\cucumber hackathon\\LumensWebsite\\LumensWebsite\\ExcelTestdata\\lumenstestdata.xlsx", SheetName);
		
		String firstname =testData.get(RowNumber).get("FirstName");
		String Lastname =testData.get(RowNumber).get("LastName");
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("window.scrollBy(0,300)");
		 driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		String emailaddress =testData.get(RowNumber).get("Email");
	
		String confirmemail =testData.get(RowNumber).get("ConfirmEmail");
	
		String password =testData.get(RowNumber).get("Password");
		
		String confirmpassword =testData.get(RowNumber).get("ConfirmPassword");

		create.Accountcreation(firstname, Lastname, emailaddress, confirmemail, password, confirmpassword);
	}

	@Then("^click on submit$")
	public void click_on_submit() throws Throwable {
	
		TC001_CreateAccount click=new TC001_CreateAccount(driver);
		 driver.manage().timeouts().implicitlyWait(60,TimeUnit.SECONDS);
		click.ClickCreateAccount();
	}
	
//2nd TC
	

	/****************************************************************************
	'* Function			: Login Function & Verify Title
	'* TestcaseNO		: TC002&003 
	'* APPLICATION NAME	: www.Lumens.com
	'* CREATED BY		: Aarathi Manivannan
	'* CREATED DATE		: 26-07-2021
	'***************************************************************************/
	
@Given("^User enters the URL$")
public void user_enters_the_URL() throws Throwable {
	driver.get(prop.getProperty("url"));Thread.sleep(4000);
    WebDriverWait wait = new WebDriverWait(driver,60);
	  wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("Popup"))));
	  driver.findElement(By.xpath(prop.getProperty("Popup"))).click();Thread.sleep(5000);
}

@Then("^User click on My account and Login$")
public void user_click_on_My_account_and_Login() throws Throwable {
	TC002_LoginValidation_Titleverification enterlogin = new TC002_LoginValidation_Titleverification(driver);
	enterlogin.clickLogin();
}

@Then("^User fill the Login form from given sheetname \"([^\"]*)\" and rownumber (\\d+)$")
public void user_fill_the_Login_form_from_given_sheetname_and_rownumber(String SheetName, int RowNumber) throws Throwable {
	
	/*
	 * Actions actions = new Actions(driver);
	 * 
	 * WebElement Account =
	 * driver.findElement(By.xpath(prop.getProperty("Account")));
	 * actions.moveToElement(Account).click().build().perform();
	 * driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	 * 
	 * driver.findElement(By.xpath(prop.getProperty("MyAccount"))).click();
	 * 
	 * //WebElement SignIn =
	 * driver.findElement(By.xpath(prop.getProperty("SignIn")));
	 * //actions.moveToElement(SignIn).click().build().perform();
	 * 
	 * Thread.sleep(3000);
	 */
		
		  LumensExcelReader reader=new LumensExcelReader();
		  
		  TC002_LoginValidation_Titleverification login=new TC002_LoginValidation_Titleverification(driver);
		  
		  List<Map<String,String>> testData =reader.getData("F:\\eclipse05\\cucumber hackathon\\LumensWebsite\\LumensWebsite\\ExcelTestdata\\lumenstestdata.xlsx",SheetName); 
		 
		  String Username =testData.get(RowNumber).get("EmailUsername");Thread.sleep(2000);
		  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS); 
		 
		  String Password =testData.get(RowNumber).get("Password");Thread.sleep(2000);
		  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		  
		  login.enterlogincredentials(Username, Password);
		  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
}

@Then("^User should be logged in successfully$")
public void user_should_be_logged_in_successfully() throws Throwable {
	TC002_LoginValidation_Titleverification Loginsuccess = new TC002_LoginValidation_Titleverification(driver);
	 
	 driver.manage().timeouts().implicitlyWait(60,TimeUnit.SECONDS);
	Loginsuccess.LoggedIn();
	 driver.manage().timeouts().implicitlyWait(50,TimeUnit.SECONDS);
	File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
    File dest = new File("screenshots/"+"VerifyTitle.screenshot"+ ".png");
    FileUtils.copyFile(scr, dest);
    
    
    /****************************************************************************
    '* Function			: Verify Title
    '* TestcaseNO		: TC003
    '* APPLICATION NAME	: www.Lumens.com
    '* CREATED BY		: Aarathi Manivannan
    '* CREATED DATE		: 26-07-2021
    '***************************************************************************/
	System.out.println("Modern Lighting, Ceiling Fans, Furniture & Home Decor | Lumens.com");
    String ExpectedTitle = "Modern Lighting, Ceiling Fans, Furniture & Home Decor | Lumens.com";
    String ActualTitle = driver.getTitle();
    Assert.assertEquals(ActualTitle, ExpectedTitle);
  
}


/****************************************************************************
'* Function			: SelectChandeliers
'* TestcaseNO		: TC004
'* APPLICATION NAME	: www.Lumens.com
'* CREATED BY		: Aarathi Manivannan
'* CREATED DATE		: 26-07-2021
'***************************************************************************/

@Given("^User navigates to the URL$")
public void user_navigates_to_the_URL() throws Throwable {
	driver.get(prop.getProperty("url"));Thread.sleep(4000);
    WebDriverWait wait = new WebDriverWait(driver,60);
	  wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("Popup"))));
	  driver.findElement(By.xpath(prop.getProperty("Popup"))).click();Thread.sleep(5000);
}

@And("^enter credetials from given sheetname \"([^\"]*)\" and rownumber (\\d+)$")
public void enter_credetials_from_given_sheetname_and_rownumber(String SheetName, int RowNumber) throws Throwable {
	
Actions actions = new Actions(driver);
	WebElement Account = driver.findElement(By.xpath(prop.getProperty("Account")));
	actions.moveToElement(Account).click().build().perform();
	 driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	 
	 driver.findElement(By.xpath(prop.getProperty("MyAccount"))).click();

	 Thread.sleep(3000);
		
		  LumensExcelReader reader=new LumensExcelReader();
		  LoginPage LoginPage = new LoginPage(driver);
		 // TC002_LoginValidation_Titleverification login=new TC002_LoginValidation_Titleverification(driver);
		  
		  List<Map<String,String>> testData =reader.getData("F:\\eclipse05\\cucumber hackathon\\LumensWebsite\\LumensWebsite\\ExcelTestdata\\lumenstestdata.xlsx",SheetName); 
		 
		  String Username =testData.get(RowNumber).get("EmailUsername");Thread.sleep(2000);
		  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS); 
		 
		  String Password =testData.get(RowNumber).get("Password");Thread.sleep(2000);
		  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		  
		  LoginPage.enterlogindetails(Username, Password);
		  
		  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		 
		  LoginPage.clicklogin();
}

@Then("^Navigate to lighting tab and select ceiling lights$")
public void navigate_to_lighting_tab_and_select_ceiling_lights() throws Throwable {

	TC004_Userselectsceilinglights selectlights= new TC004_Userselectsceilinglights(driver);
	selectlights.selectceilinglights();
}

@And("^Select the product Chandeliers and large chandeliers$")
public void select_the_product_Chandeliers_and_large_chandeliers() throws Throwable {

	TC004_Userselectsceilinglights selectlights= new TC004_Userselectsceilinglights(driver);
	selectlights.selectLargechandeliers();
	
	 driver.manage().timeouts().implicitlyWait(50,TimeUnit.SECONDS);
	File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
   File dest = new File("screenshots/"+"SelectLargeChandel.screenshot"+ ".png");
   FileUtils.copyFile(scr, dest);
}


/****************************************************************************
'* Function			: SelectProduct
'* TestcaseNO		: TC005
'* APPLICATION NAME	: www.Lumens.com
'* CREATED BY		: Aarathi Manivannan
'* CREATED DATE		: 26-07-202
'***************************************************************************/
@Given("^User navigates to the application$")
public void user_navigates_to_the_application() throws Throwable {
	driver.get(prop.getProperty("url"));
    WebDriverWait wait = new WebDriverWait(driver,60);
	  wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("Popup"))));
	  driver.findElement(By.xpath(prop.getProperty("Popup"))).click();
}

@And("^User enters the Login form from given sheetname \"([^\"]*)\" and rownumber (\\d+)$")
public void user_enters_the_Login_form_from_given_sheetname_and_rownumber(String SheetName, int RowNumber) throws Throwable {
	 LoginPage LoginPage = new LoginPage(driver);
	 LoginPage.Signin();
	 LumensExcelReader reader=new LumensExcelReader();
	 List<Map<String,String>> testData =reader.getData("F:\\eclipse05\\cucumber hackathon\\LumensWebsite\\LumensWebsite\\ExcelTestdata\\lumenstestdata.xlsx",SheetName); 
	 
	  String Username =testData.get(RowNumber).get("EmailUsername");Thread.sleep(2000);
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS); 
	 
	  String Password =testData.get(RowNumber).get("Password");Thread.sleep(2000);
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	  
	  LoginPage.enterlogindetails(Username, Password);
	  
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	 
	  LoginPage.clicklogin();
}

@Then("^Select the filter Ready to ship and style$")
public void select_the_filter_Ready_to_ship_and_style() throws Throwable {
  
	TC005_ApplyFilterandSelectProduct applyfilter= new TC005_ApplyFilterandSelectProduct(driver);
	applyfilter.selectproduct();
	
	 driver.manage().timeouts().implicitlyWait(50,TimeUnit.SECONDS);
	File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
   File dest = new File("screenshots/"+"SelectProduct.screenshot"+ ".png");
   FileUtils.copyFile(scr, dest);
}




@Then("^enter credentials from the given sheetname \"([^\"]*)\" and rownumber (\\d+)$")
public void enter_credentials_from_the_given_sheetname_and_rownumber(String SheetName, int RowNumber) throws Throwable {
	 LoginPage LoginPage = new LoginPage(driver);
	 LoginPage.Signin();
	 LumensExcelReader reader=new LumensExcelReader();
	 List<Map<String,String>> testData =reader.getData("F:\\eclipse05\\cucumber hackathon\\LumensWebsite\\LumensWebsite\\ExcelTestdata\\lumenstestdata.xlsx",SheetName); 
	 
	  String Username =testData.get(RowNumber).get("EmailUsername");Thread.sleep(2000);
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS); 
	 
	  String Password =testData.get(RowNumber).get("Password");Thread.sleep(2000);
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	  
	  LoginPage.enterlogindetails(Username, Password);
	  
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	 
	  LoginPage.clicklogin();
}

@Then("^Navigate to lighting tab and select ceiling lights and Select the product Chandeliers and large chandeliers$")
public void navigate_to_lighting_tab_and_select_ceiling_lights_and_Select_the_product_Chandeliers_and_large_chandeliers() throws Throwable {
	TC006_Usersaddsproducttocart select = new TC006_Usersaddsproducttocart(driver);
	select.Addtocart();
	
}

@Then("^Add the product to cart$")
public void add_the_product_to_cart() throws Throwable {
	TC006_Usersaddsproducttocart select = new TC006_Usersaddsproducttocart(driver);
	select.Checkout();
}

@Then("^enter valid credetials from given sheetname \"([^\"]*)\" and rownumber (\\d+)$")
public void enter_valid_credetials_from_given_sheetname_and_rownumber(String SheetName, int RowNumber) throws Throwable {
	LoginPage LoginPage = new LoginPage(driver);
	 LoginPage.Signin();
	 LumensExcelReader reader=new LumensExcelReader();
	 List<Map<String,String>> testData =reader.getData("F:\\eclipse05\\cucumber hackathon\\LumensWebsite\\LumensWebsite\\ExcelTestdata\\lumenstestdata.xlsx",SheetName); 
	 
	  String Username =testData.get(RowNumber).get("EmailUsername");Thread.sleep(2000);
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS); 
	 
	  String Password =testData.get(RowNumber).get("Password");Thread.sleep(2000);
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	  
	  LoginPage.enterlogindetails(Username, Password);
	  
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	 
	  LoginPage.clicklogin();
}


@Then("^Add the item to the cart$")
public void add_the_item_to_the_cart() throws Throwable {
   
	TC007_UserAbleViewtheCart Viewcart = new TC007_UserAbleViewtheCart(driver);
	Viewcart.checkoutproduct();
}

@Then("^View the cart details by clicking on cart link$")
public void view_the_cart_details_by_clicking_on_cart_link() throws Throwable {
	File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	   File dest = new File("screenshots/"+"Viewcart.screenshot"+ ".png");
	   FileUtils.copyFile(scr, dest);
		  
}

@Then("^enter logincredetials from given sheetname \"([^\"]*)\" and rownumber (\\d+)$")
public void enter_logincredetials_from_given_sheetname_and_rownumber(String SheetName, int RowNumber) throws Throwable {
	LoginPage LoginPage = new LoginPage(driver);
	 LoginPage.Signin();
	 LumensExcelReader reader=new LumensExcelReader();
	 List<Map<String,String>> testData =reader.getData("F:\\eclipse05\\cucumber hackathon\\LumensWebsite\\LumensWebsite\\ExcelTestdata\\lumenstestdata.xlsx",SheetName); 
	 
	  String Username =testData.get(RowNumber).get("EmailUsername");Thread.sleep(2000);
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS); 
	 
	  String Password =testData.get(RowNumber).get("Password");Thread.sleep(2000);
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	  
	  LoginPage.enterlogindetails(Username, Password);
	  
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	 
	  LoginPage.clicklogin();

}

@Then("^User is able to enter the specific product details in search field  and click on search icon$")
public void user_is_able_to_enter_the_specific_product_details_in_search_field_and_click_on_search_icon() throws Throwable {
	TC008_UserAbleToSearchTheProduct search= new TC008_UserAbleToSearchTheProduct(driver);
	search.SearchProduct();
}



@Given("^User able to click on live chat$")
public void user_able_to_click_on_live_chat() throws Throwable {
	TC009_UserAbleToLoginLiveChat clickonlivechat=new TC009_UserAbleToLoginLiveChat(driver);
	clickonlivechat.livechat();
}

@When("^user able to enter name and valid email Id$")
public void user_able_to_enter_name_and_valid_email_Id() throws Throwable {
	TC009_UserAbleToLoginLiveChat clickonlivechat=new TC009_UserAbleToLoginLiveChat(driver);
	clickonlivechat.LiveChatNameandEmail();
}

@Then("^User able to click on submit$")
public void user_able_to_click_on_submit() throws Throwable {
	TC009_UserAbleToLoginLiveChat clickonlivechat=new TC009_UserAbleToLoginLiveChat(driver);
	clickonlivechat.LiveChatsubmit();
}

@When("^user able to enter name and Invalid email Id$")
public void user_able_to_enter_name_and_Invalid_email_Id() throws Throwable {
	TC010_UserNotAbleToLoginLiveChat Clickonlivechat=new TC010_UserNotAbleToLoginLiveChat(driver);
	Clickonlivechat.InvalidCredentials();
}

@Then("^user shold able remove product from cart$")
public void user_shold_able_remove_product_from_cart() throws Throwable {
	TC011_RemoveProductPage remove = new TC011_RemoveProductPage(driver);
	remove.cart();
	remove.removeproduct();
}



@Given("^User able to enter url$")
public void user_able_to_enter_url() throws Throwable {
	driver.get(prop.getProperty("url"));Thread.sleep(4000);
    WebDriverWait wait = new WebDriverWait(driver,60);
	  wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("Popup"))));
	  driver.findElement(By.xpath(prop.getProperty("Popup"))).click();Thread.sleep(5000);
}


@Then("^User able to add credentials from sheetname \"([^\"]*)\" and rownumber (\\d+)$")
public void user_able_to_add_credentials_from_sheetname_and_rownumber(String SheetName, int RowNumber) throws Throwable {
	LoginPage LoginPage = new LoginPage(driver);
	 LoginPage.Signin();
	 LumensExcelReader reader=new LumensExcelReader();
	 List<Map<String,String>> testData =reader.getData("F:\\eclipse05\\cucumber hackathon\\LumensWebsite\\LumensWebsite\\ExcelTestdata\\lumenstestdata.xlsx",SheetName); 
	 
	  String Username =testData.get(RowNumber).get("EmailUsername");Thread.sleep(2000);
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS); 
	 
	  String Password =testData.get(RowNumber).get("Password");Thread.sleep(2000);
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	  
	  LoginPage.enterlogindetails(Username, Password);
	  
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	 
	  LoginPage.clicklogin();

}


@Then("^User is able to enter promocode$")
public void user_is_able_to_enter_promocode() throws Throwable {
	TC012CartPage promocode=new TC012CartPage(driver);
	promocode.Promocode();
}

@Then("^User is able to scroll up and scroll down$")
public void user_is_able_to_scroll_up_and_scroll_down() throws Throwable {
	TC013ScrollUpAndDown scroll=new TC013ScrollUpAndDown(driver);
	scroll.scroll();
}

@Then("^User is able to click product and navigate to home page$")
public void user_is_able_to_click_product_and_navigate_to_home_page() throws Throwable {
	TC014ProductPage navigate=new TC014ProductPage(driver);
	navigate.navigateBack();
}



/****************************************************************************
'* Function              : zipcode
'* TestcaseNO            : TC15
'* Application name      : www.Lumens.com
'* CREATED BY            : Divyasri Potu
'* CREATED DATE          : 26-07-2021
'***************************************************************************/

//TC15--ZIP CODE
@When("^user open link to Zipcode$")
public void user_open_link_to_Zipcode() throws Throwable {
   Thread.sleep(4000);
    driver.get(prop.getProperty("url_zip"));
    Thread.sleep(4000);
}
@Then("^User is not able to go with incorrect zipcode$")
public void User_is_not_able_to_go_with_incorrect_zipcode() throws Throwable 
{
	TC15_Zipcode zipcode=new TC15_Zipcode(driver);
	zipcode.Zipcode();
}

/****************************************************************************
'* Function              : quantity
'* TestcaseNO            : TC16
'* Application name      : www.Lumens.com
'* CREATED BY            :  Kiranmayee.v
'* CREATED DATE          : 26-07-2021
'***************************************************************************/

@When("^user open link to count$")
public void user_open_link_to_count() throws Throwable {
   Thread.sleep(4000);
    driver.get(prop.getProperty("url_16"));
    Thread.sleep(4000);
    WebDriverWait wait = new WebDriverWait(driver,60);
	  
	  wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='ltkpopup-close-button']")));
	  
	  driver.findElement(By.xpath("//*[@id='ltkpopup-close-button']")).click();
	  Thread.sleep(5000);
}
@Then("^User_is_able_to_go_with_count$")
public void User_is_able_to_go_with_count() throws Throwable 
{
	TC16_quantity count=new TC16_quantity(driver);
	count.quantity();
}



/****************************************************************************
'* Function			: Logout
'* Testcase			: TC017
'* APPLICATION NAME	: www.Lumens.com
'* CREATED BY		: Kiranmayee.v
'* CREATED DATE		: 26-07-2021
'***************************************************************************/

@Given("^User launches the application$")
public void user_launches_the_application() throws Throwable {
	driver.get(prop.getProperty("url"));
    WebDriverWait wait = new WebDriverWait(driver,60);
	  wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("Popup"))));
	  driver.findElement(By.xpath(prop.getProperty("Popup"))).click();Thread.sleep(5000);
}

@And("^User logins the application form from given sheetname \"([^\"]*)\" and rownumber (\\d+)$")
public void user_logins_the_application_form_from_given_sheetname_and_rownumber(String SheetName, int RowNumber) throws Throwable {
	LoginPage LoginPage = new LoginPage(driver);
	 LoginPage.Signin();
	 LumensExcelReader reader=new LumensExcelReader();
	 List<Map<String,String>> testData =reader.getData("F:\\eclipse05\\cucumber hackathon\\LumensWebsite\\LumensWebsite\\ExcelTestdata\\lumenstestdata.xlsx",SheetName); 
	 
	  String Username =testData.get(RowNumber).get("EmailUsername");Thread.sleep(2000);
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS); 
	 
	  String Password =testData.get(RowNumber).get("Password");Thread.sleep(2000);
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	  
	  LoginPage.enterlogindetails(Username, Password);
	  
	  driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	 
	  LoginPage.clicklogin();
}


@Then("^User selects the Signout icon on the menu$")
public void user_selects_the_Signout_icon_on_the_menu() throws Throwable {
	TC017_LogoutFunctionality Logout = new TC017_LogoutFunctionality(driver);
	
	Logout.Logout();
	
	 driver.manage().timeouts().implicitlyWait(50,TimeUnit.SECONDS);
	File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
   File dest = new File("screenshots/"+"Logout.screenshot"+ ".png");
   FileUtils.copyFile(scr, dest);
}




@After(order = 0)
public void quitBrowser() {
	driver.quit();
}

@After(order = 1)
public void embedScreenshot(Scenario scenario) throws Exception {
    if (scenario.isFailed()) {
        try {
            byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            String testName = scenario.getName();
            scenario.embed(screenshot, "image/png");
            scenario.write(testName);
        } catch (WebDriverException wde) {
           System.err.println(wde.getMessage());
        } catch (ClassCastException cce) {
            cce.printStackTrace();}
        }
    }
}