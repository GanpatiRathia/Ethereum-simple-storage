const ethers = require("ethers");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "a89dcbe1025bc0a232d457abcbb12a4159307534515d01378375eedfca1523c1",
    provider
  );
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf-8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, Please wait");
  const contract = await contractFactory.deploy();
  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
