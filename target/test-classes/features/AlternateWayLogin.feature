@AlternateLogin
Feature: Validate Techfios Login Functionality 

Background: 
	Given User is on the Techfios Login page  
	
@Scenario1	
Scenario Outline: 1 User should be able to login with valid credentials 

	Given User enters "<userName>" and "<password>"
	When User clicks on signin button 			 	     
	Then User should land on Dashboard page    
	 
Examples:
|userName|password|
|demo@techfios.com | abc123 |