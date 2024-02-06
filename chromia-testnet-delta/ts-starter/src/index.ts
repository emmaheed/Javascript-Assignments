import { randomInt } from "crypto";
import * as pcl from "postchain-client";

async function simpleClient() {
  //Keypair
  const adminPubkey = Buffer.from(
    "031b84c5567b126440995d3ed5aaba0565d71e1834604819ff9c17f5e9d5dd078f",
    "hex"
  );
  const adminPrivkey = Buffer.from(
    "0101010101010101010101010101010101010101010101010101010101010101",
    "hex"
  );

  //Connection setup
  const nodeApiUrl = "http://localhost:7740/"; //Using default postchain node REST API port
  const blockchainRID = "63B36A15A8D1787EFED1E331F0E49D39C05874E7D29E5DC1FD7A484E990A8932"; //Blockchain identifier
  const rest = pcl.restClient.createRestClient([nodeApiUrl], blockchainRID); //REST Client connection
  const gtx = pcl.gtxClient.createClient(rest, blockchainRID, ["set_name"]); //gtx Client connection

  //Transaction
  const request = gtx.newTransaction([adminPubkey]); //Create transaction
  request.set_name("Developer"); //Call operation
  request.addOperation("nop", randomInt(12345678)); //A random int to make the hash of the transaction unique

  request.sign(adminPrivkey, adminPubkey); //Sign transaction
  await request.postAndWaitConfirmation(); //Post to blockchain node

  //Query
  const result = await gtx.query({ type: "hello_world" });

  console.log(result);
}

simpleClient();