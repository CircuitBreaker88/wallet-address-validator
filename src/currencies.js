(function (isNode) {
    // defines P2PKH and P2SH address types for standard (prod) and testnet networks
    var CURRENCIES = [{
            name: 'bitcoin',
            symbol: 'btc',
            addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']}
        },{
          name: 'spectrecoin',
          symbol: 'xspec',
          addressTypes: {prod: ['3f', 'b3'], testnet: ['7f', 'ff']}
        },{
          name: 'cashhand',
          symbol: 'chnd',
          addressTypes: {prod: ['1c', '87'], testnet: ['8b', 'ef']}
        },{
          name: 'elunium',
          symbol: 'elunium',
          addressTypes: {prod: ['21', '2e'], testnet: ['5c', '6c']}
        },{
          name: 'fedoragold',
          symbol: 'fed',
          addressTypes: {prod: ['7F', ''], testnet: ['7F', '']}
        },{
          name: 'rupeeevolution',
          symbol: 'rupee',
          addressTypes: {prod: ['3c', '0f'], testnet: ['17', '18']}
        },{
          name: 'draviteflex',
          symbol: 'drvf',
          addressTypes: {prod: ['1f', '10'], testnet: ['53', '12']}
        },{
            name: 'litecoin',
            symbol: 'ltc',
            addressTypes: {prod: ['30', '05'], testnet: ['6f', 'c4']}
        },{
            name: 'peercoin',
            symbol: 'ppc',
            addressTypes: {prod: ['37', '75'], testnet: ['6f', 'c4']}
        },{
            name: 'dogecoin',
            symbol: 'doge',
            addressTypes: {prod: ['1e', '16'], testnet: ['71', 'c4']}
        },{
            name: 'denarius',
            symbol: 'dnr',
            addressTypes: {prod: ['1e', '5a'], testnet: ['12', '74']}
        },{
          name: 'innova',
          symbol: 'inn',
          addressTypes: {prod: ['66', '89'], testnet: ['41', '4b']}
        },{
          name: 'moneybyte',
          symbol: "mon",
          addressTypes: {prod: ['33', '27'], testnet: ['1c', '26']}
        },{
          name:  'konjungate',
          symbol: 'konj',
          addressTypes: {prod: ['2e', '27'], testnet: ['1c', '26']}
        },{
            name: 'beavercoin',
            symbol: 'bvc',
            addressTypes: {prod: ['19', '05'], testnet: ['6f', 'c4']}
        },{
            name: 'freicoin',
            symbol: 'frc',
            addressTypes: {prod: ['00', '05'], testnet: ['6f', 'c4']}
        },{
            name: 'protoshares',
            symbol: 'pts',
            addressTypes: {prod: ['38', '05'], testnet: ['6f', 'c4']}
        },{
            name: 'megacoin',
            symbol: 'mec',
            addressTypes: {prod: ['32', '05'], testnet: ['6f', 'c4']}
        },{
            name: 'primecoin',
            symbol: 'xpm',
            addressTypes: {prod: ['17', '53'], testnet: ['6f', 'c4']}
        },{
            name: 'auroracoin',
            symbol: 'aur',
            addressTypes: {prod: ['17', '05'], testnet: ['6f', 'c4']}
        }];


    var currencies = {
        getByNameOrSymbol: function (currencyNameOrSymbol) {
            var nameOrSymbol = currencyNameOrSymbol.toLowerCase();
            for (var i = 0; i < CURRENCIES.length; i++) {
                var currency = CURRENCIES[i];
                if(currency.name === nameOrSymbol || currency.symbol === nameOrSymbol) {
                    return currency;
                }
            }
            return null;
        }
    };

    // export currencies module
    if(isNode) {
        module.exports = currencies;
    } else {
        if(typeof window.WAValidator === 'undefined'){
           window.WAValidator = {__imports: {}};
        }
        window.WAValidator.__imports.currencies = currencies;
    }
})(typeof module !== 'undefined' && typeof module.exports !== 'undefined');
