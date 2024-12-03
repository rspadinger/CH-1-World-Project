import { ethers } from 'hardhat';
var colors = require('colors/safe');

async function main() {
    const owpWalletAddress = process.env.OWP_PLATFORM_TREASURY_ADDRESS;
    const owpBackendAdmin = process.env.OWP_PROPOSAL_EXECUTOR;
    const baseURI = process.env.BASE_URI || "";
    const profileURI = process.env.IDENTITY_BASE_URI || "";

    if(!owpWalletAddress || !owpBackendAdmin || !baseURI || !profileURI){
        console.log(colors.red("Setup ENVs first!!"));
        process.exit(1);
    }
    console.log({owpBackendAdmin, owpWalletAddress, baseURI, profileURI})

    // Deploy MembershipERC1155 implementation contract
    const MembershipERC1155 = await ethers.getContractFactory('MembershipERC1155');
    const membershipImplementation = await MembershipERC1155.deploy();
    await membershipImplementation.deployed();
    console.log('MembershipERC1155 deployed to:', membershipImplementation.address);

    // Deploy MembershipFactory contract
    const CurrencyManager = await ethers.getContractFactory('CurrencyManager');
    const currencyManager = await CurrencyManager.deploy();
    await currencyManager.deployed();
    console.log('CurrencyManager deployed to:', currencyManager.address);

    const MembershipFactory = await ethers.getContractFactory('MembershipFactory');
    const membershipFactory = await MembershipFactory.deploy(
        currencyManager.address,
        owpWalletAddress,
        baseURI,
        membershipImplementation.address
    );
    await membershipFactory.deployed();
    console.log('MembershipFactory deployed to:', membershipFactory.address);

    const OWPIdentity = await ethers.getContractFactory('OWPIdentity');
    const owpIdentity = await OWPIdentity.deploy(
        owpWalletAddress,
        owpBackendAdmin,
        profileURI,
    );
    await owpIdentity.deployed();
    console.log('OWPIdentity deployed to:', owpIdentity.address);

    await membershipFactory.grantRole('0x3124d52df17d64a7d650cea4d44356c1b56f1552895b7db0931fbeaabb38822a', owpBackendAdmin)

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
