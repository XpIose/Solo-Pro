import React from 'react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from '@testing-library/react';
import regeneratorRuntime from 'regenerator-runtime';

import App from '../client/App';
import LabeledText from '../client/components/LabeledText';
import Market from '../client/components/Market';
import store from '../client/store';


  describe('Unit testing React components', () => {

    describe('LabeledText', () => {
      let text;
      const props = {
        label: 'Mega',
        text: 'Markets',
      };
  
      beforeAll(() => {
        text = render(<LabeledText {...props} />)

      });
  
      test('Renders the passed-in text with the label in bold', () => {
        expect(text.getByText("Mega:").nextSibling).toHaveTextContent('Markets');
        expect(text.getByText('Mega:')).toHaveStyle('font-weight: bold')
      });

    });
  
    describe('Market', () => {
      const props = {
        index: 253,
        location: 'Belarus',
        cards: 37,
        percentage: '80.00',
      }

     
      // TODO: Test the following:
      // 1. A Market should display an ID, location, number of cards, percent of total
      // 2. It should also contain two buttons for adding and removing markets
      // 3. The functions passed down should be invoked on click
      // 4. The percentage should be a string calculated to two decimals.
      // Test for zero, a whole number, and a fractional value. (Right now this
      // is implemented incorrectly, so follow TDD here)

      test('A Market should display an ID, location, number of cards, percent of total', () => {
        const text = render(<Market {...props} />)  // WE ADDED THIS SO IT RENDERS
        
        // #1
        expect(text.getByText(props.index)).toBeInstanceOf(Node);

        // #2

      });
      test('It should also contain two buttons for adding and removing markets', () => {
        
      });

    });
  });


  describe('React-Redux integration tests', () => {

    describe('Empty state before interactions', () => {

      beforeEach(async () => {
        const app = await render(
          <Provider store={store}>
            <App />
          </Provider>);
      });

    // TODO: Test the following:
    // 1. The page loads with two buttons ('Add Markets' and 'Sync')
    // 2. The page has a 'MegaMarket Loyalty Cards' heading and a 'Markets' heading
    // 3. The totals display starts off at zero, with no Markets rendered
      
      test('The page loads with Add Markets and Sync buttons', () => {

      });

      test('The page has the correct headings', () => {

      });

      test('The displays are set to zero and no markets rendered', () => {

      });


    });

    describe('Adding markets', () => {

      beforeEach(async () => {
        const app = await render(
          <Provider store={store}>
            <App />
          </Provider>);
      });
      // TODO: Test the following:
      // 1. MarketCreator can successfully add new Markets to the page
      // 2. Adding a new market updates the count in TotalsDisplay

      test('MarketCreator adds new Markets', () => {

      });

      test('Displays updated with courrect count', () => {

      });

  });
});