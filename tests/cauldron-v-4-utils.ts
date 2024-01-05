import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  LogAccrue,
  LogAddCollateral,
  LogBorrow,
  LogBorrowOpeningFeeChanged,
  LogChangeBlacklistedCallee,
  LogChangeBorrowLimit,
  LogExchangeRate,
  LogFeeTo,
  LogInterestChange,
  LogLiquidation,
  LogLiquidationMultiplierChanged,
  LogOrderAgentChanged,
  LogOrderCanceled,
  LogOrderCreated,
  LogRemoveCollateral,
  LogRepay,
  LogWithdrawFees,
  LogWithdrawFromOrder,
  OwnershipTransferred
} from "../generated/CauldronV4/CauldronV4"

export function createLogAccrueEvent(accruedAmount: BigInt): LogAccrue {
  let logAccrueEvent = changetype<LogAccrue>(newMockEvent())

  logAccrueEvent.parameters = new Array()

  logAccrueEvent.parameters.push(
    new ethereum.EventParam(
      "accruedAmount",
      ethereum.Value.fromUnsignedBigInt(accruedAmount)
    )
  )

  return logAccrueEvent
}

export function createLogAddCollateralEvent(
  from: Address,
  to: Address,
  share: BigInt
): LogAddCollateral {
  let logAddCollateralEvent = changetype<LogAddCollateral>(newMockEvent())

  logAddCollateralEvent.parameters = new Array()

  logAddCollateralEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  logAddCollateralEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  logAddCollateralEvent.parameters.push(
    new ethereum.EventParam("share", ethereum.Value.fromUnsignedBigInt(share))
  )

  return logAddCollateralEvent
}

export function createLogBorrowEvent(
  from: Address,
  to: Address,
  amount: BigInt,
  part: BigInt
): LogBorrow {
  let logBorrowEvent = changetype<LogBorrow>(newMockEvent())

  logBorrowEvent.parameters = new Array()

  logBorrowEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  logBorrowEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  logBorrowEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  logBorrowEvent.parameters.push(
    new ethereum.EventParam("part", ethereum.Value.fromUnsignedBigInt(part))
  )

  return logBorrowEvent
}

export function createLogBorrowOpeningFeeChangedEvent(
  previous: BigInt,
  current: BigInt
): LogBorrowOpeningFeeChanged {
  let logBorrowOpeningFeeChangedEvent = changetype<LogBorrowOpeningFeeChanged>(
    newMockEvent()
  )

  logBorrowOpeningFeeChangedEvent.parameters = new Array()

  logBorrowOpeningFeeChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previous",
      ethereum.Value.fromUnsignedBigInt(previous)
    )
  )
  logBorrowOpeningFeeChangedEvent.parameters.push(
    new ethereum.EventParam(
      "current",
      ethereum.Value.fromUnsignedBigInt(current)
    )
  )

  return logBorrowOpeningFeeChangedEvent
}

export function createLogChangeBlacklistedCalleeEvent(
  account: Address,
  blacklisted: boolean
): LogChangeBlacklistedCallee {
  let logChangeBlacklistedCalleeEvent = changetype<LogChangeBlacklistedCallee>(
    newMockEvent()
  )

  logChangeBlacklistedCalleeEvent.parameters = new Array()

  logChangeBlacklistedCalleeEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  logChangeBlacklistedCalleeEvent.parameters.push(
    new ethereum.EventParam(
      "blacklisted",
      ethereum.Value.fromBoolean(blacklisted)
    )
  )

  return logChangeBlacklistedCalleeEvent
}

export function createLogChangeBorrowLimitEvent(
  newLimit: BigInt,
  perAddressPart: BigInt
): LogChangeBorrowLimit {
  let logChangeBorrowLimitEvent = changetype<LogChangeBorrowLimit>(
    newMockEvent()
  )

  logChangeBorrowLimitEvent.parameters = new Array()

  logChangeBorrowLimitEvent.parameters.push(
    new ethereum.EventParam(
      "newLimit",
      ethereum.Value.fromUnsignedBigInt(newLimit)
    )
  )
  logChangeBorrowLimitEvent.parameters.push(
    new ethereum.EventParam(
      "perAddressPart",
      ethereum.Value.fromUnsignedBigInt(perAddressPart)
    )
  )

  return logChangeBorrowLimitEvent
}

export function createLogExchangeRateEvent(rate: BigInt): LogExchangeRate {
  let logExchangeRateEvent = changetype<LogExchangeRate>(newMockEvent())

  logExchangeRateEvent.parameters = new Array()

  logExchangeRateEvent.parameters.push(
    new ethereum.EventParam("rate", ethereum.Value.fromUnsignedBigInt(rate))
  )

  return logExchangeRateEvent
}

export function createLogFeeToEvent(newFeeTo: Address): LogFeeTo {
  let logFeeToEvent = changetype<LogFeeTo>(newMockEvent())

  logFeeToEvent.parameters = new Array()

  logFeeToEvent.parameters.push(
    new ethereum.EventParam("newFeeTo", ethereum.Value.fromAddress(newFeeTo))
  )

  return logFeeToEvent
}

export function createLogInterestChangeEvent(
  oldInterestRate: BigInt,
  newInterestRate: BigInt
): LogInterestChange {
  let logInterestChangeEvent = changetype<LogInterestChange>(newMockEvent())

  logInterestChangeEvent.parameters = new Array()

  logInterestChangeEvent.parameters.push(
    new ethereum.EventParam(
      "oldInterestRate",
      ethereum.Value.fromUnsignedBigInt(oldInterestRate)
    )
  )
  logInterestChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newInterestRate",
      ethereum.Value.fromUnsignedBigInt(newInterestRate)
    )
  )

  return logInterestChangeEvent
}

