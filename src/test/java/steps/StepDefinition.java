package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition {

	@Given("^User is on the Techfios Login page$")

	public void User_is_on_the_Techfios_Login_page() {
		System.out.println("user is on the Techfios login page");
	}
	

	@Given("^User enters username as \"([^\"]*)\"$")
	public void User_enters_username_as(String username) {
		System.out.println("User enters username");

	}

	@Given("^User enters password as \"([^\"]*)\"$")
	public void User_enters_password_as(String password) {
		System.out.println("User enters password");

	}

	@When("^User clicks on signin button$")
	public void User_clicks_on_signin_button() {
		System.out.println("User clicks to sign in");
	}

	@Then("^User should land on Dashboard page$")
	public void User_should_land_on_Dashboard_page() {

		System.out.println("User lands on Dashboard page");
	}

}
