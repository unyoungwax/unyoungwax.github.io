import { type Connection, type PublicKey } from "@solana/web3.js";
import { TokenSol } from "../entity/Token";
import { TokenAmount } from "../entity/TokenAmount";

export class ConnectionClient {
  public readonly connection: Connection;

  public constructor(connection: Connection) {
    this.connection = connection;
  }

  public async getBalanceNative(owner: PublicKey): Promise<TokenAmount> {
    const balance = await this.connection.getBalance(owner);

    return TokenAmount.fromMinUnitNumber(TokenSol, balance);
  }
}