export function createLogLiquidationEvent(
  from: Address,
  user: Address,
  to: Address,
  collateralShare: BigInt,
  borrowAmount: BigInt,
  borrowPart: BigInt
): LogLiquidation {
  let logLiquidationEvent = changetype<LogLiquidation>(newMockEvent())

  logLiquidationEvent.parameters = new Array()

  logLiquidationEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  logLiquidationEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  logLiquidationEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  logLiquidationEvent.parameters.push(
    new ethereum.EventParam(
      "collateralShare",
      ethereum.Value.fromUnsignedBigInt(collateralShare)
    )
  )
  logLiquidationEvent.parameters.push(
    new ethereum.EventParam(
      "borrowAmount",
      ethereum.Value.fromUnsignedBigInt(borrowAmount)
    )
  )
  logLiquidationEvent.parameters.push(
    new ethereum.EventParam(
      "borrowPart",
      ethereum.Value.fromUnsignedBigInt(borrowPart)
    )
  )

  return logLiquidationEvent
}

export function createLogLiquidationMultiplierChangedEvent(
  previous: BigInt,
  current: BigInt
): LogLiquidationMultiplierChanged {
  let logLiquidationMultiplierChangedEvent =
    changetype<LogLiquidationMultiplierChanged>(newMockEvent())

  logLiquidationMultiplierChangedEvent.parameters = new Array()

  logLiquidationMultiplierChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previous",
      ethereum.Value.fromUnsignedBigInt(previous)
    )
  )
  logLiquidationMultiplierChangedEvent.parameters.push(
    new ethereum.EventParam(
      "current",
      ethereum.Value.fromUnsignedBigInt(current)
    )
  )

  return logLiquidationMultiplierChangedEvent
}

export function createLogOrderAgentChangedEvent(
  previous: Address,
  current: Address
): LogOrderAgentChanged {
  let logOrderAgentChangedEvent = changetype<LogOrderAgentChanged>(
    newMockEvent()
  )

  logOrderAgentChangedEvent.parameters = new Array()

  logOrderAgentChangedEvent.parameters.push(
    new ethereum.EventParam("previous", ethereum.Value.fromAddress(previous))
  )
  logOrderAgentChangedEvent.parameters.push(
    new ethereum.EventParam("current", ethereum.Value.fromAddress(current))
  )

  return logOrderAgentChangedEvent
}

export function createLogOrderCanceledEvent(
  user: Address,
  order: Address
): LogOrderCanceled {
  let logOrderCanceledEvent = changetype<LogOrderCanceled>(newMockEvent())

  logOrderCanceledEvent.parameters = new Array()

  logOrderCanceledEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  logOrderCanceledEvent.parameters.push(
    new ethereum.EventParam("order", ethereum.Value.fromAddress(order))
  )

  return logOrderCanceledEvent
}

export function createLogOrderCreatedEvent(
  user: Address,
  order: Address
): LogOrderCreated {
  let logOrderCreatedEvent = changetype<LogOrderCreated>(newMockEvent())

  logOrderCreatedEvent.parameters = new Array()

  logOrderCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  logOrderCreatedEvent.parameters.push(
    new ethereum.EventParam("order", ethereum.Value.fromAddress(order))
  )

  return logOrderCreatedEvent
}

export function createLogRemoveCollateralEvent(
  from: Address,
  to: Address,
  share: BigInt
): LogRemoveCollateral {
  let logRemoveCollateralEvent = changetype<LogRemoveCollateral>(newMockEvent())

  logRemoveCollateralEvent.parameters = new Array()

  logRemoveCollateralEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  logRemoveCollateralEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  logRemoveCollateralEvent.parameters.push(
    new ethereum.EventParam("share", ethereum.Value.fromUnsignedBigInt(share))
  )

  return logRemoveCollateralEvent
}

export function createLogRepayEvent(
  from: Address,
  to: Address,
  amount: BigInt,
  part: BigInt
): LogRepay {
  let logRepayEvent = changetype<LogRepay>(newMockEvent())

  logRepayEvent.parameters = new Array()

  logRepayEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  logRepayEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  logRepayEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  logRepayEvent.parameters.push(
    new ethereum.EventParam("part", ethereum.Value.fromUnsignedBigInt(part))
  )

  return logRepayEvent
}

export function createLogWithdrawFeesEvent(
  feeTo: Address,
  feesEarnedFraction: BigInt
): LogWithdrawFees {
  let logWithdrawFeesEvent = changetype<LogWithdrawFees>(newMockEvent())

  logWithdrawFeesEvent.parameters = new Array()

  logWithdrawFeesEvent.parameters.push(
    new ethereum.EventParam("feeTo", ethereum.Value.fromAddress(feeTo))
  )
  logWithdrawFeesEvent.parameters.push(
    new ethereum.EventParam(
      "feesEarnedFraction",
      ethereum.Value.fromUnsignedBigInt(feesEarnedFraction)
    )
  )

  return logWithdrawFeesEvent
}

export function createLogWithdrawFromOrderEvent(
  user: Address,
  token: Address,
  to: Address,
  amount: BigInt,
  close: boolean
): LogWithdrawFromOrder {
  let logWithdrawFromOrderEvent = changetype<LogWithdrawFromOrder>(
    newMockEvent()
  )

  logWithdrawFromOrderEvent.parameters = new Array()

  logWithdrawFromOrderEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  logWithdrawFromOrderEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  logWithdrawFromOrderEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  logWithdrawFromOrderEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  logWithdrawFromOrderEvent.parameters.push(
    new ethereum.EventParam("close", ethereum.Value.fromBoolean(close))
  )

  return logWithdrawFromOrderEvent
}

export function createOwnershipTransferredEvent(
  user: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
