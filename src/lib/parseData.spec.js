import { expect } from 'chai';
// import * as sinon from 'sinon';

import parseData from './parseData';


describe('# parseData()', () => {
  const mockData = {
    name: 'some object',
    version: '0.0.1',
    data: [
      {
        url: '#!',
        target: false,
        type: 'normal',
        text: 'this is a button',
        attrs: false,
      },
      {
        url: '#!',
        target: '_blank',
        type: 'normal',
        text: 'this is another button',
        attrs: [
          {
            key: 'data-something',
            value: 'something',
          },
        ],
      },
      {
        url: '#!',
        target: false,
        type: 'normal',
        text: 'this is a third button',
        attrs: false,
      },
      {
        wtf: true,
      },
    ],
  };


  it('Returns an array of all relevant objects', () => {
    const parsedData = parseData(mockData);
    expect(parsedData.length).to.eq(3);
  });

  it(`Throws if basic data structure is incorrect`, () => {
      const badData = {
        name: 'some object',
        version: '0.0.1',
        notData: [
          {
            url: 1,
            target: false,
            type: 'normal',
            text: 'this is a button',
            attrs: false,
          },
        ],
      };

    expect(() => parseData(badData)).to.throw('Not the data!');
  });

  it(`Throws if "URL" in one of the objects in returned array is not a "string"`, () => {
      const badData = {
        name: 'some object',
        version: '0.0.1',
        data: [
          {
            url: 1,
            target: false,
            type: 'normal',
            text: 'this is a button',
            attrs: false,
          },
        ]
      };

    expect(() => parseData(badData)).to.throw();
  });
});

