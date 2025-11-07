import { type Address, type PublicClient } from "viem";
import { TokenEth } from "../entity/Token";
import { TokenAmount } from "../entity/TokenAmount";

export class EvmClient {
  public readonly client: PublicClient;

  public constructor(client: PublicClient) {
    this.client = client;
  }

  public async getBalanceNative(owner: string): Promise<TokenAmount> {
    const balance = await this.client.getBalance({
      address: owner as Address,
    });

    return TokenAmount.fromBigInt(TokenEth, balance);
  }
}
