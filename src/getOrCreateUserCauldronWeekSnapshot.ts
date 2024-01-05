import { Address, BigInt } from "@graphprotocol/graph-ts";
import { UserCauldronWeekSnapshot } from "../generated/schema";
import { toWeek } from "./toWeek";
import { BIGINT_ZERO } from "./constants";

export function getOrCreateUserCauldronWeekSnapshot(user: Address, cauldron: Address, timestamp: BigInt): UserCauldronWeekSnapshot {
  const week = toWeek(timestamp);
  const id = `${user.toHexString()}-${cauldron.toHexString()}-${week.number}`;
  let userCauldronWeekSnapshot = UserCauldronWeekSnapshot.load(id);
  if (userCauldronWeekSnapshot === null) {
    userCauldronWeekSnapshot = new UserCauldronWeekSnapshot(id);
    userCauldronWeekSnapshot.user = user;
    userCauldronWeekSnapshot.cauldron = cauldron;
    userCauldronWeekSnapshot.week = week.number;
    userCauldronWeekSnapshot.weekStartTimestamp = week.start;
    userCauldronWeekSnapshot.updatedAt = week.start;
    userCauldronWeekSnapshot.latestBorrowPart = BIGINT_ZERO;
    userCauldronWeekSnapshot.cumulativeBorrowPartSeconds = BIGINT_ZERO;
    userCauldronWeekSnapshot.timeWeightedAverageBorrowPartWeekEnd = BIGINT_ZERO;
    userCauldronWeekSnapshot.save();
  }
  return userCauldronWeekSnapshot;
}
