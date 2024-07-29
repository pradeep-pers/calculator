class RetirementCalculatorPage{
    [x: string]: any

    get CurrentAgeTextbox()
{
    return $('//input[@id="current-age"]')
}
 get AgeToRetireTextbox()
 {
    return $('//input[@id="retirement-age"]')
 }
 get CurrentAnnualIncomeTextbox()
 {
    return $('//input[@id="current-income"] ')
    
 }
 get SpouseannualincomeTextbox()
 {
    return $('//input[@id="spouse-income"]')
 }
 get CurrentretirementsavingsbalanceTextbox()
 {
    return $('//input[@id="current-total-savings"]')
 }
 
 get SavingeachyearforretirementTextbox ()
 {
    return $('//input[@id="current-annual-savings"]')
 }
 
 get IncreaseinyoursavingseachyearTextbox ()
 {
    return $('//input[@id="savings-increase-rate"]')
 }

 get SocialSecurityincomeChecktbox ()
 {
    return $('//label[@for="yes-social-benefits"]')
 }
 
 get MaritalStatusChecktbox ()
 {
    return $('//label[@for="married"]')
 }

 get SocialSecurityoverrideamount ()
 {
    return $('//input[@id="social-security-override"]')

 }
 get Defaultcalvalues ()
 {
    return $('//a[text()="Adjust default values"]')
 }
 get Additionalotherincome1 ()
 {
    return $('//input[@id="additional-income"]')
 }
 
 get NumberOfyearsRetirementNeedstoLast()
 {
    return $('//input[@id="retirement-duration"]')
 }

 get PostRetirementIncomeIncreaseWithInflation()
 {
    return $('//label[@for="include-inflation"]')
    
 }
 get PercentOfFinalAnnualIncomeDesired()
  {
    return $('//input[@id="retirement-annual-income"]')
  }
  get PreRetirementInvestmentReturn()
  {
    return $('//input[@id="pre-retirement-roi"]')
  }
  get PostRetirementInvestmentReturn()
  {
    return $('//input[@id="post-retirement-roi"]')
  }
  get SaveChanges()
  {
    return $('//button[text()="Save changes"]')
  }
  get Cancel()
  {
    return $('//button[text()="Cancel"]')
  }

  get ClearForm()
  {
    return $('//button[text()="Clear form"]')
  }
  get Calculate()
  {
    return $('//button[text()="Calculate"]')
  }
  get invalidcurrentageerror()
  {
    return $('//span[@id="invalid-current-age-error"]')
  }

  get invalidretirementageerror()
  {
    return $('//span[@id="invalid-retirement-age-error"]')
  }

  get invalidcurrentincomeerror()
  {
    return $('//span[@id="invalid-current-income-error"]')
  }
  get invalidcurrentannualsavingserror()
  {
    return $('//span[@id="invalid-current-annual-savings-error"]')
  }

  get invalidsavingsincreaserateerror()
  {
    return $('//span[@id="invalid-savings-increase-rate-error"]')
  }

  get SuccessMessage(){
    return $('//p[@id="result-message"]')
  }

  
 
 //actions

async OpenUrl()
  {
    browser.url('https://www.securian.com/insights-tools/retirement-calculator.html/')
    browser.maximizeWindow()
    await browser.setTimeout({ 'pageLoad': 50000 })
    await expect(browser).toHaveUrl("https://www.securian.com/insights-tools/retirement-calculator.html/")

    
}
async EnterAge(_value: any)
{
    await this.CurrentAgeTextbox.setValue('value')
    
}
async pLantoRetire(_value: any)
{
    await this.AgeToRetireTextbox.setValue('value') 
}
async cAnuualIncome(_value: any)
{
    await this.IncomeSavings.click()
    await this.IncomeSavings.setValue('value')
       
}
async Spouseannualincome(_value: any)
{
    await this.SpouseannualincomeTextbox.click()
    await this.SpouseannualincomeTextbox.setValue('value')
       
}
async Currentretirementsavingsbalance(_value: any)
{
    await this.CurrentretirementsavingsbalanceTextbox.click()
    await this.CurrentretirementsavingsbalanceTextbox.setValue('value')
    
}
async Savingeachyearforretirement(_value:any)
{
    await this.SavingeachyearforretirementTextbox.click()
    await this.SavingeachyearforretirementTextbox.setValue('value')
}

async Rateofincreaseinyoursavingseachyear(_value:any)
{
    await this.RateofincreaseinyoursavingseachyearTextbox.click()
    await this.RateofincreaseinyoursavingseachyearTextbox.setValue('value')
}
async SocialSecurityincome()
{
    await this.SocialSecurityincomeCheckbox.click()
    
}

async MaritalStatus()
{
    await this.MaritalStatusCheckbox.click()
    
}
async SocialSecurityOverRideAmount(_value:any)
{
    await this.SocialSecurityoverrideamountTextbox.click()
    await this.SocialSecurityoverrideamountTextbox.setValue('value')
}

async Defaultcalculatorvalues()
{
   await this.Defaultcalvalues.click()
}
async Additionalotherincome(_value:any)
{
   await this.AdditionalotherincomeTextbox.click()
   await this.AdditionalotherincomeTextbox.setValue('value')
}
async Numberofyearsretirementneedstolast (_value:any)
{
   await this.NumberOfyearsRetirementNeedstoLastTextbox.click()
   await this.NumberOfyearsRetirementNeedstoLastTextbox.setValue('value')

}

async PostRetirementIncomeIncreaseWithInflation1()
{
    await this.PostRetirementIncomeIncreaseWithInflationCheckbox.click()
}

async PercentOfFinalAnnualIncomeDesired1(_value:any)
{
    await this.PercentOfFinalAnnualIncomeDesiredTextbox.click()
    await this.PercentOfFinalAnnualIncomeDesiredTextbox.setValue('value')
}
async PreRetirementInvestmentReturn1(_value:any)
{
    await this.PreRetirementInvestmentReturnTextbox.click()
    await this.PreRetirementInvestmentReturnTextbox.setValue('value')

}
async PostRetirementInvestmentReturn1(_value:any)
{
    await this.PostRetirementInvestmentReturnTextbox.click()
    await this.PostRetirementInvestmentReturnTextbox.setValue('value')
}
async ClickOnSaveChangesButton()
{
    await this.SaveChanges.click()
}
async ClickonCancelChanges()
{
    await this.ClickonCancelChangesbutton.click()

}
async ClickonClearForm()
{
  await this.ClearForm.click()
}

async ClickonCalulateButton()
{
    await this.Calculate.click()
}

async invalid_currentage_error()
{
    var text = this .invalidcurrentageerror.getText()
    console.log(text);
    const myInput = await $('Input required')
    await expect(myInput).toHaveValue('text', { ignoreCase: true })
}
async invalid_retirement_age_error()
{
    var text = this .invalidretirementageerror.getText()
    console.log(text);
    const myInput = await $('Input required')
    await expect(myInput).toHaveValue('text', { ignoreCase: true })
}

async invalid_current_income_error()
{
    var text = this .invalidcurrentincomeerror.getText()
    console.log(text);
    const myInput = await $('Input required')
    await expect(myInput).toHaveValue('text', { ignoreCase: true })
}

async invalid_current_annual_savings_errorr()
{
    var text = this .invalidcurrentannualsavingserror.getText()
    console.log(text);
    const myInput = await $('Input required')
    await expect(myInput).toHaveValue('text', { ignoreCase: true })
}

async invalid_savings_increase_rate_error()
{
    var text = this .invalidsavingsincreaserateerror.getText()
    console.log(text);
    const myInput = await $('Input required')
    await expect(myInput).toHaveValue('text', { ignoreCase: true })
}
async Success_Message()
{
    var text = this .SuccessMessage.getText()
    console.log(text);
    const myInput = await $('Congratulations! ')
    await expect(myInput).toHaveValue('text', { ignoreCase: true })
}





}

module.exports=new RetirementCalculatorPage()


