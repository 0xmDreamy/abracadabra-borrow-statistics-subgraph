import { Address } from "@graphprotocol/graph-ts";
import { Cauldron } from "../generated/schema";
import { BIGINT_ZERO } from "./constants";

export function getOrCreateCauldron(address: Address): Cauldron {
  let cauldron = Cauldron.load(address);
  if (cauldron === null) {
    cauldron = new Cauldron(address);
    cauldron.totalBorrowBase = BIGINT_ZERO;
    cauldron.save();
  }
  return cauldron;
}
