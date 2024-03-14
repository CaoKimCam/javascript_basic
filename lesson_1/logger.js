export const TYPE_LOG='log';
function logger(log, type='log'){
    console[type] (log);
}

export default logger;