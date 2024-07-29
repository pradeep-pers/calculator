const TC2RetirementCalculatorCancelChanges=require('../pageobjects/Page/Retirement-Calculator.page')
describe('retirement-calculator Page', () => {

    // TC01_ Open_retirement-calculator_page
    it('retirement-calculator', async () => {
        TC2RetirementCalculatorCancelChanges.OpenUrl()
 
    })
     // TC02_ Enter_current_Age
    it('EnterAge', async () => {
        TC2RetirementCalculatorCancelChanges.EnterAge('40')
    })
     // TC03_ Enter_plan to retire_age
     it('plan to retire_age', async () => {
        TC2RetirementCalculatorCancelChanges.pLantoRetire('68')
    })

    // TC04_ What is your current annual income?
    it('current annual income', async () => {
        TC2RetirementCalculatorCancelChanges.cAnuualIncome('100000')
    })
    // TC05_ What is your spouse's annual income?
    it('Spouse Anuual Income', async () => {
        TC2RetirementCalculatorCancelChanges.Spouseannualincome('75000')
    })
    // TC06_ What is your current retirement savings balance?
    it('Currentretirementsavingsbalance', async () => {
        TC2RetirementCalculatorCancelChanges.Currentretirementsavingsbalance('500000')
    })

    // TC07_ How much are you currently saving each year for retirement?
    it('SavingEachYearForRetirement', async () => {
        TC2RetirementCalculatorCancelChanges.Savingeachyearforretirement('100')
    })

     // TC08_ What is the rate of increase in your savings each year?
     it('Rateofincreaseinyoursavingseachyear', async () => {
        TC2RetirementCalculatorCancelChanges.Rateofincreaseinyoursavingseachyear('025')
    })

    // TC09_ Social Security income
    it('SocialSecurityincome', async () => {
        TC2RetirementCalculatorCancelChanges.SocialSecurityincomeCheckbox
    })

    // TC010_ What is your marital status?
    it('SocialSecurityincome', async () => {
        TC2RetirementCalculatorCancelChanges.MaritalStatusCheckbox
    })
     // TC011_ Social Security override amount
     it('SocialSecurityOverRideAmount', async () => {
        TC2RetirementCalculatorCancelChanges.SocialSecurityOverRideAmount('4000')
    })

     // TC012_ Default calculator values
     it('Defaultcalculatorvalues', async () => {
        TC2RetirementCalculatorCancelChanges.Defaultcalculatorvalues
    })

    // TC013_ What other income will you have during retirement?
    it('Additionalotherincome', async () => {
        TC2RetirementCalculatorCancelChanges.Additionalotherincome('500')
    })

    // TC014_ How many years do you plan to depend on retirement income?
    it('Numberofyearsretirementneedstolast', async () => {
        TC2RetirementCalculatorCancelChanges.Numberofyearsretirementneedstolast('20')
    })
    // TC015_ Does your post-retirement income increase with inflation?
    it('PostRetirementIncomeIncreaseWithInflation', async () => {
        TC2RetirementCalculatorCancelChanges.PostRetirementIncomeIncreaseWithInflation
    })
    // TC016_ How much of your final annual income do you want available in each year of your retirement? 
    it('PercentOfFinalAnnualIncomeDesired1', async () => {
        TC2RetirementCalculatorCancelChanges.PercentOfFinalAnnualIncomeDesired1('75')

    })
    // TC017_ Pre-retirement investment return  
    it('PreRetirementInvestmentReturn1', async () => {
        TC1RetirementCalculatorSaveChanges.PreRetirementInvestmentReturn1('8')

    })
    // TC018_ Post-retirement investment return  
    it('PostRetirementInvestmentReturn1', async () => {
        TC2RetirementCalculatorCancelChanges.PostRetirementInvestmentReturn1('5')

    })
    // TC019_ Cancel  
    it('CancelChanges', async () => {
        TC2RetirementCalculatorCancelChanges.Cancel.click()

    })
    


})











   

