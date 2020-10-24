import type { EditorConfig } from '@editorjs/editorjs';
/**
 * @typedef {Object} Observer
 * @description Custom MutationObserver to detect changes in the editor.
 * @property {String} holder — Editor.js holder id.
 * @property {Object} observer - MutationObserver object that detects changes in the editor.
 * @property {Number} debounceTimer - Delay time for the debouncer.
 * @property {Function} mutationDebouncer - Debouncer to delay the changes registration.
 */
export default class Observer {
    private debounceTimer;
    private holder;
    private mutationDebouncer;
    private observer;
    /**
     * Creates a new instance of the Observer object.
     * @param {Function} registerChange - Function that register a change in the history stack.
     * @param {String} holder - Editor.js holder id.
     */
    constructor(registerChange: Function, holder: EditorConfig['holder']);
    /**
     * Sets a mutation observer to catch every change in the editor.
     */
    setMutationObserver(): void;
    /**
     * Handles the mutations and checks if a new mutation has been produced.
     * @param {Object} mutationList The registered mutations
     */
    private mutationHandler;
    /**
     * Delays invoking a function until after wait millis have elapsed.
     * @param {Function} callback The function to be delayed.
     * @param {Number} wait The deplay time in millis.
     */
    private debounce;
    private onDestroy;
}
