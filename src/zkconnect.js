"use client";
import TransgateConnect from "@zkpass/transgate-js-sdk"

const verify = async () => {
    try {
      // The appid of the project created in dev center
      const appid = "c381ac08-25c4-4a9d-93aa-1a336ddac821"
  
      // Create the connector instance
      console.log("starting zkconnect")
      const connector = new TransgateConnect(appid)
      // The schema id of the project
      const schemaId = "75006dee41f2465b9b4516a91da68280"
  
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