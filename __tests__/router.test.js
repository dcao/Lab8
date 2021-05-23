/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js';

describe('pushToHistory', () => {
    test('works for settings', () => {
        let l = history.length;
        let r = pushToHistory('settings', 0);
        expect(history.length).toBe(l + 1);
        expect(history.state).toStrictEqual({ page: 'settings' });
    });

    test('works for entry', () => {
        let l = history.length;
        let r = pushToHistory('entry', 5);
        expect(history.length).toBe(l + 1);
        expect(history.state).toStrictEqual({ page: 'entry5' });
    });

    test('works for default', () => {
        let l = history.length;
        let r = pushToHistory('nothing', 0);
        expect(history.length).toBe(l + 1);
        expect(history.state).toStrictEqual({});
    });
});
