const serverSettings = {
    "port": 8080
}
const dbSettings = {
    "db": 'mongodb://devops:devops123@ds027348.mlab.com:27348/todos'
};

module.exports = Object.assign({}, serverSettings, dbSettings);