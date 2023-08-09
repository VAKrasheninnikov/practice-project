import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/config/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('with only first param', () => {
        const initialState = {
            counter: {
                value: 3,
            },
        };
        componentRender(<Counter />, { route: '/', initialState });
        expect(screen.getByTestId('value-counter')).toHaveTextContent('3');
    });

    test('increments', () => {
        const initialState = {
            counter: {
                value: 3,
            },
        };
        componentRender(<Counter />, { route: '/', initialState });

        const incrementButton = screen.getByTestId('increment-button');
        fireEvent.click(incrementButton);

        expect(screen.getByTestId('value-counter')).toHaveTextContent('4');
    });

    test('decrements', () => {
        const initialState = {
            counter: {
                value: 3,
            },
        };
        componentRender(<Counter />, { route: '/', initialState });

        const incrementButton = screen.getByTestId('decrement-button');
        fireEvent.click(incrementButton);

        expect(screen.getByTestId('value-counter')).toHaveTextContent('2');
    });
});
