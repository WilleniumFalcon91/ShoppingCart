const expect = require('chai').expect;
const Customer = require('../customer');

describe('Customers', () => {
    it('should be able to save to the database', (done) => {
        let myCustomer = new Customer('me', 'me@me.com', '123 me street', 'm3m3m3');
        myCustomer
            .save()
            .then((result) => {
                done();
            });
    });
    it('should be able to get a customer from the database', (done) => {
        Customer
            .get(1)
            .then((myCustomer) => {
                console.log(myCustomer.name);
                console.log(myCustomer.email);
                console.log(myCustomer.address);
                console.log(myCustomer.password);
                done();
            });
    })
    it('should save, provide an id, and then get via id', (done) => {
        let data = ['Will', 'will@willsworld.com', 'Wills World', "Woohoo!"];
        let c1 = new Customer(...data);
        c1.save()
            .then((result) => {
                let customer_id = result.customer_id;
                Customer.get(customer_id)
                    .then((c2) => {
                        expect(c2.name).to.equal(data[0]);
                        expect(c2.email).to.equal(data[1]);
                        expect(c2.address).to.equal(data[2]);
                        done();
                    });
            });
    });
});