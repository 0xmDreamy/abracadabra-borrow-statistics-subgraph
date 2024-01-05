import { Address, BigInt } from "@graphprotocol/graph-ts";
import { CauldronWeekSnapshot } from "../generated/schema";
import { toWeek } from "./toWeek";
import { BIGINT_ZERO } from "./constants";

export function getOrCreateCauldronWeekSnapshot(cauldron: Address, timestamp: BigInt): CauldronWeekSnapshot {
  const week = toWeek(timestamp);
  const id = `${cauldron.toHexString()}-${week.number}`;
  let cauldronWeekSnapshot = CauldronWeekSnapshot.load(id);
  if (cauldronWeekSnapshot === null) {
    cauldronWeekSnapshot = new CauldronWeekSnapshot(id);
    cauldronWeekSnapshot.cauldron = cauldron;
    cauldronWeekSnapshot.week = week.number;
    cauldronWeekSnapshot.weekStartTimestamp = week.start;
    cauldronWeekSnapshot.updatedAt = week.start;
    cauldronWeekSnapshot.latestBorrowBase = BIGINT_ZERO;
    cauldronWeekSnapshot.cumulativeBorrowBaseSeconds = BIGINT_ZERO;
    cauldronWeekSnapshot.timeWeightedAverageBorrowBaseWeekEnd = BIGINT_ZERO;
    cauldronWeekSnapshot.save();
  }
  return cauldronWeekSnapshot;
}
