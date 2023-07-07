import { SumToNNumber } from "../src/utils/sumToNNumber.js";
import { changeDomById } from "../src/utils/dom.js";

/**
 * App Entry Points Here
 */
const testChangedValue = (new SumToNNumber(20)).create().get();
changeDomById(testChangedValue);