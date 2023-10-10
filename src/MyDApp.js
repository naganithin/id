import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";

export const MyDApp = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [userAddress, setUserAddress] = useState("");

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.enable();
        setIsConnected(true);

        // Initialize a new provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get the signer from the provider
        const signer = provider.getSigner();

        // Get the user's address
        const address = await signer.getAddress();
        setUserAddress(address);
      } catch (error) {
        console.error("User denied account access");
      }
    } else {
      console.log(
        "Non-Ethereum browser detected. Consider installing MetaMask"
      );
    }
  };

  useEffect(() => {
    if (isConnected) {
      const fetchUserDetails = async () => {
        // Initialize a new provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Get the signer from the provider
        const signer = provider.getSigner();

        // Contract address
        const contractAddress = "0x122AA00593050Ce86D7D9af14126e5561b71faF7";

        const contractAbi = [
          {
            inputs: [
              {
                internalType: "string",
                name: "_name",
                type: "string",
              },
              {
                internalType: "string",
                name: "_scope1",
                type: "string",
              },
              {
                internalType: "string",
                name: "_scope2",
                type: "string",
              },
              {
                internalType: "string",
                name: "_scope3",
                type: "string",
              },
              {
                internalType: "string",
                name: "_document1",
                type: "string",
              },
              {
                internalType: "string",
                name: "_document2",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "_CCBought",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "_CCRetired",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "_userWallet",
                type: "address",
              },
            ],
            name: "createUser",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "_userWallet",
                type: "address",
              },
            ],
            name: "getUserDetails",
            outputs: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "scope1",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "scope2",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "scope3",
                    type: "string",
                  },
                ],
                internalType: "struct MyDApp.Accounting",
                name: "accounting",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "document1",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "document2",
                    type: "string",
                  },
                ],
                internalType: "struct MyDApp.Reporting",
                name: "reporting",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "CCBought",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "CCRetired",
                    type: "uint256",
                  },
                ],
                internalType: "struct MyDApp.CarbonCredits",
                name: "carbonCredits",
                type: "tuple",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            name: "userExists",
            outputs: [
              {
                internalType: "bool",
                name: "",
                type: "bool",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              {
                internalType: "address",
                name: "",
                type: "address",
              },
            ],
            name: "usersData",
            outputs: [
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "scope1",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "scope2",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "scope3",
                    type: "string",
                  },
                ],
                internalType: "struct MyDApp.Accounting",
                name: "accounting",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "string",
                    name: "document1",
                    type: "string",
                  },
                  {
                    internalType: "string",
                    name: "document2",
                    type: "string",
                  },
                ],
                internalType: "struct MyDApp.Reporting",
                name: "reporting",
                type: "tuple",
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "CCBought",
                    type: "uint256",
                  },
                  {
                    internalType: "uint256",
                    name: "CCRetired",
                    type: "uint256",
                  },
                ],
                internalType: "struct MyDApp.CarbonCredits",
                name: "carbonCredits",
                type: "tuple",
              },
              {
                internalType: "address",
                name: "userWallet",
                type: "address",
              },
            ],
            stateMutability: "view",
            type: "function",
          },
        ];

        // Initialize the contract
        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );

        // Get the user's address
        const userAddress = await signer.getAddress();

        // Fetch user details from the contract
        const details = await contract.getUserDetails(userAddress);
        setUserDetails(details);
      };

      fetchUserDetails();
    }
  }, [isConnected]);

  function assess_alignment_with_paris_agreement(scope1, scope2, scope3) {
    const total_emissions = scope1 + scope2 + scope3;
    if (total_emissions < 2000) {
      return <p style={{ color: "green" }}> High</p>;
    } else if (total_emissions < 3000) {
      return <p style={{ color: "yellow" }}> Medium</p>;
    } else {
      return <p style={{ color: "Red" }}> Low</p>;
    }
  }

  function assess_progress_towards_SDGs(sdg_goals) {
    const num_goals = sdg_goals.length;
    if (num_goals > 5) {
      return <p style={{ color: "green" }}> High</p>;
    } else if (num_goals > 2) {
      return <p style={{ color: "yellow" }}> Medium</p>;
    } else {
      return <p style={{ color: "Red" }}> Low</p>;
    }
  }

  return (
    <div className="container">
      <header className="header" style={{ color: "#001f3f" }}>
        <h1>SE ID</h1>
      </header>

      <button
        onClick={!isConnected ? connectWallet : null}
        className="connect-wallet"
      >
        {!isConnected
          ? "Connect Wallet"
          : `${userAddress.slice(0, 6)}...${userAddress.slice(-4)}`}
      </button>
      {!isConnected ? (
        <div className="welcome-message" style={{ color: "#001f3f" }}>
          <h1>Welcome to Sustainability Economics ID</h1>
          <h3>Connect, verify, and share your eco-journey.</h3>
          <p>Blockchain-driven passport to a greener future.</p>
        </div>
      ) : userDetails ? (
        <div
          className={`card`}
          style={{ wordWrap: "break-word", textAlign: "center" }}
        >
          <div
            className="front"
            style={{
              background: "#fffff0",
              border: "20px solid #001f3f",
            }}
          >
            <img
              src="https://www.sustainabilityeconomics.com/static/media/Logonew1.e23c1d84a7cd59b49431443c3f0eee09.svg"
              alt="Logo"
              style={{ width: "100%", height: "auto" }}
            />

            <h2 style={{ fontFamily: "Baskerville", color: "#333" }}>
              {userDetails[0]}
            </h2>

            <QRCode
              title="SEID"
              value="https://sapphire-cautious-crab-180.mypinata.cloud/ipfs/QmYCnqGxb5VgMMnoKPqk3gr4mCEQTE1WDyTFEsHVZtpYtL"
              bgColor="white"
              fgColor="black"
              size="100"
            />
          </div>
          <div
            className="back"
            style={{
              background: "#fffff0",
              border: "20px solid #001f3f",
            }}
          >
            <h2
              style={{
                fontFamily: "Baskerville",
                textDecoration: "underline",
                fontSize: "200%",
                color: "black",
              }}
            >
              Net Zero Journey
            </h2>
            <p style={{ fontFamily: "Crimson Text", color: "#333" }}>
              Scope 1: {userDetails[1].scope1}
            </p>
            <p style={{ fontFamily: "Crimson Text", color: "#333" }}>
              Scope 2: {userDetails[1].scope2}
            </p>
            <p style={{ fontFamily: "Crimson Text", color: "#333" }}>
              Scope 3: {userDetails[1].scope3}
            </p>
            <p style={{ fontFamily: "Crimson Text", color: "#333" }}>
              Carbon Credits Bought: {userDetails[3].CCBought.toString()}
            </p>
            <p style={{ fontFamily: "Crimson Text", color: "#333" }}>
              Retired Carbon Credits: {userDetails[3].CCRetired.toString()}
            </p>
            <p style={{ fontFamily: "Crimson Text", color: "#333" }}>
              Alignment with Paris Agreement:{" "}
              {assess_alignment_with_paris_agreement(
                userDetails[1].scope1,
                userDetails[1].scope2,
                userDetails[1].scope3
              )}
            </p>
            <p style={{ fontFamily: "Baskerville", color: "#333" }}>
              Alignment with SDGs:{" "}
              {assess_progress_towards_SDGs("6,2,3,5,0,8,9")}
            </p>
          </div>
        </div>
      ) : (
        <div
          className="card"
          style={{
            background: "#fffff0",
            border: "20px solid #001f3f",
          }}
        >
          <h2 style={{ color: "#FFFFFF" }}>No data present</h2>
        </div>
      )}
    </div>
  );
};
