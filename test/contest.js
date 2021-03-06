const Contest = artifacts.require("./Contest.sol")

contract("Contest", function(accounts){

    it("initializes with two contestants", function(){
        return Contest.deployed().then(function(instance){
            return instance.contestantsCount();
        }).then(function(count){
            assert.equal(count, 2);
        })
    })


    it("it initializes the contestants with the correct values", function(){
        return Contest.deployed().then(function(instance){
            contestInstance = instance;
            return contestInstance.contestants(1);
        }).then(function(contestant){
            assert.equal(contestant[0], 1, "contains the correct id");
            assert.equal(contestant[1], "Lonia", "contains the correct name");
            assert.equal(contestant[2], 0, "contains the correct vote count");
            return contestInstance.contestants(2);
        }).then(function(contestant){
            assert.equal(contestant[0], 2, "contains the correct id");
            assert.equal(contestant[1], "Mirka", "contains the correct name");
            assert.equal(contestant[2], 0, "contains the correct vote count");        
        })
    })

})