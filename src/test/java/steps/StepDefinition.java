package steps;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.LoginPage;
import util.BrowserFactory;

public class StepDefinition {
	WebDriver driver;
	LoginPage loginPage;
	
	@Before
	public void beforeRun() {
		driver= BrowserFactory.startBrowser();
		loginPage=PageFactory.initElements(driver, LoginPage.class);
		
	}
	@Given("^User is on the Techfios Login page$")
	public void User_is_on_the_Techfios_Login_page() throws InterruptedException {
	//	driver= BrowserFactory.startBrowser();
		driver.get("https://www.techfios.com/billing/?ng=admin/");
		Thread.sleep(2000);
	}
	
	@Given("^User enters username as \"([^\"]*)\"$")
	public void User_enters_username_as(String userName) throws InterruptedException {
	//	loginPage=PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterUserName(userName);

	}
			
	@Given("^User enters password as \"([^\"]*)\"$")
	public void User_enters_password_as(String password) throws InterruptedException { 
	//	loginPage=PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterPassword(password);
		Thread.sleep(1000);

	}
	@When("^User clicks on signin button$")
	public void User_clicks_on_signin_button() throws InterruptedException {
		loginPage.clickOnSignInButton();
		Thread.sleep(2000);

	}
	
	@Then("^User should land on Dashboard page$")
	public void User_should_land_on_Dashboard_page() throws IOException {
		loginPage.takeScreenshotAtEndOfTest(driver);
		Assert.assertEquals("Login- iBilling", loginPage.getPageTitle());
		loginPage.takeScreenshotAtEndOfTest(driver);
		
		}
	
	@Given("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_userName_and_password(String userName, String password) throws Throwable {
		loginPage.enterUserName(userName);
		loginPage.enterPassword(password);
	}
	
	@After
	public void tearDown() {
		driver.close();
		driver.quit();
	}
	
	
}
