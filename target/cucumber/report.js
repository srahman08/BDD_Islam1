$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Validate Techfios Login Functionality",
  "description": "",
  "id": "validate-techfios-login-functionality",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Techfios Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.User_is_on_the_Techfios_Login_page()"
});
formatter.result({
  "duration": 326382700,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should be able to login with valid credentials",
  "description": "",
  "id": "validate-techfios-login-functionality;user-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User enters username as \"demo@techfios.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User enters password as \"abc123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User clicks on signin button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 25
    }
  ],
  "location": "StepDefinition.User_enters_username_as(String)"
});
formatter.result({
  "duration": 10063700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});