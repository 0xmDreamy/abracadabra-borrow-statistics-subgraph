import { Address, BigInt } from "@graphprotocol/graph-ts";
import { getOrCreateUser } from "./getOrCreateUser";
import { getOrCreateUserCauldronWeekSnapshot } from "./getOrCreateUserCauldronWeekSnapshot";
import { WEEK_SECONDS } from "./constants";
import { getOrCreateCauldron } from "./getOrCreateCauldron";
import { getOrCreateCauldronWeekSnapshot } from "./getOrCreateCauldronWeekSnapshot";

export function updateBorrow(userAddress: Address, cauldronAddress: Address, partChange: BigInt, timestamp: BigInt): void {
  const cauldron = getOrCreateCauldron(cauldronAddress);
  const cauldronWeekSnapshot = getOrCreateCauldronWeekSnapshot(cauldronAddress, timestamp);

  const user = getOrCreateUser(userAddress);
  const userCauldronWeekSnapshot = getOrCreateUserCauldronWeekSnapshot(userAddress, cauldronAddress, timestamp);

  const secondsSinceCauldronUpdatedAt = timestamp.minus(cauldronWeekSnapshot.updatedAt);
  cauldronWeekSnapshot.cumulativeBorrowBaseSeconds = cauldronWeekSnapshot.cumulativeBorrowBaseSeconds
    .plus(secondsSinceCauldronUpdatedAt.times(cauldron.totalBorrowBase));

  const secondsSinceUserUpdatedAt = timestamp.minus(userCauldronWeekSnapshot.updatedAt);
  userCauldronWeekSnapshot.cumulativeBorrowPartSeconds = userCauldronWeekSnapshot.cumulativeBorrowPartSeconds
    .plus(secondsSinceUserUpdatedAt.times(user.borrowPart))

  cauldron.totalBorrowBase = cauldron.totalBorrowBase.plus(partChange);
  cauldron.save();
  user.borrowPart = user.borrowPart.plus(partChange);
  user.save();

  cauldronWeekSnapshot.updatedAt = timestamp;
  cauldronWeekSnapshot.latestBorrowBase = cauldron.totalBorrowBase;

  userCauldronWeekSnapshot.updatedAt = timestamp;
  userCauldronWeekSnapshot.latestBorrowPart = user.borrowPart;

  const secondsUntilWeekEnd = cauldronWeekSnapshot.weekStartTimestamp
    .plus(WEEK_SECONDS)
    .minus(timestamp);

  cauldronWeekSnapshot.timeWeightedAverageBorrowBaseWeekEnd = cauldronWeekSnapshot.cumulativeBorrowBaseSeconds
    .plus(cauldron.totalBorrowBase.times(secondsUntilWeekEnd))
    .div(WEEK_SECONDS);
  cauldronWeekSnapshot.save();

  userCauldronWeekSnapshot.timeWeightedAverageBorrowPartWeekEnd = userCauldronWeekSnapshot.cumulativeBorrowPartSeconds
    .plus(user.borrowPart.times(secondsUntilWeekEnd))
    .div(WEEK_SECONDS);
  userCauldronWeekSnapshot.save();
}
