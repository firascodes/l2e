const contractABI = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_courseId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_shares",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_totalPrice",
        "type": "uint256"
      }
    ],
    "name": "CourseBought",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_seller",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_buyer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_courseId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_shares",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_totalPrice",
        "type": "uint256"
      }
    ],
    "name": "CourseBoughtFromPool",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_seller",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_courseId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_shares",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_pricePerShare",
        "type": "uint256"
      }
    ],
    "name": "ShareForSale",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_seller",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_courseId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_shares",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_pricePerShare",
        "type": "uint256"
      }
    ],
    "name": "ShareNotForSale",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_courseId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_shares",
        "type": "uint256"
      }
    ],
    "name": "buyCourse",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_studentAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_courseId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_shares",
        "type": "uint256"
      }
    ],
    "name": "buyCourseFromStudent",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_courseId",
        "type": "uint256"
      }
    ],
    "name": "cancelSellCourse",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "courses",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "pricePerShare",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "totalShares",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_pricePerShare",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_totalShares",
        "type": "uint256"
      }
    ],
    "name": "createCourse",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getCourses",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_courseId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_pricePerShare",
        "type": "uint256"
      }
    ],
    "name": "sellCourse",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "students",
    "outputs": [
      {
        "internalType": "address",
        "name": "studentAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "courseId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "shares",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isForSale",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "pricePerShare",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalCourses",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]; // replace with your contract ABI
  
  export default contractABI;
  