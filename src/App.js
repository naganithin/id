import "./App.css"
import { MyDApp } from "./MyDApp";
const contractAddress = "0xE35Fb71E0D1D0643E5eE6c5FF608a907feF004a6"; // Replace with your contract address
const abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_scope1",
        type: "string"
      },
      {
        internalType: "string",
        name: "_scope2",
        type: "string"
      },
      {
        internalType: "string",
        name: "_scope3",
        type: "string"
      },
      {
        internalType: "string",
        name: "_document1",
        type: "string"
      },
      {
        internalType: "string",
        name: "_document2",
        type: "string"
      },
      {
        internalType: "address",
        name: "_userWallet",
        type: "address"
      }
    ],
    name: "setUserDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_userWallet",
        type: "address"
      }
    ],
    name: "getUserDetails",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "scope1",
        type: "string"
      },
      {
        internalType: "string",
        name: "scope2",
        type: "string"
      },
      {
        internalType: "string",
        name: "scope3",
        type: "string"
      },
      {
        internalType: "string",
        name: "document1",
        type: "string"
      },
      {
        internalType: "string",
        name: "document2",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "userExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "usersData",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "scope1",
        type: "string"
      },
      {
        internalType: "string",
        name: "scope2",
        type: "string"
      },
      {
        internalType: "string",
        name: "scope3",
        type: "string"
      },
      {
        internalType: "string",
        name: "document1",
        type: "string"
      },
      {
        internalType: "string",
        name: "document2",
        type: "string"
      },
      {
        internalType: "address",
        name: "userWallet",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

export default MyDApp;