import { Address } from "@graphprotocol/graph-ts";
import { User } from "../generated/schema";
import { BIGINT_ZERO } from "./constants";

export function getOrCreateUser(address: Address): User {
  let user = User.load(address);
  if (user === null) {
    user = new User(address);
    user.borrowPart = BIGINT_ZERO;
    user.save();
  }
  return user;
}
