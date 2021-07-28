$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("lumens.feature");
formatter.feature({
  "line": 1,
  "name": "lumensApplication TestCases (End to End validation)",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "TC001 Register Account",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc001-register-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user should open link",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on accountand enter credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on submit",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc001-register-account;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 10,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc001-register-account;;1"
    },
    {
      "cells": [
        "Accountcreation",
        "0"
      ],
      "line": 11,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc001-register-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 66512500,
  "status": "passed"
});
formatter.before({
  "duration": 9182838200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "TC001 Register Account",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc001-register-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user should open link",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on accountand enter credentials \"Accountcreation\" and 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on submit",
  "keyword": "And "
});
formatter.match({
  "location": "LumensStepdefinition.user_should_open_link()"
});
formatter.result({
  "duration": 20687140600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accountcreation",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 60
    }
  ],
  "location": "LumensStepdefinition.click_on_accountand_enter_credentials_and(String,int)"
});
formatter.result({
  "duration": 12831214400,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.click_on_submit()"
});
formatter.result({
  "duration": 4902649300,
  "status": "passed"
});
formatter.after({
  "duration": 123600,
  "status": "passed"
});
formatter.after({
  "duration": 1456870900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "TC002 Account Login and TC003 Verify title",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc002-account-login-and-tc003-verify-title",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User enters the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc002-account-login-and-tc003-verify-title;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 21,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc002-account-login-and-tc003-verify-title;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 22,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc002-account-login-and-tc003-verify-title;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 929600,
  "status": "passed"
});
formatter.before({
  "duration": 4501143800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "TC002 Account Login and TC003 Verify title",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc002-account-login-and-tc003-verify-title;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User enters the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "User fill the Login form from given sheetname \"login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LumensStepdefinition.user_enters_the_URL()"
});
formatter.result({
  "duration": 22961916900,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 9189038900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 47
    },
    {
      "val": "0",
      "offset": 68
    }
  ],
  "location": "LumensStepdefinition.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 4793823300,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 12505762400,
  "status": "passed"
});
formatter.after({
  "duration": 91700,
  "status": "passed"
});
formatter.after({
  "duration": 1231376500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "TC004 Verify User is able to select ceiling lights from Lighting tab",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc004-verify-user-is-able-to-select-ceiling-lights-from-lighting-tab",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "User navigates to the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "enter credetials from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Navigate to lighting tab and select ceiling lights",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Select the product Chandeliers and large chandeliers",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc004-verify-user-is-able-to-select-ceiling-lights-from-lighting-tab;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 31,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc004-verify-user-is-able-to-select-ceiling-lights-from-lighting-tab;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 32,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc004-verify-user-is-able-to-select-ceiling-lights-from-lighting-tab;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1146700,
  "status": "passed"
});
formatter.before({
  "duration": 5943969500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "TC004 Verify User is able to select ceiling lights from Lighting tab",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc004-verify-user-is-able-to-select-ceiling-lights-from-lighting-tab;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "User navigates to the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "enter credetials from given sheetname \"login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Navigate to lighting tab and select ceiling lights",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Select the product Chandeliers and large chandeliers",
  "keyword": "Then "
});
formatter.match({
  "location": "LumensStepdefinition.user_navigates_to_the_URL()"
});
formatter.result({
  "duration": 31055031500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 60
    }
  ],
  "location": "LumensStepdefinition.enter_credetials_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 39542420200,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.navigate_to_lighting_tab_and_select_ceiling_lights()"
});
formatter.result({
  "duration": 7462148900,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.select_the_product_Chandeliers_and_large_chandeliers()"
});
formatter.result({
  "duration": 17804986300,
  "status": "passed"
});
formatter.after({
  "duration": 27000,
  "status": "passed"
});
formatter.after({
  "duration": 1478597000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "TC005  Verify user is able to select the specific product by applying  filter and add to cart",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc005--verify-user-is-able-to-select-the-specific-product-by-applying--filter-and-add-to-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "User navigates to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User enters the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Select the filter Ready to ship and style",
  "keyword": "And "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc005--verify-user-is-able-to-select-the-specific-product-by-applying--filter-and-add-to-cart;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 40,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc005--verify-user-is-able-to-select-the-specific-product-by-applying--filter-and-add-to-cart;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 41,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc005--verify-user-is-able-to-select-the-specific-product-by-applying--filter-and-add-to-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 459800,
  "status": "passed"
});
formatter.before({
  "duration": 6100602200,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "TC005  Verify user is able to select the specific product by applying  filter and add to cart",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc005--verify-user-is-able-to-select-the-specific-product-by-applying--filter-and-add-to-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "User navigates to the application",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User enters the Login form from given sheetname \"login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Select the filter Ready to ship and style",
  "keyword": "And "
});
formatter.match({
  "location": "LumensStepdefinition.user_navigates_to_the_application()"
});
formatter.result({
  "duration": 13954342600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 49
    },
    {
      "val": "0",
      "offset": 70
    }
  ],
  "location": "LumensStepdefinition.user_enters_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 26061486200,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.select_the_filter_Ready_to_ship_and_style()"
});
formatter.result({
  "duration": 31041540800,
  "status": "passed"
});
formatter.after({
  "duration": 54800,
  "status": "passed"
});
formatter.after({
  "duration": 1348606400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "TC006 Verify User is able to select ceiling lights from Lighting tab and Add to cart \u0026 Checout",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc006-verify-user-is-able-to-select-ceiling-lights-from-lighting-tab-and-add-to-cart-\u0026-checout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "User navigates to the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "enter credentials from the given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Navigate to lighting tab and select ceiling lights and Select the product Chandeliers and large chandeliers",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Add the product to cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc006-verify-user-is-able-to-select-ceiling-lights-from-lighting-tab-and-add-to-cart-\u0026-checout;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 50,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc006-verify-user-is-able-to-select-ceiling-lights-from-lighting-tab-and-add-to-cart-\u0026-checout;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 51,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc006-verify-user-is-able-to-select-ceiling-lights-from-lighting-tab-and-add-to-cart-\u0026-checout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 502900,
  "status": "passed"
});
formatter.before({
  "duration": 5429156300,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "TC006 Verify User is able to select ceiling lights from Lighting tab and Add to cart \u0026 Checout",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc006-verify-user-is-able-to-select-ceiling-lights-from-lighting-tab-and-add-to-cart-\u0026-checout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "User navigates to the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "enter credentials from the given sheetname \"login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Navigate to lighting tab and select ceiling lights and Select the product Chandeliers and large chandeliers",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Add the product to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LumensStepdefinition.user_navigates_to_the_URL()"
});
formatter.result({
  "duration": 18890262700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 44
    },
    {
      "val": "0",
      "offset": 65
    }
  ],
  "location": "LumensStepdefinition.enter_credentials_from_the_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 27275062900,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.navigate_to_lighting_tab_and_select_ceiling_lights_and_Select_the_product_Chandeliers_and_large_chandeliers()"
});
formatter.result({
  "duration": 33772374700,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.add_the_product_to_cart()"
});
formatter.result({
  "duration": 18388047500,
  "status": "passed"
});
formatter.after({
  "duration": 61200,
  "status": "passed"
});
formatter.after({
  "duration": 1378797700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "TC007 Verify user is able to select the specific product by applying  filter and View cart",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc007-verify-user-is-able-to-select-the-specific-product-by-applying--filter-and-view-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "User navigates to the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "enter valid credetials from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Add the item to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "View the cart details by clicking on cart link",
  "keyword": "Then "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc007-verify-user-is-able-to-select-the-specific-product-by-applying--filter-and-view-cart;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 60,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc007-verify-user-is-able-to-select-the-specific-product-by-applying--filter-and-view-cart;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 61,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc007-verify-user-is-able-to-select-the-specific-product-by-applying--filter-and-view-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 729900,
  "status": "passed"
});
formatter.before({
  "duration": 6359343900,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "TC007 Verify user is able to select the specific product by applying  filter and View cart",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc007-verify-user-is-able-to-select-the-specific-product-by-applying--filter-and-view-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 55,
  "name": "User navigates to the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "enter valid credetials from given sheetname \"login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Add the item to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "View the cart details by clicking on cart link",
  "keyword": "Then "
});
formatter.match({
  "location": "LumensStepdefinition.user_navigates_to_the_URL()"
});
formatter.result({
  "duration": 25574985600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 45
    },
    {
      "val": "0",
      "offset": 66
    }
  ],
  "location": "LumensStepdefinition.enter_valid_credetials_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 30254845400,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.add_the_item_to_the_cart()"
});
formatter.result({
  "duration": 11644091500,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.view_the_cart_details_by_clicking_on_cart_link()"
});
formatter.result({
  "duration": 319238100,
  "status": "passed"
});
formatter.after({
  "duration": 44900,
  "status": "passed"
});
formatter.after({
  "duration": 1678030700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 63,
  "name": "TC008 Verify user is able to search for product",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc008-verify-user-is-able-to-search-for-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 65,
  "name": "User navigates to the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "enter logincredetials from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "User is able to enter the specific product details in search field  and click on search icon",
  "keyword": "And "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc008-verify-user-is-able-to-search-for-product;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 69,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc008-verify-user-is-able-to-search-for-product;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 70,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc008-verify-user-is-able-to-search-for-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 931400,
  "status": "passed"
});
formatter.before({
  "duration": 5084375900,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "TC008 Verify user is able to search for product",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc008-verify-user-is-able-to-search-for-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 65,
  "name": "User navigates to the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "enter logincredetials from given sheetname \"login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "User is able to enter the specific product details in search field  and click on search icon",
  "keyword": "And "
});
formatter.match({
  "location": "LumensStepdefinition.user_navigates_to_the_URL()"
});
formatter.result({
  "duration": 27798042800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 44
    },
    {
      "val": "0",
      "offset": 65
    }
  ],
  "location": "LumensStepdefinition.enter_logincredetials_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 26402330700,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_is_able_to_enter_the_specific_product_details_in_search_field_and_click_on_search_icon()"
});
formatter.result({
  "duration": 701177200,
  "status": "passed"
});
formatter.after({
  "duration": 31000,
  "status": "passed"
});
formatter.after({
  "duration": 1192236200,
  "status": "passed"
});
formatter.before({
  "duration": 898200,
  "status": "passed"
});
formatter.before({
  "duration": 3470237100,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "TC009 Verify user is able to login Live chat by entering valid credentials",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc009-verify-user-is-able-to-login-live-chat-by-entering-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 73,
  "name": "User enters the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "User able to click on live chat",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "user able to enter name and valid email Id",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "User able to click on submit",
  "keyword": "Then "
});
formatter.match({
  "location": "LumensStepdefinition.user_enters_the_URL()"
});
formatter.result({
  "duration": 21548356200,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_able_to_click_on_live_chat()"
});
formatter.result({
  "duration": 9056238500,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_able_to_enter_name_and_valid_email_Id()"
});
formatter.result({
  "duration": 336593200,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_able_to_click_on_submit()"
});
formatter.result({
  "duration": 119118800,
  "status": "passed"
});
formatter.after({
  "duration": 23800,
  "status": "passed"
});
formatter.after({
  "duration": 1240599900,
  "status": "passed"
});
formatter.before({
  "duration": 1001000,
  "status": "passed"
});
formatter.before({
  "duration": 3370845400,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "TC010 Verify user is not able to login Live chat by entering Invalid credentials",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc010-verify-user-is-not-able-to-login-live-chat-by-entering-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 80,
  "name": "User enters the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "User able to click on live chat",
  "keyword": "Given "
});
formatter.step({
  "line": 82,
  "name": "user able to enter name and Invalid email Id",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "User able to click on submit",
  "keyword": "Then "
});
formatter.match({
  "location": "LumensStepdefinition.user_enters_the_URL()"
});
formatter.result({
  "duration": 24684254900,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_able_to_click_on_live_chat()"
});
formatter.result({
  "duration": 11903874900,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_able_to_enter_name_and_Invalid_email_Id()"
});
formatter.result({
  "duration": 358516400,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_able_to_click_on_submit()"
});
formatter.result({
  "duration": 179109200,
  "status": "passed"
});
formatter.after({
  "duration": 39900,
  "status": "passed"
});
formatter.after({
  "duration": 1380655700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 86,
  "name": "TC011 User able remove product from cart",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc011-user-able-remove-product-from-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 89,
  "name": "User enters the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "user shold able remove product from cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 94,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc011-user-able-remove-product-from-cart;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 95,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc011-user-able-remove-product-from-cart;;1"
    },
    {
      "cells": [
        "extralogin",
        "0"
      ],
      "line": 96,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc011-user-able-remove-product-from-cart;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 926700,
  "status": "passed"
});
formatter.before({
  "duration": 3424537500,
  "status": "passed"
});
formatter.scenario({
  "line": 96,
  "name": "TC011 User able remove product from cart",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc011-user-able-remove-product-from-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 89,
  "name": "User enters the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "User fill the Login form from given sheetname \"extralogin\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "user shold able remove product from cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LumensStepdefinition.user_enters_the_URL()"
});
formatter.result({
  "duration": 24273750600,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 6367762300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "extralogin",
      "offset": 47
    },
    {
      "val": "0",
      "offset": 73
    }
  ],
  "location": "LumensStepdefinition.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 4707934000,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 12901765200,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_shold_able_remove_product_from_cart()"
});
formatter.result({
  "duration": 59537837600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"cart-items-form\"]/fieldset/div[1]/div[4]/div[4]/div[2]/button/span\"}\n  (Session info: chrome\u003d92.0.4515.107)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:01:39.354Z\u0027\nSystem info: host: \u0027DESKTOP-NO5P2B0\u0027, ip: \u0027192.168.29.11\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 92.0.4515.107, chrome: {chromedriverVersion: 92.0.4515.43 (8c61b7e2989f2..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63781}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 834c0a9e474b77d36b6e2a86f1e5f2ce\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"cart-items-form\"]/fieldset/div[1]/div[4]/div[4]/div[2]/button/span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat lumensPages.TC011_RemoveProductPage.removeproduct(TC011_RemoveProductPage.java:36)\r\n\tat LumensStepDefinition.LumensStepdefinition.user_shold_able_remove_product_from_cart(LumensStepdefinition.java:471)\r\n\tat ✽.Then user shold able remove product from cart(lumens.feature:93)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("TC011 User able remove product from cart");
formatter.after({
  "duration": 176033200,
  "status": "passed"
});
formatter.after({
  "duration": 1340609600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 99,
  "name": "TC012 verify user is able to apply promocode",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc012-verify-user-is-able-to-apply-promocode",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "User able to enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "User able to add credentials from sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "User is able to enter promocode",
  "keyword": "Then "
});
formatter.examples({
  "line": 103,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc012-verify-user-is-able-to-apply-promocode;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 104,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc012-verify-user-is-able-to-apply-promocode;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 105,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc012-verify-user-is-able-to-apply-promocode;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 845200,
  "status": "passed"
});
formatter.before({
  "duration": 3381192400,
  "status": "passed"
});
formatter.scenario({
  "line": 105,
  "name": "TC012 verify user is able to apply promocode",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc012-verify-user-is-able-to-apply-promocode;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 100,
  "name": "User able to enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 101,
  "name": "User able to add credentials from sheetname \"login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "User is able to enter promocode",
  "keyword": "Then "
});
formatter.match({
  "location": "LumensStepdefinition.user_able_to_enter_url()"
});
formatter.result({
  "duration": 19663775600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 45
    },
    {
      "val": "0",
      "offset": 66
    }
  ],
  "location": "LumensStepdefinition.user_able_to_add_credentials_from_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 45911794100,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_is_able_to_enter_promocode()"
});
formatter.result({
  "duration": 12432746100,
  "status": "passed"
});
formatter.after({
  "duration": 44900,
  "status": "passed"
});
formatter.after({
  "duration": 1424996500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 107,
  "name": "TC013 verify user to scroll up and down",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc013-verify-user-to-scroll-up-and-down",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 108,
  "name": "User able to enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "User able to add credentials from sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "User is able to scroll up and scroll down",
  "keyword": "Then "
});
formatter.examples({
  "line": 111,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc013-verify-user-to-scroll-up-and-down;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 112,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc013-verify-user-to-scroll-up-and-down;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 113,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc013-verify-user-to-scroll-up-and-down;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1168800,
  "status": "passed"
});
formatter.before({
  "duration": 3454646700,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "TC013 verify user to scroll up and down",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc013-verify-user-to-scroll-up-and-down;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 108,
  "name": "User able to enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "User able to add credentials from sheetname \"login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "User is able to scroll up and scroll down",
  "keyword": "Then "
});
formatter.match({
  "location": "LumensStepdefinition.user_able_to_enter_url()"
});
formatter.result({
  "duration": 19734993900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 45
    },
    {
      "val": "0",
      "offset": 66
    }
  ],
  "location": "LumensStepdefinition.user_able_to_add_credentials_from_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 26435194500,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_is_able_to_scroll_up_and_scroll_down()"
});
formatter.result({
  "duration": 2731155400,
  "status": "passed"
});
formatter.after({
  "duration": 45600,
  "status": "passed"
});
formatter.after({
  "duration": 1272630000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 115,
  "name": "TC014 verify Navigation back",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc014-verify-navigation-back",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 116,
  "name": "User able to enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "User able to add credentials from sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "User is able to click product and navigate to home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 119,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc014-verify-navigation-back;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 120,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc014-verify-navigation-back;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 121,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc014-verify-navigation-back;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 444100,
  "status": "passed"
});
formatter.before({
  "duration": 8975343500,
  "status": "passed"
});
formatter.scenario({
  "line": 121,
  "name": "TC014 verify Navigation back",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc014-verify-navigation-back;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 116,
  "name": "User able to enter url",
  "keyword": "Given "
});
formatter.step({
  "line": 117,
  "name": "User able to add credentials from sheetname \"login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "User is able to click product and navigate to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LumensStepdefinition.user_able_to_enter_url()"
});
formatter.result({
  "duration": 31657259600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 45
    },
    {
      "val": "0",
      "offset": 66
    }
  ],
  "location": "LumensStepdefinition.user_able_to_add_credentials_from_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 30600730600,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_is_able_to_click_product_and_navigate_to_home_page()"
});
formatter.result({
  "duration": 12776716100,
  "status": "passed"
});
formatter.after({
  "duration": 79100,
  "status": "passed"
});
formatter.after({
  "duration": 1272600600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 124,
  "name": "TC015zipcode",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc015zipcode",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 126,
  "name": "User enters the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 130,
      "value": "#Then user open link to Zipcode"
    }
  ],
  "line": 131,
  "name": "User is not able to go with incorrect zipcode",
  "keyword": "Then "
});
formatter.examples({
  "line": 132,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc015zipcode;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 133,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc015zipcode;;1"
    },
    {
      "cells": [
        "Quantity",
        "0"
      ],
      "line": 134,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc015zipcode;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 511100,
  "status": "passed"
});
formatter.before({
  "duration": 6695008200,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "TC015zipcode",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc015zipcode;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 126,
  "name": "User enters the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 127,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "User fill the Login form from given sheetname \"Quantity\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 130,
      "value": "#Then user open link to Zipcode"
    }
  ],
  "line": 131,
  "name": "User is not able to go with incorrect zipcode",
  "keyword": "Then "
});
formatter.match({
  "location": "LumensStepdefinition.user_enters_the_URL()"
});
formatter.result({
  "duration": 23597451600,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 6651872200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Quantity",
      "offset": 47
    },
    {
      "val": "0",
      "offset": 71
    }
  ],
  "location": "LumensStepdefinition.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 4685242900,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 11654724000,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.User_is_not_able_to_go_with_incorrect_zipcode()"
});
formatter.result({
  "duration": 32161546700,
  "status": "passed"
});
formatter.after({
  "duration": 51600,
  "status": "passed"
});
formatter.after({
  "duration": 1474201300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 136,
  "name": "TC016uantity",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc016uantity",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 138,
  "name": "user open link to count",
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "User_is_able_to_go_with_count",
  "keyword": "Then "
});
formatter.examples({
  "line": 140,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc016uantity;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 141,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc016uantity;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 142,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc016uantity;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1033400,
  "status": "passed"
});
formatter.before({
  "duration": 5342580900,
  "status": "passed"
});
formatter.scenario({
  "line": 142,
  "name": "TC016uantity",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc016uantity;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 138,
  "name": "user open link to count",
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "User_is_able_to_go_with_count",
  "keyword": "Then "
});
formatter.match({
  "location": "LumensStepdefinition.user_open_link_to_count()"
});
formatter.result({
  "duration": 26936234200,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.User_is_able_to_go_with_count()"
});
formatter.result({
  "duration": 6748526800,
  "status": "passed"
});
formatter.after({
  "duration": 43700,
  "status": "passed"
});
formatter.after({
  "duration": 1327362200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 148,
  "name": "TC0017 Verify logout functionality",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc0017-verify-logout-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 150,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "User logins the application form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "User selects the Signout icon on the menu",
  "keyword": "And "
});
formatter.examples({
  "line": 153,
  "name": "",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc0017-verify-logout-functionality;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 154,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc0017-verify-logout-functionality;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 155,
      "id": "lumensapplication-testcases-(end-to-end-validation);tc0017-verify-logout-functionality;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2884900,
  "status": "passed"
});
formatter.before({
  "duration": 3310962800,
  "status": "passed"
});
formatter.scenario({
  "line": 155,
  "name": "TC0017 Verify logout functionality",
  "description": "",
  "id": "lumensapplication-testcases-(end-to-end-validation);tc0017-verify-logout-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 150,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 151,
  "name": "User logins the application form from given sheetname \"login\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "User selects the Signout icon on the menu",
  "keyword": "And "
});
formatter.match({
  "location": "LumensStepdefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 37407831200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 55
    },
    {
      "val": "0",
      "offset": 76
    }
  ],
  "location": "LumensStepdefinition.user_logins_the_application_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 26249836100,
  "status": "passed"
});
formatter.match({
  "location": "LumensStepdefinition.user_selects_the_Signout_icon_on_the_menu()"
});
formatter.result({
  "duration": 9373551300,
  "status": "passed"
});
formatter.after({
  "duration": 430600,
  "status": "passed"
});
formatter.after({
  "duration": 1269710300,
  "status": "passed"
});
});