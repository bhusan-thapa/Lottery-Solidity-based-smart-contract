const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const { interface, bytecode } = require('./compile');
const provider = new HDWalletProvider(
  'YOUR PHRASE',
  'RINKEBY_LINK'
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(`attempting to deploy from the account ${accounts}`);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });
  console.log(`contract deployed to ${result.options.address}`)
}
deploy();

