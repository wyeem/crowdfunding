
var MyContract = artifacts.require("CrowdFund");

module.exports = function(deployer) {
  deployer.deploy(MyContract);
};