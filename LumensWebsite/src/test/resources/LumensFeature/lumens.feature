Feature: lumensApplication TestCases (End to End validation)


Scenario Outline:  TC001 Register Account  

Given user should open link
Then click on accountand enter credentials "<SheetName>" and <RowNumber>
And click on submit
Examples:
|SheetName|RowNumber|
|Accountcreation|0|

Scenario Outline: TC002 Account Login and TC003 Verify title


Given User enters the URL
Then User click on My account and Login 
And User fill the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
Then User should be logged in successfully  
Examples:
|SheetName|RowNumber|
|login|0|

Scenario Outline: TC004 Verify User is able to select ceiling lights from Lighting tab

Given User navigates to the URL
Then enter credetials from given sheetname "<SheetName>" and rownumber <RowNumber>
And Navigate to lighting tab and select ceiling lights
Then Select the product Chandeliers and large chandeliers
Examples:
|SheetName|RowNumber|
|login|0|

Scenario Outline: TC005  Verify user is able to select the specific product by applying  filter and add to cart

Given User navigates to the application
Then User enters the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
And Select the filter Ready to ship and style
Examples:
|SheetName|RowNumber|
|login|0|

Scenario Outline: TC006 Verify User is able to select ceiling lights from Lighting tab and Add to cart & Checout

Given User navigates to the URL
Then enter credentials from the given sheetname "<SheetName>" and rownumber <RowNumber>
And Navigate to lighting tab and select ceiling lights and Select the product Chandeliers and large chandeliers
Then Add the product to cart
Examples:
|SheetName|RowNumber|
|login|0|

Scenario Outline: TC007 Verify user is able to select the specific product by applying  filter and View cart

Given User navigates to the URL
Then enter valid credetials from given sheetname "<SheetName>" and rownumber <RowNumber>
And Add the item to the cart
Then  View the cart details by clicking on cart link
Examples:
|SheetName|RowNumber|
|login|0|

Scenario Outline: TC008 Verify user is able to search for product

Given User navigates to the URL
Then enter logincredetials from given sheetname "<SheetName>" and rownumber <RowNumber>
And User is able to enter the specific product details in search field  and click on search icon
Examples:
|SheetName|RowNumber|
|login|0|

Scenario: TC009 Verify user is able to login Live chat by entering valid credentials
Given User enters the URL
Given User able to click on live chat 
When user able to enter name and valid email Id  
Then User able to click on submit


Scenario: TC010 Verify user is not able to login Live chat by entering Invalid credentials
Given User enters the URL
Given User able to click on live chat 
When user able to enter name and Invalid email Id  
Then User able to click on submit


Scenario Outline: TC011 User able remove product from cart


Given User enters the URL
Then User click on My account and Login 
And User fill the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
Then User should be logged in successfully 
Then user shold able remove product from cart 
Examples:
|SheetName|RowNumber|
|extralogin|0|


Scenario Outline: TC012 verify user is able to apply promocode
Given User able to enter url
And User able to add credentials from sheetname "<SheetName>" and rownumber <RowNumber>
Then User is able to enter promocode
Examples:
|SheetName|RowNumber|
|login|0|

Scenario Outline: TC013 verify user to scroll up and down
Given User able to enter url
And User able to add credentials from sheetname "<SheetName>" and rownumber <RowNumber>
Then User is able to scroll up and scroll down
Examples:
|SheetName|RowNumber|
|login|0|

Scenario Outline: TC014 verify Navigation back
Given User able to enter url
And User able to add credentials from sheetname "<SheetName>" and rownumber <RowNumber>
Then User is able to click product and navigate to home page
Examples:
|SheetName|RowNumber|
|login|0|


Scenario Outline: TC015zipcode

Given User enters the URL
Then User click on My account and Login 
And User fill the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
Then User should be logged in successfully 
#Then user open link to Zipcode
Then User is not able to go with incorrect zipcode
Examples:
|SheetName|RowNumber|
|Quantity|0|

Scenario Outline: TC016uantity

Given user open link to count
Then User_is_able_to_go_with_count
Examples:
|SheetName|RowNumber|
|login|0|





Scenario Outline: TC0017 Verify logout functionality

Given User launches the application
Then User logins the application form from given sheetname "<SheetName>" and rownumber <RowNumber>
And User selects the Signout icon on the menu
Examples:
|SheetName|RowNumber|
|login|0|
