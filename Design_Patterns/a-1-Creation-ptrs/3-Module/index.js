/**
 * Module pattern
 */

const mod = {
    prop: "Some property string",
    config:{
        lang:'eng',
        cache:true
    },
    setConfig: config => {
        module.config = config
    },
    isCacheEnabled : () => {
        console.log(module.config.cache ? 'Yes' : 'No');
    }
}