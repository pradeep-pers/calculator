const TC3RetirementCalculatorClearForm=require('../pageobjects/Page/Retirement-Calculator.page')
describe('retirement-calculator Page', () => {

    // TC01_ Open_retirement-calculator_page
    it('retirement-calculator', async () => {
        TC3RetirementCalculatorClearForm.OpenUrl()
 
    })
     // TC02_ Enter_current_Age
    it('EnterAge', async () => {
        TC3RetirementCalculatorClearForm.EnterAge('40')
    })
     // TC03_ Enter_plan to retire_age
     it('plan to retire_age', async () => {
        TC3RetirementCalculatorClearForm.pLantoRetire('68')
    })

    // TC04_ What is your current annual income?
    it('current annual income', async () => {
        TC3RetirementCalculatorClearForm.cAnuualIncome('100000')
    })
    // TC05_ What is your spouse's annual income?
    it('Spouse Anuual Income', async () => {
        TC3RetirementCalculatorClearForm.Spouseannualincome('75000')
    })
    // TC06_ What is your current retirement savings balance?
    it('Currentretirementsavingsbalance', async () => {
        TC3RetirementCalculatorClearForm.Currentretirementsavingsbalance('500000')
    })

    // TC07_ How much are you currently saving each year for retirement?
    it('SavingEachYearForRetirement', async () => {
        TC3RetirementCalculatorClearForm.Savingeachyearforretirement('100')
    })
    //TC08_Clear  From
    it('Clear_from', async () => {
        TC3RetirementCalculatorClearForm.ClickonClearForm()

})

})