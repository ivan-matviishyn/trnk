import * as jQuery from 'jquery';

declare global {
    interface Window {
        $: any;
        jQuery: any;
    }
}

window.$ = window.jQuery = jQuery;