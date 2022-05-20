




describe(`${Person.name} Class`, () => {
   let model;

   beforeEach(() => {
      model = new Person()
      console.log('Before Each')
   })
   describe('default values', () => {
      it('first name defaults to empty string', () => {
         console.log(1)
         //assertion
         expect(model.firstName).toBe('')
      })
   
      it('last name defaults to empty string', () => {
         console.log(2)
         //assertion
         expect(model.lastName).toBe('')
      })
   
      it('middle name defaults to empty string', () => {
         console.log(3)
         //assertion
         expect(model.middleName).toBe('')
      })
   })

   describe('full name', () => {
      beforeEach(() => {
         model = new Person({
            firstName: 'Hamzah',
            lastName: 'Contreras'
         })
      })
      it('middle initial when middle name is defined with first and last', () => {
         //arrange
         model.middleName = 'Yarid'

         //act
         const result = model.fullName

         //audit
         const { firstName: fn, lastName: ln, middleName: mn } = model

         //assertion
         expect(result).toBe(`${fn} ${mn[0]}. ${ln}`)
      })

      it('when NO middle name returns just first and last', () => {
         //arrange
         model.middleName = ''

         //act
         const result = model.fullName

         //audit
         const { firstName: fn, lastName: ln } = model

         //assertion
         expect(result).toBe(`${fn} ${ln}`)
      })
   })

})