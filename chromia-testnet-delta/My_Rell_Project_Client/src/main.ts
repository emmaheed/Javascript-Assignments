import { randomInt } from "crypto";
import * as pcl from "postchain-client";

async function test() {
  const client = await initClient();
}

async function initClient() {
  const adminPubkey = Buffer.from(
    "031b84c5567b126440995d3ed5aaba0565d71e1834604819ff9c17f5e9d5dd078f",
    "hex"
  );
  const adminPrivkey = Buffer.from(
    "0101010101010101010101010101010101010101010101010101010101010101",
    "hex"
  );

  pcl.logger.setLogLevel(0)

  const nodeApiUrl = "http://localhost:7740/";
  const blockchainRID =
    "63B36A15A8D1787EFED1E331F0E49D39C05874E7D29E5DC1FD7A484E990A8932";
  const rest = pcl.restClient.createRestClient([nodeApiUrl], blockchainRID, 5);
  const gtx = pcl.gtxClient.createClient(rest, blockchainRID, ['set_name']);


  const request = gtx.newTransaction([adminPubkey]);
  request.set_name("Emma"); 
  request.addOperation("nop", randomInt(12345678));
  request.sign(adminPrivkey, adminPubkey);

  await request.postAndWaitConfirmation();

  const result = await gtx.query(
    {type: "hello_world"}
  );

  console.log(result)
  return gtx;

}

test();