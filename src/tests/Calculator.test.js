import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })


  

  it('should handle addition correctly', () => {
    const button2 = container.getByTestId('number2');
    const addButton = container.getByTestId('operator-add');

    const button3 = container.getByTestId('number3');
    const equalsButton = container.getByTestId('operator-equals');

    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button2);
    fireEvent.click(addButton);
    fireEvent.click(button3);
    fireEvent.click(equalsButton);

    expect(runningTotal.textContent).toEqual('5');
  });

  it('should handle subtraction correctly', () => {
    const button7 = container.getByTestId('number7');
    const subtractButton = container.getByTestId('operator-subtract');

    const button4 = container.getByTestId('number4');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button7);
    fireEvent.click(subtractButton);
    fireEvent.click(button4);
    fireEvent.click(equalsButton);

    expect(runningTotal.textContent).toEqual('3');
  });

  it('should handle multiplication correctly', () => {
    const button6 = container.getByTestId('number6');
    const multiplyButton = container.getByTestId('operator-multiply');

    const button5 = container.getByTestId('number5');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button6);
    fireEvent.click(multiplyButton);
    fireEvent.click(button5);
    fireEvent.click(equalsButton);

    expect(runningTotal.textContent).toEqual('30');
  });

  it('should handle division correctly', () => {
    const button9 = container.getByTestId('number9');
    const divideButton = container.getByTestId('operator-divide');

    const button3 = container.getByTestId('number3');
    const equalsButton = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button9);
    fireEvent.click(divideButton);
    fireEvent.click(button3);
    fireEvent.click(equalsButton);

    expect(runningTotal.textContent).toEqual('3');
  });

  it('should handle decimal point correctly', () => {
    const button1 = container.getByTestId('number1');
    const decimalButton = container.getByTestId('decimal');
    const button5 = container.getByTestId('number5');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button1);
    fireEvent.click(decimalButton);
    fireEvent.click(button5);

    expect(runningTotal.textContent).toEqual('1.5');
  });

  it('should clear the running total and operators', () => {
    const button8 = container.getByTestId('number8');
    const addButton = container.getByTestId('clear');

    const button2 = container.getByTestId('number2');
    const clearButton = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button8);
    fireEvent.click(addButton);
    fireEvent.click(button2);
    fireEvent.click(clearButton);

    expect(runningTotal.textContent).toEqual('0');
  });
});
