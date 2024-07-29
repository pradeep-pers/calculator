const TC4RetirementCalculatorErrorValidation=require('../pageobjects/Page/Retirement-Calculator.page')
describe('retirement-calculator Page', () => {

    // TC01_ Open_retirement-calculator_page
    it('retirement-calculator', async () => {
        TC4RetirementCalculatorErrorValidation.OpenUrl()
 
    })
     // TC02_ Enter_current_Age
    it('EnterAge', async () => {
        TC4RetirementCalculatorErrorValidation.EnterAge('')
    })
     // TC03_ Enter_plan to retire_age
     it('plan to retire_age', async () => {
        TC4RetirementCalculatorErrorValidation.pLantoRetire('')
    })

    // TC04_ What is your current annual income?
    it('current annual income', async () => {
        TC4RetirementCalculatorErrorValidation.cAnuualIncome('')
    })
    // TC05_ What is your spouse's annual income?
    it('Spouse Anuual Income', async () => {
        TC4RetirementCalculatorErrorValidation.Spouseannualincome('')
    })
    // TC06_ What is your current retirement savings balance?
    it('Currentretirementsavingsbalance', async () => {
        TC4RetirementCalculatorErrorValidation.Currentretirementsavingsbalance('')
    })

    // TC07_ How much are you currently saving each year for retirement?
    it('SavingEachYearForRetirement', async () => {
        TC4RetirementCalculatorErrorValidation.Savingeachyearforretirement('')
    })
    //TC08_Clickon Calulate Button
    it('Calculate', async () => {
        TC4RetirementCalculatorErrorValidation.ClickonCalulateButton()
    })
    //TC09_invalid-current-age-error
    it('invalid-current-age-error', async () => {
        TC4RetirementCalculatorErrorValidation.invalid_currentage_error()
    })
    //TC010_invalid_retirement_age_error
    it('invalid_retirement_age_error', async () => {
        TC4RetirementCalculatorErrorValidation.invalid_retirement_age_error()
    })
    //TC011_invalid_current_income_error
    it('invalid_current_income_error', async () => {
        TC4RetirementCalculatorErrorValidation.invalid_current_income_error()

    } )
    
    //TC012_invalid_current_annual_savings_error
    it('invalid_current_annual_savings_error', async () => {
        TC4RetirementCalculatorErrorValidation.invalid_current_annual_savings_error()

    } )
    //TC013_invalid_savings_increase_rate_error
    it('invalid_savings_increase_rate_error', async () => {
        TC4RetirementCalculatorErrorValidation.invalid_savings_increase_rate_error()

    } )


})