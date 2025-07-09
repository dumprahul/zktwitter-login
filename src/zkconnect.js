"use client";
import TransgateConnect from "@zkpass/transgate-js-sdk"

const verify = async () => {
    try {
      // The appid of the project created in dev center
      const appid = "6165ccec-c336-4765-844c-89a8dedfc67b"
  
      // Create the connector instance
      console.log("starting zkconnect")
      const connector = new TransgateConnect(appid)
      // The schema id of the project
      const schemaId = "aeb73560d71d47458b2f1643f065f081"
  
      // Launch the process of verification
      const res = await connector.launch(schemaId)
      console.log("response proofs:", res)
      // Optionally, you could also return responseWithAddress if needed
      // const responseWithAddress = await connector.launch(schemaId)
      return res;
    } catch (error) {
      console.log('transgate error', error)
      return null;
    }
  }

export default verify;