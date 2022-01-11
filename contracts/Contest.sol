// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16;

// create the contract
contract Contest {

    // creating the structure to model the contestant
    struct Contestant {
        uint id;
        string name;
        uint voteCount;
    }

    // use mapping to get or fetch the contestant details
    mapping(uint => Contestant) public contestants;

    // add a public state variable to keep track of contestant Count
    uint public contestantsCount;


    // add a function to add contestant
    function addContestant (string _name) private {
        contestantsCount ++;
        contestants[contestantsCount] = Contestant(contestantsCount, _name, 0);
    }

}