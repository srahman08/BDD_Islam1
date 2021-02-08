Feature: Validate Techfios Login Functionality 

Background: 
	Given User is on the Techfios Login page  
	
@Scenario1	
Scenario: 1 User should be able to login with valid credentials 

	Given User enters username as "demo@techfios.com"     
	Given User enters password as "abc123"                
	When User clicks on signin button 			 	     
	Then User should land on Dashboard page     
	
Scenario: 2 User should be able to login with valid credentials 

	Given User enters username as "demo@techfios.com"     
	Given User enters password as "abc12"                
	When User clicks on signin button 			 	     
	Then User should land on Dashboard page    
	
	Scenario: 3 User should be able to login with valid credentials 

	Given User enters username as "demo1@techfios.com"     
	Given User enters password as "abc123"                
	When User clicks on signin button 			 	     
	Then User should land on Dashboard page    
	
	Scenario: 4 User should be able to login with valid credentials 

	Given User enters username as "demo2@techfios.com"     
	Given User enters password as "abc1234"                
	When User clicks on signin button 			 	     
	Then User should land on Dashboard page    