$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/AlternateWayLogin.feature");
formatter.feature({
  "line": 2,
  "name": "Validate Techfios Login Functionality",
  "description": "",
  "id": "validate-techfios-login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@AlternateLogin"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality;1-user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User enters \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "validate-techfios-login-functionality;1-user-should-be-able-to-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 15,
      "id": "validate-techfios-login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123"
      ],
      "line": 16,
      "id": "validate-techfios-login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2559680200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Techfios Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.User_is_on_the_Techfios_Login_page()"
});
formatter.result({
  "duration": 4130624100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "1 User should be able to login with valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality;1-user-should-be-able-to-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Scenario1"
    },
    {
      "line": 1,
      "name": "@AlternateLogin"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User enters \"demo@techfios.com\" and \"abc123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 13
    },
    {
      "val": "abc123",
      "offset": 37
    }
  ],
  "location": "StepDefinition.user_enters_userName_and_password(String,String)"
});
formatter.result({
  "duration": 325634400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_clicks_on_signin_button()"
});
formatter.result({
  "duration": 4479129200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.User_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 362268800,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Login]- iBilling\u003e but was:\u003c[Dashboard]- iBilling\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat steps.StepDefinition.User_should_land_on_Dashboard_page(StepDefinition.java:58)\r\n\tat ✽.Then User should land on Dashboard page(features/AlternateWayLogin.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 832181900,
  "status": "passed"
});
});