/**
 * Currying
 */

/**
 * sum common function.
 */

 const commonAdd = (a, b) => a + b
 commonAdd(3, 5)

 /**
 * Currying a function means to chain functions
 * with only one input parameter.
 */
 const curryingAdd = a => b => a + b;
 curryingAdd(3)(5)
