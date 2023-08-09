import { counterActions, counterReducer } from './CounterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice', () => {
    test('reducer decrements', () => {
        const state: CounterSchema = {
            value: 5,
        };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 4 });
    });

    test('reducer increments', () => {
        const state: CounterSchema = {
            value: 5,
        };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 6 });
    });

    test('with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
