class Invoice{
    // client: string
    // details: string
    // amount: number

    // constructor(c: string, d: string, a: number){
    //     this.client = c
    //     this.details = d
    //     this.amount = a
    // }
    /* ************ */
    // readonly client: string
    // private details: string
    // public amount: number

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format(){
        return `${this.client} owes ₹${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice('mario', 'making website', 1000)
const invTwo = new Invoice('luigi', 'making app', 1500)


let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})

// invOne.client = 'kruz'
// invTwo.amount = 1300
// console.log(invoices)

const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
})