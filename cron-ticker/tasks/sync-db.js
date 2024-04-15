let times=0;

const syncDB = () => {
    times++
    console.log('tick cada mutiplo de 5:', times);

    return times;
};

module.exports = syncDB;