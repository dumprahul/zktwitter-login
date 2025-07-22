"use client";
import TransgateConnect from "@zkpass/transgate-js-sdk"

const verify = async () => {
    try {
      // The appid of the project created in dev center
      const appid = "914ae40c-9a43-4dbc-b354-c4ddd56f984d"
  
      // Create the connector instance
      console.log("starting zkconnect")
      const connector = new TransgateConnect(appid)
      // The schema id of the project
      const schemaId = "d917b2a724f54b71aeb6834b11c1a959"
  
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