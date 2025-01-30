# Unexpected Null Check Behavior in JavaScript Function

This repository demonstrates a common error in JavaScript involving null checks and how to correctly handle them. The bug lies in the `foo` function, which attempts to check for null values but fails to account for `undefined`. This leads to unexpected behavior when either 'a' or 'b' is undefined.

## Bug Description

The function `foo` uses `==` to check for null values. However, `undefined == null` evaluates to `true`, while `undefined` is not strictly equal (`===`) to `null`.  When either `a` or `b` is `undefined`, the null check passes, but the function may still encounter errors later due to the lack of a proper check.

## Solution

The solution uses `===` for strict equality, or explicitly checks for both `null` and `undefined` using OR condition (`||`). This ensures the function correctly handles both `null` and `undefined` values preventing unexpected behaviors.