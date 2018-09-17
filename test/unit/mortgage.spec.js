const express = require('express');
const path = require('path');
const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');
const Nightmare = require('nightmare');
const url = 'http://localhost:8888';
const nightmare = new Nightmare({show: true});


const app = express();
app.use(express.static('public'));
app.use(express.static('dist'));

app.listen(8888);

describe('calculate mortgage', function () {
  this.timeout(15000);

  //this.timeout(6500);
  this.slow(13000);
  it('should take less than 500ms', function (done) {
    setTimeout(done, 500);
  });


 

  it('should have an input element with the name of "principal"', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.getElementById('principal'))
      .then(input => expect(input).to.exist)
  );

  it('should have an input element with the name of "interestRate"', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('input[name=interestRate]'))
      .then(input => expect(input).to.exist)
  );

  it('should have an input element with the name of "loanTerm"', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('select[name=loanTerm]'))
      .then(input => expect(input).to.exist)
  );

}); 



