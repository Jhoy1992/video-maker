const readLine = require('readline-sync')
const state = require('./state.js')
 
function robot() {
    const content = {
        maximumSentences: 7
    }

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    state.save(content)

    function askAndReturnSearchTerm() {
        return readLine.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Whos is', 'What is', 'The history of']
        const selectedPrefixIndex = readLine.keyInSelect(prefixes, '')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return  selectedPrefixText
    }    
}

module.exports = robot