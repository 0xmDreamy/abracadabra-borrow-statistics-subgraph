import {
  LogBorrow,
  LogRepay,
} from "../generated/CauldronV4/CauldronV4"
import { updateBorrow } from "./updateBorrow";

export function handleLogBorrow(event: LogBorrow): void {
  updateBorrow(event.params.from, event.address, event.params.part, event.block.timestamp);
}

export function handleLogRepay(event: LogRepay): void {
  updateBorrow(event.params.to, event.address, event.params.part.neg(), event.block.timestamp);
}
