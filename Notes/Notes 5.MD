# React Fiber: Overview

## Introduction

- React uses the Fiber algorithm to update the virtual DOM.
- Previously, React updated immediately; now it waits and batches updates.
- Features:
  - Pause, abort, or reuse work.
  - Assign priority to different types of updates.
  - Improved hydration process.

## Reconciliation

- Recursive algorithm to decide what to update.
- Differentiates between old and new trees to find changes.
- Powers the virtual DOM.

## Update

- Changes in data render a React app.
- `setState` leads to re-rendering.

## Key Points for Fiber

- List diffing uses keys which should be stable, predictable, and unique.
- Importance of using keys:
  - Efficient list diffing and reordering.

## Notable Points

- Pause work and resume later.
- Assign priorities to work types.
- Reuse previously completed work.
- Abort unnecessary work.
