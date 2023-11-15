import type { NextApiRequest, NextApiResponse } from 'next';
import { FetchNFTClient, Collectible, CollectibleState } from '@audius/fetch-nft';

interface Data {
  isAuthenticated: boolean;
  solCollectibles: Collectible[];
}

interface ResponseError {
  message: string;
}

interface FetchResponse {
  ethCollectibles: CollectibleState;
  solCollectibles: CollectibleState;
}

const fetchClient = new FetchNFTClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ResponseError>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      message: 'Only POST requests allowed',
    });
  }

  var collectibleState: FetchResponse = await fetchClient.getCollectibles({
    ethWallets: ['0x5A8443f456f490dceeAD0922B0Cc89AFd598cec9'],
    solWallets: ['GrWNH9qfwrvoCEoTm65hmnSh4z3CD96SfhtfQY6ZKUfY']
  });

  const { accountAddress } = req.body;

  return res.status(200).json({
    isAuthenticated: true,
    solCollectibles: collectibleState.solCollectibles['GrWNH9qfwrvoCEoTm65hmnSh4z3CD96SfhtfQY6ZKUfY']
  });

}
