import { injectGlobal } from 'styled-components';

export default injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Montserrat');
    @import url('https://fonts.googleapis.com/css?family=Montserrat:bold');
    @import url('https://fonts.googleapis.com/css?family=PT+Serif');
    *{
    box-sizing: border-box;
    }
    body {
    margin: 0;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    height : 100%;
    }
    #app {
    height : 100%;
    }
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-size: 12px;
    opacity: 0.5;
    color: #5b5d69;
    }
    ::-moz-placeholder { /* Firefox 19+ */
    font-size: 12px;
    opacity: 0.5;
    color: #5b5d69;
    }
    :-ms-input-placeholder { /* IE 10+ */
    font-size: 12px;
    opacity: 0.5;
    color: #5b5d69;
    }
    :-moz-placeholder { /* Firefox 18- */
    font-size: 12px;
    opacity: 0.5;
    color: #5b5d69;
    }
    .br-0 { border-radius: 0px; }
    .br-2 { border-radius: 2px; }
    .br-3 { border-radius: 3px; }
    .br-4 { border-radius: 4px; }
    .br-5 { border-radius: 5px; }
    .br-6 { border-radius: 6px; }
    .br-7 { border-radius: 7px; }
    .br-8 { border-radius: 8px; }
    .br-9 { border-radius: 9px; }
    .br-10 { border-radius: 10px; }
    
    .op-0 { opacity: 0; }
    .op-1 { opacity: 0.1; }
    .op-2 { opacity: 0.2; }
    .op-3 { opacity: 0.3; }
    .op-4 { opacity: 0.4; }
    .op-5 { opacity: 0.5; }
    .op-6 { opacity: 0.6; }
    .op-7 { opacity: 0.7; }
    .op-8 { opacity: 0.8; }
    .op-9 { opacity: 0.9; }
    .op-10 { opacity: 1; }
    
    .m-0 { margin: 0; }
    .m-1 { margin: 1em 0; }
    .m-2 { margin: 2em 0; }
    .m-3 { margin: 3em 0; }
    .m-4 { margin: 4em 0; }
    .m-5 { margin: 5em 0; }
    .m-6 { margin: 6em 0; }
    .m-7 { margin: 7em 0; }
    .m-8 { margin: 8em 0; }

    .p-0 { padding: 0; }
    .p-1 { padding: 0 1em; }
    .p-2 { padding: 0 2em; }
    .p-3 { padding: 0 3em; }
    .p-4 { padding: 0 4em; }
    .p-5 { padding: 0 5em; }
    .p-6 { padding: 0 6em; }
    .p-7 { padding: 0 7em; }
    .p-8 { padding: 0 8em; }
`